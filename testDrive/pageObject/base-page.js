const {until, By} = require('selenium-webdriver');

class BasePage{
  constructor(webdriver,url) {
    this.driver = webdriver;
    this.url = url;
    //this.timeout = timeout;
  }

  async open(){
    this.driver.get(this.url);
    return this;
  }

  async refresh(){
    this.driver.navigate().refresh();
    return this;
  }

  async isVisible(locator, timeout){
      var waitTimeout = timeout || 10000;
      return this.driver.wait(until.elementIsVisible(locator, waitTimeout));
  }

   async waitFor(locator, timeout){
    var waitTimeout = timeout || 10000;
      return this.driver.wait(until.elementLocated(locator), waitTimeout);
  }

  async clickIfClickable(locator, timeout){
    var waitTimeout = timeout || 10000;
    await this.waitFor(locator, timeout);
    return this.driver.findElement(locator).click();
  }

}

module.exports = BasePage;