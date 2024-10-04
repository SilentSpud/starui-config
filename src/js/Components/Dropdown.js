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
 * Implementation of a dropdown
 * 
 * @author M8r
 * @param {ValueHandler} valueHandler
 * @param {Array} item 
 */
function Dropdown(valueHandler, item) {
    var that = this;
    // Read properties
    var value = valueHandler.getValue();

    var select = HtmlHelper.create("select", "dropdown");
    for (var i = 0; i < item.valueOptions.options.length; i++) {
        var option = document.createElement("option");
        
        var selected = false;
        if ( valueHandler.getType() === "string" ) {
            option.value = item.valueOptions.options[i];
            selected = value === option.value;
        } else {
            option.value = i;
            selected = value == i;
        }
        option.innerText = item.valueOptions.options[i];
        option.selected = selected;
        select.appendChild(option);
    }
    select.onchange = function () {
        valueHandler.setValue(select.value);
    };
    this.elm = select;

}