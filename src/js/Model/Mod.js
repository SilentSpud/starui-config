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
 * Simple model for a mod object
 * @author M8r
 * @param {File} file 
 */
function Mod(file, configJson, iniContentDefault, iniUserContent) {
    this.name = "Invalid mod";
    this.modName = null;
    this.pages = [];
    this.iniFileDefault = "";
    this.iniFile = "";
    this.teaserImage = "";
    this.version = 0;
    this.configFileDirPrefix = "";
    /** @type {ModIniHandler} */
    this.ini = new ModIniHandler(this, iniContentDefault, iniUserContent);

    var json = null;
    if ( file ) {
        try {
            var path = file.Path;
            var configFileDir = file.ParentFolder.Path;
            this.configFileDirPrefix = "file:///" + configFileDir.replace(/\\/g,"/") + "/";
            var json = Files.readFile(path);
        } catch (e) {
            alert("Error while reading mod configuration: " + path + "\n\nError details:\n" + e.message);
            return;
        }
    } else if (configJson) {
        json = configJson;
        this.configFileDirPrefix = "StarUI Configurator/";
    }

    // Process data
    if ( json ) {
        var data = null;
        try {
            data = JSON.parse(json);
        } catch (e) {
            alert("Error while parsing the configuration JSON!\n\nError details:\n" + e.message);
            return;
        }
        if ( data ) {
            this.name = data.displayName;
            this.modName = data.modName;
            this.teaserImage = data.teaserImage;
            if ( this.teaserImage ) {
                this.teaserImage = this.configFileDirPrefix + this.teaserImage;
            }
            this.pages = [];
            this.iniFileDefault = data.iniFileDefault;
            this.iniFile = data.iniFile;
            this.version = data.version || 0;
            for (var i = 0; i < data.pages.length; i++) {
                var pageData = data.pages[i];
                this.pages.push(new Page(pageData));
            }
        }
    }

    this.readConfig = function (iniFiles) {
        this.ini.readConfig(iniFiles);
    };
}

function ModIniHandler(mod, iniContentDefault, iniUserContent) {
    var that = this;
    /** @type {IniReader} */
    this.iniReader = null;
    /** @type {IniReader} */
    this.iniDefaultReader = null;
    this.iniPath = null;
    var noFileMode = !!iniContentDefault;

    this.readConfig = function (iniFiles) {
        that.iniPath = null;
        that.iniReader = null;
        that.iniDefaultReader = null;

        if ( noFileMode ) {
            // Alternate way
            that.iniReader = new IniReader(iniUserContent);
            that.iniDefaultReader = new IniReader(iniContentDefault);
        } else {
            // Direct file access
            var iniPath = iniFiles[(mod.iniFile+"").toLowerCase()];
            that.iniPath = iniPath;
            if (iniPath) {
                that.iniReader = new IniReader(Files.readFile(iniPath));
            }
            if (mod.iniFileDefault) {
                iniPath = iniFiles[(mod.iniFileDefault).toLowerCase()];
                if (iniPath) {
                    that.iniDefaultReader = new IniReader(Files.readFile(iniPath));
                }
            }
            if (!that.iniReader && !that.iniDefaultReader) {
                alert("Can't find INI settings file for mod: " + mod.name);
                return;
            }
        }

    };

    function getSectionAndKey(configId) {
        var arr = (configId + "").split(":");
        if (arr.length != 2) {
            return null;
        }
        return new SectionAndKey(arr[1], arr[0]);
        //var section = arr[1];
        //var key = arr[0];
    }

    this.isDefault = function (configId) {
        var sk = getSectionAndKey(configId);
        if (!sk) {
            return undefined;
        }
        if (!that.iniReader) {
            return true;
        }
        if (that.iniDefaultReader) {
            if (!that.iniReader.hasValue(sk.section, sk.key)) {
                return true;
            }
            return that.iniReader.getValue(sk.section, sk.key) == that.iniDefaultReader.getValue(sk.section, sk.key);
        }
        return true;
    };

    this.getValue = function (configId) {
        var sk = getSectionAndKey(configId);
        if (!sk) {
            return undefined;
        }
        if (that.iniReader) {
            if (that.iniReader.hasValue(sk.section, sk.key)) {
                return that.iniReader.getValue(sk.section, sk.key);
            }
        }
        return that.getDefaultValue(configId);
    };

    this.getDefaultValue = function (configId) {
        var sk = getSectionAndKey(configId);
        if (!sk) {
            return undefined;
        }
        if (that.iniDefaultReader) {
            if (that.iniDefaultReader.hasValue(sk.section, sk.key)) {
                return that.iniDefaultReader.getValue(sk.section, sk.key);
            }
        }
        return undefined;
    };

    this.setValue = function (configId, value, noInstantSave) {
        var sk = getSectionAndKey(configId);
        if (!sk) {
            return null;
        }
        if (that.getValue(configId) !== value) {
            if ( ( !that.iniReader || !that.iniPath ) && ! noFileMode ) {
                var cwd = Files.getCurrentDirectoryFixed();
                var newPath = cwd + mod.iniFile;
                if (!window.confirm("You have currently no user settings INI file.\nCreate user settings INI file?\n\nLocation: " + newPath)) {
                    return;
                }
                if (!Files.writeFile(newPath, "")) {
                    alert("Error. Cant's write file: " + newPath);
                    return;
                }
                that.iniPath = newPath;
                that.iniReader = new IniReader(Files.readFile(newPath));
            }
            if (that.iniReader && ( that.iniPath || noFileMode ) ) {
                that.iniReader.setValue(sk.section, sk.key, value);
                if ( !noInstantSave && ! noFileMode ) {
                    that.saveNow();
                }
            }
        }
    };

    this.saveNow = function() {
        Files.writeFile(that.iniPath, that.iniReader.buildContent());
        HtmlHelper.showSavedNotice();
    };

    this.getUserIniContent = function() {
        return that.iniReader.buildContent();
    };
}

function SectionAndKey(section, key) {
    this.section = section;
    this.key = key;
}