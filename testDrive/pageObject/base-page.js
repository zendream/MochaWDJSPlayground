const {until, By, Condition} = require('selenium-webdriver');

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

  async waitForVisible(locator, timeout){
    var waitTimeout = timeout || 10000;
    return this.driver.wait(until.elementIsVisible(this.driver.findElement(locator, timeout), waitTimeout));
  }

  async waitForLocated(locator, timeout){
    var waitTimeout = timeout || 10000;
    return this.driver.wait(until.elementLocated(locator), waitTimeout);
  }


  async clickIfClickable(locator, timeout){
    var waitTimeout = timeout || 10000;
    await this.waitForVisible(locator, waitTimeout);
    return this.driver.findElement(locator).click();
  }

  //Returns an object describing an element's location, in pixels relative
  //to the document element, and the element's size in pixels as
  //{height: num, width: num, x: num, y:num}
  async getLocation(locator, timeout){
    var waitTimeout = timeout || 10000;
    await this.waitFor(locator, waitTimeout);
    var element = await this.driver.findElement(locator, waitTimeout);
    var location = await element.getRect().then(function(params){
      return params;
    });
    return location;
  }


  async getDisplayedText(locator, timeout){
    var waitTimeout = timeout || 10000;
    await this.waitForVisible(locator, waitTimeout);
    var element = await this.driver.findElement(locator, waitTimeout);
    var currentText = await element.getText().then((text) => {return text;});
    return currentText;
  }

  async titleIsEqual(expectedTitle){
    var title = await this.driver.getTitle();
    return title == expectedTitle;

  }

}

module.exports = BasePage;
