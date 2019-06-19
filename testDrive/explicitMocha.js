const { Builder, By, Key, until } = require('selenium-webdriver');
const { expect } = require('chai');
var {getDriver, buildDriver} = require('./driver/driverGen');



describe('DefaultTest', () => {
    describe('important stuff', () => {
      const driver = buildDriver('chrome', 1024,860);

      it('should go to www.google.com, search for mochajs and check the title', async () => {
          await driver.get('https://www.google.com');
          await driver.findElement(By.name('q')).sendKeys('mochajs', Key.ENTER);
          await driver.wait(until.elementLocated(By.id('search')));
          await driver.findElement(By.linkText('Mocha API')).click();
          const title = await driver.getTitle();

          expect(title).to.equal('Mocha - Documentation');
      });
      after(async () => driver.quit());
    });
    describe('other stuff done with new session', () => {
      const driver = buildDriver('chrome', 1900,1080);

      it('should go to www.google.com, search for mochajs and check the title', async () => {
          await driver.get('https://www.google.com');
          await driver.findElement(By.name('q')).sendKeys('mochajs', Key.ENTER);
          await driver.wait(until.elementLocated(By.id('search')));
          await driver.findElement(By.linkText('Mocha API')).click();
          const title = await driver.getTitle();

          expect(title).to.equal('Mocha - Documentation');
      });
      it('should go to www.google.com, search for asdfq and check the title then fail spectatularly', async () => {
          await driver.get('https://www.google.com');
          await driver.findElement(By.name('q')).sendKeys('asdfq', Key.ENTER);
          await driver.wait(until.elementLocated(By.id('search')));
          await driver.findElement(By.linkText('asdfq')).click();
          const title = await driver.getTitle();

          expect(title).to.equal('asdfq');
      });

      after(async () => driver.quit());
    });
});
