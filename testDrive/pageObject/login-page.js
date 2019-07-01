const {until, By} = require('selenium-webdriver');
const { expect } = require('chai');
var BasePage = require('./base-page');

class LoginPage extends BasePage{
  constructor(webdriver, url){
    super(webdriver, url)
    //array of locators on particular page(here it is login page)
    this.locators = {
        //locator for username input bar
        username: By.id('username'),
        //locator for username input bar
        password: By.id('password'),

        loginButton: By.id('loginButton'),

        forgotPassworsButton: By.id('forgotLink'),
        addSubbButton: By.id('add_subscriber')
    }
  }

  async fillForm(locator, timeout, message){
    await this.waitFor(locator,timeout);
    return this.driver.findElement(locator).sendKeys(message);
  }

  async login(name, password, timeout){
    await this.fillForm(this.locators.username, timeout, name);
    await this.fillForm(this.locators.password, timeout, password);
    return this.clickIfClickable(this.locators.loginButton, timeout);
  }

  async logout(timeout){
      await this.waitFor(this.locators.logoutButton, timeout);
      return this.clickIfClickable(this.locators.logoutButton, timeout);
  }

  async titleIsEqual(expectedTitle){
    var title = await this.driver.getTitle();
    return expect(title).to.equal(expectedTitle);

  }
}
module.exports = LoginPage;
