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
        await this.loginPage.login('tomsmith', 'SuperSecretPassword!');
        await this.loginPage.waitFor(this.loginPage.locators.logoutButton, mainWait);
         
        await driver.findElement(By.xpath('//*[@id="flash"]'))
            .getAttribute("class")
            .then(
              function(classString) {
                expect(classString).to.equal("flash success");
              }
            );
          
        await this.loginPage.logout();
          
        //wait for login screen after logout by checking if login button is displayed
        await this.loginPage.waitFor(this.loginPage.locators.loginButton, mainWait);
        await this.loginPage.titleIsEqual('The Internet');
      });
      
      it('should go to the internet and NOT login successfuly with invalid credentials', async () => {
          console.log('Logint2 I wonder what stuff I have now ' + process.env.browser + " " + process.env.sizeX + " " + process.env.sizeY)
          await driver.get(mainUrl);
          await this.loginPage.clickIfClickable(By.linkText('Form Authentication'), 10000);
          await this.loginPage.login('joesmith', 'stuff!');

          await this.loginPage.waitFor(By.xpath('//*[@id="flash"]'), mainWait);
          await driver.findElement(By.xpath('//*[@id="flash"]'))
            .getAttribute("class")
            .then(
              function(classString) {
                expect(classString).to.equal("flash error");
              }
            );
          await this.loginPage.titleIsEqual('The Internet');
      });
      

      after(async () => driver.quit());
});
