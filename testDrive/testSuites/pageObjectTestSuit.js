const { Builder, By, Key, until } = require('selenium-webdriver');
const { expect } = require('chai');
var {getDriver, buildDriver, buildDriverFromConf} = require('../driver/driverGen');

const LoginPage = require('../pageObject/login-page')

describe('pageObjectTests', () => {
  const driver = buildDriver('chrome', 1024,860);
  this.loginPage = new LoginPage(driver, 'http://the-internet.herokuapp.com/login');

  it('should go to http://the-internet.herokuapp.com/login , refresh page and hopefully dont die', async () => {
    await this.loginPage.open();
    await this.loginPage.refresh();

  });

  it('should input username, password and log in', async () => {
    await this.loginPage.open();
    await this.loginPage.login();
     
  });
  
  after(async () => driver.quit());
});