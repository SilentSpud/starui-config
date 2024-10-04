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
 * One configuration element (one "row") in the panel
 * 
 * @param {Mod} activeMod 
 * @param {HTMLElement} helpline 
 * @param {Array} item 
 */
function ConfigurationElement(activeMod, helpline, item, columnsPicker, colorPicker) {
    var that = this;
    var valueHandler = new ValueHandler(activeMod, item, updateDefaultNotice);
    var isInput = !!item.id;
    this.elm = HtmlHelper.create("div");
    var defaultNotice;

    function buildLeftRight(elm, item, rightElm) {
        var label = HtmlHelper.create("div", "left");
        var text = item.text;
        if (item.html) {
            label.innerHTML = text.replace(/(<font[^>]+)size=["'](\d+)["']([^>]*>)/g, "$1style='font-size:$2px;'$3");
        } else {
            label.innerText = text;
        }
        label.innerHTML = label.innerHTML.replace(/\n/g, "<br />");

        var rightWrap = HtmlHelper.create("div", "right");
        rightWrap.appendChild(rightElm);

        if (isInput) {
            var defaultValue = valueHandler.getDefaultValue();
            defaultNotice = HtmlHelper.create("div", "defaultValueNotice");
            var restoreDefaultButton = HtmlHelper.create("button", "restoreDefault", "<span>↺</span>");
            defaultNotice.appendChild(restoreDefaultButton);
            defaultNotice.title = "Restore default: " + defaultValue;
            defaultNotice.onclick = onRestoreDefault;
            updateDefaultNotice();
        }

        var leftRightDiv = HtmlHelper.create("div", "leftRightDiv");
        leftRightDiv.appendChild(label);
        leftRightDiv.appendChild(rightWrap);
        if (defaultNotice) {
            leftRightDiv.appendChild(defaultNotice);
        }

        elm.appendChild(leftRightDiv);
    }

    function updateDefaultNotice() {
        if (defaultNotice) {
            defaultNotice.style.display = valueHandler.isDefault() ? "none" : "inline-block";
        }
    }

    /**
     * @var {MouseEvent} e
     **/
    function onRestoreDefault(e) {
        e.stopPropagation();
        valueHandler.setValue(valueHandler.getDefaultValue());
        that.render();
    }

    function elmMouseOver(e) {
        var item = this._item;
        if (item) {
            helpline.innerText = item.help || "";
        }
        helpline.style.display = item && item.help ? "block" : "none";
    }

    function elmMouseOut(e) {
        helpline.style.display = "none";
    }

    this.render = function () {
        var elm = that.elm;
        that.elm.innerHTML = "";
        elm.className = "pageItem pageItem-" + item.type;
        elm._item = item;
        elm.onmouseover = elmMouseOver;
        elm.onmouseout = elmMouseOut;
        if (item.type === "spacer") {
            elm.style.height = "20px";
        } else if (item.type === "section" || item.type === "text") {
            buildLeftRight(elm, item, HtmlHelper.create("span"));
        } else if (item.type === "image") {
			var imageWrapper = HtmlHelper.create("div", "imageWrapper");
			var images = item.images || [item];
			for ( var i=0; i < images.length; i++ ) {
				var imageItem = images[i];
				var entry =  HtmlHelper.create("div", "entry");
				var image = HtmlHelper.create("img");
				image.src = activeMod.configFileDirPrefix + imageItem.src;
				if ( imageItem.maxWidth ) {
					entry.style.maxWidth = imageItem.maxWidth;
				}
				entry.appendChild(image);

				if ( imageItem.description ) {
					var imgDesc =  HtmlHelper.create("div", "description");
					imgDesc.innerText = imageItem.description;
					entry.appendChild(imgDesc);
				}
				imageWrapper.appendChild(entry);
			}
			//buildLeftRight(elm, item, image);
			elm.appendChild(imageWrapper);
        } else if (item.type === "switcher") {
            var comp = new Switcher(valueHandler, item);
            buildLeftRight(elm, item, comp.elm);
            elm.onclick = comp.toggle;
        } else if (item.type === "slider") {
            var comp = new Slider(valueHandler, item.valueOptions ? item.valueOptions.min : 0, item.valueOptions ? item.valueOptions.max : 0, item.valueOptions ? item.valueOptions.step : 0);
            buildLeftRight(elm, item, comp.elm);
        } else if (item.type === "textinput") {
            var comp = new TextInput(valueHandler, item, columnsPicker, colorPicker);
            buildLeftRight(elm, item, comp.elm);
        } else if (item.type === "dropdown" || item.type === "stepper") {
            var comp = new Dropdown(valueHandler, item);
            buildLeftRight(elm, item, comp.elm);
        } else if ( item.type === "_starUISpecialViewIni" ) {
			var textfield = HtmlHelper.create("textarea", "specialViewIni");
			textfield.value = activeMod.ini.getUserIniContent();
			textfield.onclick = textfield.select;
			elm.appendChild(textfield);
        } else {
            elm.innerText = "Error: Can't render element type \"" + item.type + "\".";
        }
    };
}