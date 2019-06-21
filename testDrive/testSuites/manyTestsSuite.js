const { Builder, By, Key, until } = require('selenium-webdriver');
const { expect } = require('chai');
const itParam = require('mocha-param');
var {getDriver, buildDriver, buildDriverFromConf} = require('../driver/driverGen');

const runConfig = require('../runConfigs/loadConfig.js');
var configs = runConfig.getBrowserConfigs();

describe('loginTests', () => {

      const mainUrl = 'http://the-internet.herokuapp.com/';
      itParam("should go to the internet and login successfuly through login form - ${value.browser}_${value.height}*${value.width}", configs, async (config) => {
        const driver = buildDriver(config.browser, config.height, config.width, config.headless);
        try {
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
        }
        finally {
          driver.quit()
        }
      });

      itParam("should go to the internet and NOT login successfuly with invalid credentials - ${value.browser}_${value.height}*${value.width}", configs, async (config) => {
          const driver = buildDriver(config.browser, config.height, config.width, config.headless);
          try {
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
          }
          finally {
            driver.quit()
          }
      });
      itParam("2should go to the internet and login successfuly through login form - ${value.browser}_${value.height}*${value.width}", configs, async (config) => {
        const driver = buildDriver(config.browser, config.height, config.width, config.headless);
        try {
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
        }
        finally {
          driver.quit()
        }
      });

      itParam("2should go to the internet and NOT login successfuly with invalid credentials - ${value.browser}_${value.height}*${value.width}", configs, async (config) => {
          const driver = buildDriver(config.browser, config.height, config.width, config.headless);
          try {
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
          }
          finally {
            driver.quit()
          }
      });
      itParam("3should go to the internet and login successfuly through login form - ${value.browser}_${value.height}*${value.width}", configs, async (config) => {
        const driver = buildDriver(config.browser, config.height, config.width, config.headless);
        try {
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
        }
        finally {
          driver.quit()
        }
      });

      itParam("3should go to the internet and NOT login successfuly with invalid credentials - ${value.browser}_${value.height}*${value.width}", configs, async (config) => {
          const driver = buildDriver(config.browser, config.height, config.width, config.headless);
          try {
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
          }
          finally {
            driver.quit()
          }
      });
      itParam("4should go to the internet and login successfuly through login form - ${value.browser}_${value.height}*${value.width}", configs, async (config) => {
        const driver = buildDriver(config.browser, config.height, config.width, config.headless);
        try {
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
        }
        finally {
          driver.quit()
        }
      });

      itParam("4should go to the internet and NOT login successfuly with invalid credentials - ${value.browser}_${value.height}*${value.width}", configs, async (config) => {
          const driver = buildDriver(config.browser, config.height, config.width, config.headless);
          try {
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
          }
          finally {
            driver.quit()
          }
      });
      itParam("5should go to the internet and login successfuly through login form - ${value.browser}_${value.height}*${value.width}", configs, async (config) => {
        const driver = buildDriver(config.browser, config.height, config.width, config.headless);
        try {
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
        }
        finally {
          driver.quit()
        }
      });

      itParam("5should go to the internet and NOT login successfuly with invalid credentials - ${value.browser}_${value.height}*${value.width}", configs, async (config) => {
          const driver = buildDriver(config.browser, config.height, config.width, config.headless);
          try {
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
          }
          finally {
            driver.quit()
          }
      });
      itParam("6should go to the internet and login successfuly through login form - ${value.browser}_${value.height}*${value.width}", configs, async (config) => {
        const driver = buildDriver(config.browser, config.height, config.width, config.headless);
        try {
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
        }
        finally {
          driver.quit()
        }
      });

      itParam("6should go to the internet and NOT login successfuly with invalid credentials - ${value.browser}_${value.height}*${value.width}", configs, async (config) => {
          const driver = buildDriver(config.browser, config.height, config.width, config.headless);
          try {
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
          }
          finally {
            driver.quit()
          }
      });

});
