const fs = require('fs');
const path = require('path');
const PropertiesReader = require('properties-reader');

class loadLangs {

  constructor(){
    this.langs = new PropertiesReader(path.join('C:/Users/MarekSarvas/ClinicalInk/ProjectTests/MochaWDJSPlayground/testDrive/env/lang.properties'));
  }
  getProp(property){
    return this.langs.get(property);
  }
}
module.exports = new loadLangs();
