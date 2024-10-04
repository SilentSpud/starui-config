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
 * Implementation of the configuration panel
 * 
 * @author M8r
 */
function ConfigurationPanel(docElmId, columnsPicker, colorPicker, eventModClick, addAltMod) {
    var that = this;
    var docElm = document.getElementById(docElmId);
    var helpline = document.getElementById("helpline");
    /** @type {Mod} */
    var activeMod = null;

    this.showWelcome = function(mods, log, addAlternateOptions) {
        document.getElementById("mainTeaserBack").className = "mainTeaserBack hide";
        activeMod = null;
        docElm.innerHTML = "";
        docElm.scrollTop = 0;
        var welcome = HtmlHelper.create("div", "welcome");
        docElm.appendChild(welcome);

        var imgTitle = HtmlHelper.create("div", "imgTitle");
        var img1 = HtmlHelper.create("img", "");
        img1.src = "StarUI%20Configurator/images/ConfigMain.png";
        imgTitle.appendChild(img1);

        welcome.appendChild(imgTitle);

        var modsList = HtmlHelper.create("div", "modsList");
        for ( var i = 0; i < mods.length; i++ ) {
            /** @type {Mod} mod */
            var mod = mods[i];
            if ( ! mod.available ) {
                continue;
            }
            var entry = HtmlHelper.create("div", "entry");
            entry._mod = mod;
            var entryTitle = HtmlHelper.create("div", "title", mod.name);
            var entryImg = HtmlHelper.create("div", "teaser");
            if ( mod.teaserImage ) {
                entryImg.style.backgroundImage = "url('"+encodeURI(mod.teaserImage)+"')";
            }
            entry.appendChild(entryImg);
            entry.appendChild(entryTitle);
            entry.onclick = onWelcomeEntryClick;
            modsList.appendChild(entry);
        }
        welcome.appendChild(modsList);

        // Alternate option
        if ( addAlternateOptions ) {
            addAltOptions(welcome, mods, log, addAlternateOptions);
        }

        // Accessibility
        var accessOuter = HtmlHelper.create("label", "accessibility");
        var accessInput = HtmlHelper.create("input", "");
        accessInput.type = "checkbox";
        accessInput.checked = (document.body.className+"").indexOf("accessibilityMode") != -1;
        accessOuter.appendChild(accessInput);
        accessOuter.appendChild(HtmlHelper.create("span", "", "&nbsp;Accessibility mode"));
        welcome.appendChild(accessOuter);
        accessInput.onclick = function(){
            document.body.className = accessInput.checked ? "accessibilityMode" : "";
        };

        // Startup log
        var startInfo = HtmlHelper.create("div", "startInfo", "");
        var showStartInfo = HtmlHelper.create("a", "showStartInfo", "Show startup log");
        startInfo.id = "startInfo";
        var visible = false;
        showStartInfo.onclick = function(){
            visible = ! visible;
            //showStartInfo.style.display = visible ? "none";
            startInfo.style.display = visible ? "block" : "none";
            showStartInfo.innerText = visible ? "Hide" : "Show startup log";
        };
        welcome.appendChild(startInfo);
        welcome.appendChild(showStartInfo);
        if ( addAlternateOptions ) {
            showStartInfo.style.display = "none";
        }

        // Start-Log
        if ( document.getElementById("startInfo") ) {
            document.getElementById("startInfo").innerHTML = log.join("<br />");        
        }
    };

    function addAltOptions(welcome, mods, log, addAlternateOptions) {
        welcome.appendChild(HtmlHelper.create("div", "altTitle", "Add configuration and ini files"));
        welcome.appendChild(HtmlHelper.create("div", "altDesc", "Copy the content of the files for the mod you like to configure into the following textfields."));

        var entries = HtmlHelper.create("div", "altEntries");
        welcome.appendChild(entries);

        var fields = [
            {label:"Configuration definition", label2: "config-[Mod].json"},
            {label:"Default INI", label2: "Default INI of the mod"},
            {label:"User settings INI", label2: ""},
        ];
        var textfieldEntries = [];
        var textfields = [];
        var textfieldSubLabels = [];
        var entry = HtmlHelper.create("div", "altEntry");
        entry.appendChild(HtmlHelper.create("div", "label1", "Select Mod"));
        entry.appendChild(HtmlHelper.create("div", "label2", "&nbsp;"));
        var select = HtmlHelper.create("select", "");
        var modName;
        for ( modName in window.alternateOSDataPackages ) {
            select.appendChild(HtmlHelper.create("option", "", modName));
        }
        select.appendChild(HtmlHelper.create("option", "", "Custom Mod"));
        entry.appendChild(select);
        entries.appendChild(entry);
        for ( var i=0; i < fields.length; i++ ) {
            var field = fields[i];
            entry = HtmlHelper.create("div", "altEntry");
            entry.appendChild(HtmlHelper.create("div", "label1", field.label));
            var subLabel = HtmlHelper.create("div", "label2", field.label2);
            textfieldSubLabels.push(subLabel);
            entry.appendChild(subLabel);
            var textfield = HtmlHelper.create("textarea", "", "");
            entry.appendChild(textfield);
            textfields.push(textfield);
            textfieldEntries.push(entry);
            entries.appendChild(entry);            
        }
        welcome.appendChild(HtmlHelper.create("div", "clear"));

        var isCustomMod = false;
        var selectedModName = null;
        function updateForm() {
            isCustomMod = select.value === "Custom Mod";
            selectedModName = isCustomMod ? null : select.value;
            textfieldEntries[0].style.display = isCustomMod ? "block" : "none";
            textfieldEntries[1].style.display = isCustomMod ? "block" : "none";
            textfieldSubLabels[2].innerText = isCustomMod ? "(if not available copy defaults here too)" : select.value+".ini";
        }
        // Events
        select.onchange = updateForm;

        // Add buttons
        var button = HtmlHelper.create("button", "altAddMod", "Add mod to Configurator");
        button.type = "button";
        var altButtons = HtmlHelper.create("div", "altButtons");
        altButtons.appendChild(button);
        button.onclick = function(){
            var configJson;
            var iniContentDefault;
            if ( isCustomMod ) {
                configJson = textfields[0].value;
                iniContentDefault = textfields[1].value;
            } else {
                configJson = JSON.stringify(window.alternateOSDataPackages[selectedModName].json);
                iniContentDefault = window.alternateOSDataPackages[selectedModName].iniContentDefault;
            }
            var iniContentUser = textfields[2].value;
            if ( ! configJson ) {
                alert("Please provide the configuration definition file (JSON)");
            } else if ( ! iniContentDefault ) {
                alert("Please provide the default INI file");
            } else {
                if ( addAltMod(configJson, iniContentDefault, iniContentUser) ) {
                    that.showWelcome(mods, log, addAlternateOptions);
                }
            }
        };
       welcome.appendChild(altButtons);

       // Init
       updateForm();
    }

    function onWelcomeEntryClick() {
        eventModClick(this._mod);
    }

    function renderModStart() {
        docElm.innerHTML = "";
        docElm.scrollTop = 0;
        var mod = activeMod;
        var outer = HtmlHelper.create("div", "modStartPage")
        /*var image = HtmlHelper.create("div", "modStartPage");
        image.style.backgroundImage = "url('"+encodeURI(mod.teaserImage)+"');";*/
        document.getElementById("mainTeaserBack").style.backgroundImage = "url('"+encodeURI(activeMod.teaserImage)+"')";
        document.getElementById("mainTeaserBack").className = "mainTeaserBack full";
        outer.appendChild(HtmlHelper.create("div", "title", activeMod.name));
        docElm.appendChild(outer);
    }
       
    function renderPage(page) {
        docElm.innerHTML = "";
        docElm.scrollTop = 0;

        document.getElementById("mainTeaserBack").style.backgroundImage = "url('"+encodeURI(activeMod.teaserImage)+"')";
        document.getElementById("mainTeaserBack").className = "mainTeaserBack back";

        var items = page.content;
        for (var i = 0; i < items.length; i++) {
            var confElm = new ConfigurationElement(activeMod, helpline, items[i], columnsPicker, colorPicker);
            confElm.render();
            if (confElm.elm) {
                docElm.appendChild(confElm.elm);
            }
        }
        // Add space to bottom
        docElm.appendChild(HtmlHelper.create("br"));
        docElm.appendChild(HtmlHelper.create("br"));
    }

    /**
     * 
     * @param {Page} page 
     */
    this.setPage = function (mod, page) {
        activeMod = mod;
        if ( page ) {
            renderPage(page);
        } else {
            renderModStart();
        }
    };
}

