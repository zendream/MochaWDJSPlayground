const { Builder, By, Key, until } = require('selenium-webdriver');
const { expect } = require('chai');
var {getDriver, buildDriver} = require('./driver/driverGen');
const Language = require('./utilities/languages');
const LoginPage = require('./pageObject/login-page');


describe('DefaultTest', () => {
    describe('important stuff', () => {
      const driver = buildDriver('chrome', 1024,860);
      /*
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

      }
        */
      
       it('is rtl language', async () => {
        this.page = new LoginPage();
        var rtl = await this.page.isRTLLang('he');
        expect(rtl).to.be.true;
       });

       it('is supported language', async () => {
        this.page = new LoginPage();
        var lng = await this.page.isSupportedLang('he');
        expect(lng).to.be.true;
      });

      it('get language from url adress', async () => {
       this.page = new LoginPage();
       var fakeUrl = 'https://www.randomurl.com/lng=sk/random';
       var lng = await this.page.getLanguage(fakeUrl);
       expect(lng).to.equal('sk');
      });

      it('all in one', async () => {
        this.page = new LoginPage();
        var fakeUrl = 'https://www.randomurl.com/lng=sk/random';
        var rtl = await this.page.isRTLLang(await this.page.getLanguage(fakeUrl));
        var supp = await this.page.isSupportedLang(await this.page.getLanguage(fakeUrl));
        expect(rtl).to.be.false;
        expect(supp).to.be.false;
      });


      it('changing language', async () => {
        this.page = new LoginPage();
        var fakeUrl = 'https://www.randomurl.com/lng=sk/random';
        var url = await this.page.changeLanguage('he', fakeUrl)
        expect(url).to.equal('https://www.randomurl.com/lng=he/random');
      });

      it('try changing language to not supported and fail', async () => {
        this.page = new LoginPage();
        var fakeUrl = 'https://www.randomurl.com/lng=sk/random';
        
         await this.page.changeLanguage('fejwo', fakeUrl);
       
        
      });

      it('add languageto default url', async () => {
        this.page = new LoginPage();
        var fakeUrl = 'https://www.randomurl.com/random';
        console.log(await this.page.changeLanguage('he', fakeUrl));
    
       
        
      });
       

      after(async () => driver.quit());
    });
});
