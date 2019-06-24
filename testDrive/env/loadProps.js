const fs = require('fs');
const path = require('path');
const PropertiesReader = require('properties-reader');

class loadProps {

  constructor(){
    //environment data to argument from text properties, default 'dev'
    var env = process.env.environment;

    if (env == null){
        env = 'dev';
    }
    //create properties reader object and return
    this.props = new PropertiesReader(path.join(__dirname, env + '.properties'));
  }
  getProp(property){
    return this.props.get(property);
  }
}
module.exports = new loadProps();
