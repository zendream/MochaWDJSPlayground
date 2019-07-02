const {until, By} = require('selenium-webdriver');
var BasePage = require('./base-page');

class DashboardPage extends BasePage{
  constructor(webdriver, url){
    super(webdriver, url)
    //array of locators on particular page(here it is login page)
    this.locators = {
        addSubbButton: By.id('add_subscriber'),
        popupAddButton: By.className('secondary'),
        popupCancelButton: By.className('tertiary'),
        subbNameInput: By.id('name'),
        subbStartDate: By.id('startDate')

    }
  }

  async fillForm(locator, timeout, message){
    await this.waitForVisible(locator,timeout);
    return this.driver.findElement(locator).sendKeys(message);
  }

  async logout(timeout){
      await this.waitForVisible(this.locators.logoutButton, timeout);
      return this.clickIfClickable(this.locators.logoutButton, timeout);
  }

  async waitToLoad(){
    return this.waitForLocated(this.locators.addSubbButton, 10000);
  }
}
module.exports = DashboardPage;
