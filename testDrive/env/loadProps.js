const fs = require('fs');
const path = require('path');
const PropertiesReader = require('properties-reader');

//environment data to argument from text properties, default 'dev'
var env = require('./args').env;

if (env == null){
    env = 'dev'
}
//create properties reader object and return
var props = new PropertiesReader(path.join(__dirname, env + '.properties'));
module.exports.props = props;
