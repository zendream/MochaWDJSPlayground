const fs = require('fs');
const path = require('path');
const env = require('./env/args').env;
const tstconfig = require('./env/args').tstconfig;

//add driver binaries folder to temporary PATH
process.env.path += ';' + path.join(__dirname, 'driverBinaries');
//set testfile and env to environment variables
process.env.runConfigfile = (tstconfig == null) ? 'defaultConfig': tstconfig;
process.env.environment = (env == null) ? 'dev': env;

const Mocha = require('mocha-parallel-tests').default;
//pros and config singletons from files
const Props = require('./env/loadProps.js');
const Config = require('./runConfigs/loadConfig.js');


console.log('Config description: ' + Config.parsedConfig.configDescription);

var testDir = path.join(__dirname, 'testSuites');
var paths = [];

Config.getConfigFiles().forEach(function(file) {
        paths.push(path.join(testDir, file));
});
//
console.log(Config.configDetailsToString());

runTests(paths);
//run tests for each specified set
var fail = 0;
function runTests(paths) {
  var mocha = new Mocha({
      ui: 'bdd',
      timeout : Props.getProp('mochaOptions.timeout'),
      maxParallel: Props.getProp('mochaOptions.maxParallel'),
      reporter: 'mochawesome',
      reporterOptions: {
        reportFilename: Props.getProp('reporterOptions.reportFilename'),
        overwrite: Props.getProp('reporterOptions.overwrite'),
        reportDir: Props.getProp('reporterOptions.reportDirectory'),
        quiet: Props.getProp('reporterOptions.quiet'),
        html: Props.getProp('reporterOptions.html'),
        json: Props.getProp('reporterOptions.json')

      }
  });
  // test specification files from directory
  paths.forEach(function(path) {
      mocha.addFile(path);
  });
  var i;
  for(i = 0; i< 4; i++){
  mocha.run(function(failures) {
    process.exitCode = failures ? 1 : 0;  //non-zero iff failure
  });
  }
}
