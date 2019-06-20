const fs = require('fs');
const path = require('path');
const Mocha = require('mocha-parallel-tests').default;

//environment properties and run config from files
const envProps = require('./env/loadProps.js').props;
const config = require('./runConfigs/loadConfig.js').config;

//add driver binaries folder to temporary PATH
process.env.path += ';' + path.join(__dirname, 'driverBinaries');

console.log('Config description: ' + config.configName);

var testDir = path.join(__dirname, 'testSuites');
var paths = [];

config.testFiles.forEach(function(file) {
        paths.push(path.join(testDir, file));
});

paths.forEach(path => {
  console.log('Adding path of testfile - ' + path);
});
//

runTests(paths);
//run tests for each specified set
var fail = 0;
function runTests(paths) {
  var mocha = new Mocha({
      ui: 'bdd',
      timeout : envProps.get('mochaOptions.timeout'),
      maxParallel: envProps.get('mochaOptions.maxParallel'),
      reporter: 'mochawesome',
      reporterOptions: {
        reportFilename: envProps.get('reporterOptions.reportFilename'),
        reportDir: envProps.get('reporterOptions.reportDirectory'),
        quiet: envProps.get('reporterOptions.quiet'),
        html: envProps.get('reporterOptions.html'),
        json: envProps.get('reporterOptions.json')

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
