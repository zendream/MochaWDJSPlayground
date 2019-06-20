const fs = require('fs');
const path = require('path');
const Mocha = require('mocha-parallel-tests').default;

//environment data from text properties
var envData = require('./env/environments');
const PropertiesReader = require('properties-reader');
var props = new PropertiesReader(path.join(__dirname , '/env/' , envData + '.properties'));

//add driver binaries folder to temporary PATH
process.env.path += ';' + path.join(__dirname, 'driverBinaries');

//load up test directory and files
var testDir = path.join(__dirname, 'testSuites');
var paths = [];

fs.readdirSync(testDir).filter(function(file) {
    // only .js files
    return path.extname(file) === '.js';
  }).forEach(function(file) {
        paths.push(path.join(testDir, file));
});

paths.forEach(path => {
  console.log(path)
});
//

runTests(paths);


function runTests(paths) {
  var mocha = new Mocha({
      ui: 'bdd',
      timeout : props.get('testOptions.timeout'),
      reporter: 'mochawesome',
      reporterOptions: {
        reportFilename: props.get('reporterOptions.reportFilename'),
        reportDir: props.get('reporterOptions.reportDirectory'),
        quiet: props.get('reporterOptions.quiet'),
        html: props.get('reporterOptions.html'),
        json: props.get('reporterOptions.json')

      }
  });
  // test specification files from directory
 
  paths.forEach(function(path) {
      mocha.addFile(path);
  });
 
 

  mocha.run(function(failures) {
    process.exitCode = failures ? 1 : 0;  //non-zero iff failure
  });
}
