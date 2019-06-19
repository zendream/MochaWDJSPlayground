const { Builder, By, Key, until } = require('selenium-webdriver');
const { expect } = require('chai');
var {getDriver, buildDriver} = require('../driver/driverGen');

describe('loginTests', () => {
      const driver = buildDriver();

      const mainUrl = 'http://the-internet.herokuapp.com/';

      it('should go to the internet and login successfuly through login form', async () => {
          await driver.get(mainUrl);
          await driver.findElement(By.linkText('Form Authentication')).click();
          await driver.findElement(By.name('username')).sendKeys('tomsmith');
          await driver.findElement(By.name('password')).sendKeys('SuperSecretPassword!', Key.ENTER);
          await driver.wait(until.elementLocated(By.xpath('//*[@id="content"]/div/a/i')));
          await driver.findElement(By.xpath('//*[@id="flash"]'))
            .getAttribute("class")
            .then(
              function(classString) {
                expect(classString).to.equal("flash success");
              }
            );
          await driver.wait(until.elementLocated(By.xpath('//*[@id="content"]/div/a/i'))).click();
          await driver.findElement(By.xpath('//*[@id="login"]/button/i'));
          var title = await driver.getTitle();
          expect(title).to.equal('The Internet');
      });

      it('should go to the internet and NOT login successfuly with invalid credentials', async () => {
          await driver.get(mainUrl);
          await driver.findElement(By.linkText('Form Authentication')).click();
          await driver.findElement(By.name('username')).sendKeys('joesmith');
          await driver.findElement(By.name('password')).sendKeys('stuff!', Key.ENTER);
          await driver.wait(until.elementLocated(By.xpath('//*[@id="flash"]')));
          await driver.findElement(By.xpath('//*[@id="flash"]'))
            .getAttribute("class")
            .then(
              function(classString) {
                expect(classString).to.equal("flash error");
              }
            );
          var title = await driver.getTitle();
          expect(title).to.equal('The Internet');
      });


      after(async () => driver.quit());
});
