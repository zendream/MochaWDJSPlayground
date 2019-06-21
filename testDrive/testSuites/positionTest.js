const { Builder, By, Key, until } = require('selenium-webdriver');
const { expect } = require('chai');
var {getDriver, buildDriver, buildDriverFromConf} = require('../driver/driverGen');

const LoginPage = require('../pageObject/login-page');

describe('loginTests', () => {
      const driver = buildDriverFromConf();

      const mainUrl = 'http://the-internet.herokuapp.com/';
      const mainWait = 10000;
      this.loginPage = new LoginPage(driver, mainUrl);

      it('should go to the internet and login successfuly through login form', async () => { 
        console.log('Logint1 I wonder what stuff I have now ' + process.env.browser + " " + process.env.sizeX + " " + process.env.sizeY);
        //open main url and choose Form authentication option, than log in and wait for 
        //logout button to be displayed
        await this.loginPage.open();
        await this.loginPage.clickIfClickable(By.linkText('Form Authentication'), mainWait);
        
        await this.loginPage.waitFor(this.loginPage.locators.loginButton, mainWait);
       
       var rectButton = await this.loginPage.getLocation(this.loginPage.locators.username,100000);
       console.log(rectButton);
      });
      after(async () => driver.quit());
    });
    