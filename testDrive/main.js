const fs = require('fs');
const path = require('path');
const MochaParallel = require('mocha-parallel-tests').default;

//add driver binaries folder to temporary PATH
process.env.path += ';' + path.join(__dirname, 'driverBinaries');
//environment data to argument from text properties, default 'dev'
var env = require('./env/args').env;
if (env == null){
    env = 'dev'
}
const PropertiesReader = require('properties-reader');
var props = new PropertiesReader(path.join(__dirname , '/env/' , env + '.properties'));

//test config data to argument from config properties, default 'defaultConfig.json'
var runConfigfile = require('./env/args').tstconfig;
if (runConfigfile == null){
    console.log('Using default suite configuration');
    runConfigfile = 'defaultConfig';
}

//parse test run configuration from JSON
var runConfig = JSON.parse(fs.readFileSync(path.join(__dirname , '/runConfigs/' , runConfigfile + '.json')));
console.log("Suite description - " + runConfig.configName);

//run tests for each specified set
var fail = 0;

const forLoop = async _ => {
  console.log('Start')

  for (let index = 0; index < runConfig.sets.length; index++) {
    var paths = [];
    runConfig.sets[index].testFiles.forEach(filename => {
      paths.push(path.join(__dirname, 'testSuites', filename));
    });
    process.env.browser = runConfig.sets[index].browser;
    process.env.sizeX = runConfig.sets[index].sizeX;
    process.env.sizeY = runConfig.sets[index].sizeY;
    console.log('Config loaded - ' + process.env.browser + ' ' + process.env.sizeX + '*' + process.env.sizeY);
    console.log('Test suites:');
    paths.forEach(p=>{console.log('  ' + p);});
    runTests(paths);
    fail = fail ? 1 : 0;
  }
  console.log('End')
}

forLoop();

function runTests(paths) {
  var fail = 0;
  var mocha = new MochaParallel({
      ui: 'bdd',
      timeout : props.get('mochaOptions.timeout'),
      maxParallel : 1,
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
    fail = failures ? 1 : 0;  //non-zero iff failure
  });
  return fail;
}
