const {until, By} = require('selenium-webdriver');
const { expect } = require('chai');
var BasePage = require('./base-page');

class LoginPage extends BasePage{
  constructor(webdriver, url){
    super(webdriver, url)
    
    this.locators = {
        username: By.id('username'),
        password: By.id('password'),
        loginButton: By.id('loginButton'),
        forgotPassworsButton: By.id('forgotLink'),
        errorDetails: By.xpath("//div[@class='errorDetails']"),
    }
    
    this.pageTimeout = 10000;
  }
  
  async fillForm(locator, timeout, message){
    await this.waitForVisible(locator,timeout);
    return this.driver.findElement(locator).sendKeys(message);
  }
  //mandatory elements
  

  async login(name, password, timeout){
    await this.fillForm(this.locators.username, timeout, name);
    await this.fillForm(this.locators.password, timeout, password);
    return this.clickIfClickable(this.locators.loginButton, timeout);
  }

  async getVisibleError(timeout){
    await this.waitForVisible(this.locators.errorDetails, timeout);
    return this.getDisplayedText(this.locators.errorDetails, timeout);
  }

  async titleIsEqual(expectedTitle){
    var title = await this.driver.getTitle();
    return expect(title).to.equal(expectedTitle);

  }

  async waitForRequiredElements(){
    //array of locators on particular page(here it is login page)
    var requiredLocators = [];
    requiredLocators.push(this.locators.username);
    requiredLocators.push(this.locators.password);
    requiredLocators.push(this.locators.loginButton);
    requiredLocators.push(this.locators.forgotPassworsButton);
    
    await this.waitForElements(requiredLocators, this.pageTimeout);
        
  }
    

}
module.exports = LoginPage;
