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
 * Implementation of a fancy columns picker
 * 
 * @author M8r
 */
function ColorPicker() {
    var main = document.getElementById("colorPicker");
    var content = document.getElementById("colorPickerContent");

    var onOkCallable;
    var rgbs = [0, 0, 0];
    var preview;

    function update() {
        content.innerHTML = "";

        var previewOuter = HtmlHelper.create("div", "preview");
        preview = HtmlHelper.create("div", "previewInner");
        previewOuter.appendChild(preview);
        content.appendChild(previewOuter);

        var sliders = []; //[buildSlider("Red"), buildSlider("Green"), buildSlider("Blue")];
        var valueHandlers = [];
        var colors = ["Red", "Green", "Blue", "Alpha"];
        for (var i = 0; i < colors.length; i++) {
            var entry = HtmlHelper.create("div", "colorEntry");
            valueHandlers[i] = new RgbValueHandler(rgbs, i, onColorChange);
            sliders[i] = new Slider(valueHandlers[i], 0, i === 3 ? 100 : 255, 1);
            var label = HtmlHelper.create("div", "innerTitle", colors[i]);
            entry.appendChild(label);
            entry.appendChild(sliders[i].elm);
            content.appendChild(entry);
        }

        content.appendChild(HtmlHelper.create("div", "clear"));
        var ok = HtmlHelper.create("button", "", "OK");
        ok.type = "button";
        ok.onclick = onOkClick;
        var cancel = HtmlHelper.create("button", "", "Cancel");
        cancel.type = "button";
        cancel.onclick = onCloseClick;
        var buttons = HtmlHelper.create("div", "buttons");
        buttons.appendChild(ok);
        buttons.appendChild(cancel);
        content.appendChild(buttons);
        onColorChange();
    }

    function onColorChange() {
        preview.style.backgroundColor = "rgb(" + rgbs[0] + "," + rgbs[1] + "," + rgbs[2] + ")";
        preview.style.opacity = rgbs[3] / 100;
    }

    function onOkClick() {
        var rgb = rgbs[0] + ", " + rgbs[1] + ", " + rgbs[2];
        if (rgbs[3] !== 100) {
            rgb += ", " + rgbs[3];
        }
        onOkCallable(rgb);
        onCloseClick();
    }
    function onCloseClick() {
        main.style.display = "none";
    }

    this.open = function (rgb, _onOkCallable) {
        onOkCallable = _onOkCallable;
        var erg = rgb.match(/(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:,\s*(\d+))?/);
        rgbs = [0, 0, 0, 100];
        if (erg) {
            rgbs[0] = erg[1] * 1;
            rgbs[1] = erg[2] * 1;
            rgbs[2] = erg[3] * 1;
            rgbs[3] = erg[4] !== undefined ? erg[4] * 1 : 100;
        }
        main.style.display = "block";
        update();
    };

}

function RgbValueHandler(rgbs, index, onColorChange) {
    this.getValue = function () {
        return rgbs[index];
    };
    this.setValue = function (value) {
        rgbs[index] = value;
        onColorChange();
    };
    this.hasValue = function () {
        return true;
    };
    this.saveNow = function() {
    };
}
