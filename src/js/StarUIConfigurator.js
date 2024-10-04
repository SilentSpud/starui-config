/*
 *	M8r98a4f2s StarUI Configurator
 *		
 *	A Starfield mod
 *	
 *	Disclaimer
 *	 Provided AS-IS. No warrenty included.
 *	 You can use the script as intended for personal use.
 *	 You are not allowed to redistribute, sell or commercialise the scripts in any way.
 *	
 *	Author
 *	 M8r98a4f2
 */
"use strict";

/**
 * StarUI Configurator - Main script file
 * @author M8r
 */
(function () {

    /** @type {Multitype:Mod} */
    var mods = [];
    /** @type {Multitype:Mod} */
    var modsIndex = {};
    /** @type {List} */
    var listMods;
    /** @type {ConfigurationPanel} */
    var configPanel;
    /** @type {Mod} */
    var activeMod;
    /** @type {Page} */
    var activePage;
    /** @type {Object} */
    var iniFiles = {};
    /** @type {ColumnsPicker} */
    var columnsPicker = null;
    /** @type {ColorPicker} */
    var colorPicker = null;
    /** @type {Array} */
    var log = [];


    function init() {
        // Read configuration
        scanDirectories();

        // Test mods configurable
        for ( var i =0; i < mods.length; i++ ) {
            /** @type {Mod} mod */
            var mod = mods[i];
            mod.configurable = false;
            var iniPath = iniFiles[(mod.iniFileDefault+"").toLowerCase()];
            if ( iniPath && Files.fileExists(iniPath) ) {
                log.push("Found default INI file for <em>"+mod.name+"</em>: " + iniPath);
                mod.available = true;
                var iniPath = iniFiles[(mod.iniFile+"").toLowerCase()];
                if ( iniPath && Files.fileExists(iniPath) ) {
                    log.push("Found user INI file for <em>"+mod.name+"</em>: " + iniPath);
                }
            } else {
                log.push("INI for mod <em>"+mod.name+"</em> can't be found.");
            }
        }
        // Resize for screenshots :)
        // window.resizeTo(1920+20-2,Math.round(1080+20/16*9)-2);
        
        // Create lists
        listMods = new List("nav_mods", eventModClick, eventPageClick);
        listMods.setItems(mods);
        listMods.render();

        // Columns picker
        columnsPicker = new ColumnsPicker();

        // Columns picker
        colorPicker = new ColorPicker();

        // Create the configuration panel
        configPanel = new ConfigurationPanel("mainContent", columnsPicker, colorPicker, eventModClick);

        // Welcome!
        configPanel.showWelcome(mods, log);

        // Events
        document.getElementById("mainTitle").onclick = function(){
            configPanel.showWelcome(mods, log);
        };
        if ( document.getElementById("zoomIn") ) {
            document.getElementById("zoomIn").onclick = function() {
                var fontSize = parseInt((document.body.style.fontSize || "32px").replace(/px$/,""));
                if ( fontSize < 64 ) {
                    document.body.style.fontSize = (fontSize+4)+"px";
                }
            };
            document.getElementById("zoomOut").onclick = function() {
                var fontSize = parseInt((document.body.style.fontSize || "32px").replace(/px$/,""));
                if ( fontSize > 10 ) {
                    document.body.style.fontSize = (fontSize-4)+"px";
                }
            };
        }
    }

    function scanDirectories() {
        var htaDir = Files.getCurrentDirectoryFixed();
        var htaDirObj = Files.getFolder(htaDir);
        
        // If the folder is Data\ we are either in the original Starfield folder or in Nexus mods folder structure
        var isInDataDir = (htaDirObj.Name+"").toLowerCase() === "data";
        var isNexusMods = false;
        var isInStarfieldsData = false;
        if ( isInDataDir ) {
            isInStarfieldsData = (htaDirObj.ParentFolder.Name+"").toLowerCase() === "starfield";
            isNexusMods = isInDataDir && ! isInStarfieldsData && ( (htaDirObj.Path).toLowerCase().indexOf("nexus") != -1 || (htaDirObj.Path).toLowerCase().indexOf("vortex") != -1 );
        }

        // Scan parents subdirectories (folder structure like Mod Organizer 2)
        var searchInFolder;
        if ( isNexusMods ) {
            log.push("Detected start from inside the Nexus mods folder.");
            searchInFolder = htaDirObj.ParentFolder.ParentFolder.Path;
        } else {
            log.push("Detected start from " + (isInStarfieldsData?"inside the Starfields Data folder.":"mods folder."));
            searchInFolder = htaDirObj.ParentFolder.Path;
        }
        log.push("Search for configuration and INI files in: " + searchInFolder);
        var result = Files.readDirectory(searchInFolder, true);
        for (var index = 0; index < result.folders.length; index++) {
            var folder = result.folders[index];
            if ( isNexusMods ) {
                var result2 = Files.readDirectory(folder.Path, true);
                for (var index2 = 0; index2 < result2.folders.length; index2++) {
                    var folder2 = result2.folders[index2];
                    searchInterfaceAndStarUiConfigurator(folder2.Path);
                }
            } else {
                searchInterfaceAndStarUiConfigurator(folder.Path);
            }
        }
    }

    function searchInterfaceAndStarUiConfigurator(path) {
        scanDirectoryForFiles(path, "", false, true);
        var interfacePath = path + "\\Interface";
        if ( Files.folderExists(interfacePath) ) {
            var subFolder = Files.getFolder(interfacePath);
            scanDirectoryForFiles(subFolder.path, subFolder.Name + "\\", false, true);
        }
        var starUiConfigPath = path + "\\StarUI Configurator";
        if ( Files.folderExists(starUiConfigPath)) {
            var subFolder = Files.getFolder(starUiConfigPath);
            scanDirectoryForFiles(subFolder.path, subFolder.Name + "\\", true, false);
        }
    }

    function scanDirectoryForFiles(path, localPath, findConfigs, findInis) {
        var dir = Files.readDirectory(path);
        for (var i = 0; i < dir.files.length; i++) {
            var file = dir.files[i];
            var erg;
            // Find configuration files
            if ( findConfigs && ( erg = file.name.match(/^config-(.*)\.json$/) ) ) {
                var mod = new Mod(file);
                if ( mod.modName ) {
                    if ( modsIndex[mod.modName] !== undefined ) {
                        // Update existing version if newer
                        var curMod = mods[modsIndex[mod.modName]];
                        if ( mod.version > curMod.version ) {
                            log.push("Found newer configuration file for <em>"+mod.name+"</em>: " + file);
                            mods[modsIndex[mod.modName]] = mod;
                        }
                    } else {
                        modsIndex[mod.modName] = mods.length;
                        mods.push(mod);
                        log.push("Found configuration file for <em>"+mod.name+"</em>: " + file);
                    }
                }
            }
            // Find ini files
            if ( findInis && ( erg = file.name.match(/^(.*)\.ini$/) ) ) {
                // Ignore MO2's meta.ini
                if (erg[1] === "meta") {
                    continue;
                }
                if ( iniFiles[(localPath + erg[0]).toLowerCase()] ) {
                    log.push("WARNING: Found another file locations for INI '" + localPath + erg[0]+"': " + file.path );
                } else {
                    iniFiles[(localPath + erg[0]).toLowerCase()] = file.path;
                }
            }
        }
    }

    /**
     * Handles the click on a mod
     * @param {Mod} mod 
     */
    function eventModClick(mod) {
        listMods.activeItem = mod;
        activeMod = mod;
        if (activeMod) {
            listMods.setSubItems(activeMod.pages);
            activeMod.readConfig(iniFiles);
        } else {
            listMods.setSubItems([]);
        }
        configPanel.setPage(activeMod, null);
        listMods.render();
    }

    /**
     * Handles the click on a page
     * @param {Mod} mod 
     */
    function eventPageClick(page) {
        listMods.activeSubItem = page;
        listMods.render();
        activePage = page;
        configPanel.setPage(activeMod, page);
    }

    // Inititialize
    init();

})();

