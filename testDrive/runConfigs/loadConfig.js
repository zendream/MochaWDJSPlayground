const fs = require('fs');
const path = require('path');
const PropertiesReader = require('properties-reader');

//environment data to argument from text properties, default 'dev'
var runConfigfile = require('../env/args').tstconfig;

//if the tstconfig parameter was not passed, use the default run configuration
if (runConfigfile == null){
  console.log('Parameter tstconfig not found, using default suite config');
  runConfigfile = 'defaultConfig';
}

//parse test run configuration from JSON and return object
var runConfig = JSON.parse(fs.readFileSync(path.join(__dirname , runConfigfile + '.json')));
module.exports.config = runConfig;

//expand configs to return an array of objects {browser: string, height:number, width: number}
var expandedConfigs = function(){
  var params = [];
  //console.log('Expanding config combination - headless mode:' + runConfig.headless);
  runConfig.browsers.forEach( browser => {
    //console.log('Found browser + ' + browser);
    runConfig.resolutions.forEach( resolution => {
        //console.log('Found resolution + ' + resolution.height + "*" + resolution.width);
        params.push({"browser": browser, "height": resolution.height, "width": resolution.width, "headless" : runConfig.headless});
    });
  });
  return params;
}();
module.exports.expandedConfigs = expandedConfigs;
