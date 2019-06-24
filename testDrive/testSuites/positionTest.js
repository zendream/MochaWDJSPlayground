const { Builder, By, Key, until } = require('selenium-webdriver');
const { expect } = require('chai');
var {getDriver, buildDriver, buildDriverFromConf} = require('../driver/driverGen');
//const configs = require('../runConfigs/loadConfig.js').expandedConfigs;

const LoginPage = require('../pageObject/login-page');

describe('loginTests', () => {
      const driver = buildDriverFromConf();

      const mainUrl = 'http://the-internet.herokuapp.com/';
      const mainWait = 10000;
      this.loginPage = new LoginPage(driver, mainUrl);

      it('should go to the internet and output position of login button', async () => { 
        console.log('Logint1 I wonder what stuff I have now ' + process.env.browser + " " + process.env.sizeX + " " + process.env.sizeY);
        //open main url and choose Form authentication option, than log in and wait for 
        //logout button to be displayed
        await this.loginPage.open();
        await this.loginPage.clickIfClickable(By.linkText('Form Authentication'), mainWait);
        
        await this.loginPage.waitFor(this.loginPage.locators.loginButton, mainWait);
       
        var rectButton = await this.loginPage.getPosition(this.loginPage.locators.loginButton,100000);
        console.log(rectButton);

       
      
          
      });


      /*
      it('should go to the internet check "Login Page" title', async () => { 
        console.log('Logint1 I wonder what stuff I have now ' + process.env.browser + " " + process.env.sizeX + " " + process.env.sizeY);

        await this.loginPage.open();
        await this.loginPage.clickIfClickable(By.linkText('Form Authentication'), mainWait);
        await this.loginPage.waitFor(this.loginPage.locators.loginButton, mainWait);

        var text = await this.loginPage.getCurrentText(By.xpath('//*[@id="content"]/div/h2'), mainWait);
        expect(text).to.equal('Login Page');

      });

      it('should go to the internet check login button text', async () => { 
        console.log('Logint1 I wonder what stuff I have now ' + process.env.browser + " " + process.env.sizeX + " " + process.env.sizeY);

        await this.loginPage.open();
        await this.loginPage.clickIfClickable(By.linkText('Form Authentication'), mainWait);
        await this.loginPage.waitFor(this.loginPage.locators.loginButton, mainWait);

        var text = await this.loginPage.getCurrentText(this.loginPage.locators.loginButton, mainWait);
        expect(text).to.equal('Login');

      });

      it('should go to the internet check login button text and fail', async () => { 
        console.log('Logint1 I wonder what stuff I have now ' + process.env.browser + " " + process.env.sizeX + " " + process.env.sizeY);

        await this.loginPage.open();
        await this.loginPage.clickIfClickable(By.linkText('Form Authentication'), mainWait);
        await this.loginPage.waitFor(this.loginPage.locators.loginButton, mainWait);

        var text = await this.loginPage.getCurrentText(this.loginPage.locators.loginButton, mainWait);
        expect(text).to.equal('Definitely not login button');

      });
      */
        
      after(async () => driver.quit());
    });
    