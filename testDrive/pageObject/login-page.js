const {until, By} = require('selenium-webdriver');
const { expect } = require('chai');
var BasePage = require('./base-page');

class LoginPage extends BasePage{
  constructor(webdriver, url){
    super(webdriver, url)
    this.locators = {
        //locator for username input bar 
        username: By.id('username'),
        //locator for username input bar
        password: By.id('password'),
        //locator for login button
        loginButton: By.xpath('//*[@id="login"]/button/i'),
        //locator for logout button
        logoutButton: By.xpath('//*[@id="content"]/div/a/i'),
    }
  }

  async fillForm(locator, timeout, message){
    await this.waitFor(locator,timeout);
    return this.driver.findElement(locator).sendKeys(message);
  }

  async login(name, password){
    await this.fillForm(this.locators.username, 10000, name);
    await this.fillForm(this.locators.password, 10000, password);
    return this.clickIfClickable(this.locators.loginButton,10000);
  }

  async logout(){
      await this.waitFor(this.locators.logoutButton, 10000);
      return this.clickIfClickable(this.locators.logoutButton,10000);
  }

  async titleIsEqual(expectedTitle){
    var title = await this.driver.getTitle();
    return expect(title).to.equal(expectedTitle);

  }
}

module.exports = LoginPage;