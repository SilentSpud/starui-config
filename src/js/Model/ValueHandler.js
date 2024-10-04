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
 * Handler for handling one value in one or multiple inis
 * @param {Mod} mod 
 * @param {Array} item 
 */
function ValueHandler(mod, item, onValueChangeCallback) {
    var that = this;
    var defaultValue = null;
    var iniKey = item.id;
    var type = "";

    if (iniKey) {
        if ( item.valueOptions && item.valueOptions.sourceType ) {
            var srcType = item.valueOptions.sourceType;
            if ( srcType === "ModSettingInt" || srcType === "ModSettingFloat" ) {
                defaultValue = 0;
                type = "number";
            } else if ( srcType === "ModSettingBool" ) {
                defaultValue = false;
                type = "bool";
            } else if ( srcType === "ModSettingString" ) {
                defaultValue = "";
                type = "string";
            } else {
                alert("Unknown sourceType for ini setting: " + srcType);
            }
        }
        if ( ! type ) {
            var firstChar = (iniKey + "_")[0];
            if (firstChar === "i" || firstChar === "f") {
                defaultValue = 0;
                type = "number";
            } else if (firstChar === "b") {
                defaultValue = false;
                type = "bool";
            } else if (firstChar === "s") {
                defaultValue = "";
                type = "string";
            } else {
                alert("Unknown value type for ini setting: " + iniKey);
                type = "unknown"
            }
        }
    }

    function modValue(value) {
        if (value === undefined) {
            return defaultValue;
        }
        if (type === "bool") {
            value = value == 1;
        }
        return value;
    }

    this.getType = function() {
        return type;
    };

    this.hasValue = function () {
        return mod.ini.getValue(iniKey) !== undefined;
    };
    this.isDefault = function () {
        return mod.ini.isDefault(iniKey);
    };

    this.getDefaultValue = function () {
        return mod.ini.getDefaultValue(iniKey);
    };

    this.getValue = function () {
        return modValue(mod.ini.getValue(iniKey));
    };

    this.setValue = function (value, noInstantSave) {
        if (value != that.getValue()) {
            if (type === "bool") {
                value = value ? 1 : 0;
            }
            mod.ini.setValue(iniKey, value, noInstantSave);
            onValueChangeCallback();
        }
    };

    this.saveNow = function() {
        mod.ini.saveNow();
    };
}
