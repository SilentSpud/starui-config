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
 * Some useful HTML helper
 * 
 * @author M8r
 */
var HtmlHelper = {
    create: function (tag, className, htmlContent) {
        var elm = document.createElement(tag);
        if (className) {
            elm.className = className;
        }
        if (htmlContent) {
            elm.innerHTML = htmlContent;
        }
        return elm;
    },
    showSavedNotice:function(){
        var notice = document.getElementById("savedNotice");
        notice.style.display = "block";
        window.setTimeout(function(){
            notice.style.display = "none";
        },150);
        window.setTimeout(function(){
            notice.style.display = "block";
        },300);
        window.setTimeout(function(){
            notice.style.display = "none";
        },450);
    }
};