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
 * Implementation of a nice slider
 * 
 * @author M8r
 * @param {ValueHandler} valueHandler
 */
function Slider(valueHandler, min, max, step) {
    var that = this;

    // Create HTML elements
    var slider = HtmlHelper.create("div", "slider"+(max>999?" bigMax":""));

    var valueInput = HtmlHelper.create("input", "curValue");
    valueInput.type = "text"
    valueInput.value = "...";
    slider.appendChild(valueInput);

    // Bar
    var barOuter = HtmlHelper.create("div", "barOuter");
    var barInner = HtmlHelper.create("div", "barInner");
    barOuter.appendChild(barInner);
    slider.appendChild(barOuter);

    function setValue(newValue, noInstantSave) {
        newValue = newValue - newValue % step;
        newValue = Math.max(newValue, min);
        newValue = Math.min(newValue, max);
        valueHandler.setValue(newValue, noInstantSave);
        that.updateBar();
    }

    // Init
    this.updateBar = function () {
        var value = valueHandler.getValue();
        barOuter.style.opacity = 1;
        if (valueInput.value != value) {
            if (value === undefined || value === null || !valueHandler.hasValue()) {
                valueInput.value = "";
                barOuter.style.opacity = 0.5;
            } else {
                valueInput.value = value;
            }
        }
        var percent = 0;
        if (value && max && max - min) {
            percent = Math.min(100, Math.max(0, (value - min) / (max - min) * 100));
        }
        barInner.style.width = percent + "%";
    }
    this.updateBar();
    valueInput.onkeyup = valueInput.onchange = function (e) {
        setValue(valueInput.value);
    };
    var baseX;
    var startX;
    var changedValue = NaN;
    barOuter.onclick = function (e) {
        var percent = e.layerX / barOuter.clientWidth * 102 - 1;
        if ( isNaN(changedValue) ) {
            setValue(min + (max - min) * percent / 100);
        }
    };
    barOuter.onmousedown = function(e){
        baseX = e.clientX - e.layerX;
        startX = e.clientX;
        changedValue = NaN;

        document.body.onmouseup = function(e){
            document.body.onmouseup = null;
            document.body.onmousemove = null;
            if ( ! isNaN(changedValue ) ) {
                valueHandler.saveNow();
            }
        };
        document.body.onmousemove = function(e) {
            var percent = (e.clientX-baseX) / barOuter.clientWidth * 100;
            changedValue = min + (max - min) * percent / 100;
            setValue(changedValue, true);
            
        }
    }
    this.elm = slider;
}