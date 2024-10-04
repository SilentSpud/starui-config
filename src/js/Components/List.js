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
 * Simple implementation for a HTML List
 * @author M8r
 */
function List(docElmId, eventModClick, eventPageClick) {
    var docElm = document.getElementById(docElmId);
    this.activeItem = null;
    this.activeSubItem = null;
    this.items = null;
    this.subitems = null;

    this.setItems = function (items) {
        this.items = items;
        this.activeItem = null;
    }
    this.setSubItems = function (items) {
        this.subitems = items;
        this.activeSubItem = null;
    }


    function onItemClick() {
        var item = this._item;
        if (this._isSubItem) {
            eventPageClick(this._item);
        } else {
            eventModClick(this._item);
        }
    }

    this.render = function () {
        docElm.innerHTML = "";
        for (var index = 0; index < this.items.length; index++) {
            var item = this.items[index];
            var a = HtmlHelper.create("a");
            var active = this.activeItem === item;
            if (active) {
                a.className += " active";
            }
            if ( ! item.available ) {
                a.className += " unavailable";
            } else {
                a.onclick = onItemClick;
            }
            a.innerText = item.name;
            a.innerHTML = a.innerHTML.replace(/ /g, "&nbsp;");
            a._item = item;
            docElm.appendChild(a);
            if (active && this.subitems) {
                for (var subIndex = 0; subIndex < this.subitems.length; subIndex++) {
                    item = this.subitems[subIndex];
                    a = HtmlHelper.create("a", "subitem");
                    var active = this.activeSubItem === item;
                    if (active) {
                        a.className += " active";
                    }
                    a.innerText = item.name;
                    a.innerHTML = a.innerHTML.replace(/ /g, "&nbsp;");
                    a._isSubItem = true;
                    a._item = item;
                    a.onclick = onItemClick;
                    docElm.appendChild(a);
                }
            }
        }
    };
}
