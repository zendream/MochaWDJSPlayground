var {Builder, By, until, Options, Capabilities} = require('selenium-webdriver');
var chrome = require('selenium-webdriver/chrome');
var firefox = require('selenium-webdriver/firefox');
var ie = require('selenium-webdriver/ie');

var driver;

var getDriver = function() {
  if(driver) {
    return driver;
  } else {
    driver = buildDriver();
    return driver;
  }
};
//TODO headless for other browsers
var buildDriver = function(browser, sizex, sizey, headless) {
  var sx = Object.is(sizex, undefined) ? 1920 : sizex;
  var sy = Object.is(sizey, undefined) ? 1080 : sizey;
  var rdriver;
  switch(browser) {
    case 'chrome':
      if (headless){
        var capabilities = Capabilities.chrome();
        capabilities.set("goog:chromeOptions", {
          args: [
              "--lang=en",
              "--headless",
              `--window-size=${sx},${sy}`
          ]
        });
        rdriver = new Builder().forBrowser("chrome").withCapabilities(capabilities).build();
        return rdriver;
      }
      else {
        rdriver = new Builder().forBrowser("chrome").build();
        rdriver.manage().window().setRect({width: sx, height: sy});
        return rdriver;
      }
    case 'firefox':
      if (headless){
        var options = new firefox.Options();
        options.addArguments("-headless",
            `-height=${sx}`,
            `-width=${sy}`
        );
        rdriver = new Builder().forBrowser("firefox").setFirefoxOptions(options).build();
        return rdriver;
      }
      else {
        rdriver = new Builder().forBrowser("firefox").build();
        rdriver.manage().window().setRect({width: sx, height: sy});
        return rdriver;
    }
    case 'ie':
      /*var capabilities = Capabilities.ie();
      capabilities.set("enablePersistentHover", true);
      capabilities.set("ensureCleanSession", true);
      capabilities.set("ignoreZoomSetting", true);
      capabilities.set("InternetExplorerDriver.NATIVE_EVENTS", false);
      capabilities.set("requireWindowFocus", true);
      rdriver = new Builder().forBrowser("ie").withCapabilities(capabilities).build();
      return rdriver;*/
      var options = new ie.Options();
      options.ignoreZoomSetting(true);
      options.enablePersistentHover(true);
      options.requireWindowFocus(true);
      options.ensureCleanSession(true);
      var rdriver = new Builder().forBrowser("ie").setIeOptions(options).build();
      rdriver.manage().window().setRect({width: sx, height: sy});
      return rdriver;
    case 'edge':
      rdriver = new Builder().forBrowser("edge").build();
      rdriver.manage().window().setRect({width: sx, height: sy});
      return rdriver;
    case 'safari':
      rdriver = new Builder().forBrowser("safari").build();
      rdriver.manage().window().setRect({width: sx, height: sy});
      return rdriver;
    default:
      rdriver = new Builder().forBrowser("chrome").build();
      rdriver.manage().window().setRect({width: sx, height: sy});
      return rdriver;
  }
};
var buildRemoteDriverLambdaTest = function () {
    // username: Username can be found at automation dashboard
    const USERNAME = 'sarvas.sarvas';

    // AccessKey:  AccessKey can be generated from automation dashboard or profile section
    const KEY = 'U9ahPu8QWhg222Ng8MDJcHbk0ICETfODmKx2VFYhTfurhist1r';

    // gridUrl: gridUrl can be found at automation dashboard
    const GRID_HOST = 'hub.lambdatest.com/wd/hub';
    // Setup Input capabilities
    var capabilities = {
  		"build" : "build id 2",
  		"name" : "test run name 2 - win 10 IE 11.0",
  		"platform" : "Windows 10",
  		"browserName" : "Internet Explorer",
  		"version" : "11.0",
  		"console" : true,
  		"network" : true,
  		"visual" : true,
  		"ie.compatibility" : 11001
  	}

    // URL: https://{username}:{accessKey}@hub.lambdatest.com/wd/hub
    const gridUrl = 'https://' + USERNAME + ':' + KEY + '@' + GRID_HOST;

    // setup and build selenium driver object
    var rdriver = new Builder()
        .usingServer(gridUrl)
        .withCapabilities(capabilities)
        .build();

    return rdriver;
};
var buildRemoteDriverBrowserStack = function () {
    // Setup Input capabilities
    var capabilities = {
      'os' : 'OS X',
      'os_version' : 'Mojave',
      'browserName' : 'Safari',
      'browser_version' : '12.0',
      'browserstack.local' : 'false',
      'browserstack.debug' : 'true',
      'browserstack.networkLogs' : 'true',
      'browserstack.selenium_version' : '3.14.0',
      'browserstack.user' : 'jakubodvrka1',
      'browserstack.key' : 'X4mypwaPpmFJESoE5jgh'
    }




    var rdriver = new Builder()
    .usingServer('http://hub-cloud.browserstack.com/wd/hub')
    .withCapabilities(capabilities)
    .build();

    return rdriver;
};


var buildDriverFromConf = function () {
  return buildDriver(process.env.browser, parseInt(process.env.sizeX), parseInt(process.env.sizeY));
};

module.exports.getDriver = getDriver;
module.exports.buildDriverFromConf = buildDriverFromConf;
module.exports.buildDriver = buildDriver;
module.exports.buildRemoteDriverLambdaTest = buildRemoteDriverLambdaTest;
module.exports.buildRemoteDriverBrowserStack = buildRemoteDriverBrowserStack;
