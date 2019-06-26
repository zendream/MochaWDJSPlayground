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

var buildDriverFromConf = function () {
  return buildDriver(process.env.browser, parseInt(process.env.sizeX), parseInt(process.env.sizeY));
};

module.exports.getDriver = getDriver;
module.exports.buildDriverFromConf = buildDriverFromConf;
module.exports.buildDriver = buildDriver;
