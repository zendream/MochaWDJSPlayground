const fs = require('fs');
const path = require('path');
const PropertiesReader = require('properties-reader');
var runConfigfile = process.env.runConfigfile

//environment data to argument from text properties, default 'dev'

class loadConfig {
  constructor(){
    //if the tstconfig parameter was not passed, use the default run configuration
    if (runConfigfile == null){
      console.log('Parameter tstconfig not found, using default suite config');
      runConfigfile = 'defaultConfig';
    }
    //parse test run configuration from JSON and return object
    var filePath = path.join(__dirname , runConfigfile + '.json');
    if (fs.existsSync(filePath)) {
      this.parsedConfig = JSON.parse(fs.readFileSync(filePath));
    }
    else{
      throw ('Could not find path from file - ' + filePath);
    }
  }
  getConfigFiles() {
    var paths = [];
    this.parsedConfig.testFiles.forEach(function(file) {
            paths.push(file);
    });
    return paths;
  }
  //expand configs to return an array of objects {browser: string, height:number, width: number, headless: bool}
  getBrowserConfigs() {
    var params = [];
    console.log('Expanding config combination - headless mode:' + this.parsedConfig.headless);
    this.parsedConfig.browsers.forEach( browser => {
      console.log('Found browser + ' + browser);
      this.parsedConfig.resolutions.forEach( resolution => {
          console.log('Found resolution + ' + resolution.height + "*" + resolution.width);
          params.push({"browser": browser, "height": resolution.height, "width": resolution.width, "headless" : this.parsedConfig.headless});
      });
    });
    return params;
  }
}
module.exports = new loadConfig();
