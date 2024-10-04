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
 * Implementation of a nice text input
 * 
 * @author M8r
 * @param {ValueHandler} valueHandler
 * @param {Array} item 
 */
function TextInput(valueHandler, item, columnsPicker, colorPicker) {
    var that = this;
    // Read properties

    var input = HtmlHelper.create("input");

    var textInputOuter = HtmlHelper.create("div");
    textInputOuter.className = "textinput";

    var colorPreviewOuter = null;
    var colorPreviewInner = null;

    if (item.typeSpecial === "color") {
        colorPreviewOuter = HtmlHelper.create("div", "colorPreview");
        colorPreviewInner = HtmlHelper.create("div", "previewInner");

        colorPreviewOuter.appendChild(colorPreviewInner);
        textInputOuter.appendChild(colorPreviewOuter);

        colorPreviewOuter.onclick = function () {
            colorPicker.open(valueHandler.getValue(), function (newValue) {
                valueHandler.setValue(newValue);
                that.update();
            });
        };
        // Button
        var colorPickerButton = HtmlHelper.create("button", "colorPickerButton", "Color Picker");
        colorPickerButton.onclick = colorPreviewOuter.onclick;
        textInputOuter.appendChild(colorPickerButton);

    }
    if (item.typeSpecial === "columns") {
        var colPicker = HtmlHelper.create("button", "colPicker", "Select");
        var availableColumns = item.availableColumns || ["MASS", "MASS_STACK", "VALUE", "VALUE_STACK", "VPM", "TYPE",
            "", "WMANUFACTURER", "WACC", "WBASENAME", "WMAG", "WMODS", "WRANGE", "WROF", "WTYPE",
            "", "DAMAGES", "PHYS", "ENGY", "EM", "DR", "DMG", "DPS",
            "", "RESISTANCES", "ATHERMAL", "AAIRBORNE", "ACORROSIVE", "ARADIATION",
            "", "AMMO", "AMMO_ROUNDS", "RARITY"];
        colPicker.onclick = function () {
            columnsPicker.open(valueHandler.getValue(), availableColumns, function (newValue) {
                valueHandler.setValue(newValue);
                that.update();
            });
        };
        textInputOuter.appendChild(colPicker);
    }

    this.update = function () {
        var value = valueHandler.getValue();
        if (input.value != value) {
            input.value = value;
        }
        textInputOuter.style.opacity = valueHandler.hasValue() ? 1 : 0.5;
        if (item.typeSpecial === "color") {
            var erg = value.match(/(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:,\s*(\d+))?/);
            colorPreviewOuter.className = "colorPreview";
            if (value === "") {
                colorPreviewOuter.className += " no-color";
                colorPreviewInner.style.backgroundColor = "black";
            } else if (erg) {
                colorPreviewInner.style.backgroundColor = "rgb(" + erg[1] + "," + erg[2] + "," + erg[3] + ")";
                colorPreviewInner.style.opacity = erg[4] !== undefined ? erg[4] / 100 : 1;
            } else {
                colorPreviewInner.style.backgroundColor = "black";
            }
        }
    };

    input.type = "text";
    input.value = valueHandler.getValue();
    textInputOuter.appendChild(input);
    input.onchange = input.onkeyup = function () {
        valueHandler.setValue(this.value);
        that.update();
    };
    this.elm = textInputOuter;
    this.update();

}