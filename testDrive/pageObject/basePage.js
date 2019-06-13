const {until} = require('selenium-webdriver');

function BasePage(webdriver, url) {
  this.driver = webdriver;
  this.url = url;
};

BasePage.prototype.open = function() {
  this.driver.get(this.url);
  return this;
};

BasePage.prototype.waitFor = function(locator, timeout) {
  var waitTimeout = timeout || 20000;
  var driver = this.driver;
  return driver.wait(until.elementLocated(locator, waitTimeout));
};

module.exports = BasePage;
