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
var testFiles = fs.readdirSync(testDir).filter(function(file) {
    // only .js files
    return path.extname(file) === '.js';

});

//
runTests(testDir,testFiles);


function runTests(directory, files) {
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
  files.forEach(function(file) {
      mocha.addFile(path.join(testDir, file));
  });

  mocha.run(function(failures) {
    process.exitCode = failures ? 1 : 0;  //non-zero iff failure
  });
}
