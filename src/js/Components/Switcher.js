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
 * Implementation of a nice toggle
 * 
 * @author M8r
 * @param {ValueHandler} valueHandler
 * @param {Array} item 
 */
function Switcher(valueHandler, item) {
    var that = this;
    var switcher = HtmlHelper.create("div", "");
    switcher.appendChild(HtmlHelper.create("div", "off", "OFF"));
    switcher.appendChild(HtmlHelper.create("div", "on", "ON"));

    this.update = function () {
        switcher.className = valueHandler.getValue() ? "switcher state-on" : "switcher state-off";
    };

    this.update();
    this.toggle = function () {
        valueHandler.setValue(!valueHandler.getValue());
        that.update();
    };
    //switcher.onclick = this.toggle;
    this.elm = switcher;
}