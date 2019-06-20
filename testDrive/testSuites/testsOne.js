const { Builder, By, Key, until } = require('selenium-webdriver');
const { expect } = require('chai');
const itParam = require('mocha-param');
var {getDriver, buildDriver, buildDriverFromConf} = require('../driver/driverGen');
const configs = require('../runConfigs/loadConfig.js').expandedConfigs;


describe('testsOneSuite', () => {
      itParam("should go to www.google.com, search for mocha and check the title - ${value.browser}_${value.height}*${value.width}", configs, async (config) => {
        const driver = buildDriver(config.browser, config.height, config.width);
        try {
          await driver.get('https://www.google.com');
          await driver.findElement(By.name('q')).sendKeys('mochajs', Key.ENTER);
          await driver.wait(until.elementLocated(By.id('search')));
          await driver.findElement(By.linkText('Mocha API')).click();
          const title = await driver.getTitle();
          expect(title).to.equal('Mocha - Documentation');
        }
        finally {
          driver.quit()
        }
      });
});
