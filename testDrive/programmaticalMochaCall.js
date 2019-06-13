'use strict';
const fs = require('fs');
const path = require('path');
const Mocha = require('mocha-parallel-tests').default

var testDir = __dirname + '\\testSuites'

var mocha = new Mocha({
    ui: 'bdd',
    timeout : 10000,
    reporter: 'mochawesome',
    reporterOptions: {
      reportFilename: 'report',
      reportDir: 'results',
      quiet: false
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
