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
        
        // Create lists
        listMods = new List("nav_mods", eventModClick, eventPageClick);
        listMods.setItems(mods);
        listMods.render();

        // Columns picker
        columnsPicker = new ColumnsPicker();

        // Columns picker
        colorPicker = new ColorPicker();

        // Create the configuration panel
        configPanel = new ConfigurationPanel("mainContent", columnsPicker, colorPicker, eventModClick, addAltMod);

        // Welcome!
        configPanel.showWelcome(mods, log, true);

        // Events
        document.getElementById("mainTitle").onclick = function(){
            configPanel.showWelcome(mods, log, true);
        };
    }

    /**
     * Alternative way to configure mods without HTA
     **/
    function addAltMod(configJson, iniContentDefault, iniUserContent) {
        var mod = new Mod(null, configJson, iniContentDefault, iniUserContent);
        if ( mod.modName ) {
            mod.available = true;
            mod.pages.push(new Page({"pageDisplayName": "USER INI", content:[
                {type: "section", text: "User settings file"},
                {type: "text", text: "Copy the following content to your user settings INI file."},
                {type:"_starUISpecialViewIni"}
            ]}));
            if ( modsIndex[mod.modName] !== undefined ) {
                mods[modsIndex[mod.modName]] = mod;
            } else {
                modsIndex[mod.modName] = mods.length;
                mods.push(mod);
            }
            listMods.setItems(mods);
            listMods.render();
            alert("Mod successfully added!\n\nYou can configure your mod.\n\nNote: Make sure to save your new user INI afterwards!");
            return true;
        } else {
            alert("The mod data doesn't seem to be valid.");
            return false;
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

