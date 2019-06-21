const { Builder, By, Key, until } = require('selenium-webdriver');
const { expect } = require('chai');
const itParam = require('mocha-param');
var {getDriver, buildDriver, buildDriverFromConf} = require('../driver/driverGen');
const configs = require('../runConfigs/loadConfig.js').expandedConfigs;

const LoginPage = require('../pageObject/login-page');

describe('loginTests', () => {
      const mainUrl = 'http://the-internet.herokuapp.com/';
      const mainWait = 10000;

      itParam("Page Objects go to the internet and login successfuly through login form - ${value.browser}_${value.height}*${value.width}", configs, async (config) => {
        const driver = buildDriver(config.browser, config.height, config.width, config.headless);
        //open main url and choose Form authentication option, than log in and wait for
        //logout button to be displayed
        try {
          this.loginPage = new LoginPage(driver, mainUrl);
          await this.loginPage.open();
          await this.loginPage.clickIfClickable(By.linkText('Form Authentication'), mainWait);
          await this.loginPage.login('tomsmith', 'SuperSecretPassword!');
          await this.loginPage.waitFor(this.loginPage.locators.logoutButton, mainWait);
          var button =  driver.findElement(By.xpath('//*[@id="content"]/div/a/i'));
          console.log(button.getRect());
          await driver.findElement(By.xpath('//*[@id="flash"]'))
              .getAttribute("class")
              .then(
                function(classString) {
                  expect(classString).to.equal("flash success");
                }
              );

          await this.loginPage.logout();

          //wait for login screen after logout by checking if login button is displayed
          await this.loginPage.waitFor(this.loginPage.locators.loginButton, mainWait);
          await this.loginPage.titleIsEqual('The Internet');
        }
        finally{
          driver.quit()
        }
      });

      itParam("Page Objects go to the internet and NOT login successfuly with invalid credentials - ${value.browser}_${value.height}*${value.width}", configs, async (config) => {
        const driver = buildDriver(config.browser, config.height, config.width, config.headless);
        try {
          this.loginPage = new LoginPage(driver, mainUrl);
          await driver.get(mainUrl);
          await this.loginPage.clickIfClickable(By.linkText('Form Authentication'), 10000);
          await this.loginPage.login('joesmith', 'stuff!');

          await this.loginPage.waitFor(By.xpath('//*[@id="flash"]'), mainWait);
          await driver.findElement(By.xpath('//*[@id="flash"]'))
            .getAttribute("class")
            .then(
              function(classString) {
                expect(classString).to.equal("flash error");
              }
            );
          await this.loginPage.titleIsEqual('The Internet');
        }
        finally{
          driver.quit()
        }
      });
});
