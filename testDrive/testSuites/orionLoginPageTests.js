const { Builder, By, Key, until } = require('selenium-webdriver');
const { expect } = require('chai');
const itParam = require('mocha-param');
var {getDriver, buildDriver, buildDriverFromConf} = require('../driver/driverGen');
const runConfig = require('../runConfigs/loadConfig.js');

var configs = runConfig.getBrowserConfigs();

const LoginPage = require('../pageObject/login-page');

describe('login tests', () =>{
   
  describe('happy path login tests', () => {
    const mainURL = 'https://ci-orion-dev5-orionblitzcdn.clinicalink.com';
    const mainTimeout = 10000;
    const subsURL = mainURL + '/subscriber'
    itParam("Should go to the orion platform login page and login successfully - ${value.browser}_${value.height}*${value.width}", configs, async (config) => {
      const driver = buildDriver(config.browser, config.height, config.width, config.headless);
      try{
        this.loginPage = new LoginPage(driver, mainURL);
        await this.loginPage.open();
        var currURL =  await this.loginPage.login('jdryer', 'Jdryer01!',mainTimeout).then( () => {
            return driver.getCurrentUrl();}
        );
        await this.loginPage.waitFor(this.loginPage.locators.addSubbButton, mainTimeout);
        currURL = await driver.getCurrentUrl();
        
        console.log(currURL);
        expect(currURL).to.equal(subsURL);
      }
      finally{
        driver.quit()
      }
    });
    
  });
  
  describe('unhappy path login tests', () => {
    const mainURL = 'https://ci-orion-dev5-orionblitzcdn.clinicalink.com';
    const mainTimeout = 10000;
    itParam("Should go to the orion platform login page and login unsuccessfully - ${value.browser}_${value.height}*${value.width}", configs, async (config) => {
      const driver = buildDriver(config.browser, config.height, config.width, config.headless);
      try{
            this.loginPage = new LoginPage(driver, mainURL);
            await this.loginPage.open();
            await this.loginPage.clickIfClickable(this.loginPage.locators.loginButton, mainTimeout);
      }
      finally{
        driver.quit()
      }
    });
  });
  
   
});