const {until, By} = require('selenium-webdriver');
const { expect } = require('chai');
var BasePage = require('./base-page');

class AdminSubsPage extends BasePage{
  constructor(webdriver, url){
    super(webdriver, url)
    //array of locators on particular page(here it is login page)
    this.locators = {
      addSubButton: By.id(''),
      addSubPopup: By.id(''),
      addPopupSubName: By.id(''),
      addPopupSubStartDate: By.id(''),
      addPopupAddButton: By.id(''),
      addPopupCancelButton: By.id(''),
      actionsButton: By.id(''),
      tableOfSubs: By.id(''),

    }
  }

  //add a new subscriber or cancle adding based on 'action' argument
  async fillSubInfoOnAdd(name, date, action){
    await this.fillForm(this.locators.addPopupSubName, 10000, name);
    await this.fillForm(this.locators.addPopupSubStartDate, 10000, date);
    if(action === 'add'){
      return this.clickIfClickable(this.locators.addPopupAddButton,10000);
    }
    else if(action === 'cancel'){
      return this.clickIfClickable(this.locators.addPopupCancelButton,10000);
    }
  }

}
module.exports = SubsPage;
