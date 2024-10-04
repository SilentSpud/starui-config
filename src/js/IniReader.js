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
 * Simple JS IniReader
 * 
 * @author M8r
 */
function IniReader(content) {

	this.originalContent = content;
	var lines = this.originalContent.split(/\r?\n/);
	var lineSectionKeyIndex = [];
	var lastLineInSectionMap = {};
	var newKeysPerSectionMap = {};
	var newSections = [];
	var curSection = "";
	var ini = {};
	var iniRef = ini;
	var log = "";
	var eol = "\r\n";
	var lastComment = "";
	var createAutoConfig = false;
	var autoJson = [];

	for (var i = 0; i < lines.length; i++) {
		var line = lines[i].trim();
		lines[i] = line;

		// Empty or comment
		if (!line || line.match(/^\s*[;#]/)) {
			lastComment = line;
			continue;
		}

		// Section
		var erg;
		if (erg = line.match(/^\s*\[([^\]]+)\]\s*$/)) {
			curSection = erg[1];
			if (ini[curSection]) {
				alert("Error: INI contains multiple sections with same name: " + curSection + "!");
			} else {
				ini[curSection] = {};
				newKeysPerSectionMap[curSection] = [];
			}
			iniRef = ini[curSection];
			lastLineInSectionMap[curSection] = i;
			lineSectionKeyIndex[i] = { type: "SECTION", section: curSection };
			continue;
		}

		// Find key/value
		var sepPos = line.indexOf("=");
		if (sepPos > 0) {
			var key = line.substr(0, sepPos).trim();
			var val = line.substr(sepPos + 1).trim();
			if (iniRef[key] !== undefined) {
				alert("Error: INI contains multiple values with the same name: " + key + "!");
			}
			iniRef[key] = val;
			lineSectionKeyIndex[i] = { type: "VALUE", section: curSection, key: key };
			lastLineInSectionMap[curSection] = i;
			if (createAutoConfig) {
				var text = lastComment ? lastComment.substr(2) : key;
				if (key[0] === "b") {
					autoJson.push('{ "type": "switcher", "text": "' + text + '", "help": "' + text + '", "id": "' + key + ":" + curSection + '"}');
				} else if (key[0] === "i" || key[0] === "f") {
					autoJson.push('{ "type": "slider", "text": "' + text + '", "help": "' + text + '", "id": "' + key + ":" + curSection + '",' + "\n"
						+ '\t"valueOptions" : {"min" : 0, "max" : 100, "step" : 1 }}'
					);
				} else if (key[0] === "s") {
					autoJson.push('{ "type": "textinput", "text": "' + text + '", "help": "' + text + '", "id": "' + key + ":" + curSection + '"' + (key.toLowerCase().indexOf("color") != -1 ? ', "typeSpecial" : "color"' : '') + '}');
				}
				lastComment = "";
			}
			continue;
		}

		// Error
		alert("Warning: Invalid INI line: " + line);
		log += line;
	}

	if (createAutoConfig && path.indexOf("(default)") != -1) {
		document.write(autoJson.join('\n,').replace(/\n/g, "<br />"));
		die();
	}


	this.hasValue = function (section, key) {
		if (ini[section]) {
			var val = ini[section][key];
			if (val !== undefined) {
				return true;
			}
		}
		return false;
	};

	this.getValue = function (section, key) {
		if (ini[section]) {
			var val = ini[section][key];
			if (val !== undefined) {
				var byteArrayMatch = ("" + val).match(/^@ByteArray\((.*)\)$/);
				if (byteArrayMatch) {
					return byteArrayMatch[1];
				}
			}
			return val;
		}
		return null;
	};

	this.setValue = function (section, key, val) {
		if (!ini[section]) {
			ini[section] = {};
			newSections.push(section);
			newKeysPerSectionMap[section] = [];
		}
		if (ini[section]) {
			if (ini[section][key] === undefined) {
				newKeysPerSectionMap[section].push(key);
			}
			ini[section][key] = val;
		}
	};

	this.rebuildContent = function () {
		for (var sectionName in ini) {
			content += (content ? eol : "") + "[" + sectionName + "]" + eol;
			for (var key in ini[sectionName]) {
				content += key + "=" + ini[sectionName][key] + eol;
			}
		}
		return content;
	};

	this.buildContent = function () {
		var content = "";

		var curSection = "";
		for (var i = 0; i < lines.length; i++) {
			var line = lines[i];
			var lineSectionKey = lineSectionKeyIndex[i];
			if (lineSectionKey) {
				if (lineSectionKey.type === "SECTION") {
					curSection = lineSectionKey.section;
					content += line + eol;
				} else {
					var value = lineSectionKey.section ? ini[lineSectionKey.section][lineSectionKey.key] : ini[lineSectionKey.key];
					if (value !== undefined) {
						content += lineSectionKey.key + "=" + value + eol;
					}
				}
			} else {
				content += line + eol;
			}
			// End of section - Insert new values
			if (curSection && lastLineInSectionMap[curSection] === i) {
				for (var j = 0; j < newKeysPerSectionMap[curSection].length; j++) {
					var key = newKeysPerSectionMap[curSection][j];
					var value = ini[curSection][key];
					if (value !== undefined) {
						content += key + "=" + value + eol;
					}
				}
			}
		}
		for (var i = 0; i < newSections.length; i++) {
			curSection = newSections[i];
			content += "[" + curSection + "]" + eol;
			for (var j = 0; j < newKeysPerSectionMap[curSection].length; j++) {
				var key = newKeysPerSectionMap[curSection][j];
				var value = ini[curSection][key];
				if (value !== undefined) {
					content += key + "=" + value + eol;
				}
			}
		}
		return content;
	};
}
