const fs = require('fs');
const path = require('path');
const Mocha = require('mocha-parallel-tests').default;

var envData = require('./env/environments');
const PropertiesReader = require('properties-reader');

var props = new PropertiesReader(__dirname + '/env/' + envData + '.properties');
process.env.path += ';' + path.join(__dirname, 'driverBinaries');
var testDir = path.join(__dirname, 'testSuites');

var mocha = new Mocha({
    ui: 'bdd',
    timeout : 15000,
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
var testFiles = fs.readdirSync(testDir).filter(function(file) {
    // only .js files
    return path.extname(file) === '.js';

}).forEach(function(file) {
    mocha.addFile(path.join(testDir, file));
});
console.log(testDir);
mocha.run(function(failures) {
  process.exitCode = failures ? 1 : 0;  //non-zero iff failure
});
