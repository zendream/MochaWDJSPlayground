var {Builder, By, until} = require('selenium-webdriver');
var driver;

var getDriver = function() {
  if(driver) {
    return driver;
  } else {
    driver = buildDriver();
    return driver;
  }
};

var buildDriver = function(browser, sizex, sizey) {
  var sx = Object.is(sizex, undefined) ? 1920 : sizex;
  var sy = Object.is(sizey, undefined) ? 1080 : sizey;
  switch(browser) {
    case 'chrome':
      rdriver = new Builder().forBrowser("chrome").build();
      rdriver.manage().window().setRect({width: sx, height: sy});
      return rdriver;
    case 'firefox':
      rdriver = new Builder().forBrowser("firefox").build();
      rdriver.manage().window().setRect({width: sx, height: sy});
      return rdriver;
    case 'internet_explorer':
      rdriver = new Builder().forBrowser("internet_explorer").build();
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
