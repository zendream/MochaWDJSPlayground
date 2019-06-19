const { Builder, By, Key, until } = require('selenium-webdriver');
const { expect } = require('chai');
var {getDriver, buildDriver, buildDriverFromConf} = require('../driver/driverGen');


describe('logintests on steroids', () => {
      const driver = buildDriverFromConf();

      const mainUrl = 'http://the-internet.herokuapp.com/';

      it('should go to the internet and login successfuly through login form', async () => {
          console.log('Lottastuff ' + process.env.browser + " " + process.env.sizeX + " " + process.env.sizeY)
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
      it('should go to the internet and login successfuly through login form 2', async () => {
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
      it('should go to the internet and NOT login successfuly with invalid credentials 2', async () => {
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
      it('should go to the internet and login successfuly through login form 3', async () => {
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
      it('should go to the internet and NOT login successfuly with invalid credentials 3', async () => {
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
      it('should go to the internet and login successfuly through login form 4', async () => {
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
      it('should go to the internet and NOT login successfuly with invalid credentials 4', async () => {
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
      it('should go to the internet and login successfuly through login form 5', async () => {
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
      it('should go to the internet and NOT login successfuly with invalid credentials 5', async () => {
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
      it('should go to the internet and login successfuly through login form 6', async () => {
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
      it('should go to the internet and NOT login successfuly with invalid credentials 6', async () => {
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
      it('should go to the internet and login successfuly through login form 7', async () => {
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
      it('should go to the internet and NOT login successfuly with invalid credentials 7', async () => {
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
      it('should go to the internet and login successfuly through login form 8', async () => {
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
      it('should go to the internet and NOT login successfuly with invalid credentials 8', async () => {
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
      it('should go to the internet and login successfuly through login form 9', async () => {
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
      it('should go to the internet and NOT login successfuly with invalid credentials 9', async () => {
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
      it('should go to the internet and login successfuly through login form 10', async () => {
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
      it('should go to the internet and NOT login successfuly with invalid credentials 10', async () => {
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
      it('should go to the internet and login successfuly through login form 11', async () => {
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
      it('should go to the internet and NOT login successfuly with invalid credentials 11', async () => {
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
      it('should go to the internet and login successfuly through login form 12', async () => {
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
      it('should go to the internet and NOT login successfuly with invalid credentials 12', async () => {
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
      it('should go to the internet and login successfuly through login form 13', async () => {
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
      it('should go to the internet and NOT login successfuly with invalid credentials 13', async () => {
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
      it('should go to the internet and login successfuly through login form 14', async () => {
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
      it('should go to the internet and NOT login successfuly with invalid credentials 14', async () => {
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
      it('should go to the internet and login successfuly through login form 15', async () => {
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
      it('should go to the internet and NOT login successfuly with invalid credentials 15', async () => {
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
      it('should go to the internet and login successfuly through login form 16', async () => {
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
      it('should go to the internet and NOT login successfuly with invalid credentials 16', async () => {
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
      it('should go to the internet and login successfuly through login form 17', async () => {
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
      it('should go to the internet and NOT login successfuly with invalid credentials 17', async () => {
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
      it('should go to the internet and login successfuly through login form 18', async () => {
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
      it('should go to the internet and NOT login successfuly with invalid credentials 18', async () => {
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
