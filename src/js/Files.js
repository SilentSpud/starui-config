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
 * Simple API to access files
 * 
 * @author M8r
 */
var Files = {
    getFileSystemObject: function() {
        return new ActiveXObject("Scripting.FileSystemObject");
    },
    readFile: function (path) {
        try {
            var content = "";
            /** @type {Scripting.FileSystemObject} */
            var fso = Files.getFileSystemObject();
            if (fso.FileExists(path)) {
                var file = fso.OpenTextFile(path, 1, false); // 1 ForReading, 2 ForWriting oder 8 ForAppending
                // Throws error when file is size=0...
                if (!file.AtEndOfStream) {
                    content = file.ReadAll();
                }
                file.close();
            }
            return content;
        } catch (e) {
            alert("Error occured while reading file: " + path + "\n\nError details:\n" + e.message);
        }
        return "";
    },
    writeFile: function (path, content) {
        try {
            /** @type {Scripting.FileSystemObject} */
            var fso = Files.getFileSystemObject();
            var file = fso.CreateTextFile(path);
            if (fso.FileExists(path)) {
                file.Write(content);
                file.close();
                return true;
            }
            return false;
        } catch (e) {
            alert("Error occured while writing to file: " + path + "\n\nError details:\n" + e.message);
            return false;
        }
    },
    fileExists: function(path) {
        /** @type {Scripting.FileSystemObject} */
        var fso = Files.getFileSystemObject();
        return fso.FileExists(path);
    },
    folderExists: function(path) {
        /** @type {Scripting.FileSystemObject} */
        var fso = Files.getFileSystemObject();
        return fso.FolderExists(path);
    },
    getCurrentDirectory: function () {
        var fso = Files.getFileSystemObject();
        return fso.GetFolder(".");
    },
    getCurrentDirectoryFixed: function() {
        var cwd = Files.getCurrentDirectory().Path;
        if ( cwd ) {
            cwd += "\\";
        }
        // Fix wrong starting directory when started with ms application host instad of mshtml
        if ( cwd.toLowerCase().indexOf("system32") !== -1 ) {
            cwd = (document.location+"").replace(/^file:\/\/\/?/,"").replace(/[^\/]+\.hta$/,"").replace(/%20/g, " ").replace(/\//g, "\\");
        }
        return cwd;
    },
    getFolder: function (path) {
        var fso = Files.getFileSystemObject();
        return fso.GetFolder(path);
    },
    readDirectory: function (path, onlyFolders) {
        try {
            /** @type {Scripting.FileSystemObject} */
            var fso = Files.getFileSystemObject();
            var folder = fso.GetFolder(path);
            var result = {
                files: [],
                folders: []
            };
            if (!onlyFolders) {
                for (var enu = new Enumerator(folder.Files); !enu.atEnd(); enu.moveNext()) {
                    result.files.push(enu.item());
                }
            }
            for (var enu = new Enumerator(folder.SubFolders); !enu.atEnd(); enu.moveNext()) {
                result.folders.push(enu.item());
            }
            return result;
        } catch (e) {
            alert("Error occured while reading directory: " + path + "\n\nError details:\n" + e.message);
        }
    }
};
