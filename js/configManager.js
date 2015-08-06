var fs = require('fs');
var path = require('path');

var properties = {
		pathToConfigFile: 'appConfig',
		configFileName: 'config.json',
		osSeparator: '/'
	};

var config = {
	

	// Init configuration for the app.
	init: function(){
		var configFilePath = properties.pathToConfigFile + properties.osSeparator + properties.configFileName;

		fs.exists(configFilePath, function (exists) {
  			if (exists)
  				config.readConfig(configFilePath);
  			else
  				config.createConfig(configFilePath);
		});

		config.loadConfig();
	},

	getConfigPath: function(){
		return properties.pathToConfigFile;
	},

	readConfig: function(configFilePath){
		console.log("Reading config file " + configFilePath);
		properties = JSON.parse(configFilePath);
	},

	createConfig: function(configFilePath){
		console.log("Path is not found! Creating: " + configFilePath);
		properties["maxProjectHistory"] = 5;
		var editors = ["SublimeText3"],
			pathsToEditors = ["C:/Program Files/Sublime Text 3/sublime_text.exe"];
		properties["editors"] = editors;
		properties["pathsToEditors"] = pathsToEditors;
		properties["defaultEditor"] = properties.editors[0];
		properties["pathToDefaultEditorExecutable"] = properties.pathsToEditors[0];
		fs.mkdirParent(properties.pathToConfigFile);
		fs.writeFile(configFilePath, JSON.stringify(properties), function(err){
			if(err)
				console.error(err.message);
			else
				console.log("Config file generated!");
		});
	},

	loadConfig: function(){

	}
}