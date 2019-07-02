const { Builder, By, Key, until } = require('selenium-webdriver');
const { expect } = require('chai');
const itParam = require('mocha-param');
var {getDriver, buildDriver, buildDriverFromConf} = require('../driver/driverGen');
const runConfig = require('../runConfigs/loadConfig.js');

var configs = runConfig.getBrowserConfigs();

const LoginPage = require('../pageObject/login-page');
const DashboardPage = require('../pageObject/dashboard-page');

describe('Orion QA1 system admin login tests', () =>{
  const mainURL = 'https://ci-orion-dev5-orionblitzcdn.clinicalink.com/';
  const mainTimeout = 10000;
  const subsURL = mainURL + 'subscriber';

  describe('happy path login should', () => {
    itParam("be successful with valid credentials - ${value.browser}_${value.height}*${value.width}", configs, async (config) => {
      const driver = buildDriver(config.browser, config.height, config.width, config.headless);
      try{
        this.loginPage = new LoginPage(driver, mainURL);
        await this.loginPage.open();
        await this.loginPage.waitToLoad();
        var currURL =  await this.loginPage.login('jdryer', 'Jdryer01!',mainTimeout).then( () => {
            return driver.getCurrentUrl();}
        );
        this.dashboardPage = new DashboardPage(driver, subsURL);
        await this.loginPage.waitForLocated(this.dashboardPage.locators.addSubbButton, mainTimeout);
        currURL = await driver.getCurrentUrl();
        expect(currURL).to.equal(this.dashboardPage.url);
      }
      finally{
        driver.quit();
      }
    });

  });
  describe('unhappy path login should', () => {
    itParam("show expected error with no user/pass - ${value.browser}_${value.height}*${value.width}", configs, async (config) => {
      const driver = buildDriver(config.browser, config.height, config.width, config.headless);
      var errorDetails;
      try {
        this.loginPage = new LoginPage(driver, mainURL);
        await this.loginPage.open();
        await this.loginPage.waitToLoad();
        var currURL =  await this.loginPage.login('', '',mainTimeout).then( () => {
            return driver.getCurrentUrl();}
        );
        currURL = await driver.getCurrentUrl();
        errorDetails = await this.loginPage.getVisibleError(mainTimeout);
        expect(currURL).to.equal(mainURL);
        expect(errorDetails).to.equal("Missing required parameter USERNAME");
      }
      finally{
        driver.quit();
      }
    });
    itParam("show expected error with unknown username (?) - ${value.browser}_${value.height}*${value.width}", configs, async (config) => {
      const driver = buildDriver(config.browser, config.height, config.width, config.headless);
      var errorDetails;
      try {
        this.loginPage = new LoginPage(driver, mainURL);
        await this.loginPage.open();
        await this.loginPage.waitToLoad();
        var currURL =  await this.loginPage.login('asdfg', '',mainTimeout).then( () => {
            return driver.getCurrentUrl();}
        );
        currURL = await driver.getCurrentUrl();
        errorDetails = await this.loginPage.getVisibleError(mainTimeout);
        expect(currURL).to.equal(mainURL);
        expect(errorDetails).to.equal("User does not exist.");
      }
      finally{
        driver.quit();
      }
    });
    itParam("show expected error when submitted without any password - ${value.browser}_${value.height}*${value.width}", configs, async (config) => {
      const driver = buildDriver(config.browser, config.height, config.width, config.headless);
      var errorDetails;
      try {
        this.loginPage = new LoginPage(driver, mainURL);
        await this.loginPage.open();
        await this.loginPage.waitToLoad();
        var currURL =  await this.loginPage.login('jdryer', '',mainTimeout).then( () => {
            return driver.getCurrentUrl();}
        );
        currURL = await driver.getCurrentUrl();
        errorDetails = await this.loginPage.getVisibleError(mainTimeout);
        expect(currURL).to.equal(mainURL);
        expect(errorDetails).to.equal("Incorrect username or password.");
      }
      finally{
        driver.quit();
      }
    });
    itParam("show expected error when submitting a wrong password - ${value.browser}_${value.height}*${value.width}", configs, async (config) => {
      const driver = buildDriver(config.browser, config.height, config.width, config.headless);
      var errorDetails;
      try {
        this.loginPage = new LoginPage(driver, mainURL);
        await this.loginPage.open();
        await this.loginPage.waitToLoad();
        var currURL =  await this.loginPage.login('jdryer', 'asdfg',mainTimeout).then( () => {
            return driver.getCurrentUrl();}
        );
        currURL = await driver.getCurrentUrl();
        errorDetails = await this.loginPage.getVisibleError(mainTimeout);
        expect(currURL).to.equal(mainURL);
        expect(errorDetails).to.equal("Incorrect username or password.");
      }
      finally{
        driver.quit();
      }
    });
  });
});
