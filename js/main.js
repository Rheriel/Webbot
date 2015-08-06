/*!
 * Webbot main javascript.
 * Website to be defined.
 *
 * Copyright 2015, Jorge Perez
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * License to be defined
 *
 * Date: Tue Jul 14
 */
global.$ = $;

var folder_view = require('folder_view');
var nwGui = require('nw.gui');
var fs = require('fs');

window.ondragover = function(e) { e.preventDefault(); return false };
window.ondrop = function(e) { e.preventDefault(); return false };

function chooseFolder() {
	var chooser = $('#folderDialog');

    chooser.trigger('click');
    chooser.change(function(evt) {
        var folder = $(this).val();
        if( isFolder(folder) ){
            addFolderToRecent(folder);
            openNewProject(folder);
        }
    });
    return false;
}

function isFolder(pathString){
	return fs.lstatSync(pathString).isDirectory();
}

function addFolderToRecent(folder) {
	
}

function openNewProject(folder) {

}

     
 