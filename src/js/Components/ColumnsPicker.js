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
function ColumnsPicker() {
    var main = document.getElementById("columnsPicker");
    var content = document.getElementById("columnsPickerContent");

    var onOkCallable;
    var availableColumns = [];
    var activeCols = [];

    function onInputChange() {
        var colName = this._colName;
        if (activeCols.indexOf(colName) == -1) {
            activeCols.push(colName);
        } else {
            activeCols.splice(activeCols.indexOf(colName), 1);
        }
        update();
    }

    function onUpDownClick() {
        var index = this._index;
        var mod = this._mod;
        var tmp = activeCols[index + mod];
        activeCols[index + mod] = activeCols[index];
        activeCols[index] = tmp;
        update();
    }

    function update() {
        content.innerHTML = "";
        var table = HtmlHelper.create("table");
        var tr = HtmlHelper.create("tr");
        table.appendChild(tr);
        var td = HtmlHelper.create("td");
        tr.appendChild(td);
        for (var i = 0; i < availableColumns.length; i++) {
            var colName = availableColumns[i];
            if (colName === "") {
                td = HtmlHelper.create("td");
                tr.appendChild(td);
                continue;
            }
            var label = HtmlHelper.create("label");
            var input = HtmlHelper.create("input");
            input.type = "checkbox";
            input.checked = activeCols.indexOf(colName) != -1;
            input.style.display = "none";
            label.appendChild(input);
            var span = HtmlHelper.create("span", "", "<span class='checkmark'>" + (input.checked ? "✔" : "") + "</span>" + colName);
            label.appendChild(span);
            label.className = input.checked ? "active" : "inactive";
            input._colName = colName;
            input.onchange = onInputChange;

            td.appendChild(label);
        }
        content.appendChild(table);
        content.appendChild(HtmlHelper.create("div", "innerTitle", "Order"));
        for (var i = 0; i < activeCols.length; i++) {
            var colName = activeCols[i];
            var entry = HtmlHelper.create("div");
            var up = HtmlHelper.create("a", "up", "⇧");
            var down = HtmlHelper.create("a", "down", "⇩");
            up._index = i;
            down._index = i;
            up._mod = -1;
            down._mod = 1;
            if (i > 0) {
                up.onclick = onUpDownClick;
            } else {
                up.style.opacity = 0;
            }
            if (i < activeCols.length - 1) {
                down.onclick = onUpDownClick;
            } else {
                down.style.opacity = 0;
            }

            entry.appendChild(down);
            entry.appendChild(up);
            entry.appendChild(HtmlHelper.create("span", "", colName));

            content.appendChild(entry);
        }
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
    }

    function onOkClick() {
        onOkCallable(activeCols.join(", "));
        onCloseClick();
    }
    function onCloseClick() {
        main.style.display = "none";
    }

    this.open = function (activeColsStr, columns, _onOkCallable) {
        onOkCallable = _onOkCallable;
        availableColumns = columns;
        activeCols = activeColsStr ? activeColsStr.replace(/\s+/g, "").split(",") : [];
        main.style.display = "block";
        update();
    };

}
