const {until, By} = require('selenium-webdriver');
const Language = require('../utilities/languages');

class BasePage{
  constructor(webdriver,url) {
    this.driver = webdriver;
    this.url = url;
    //this.timeout = timeout;
  }

  async open(){
    this.driver.get(this.url);
    return this;
  }

  async refresh(){
    this.driver.navigate().refresh();
    return this;
  }

  async isVisible(locator, timeout){
    var waitTimeout = timeout || 10000;
    return this.driver.wait(until.elementIsVisible(locator, waitTimeout));
  }


   async waitFor(locator, timeout){
    var waitTimeout = timeout || 10000;
    return this.driver.wait(until.elementLocated(locator), waitTimeout);
  }


  async clickIfClickable(locator, timeout){
    var waitTimeout = timeout || 10000;
    await this.waitFor(locator, waitTimeout);
    return this.driver.findElement(locator).click();
  }


  //Returns an object describing an element's location, in pixels relative
  //to the document element, and the element's size in pixels as
  //{height: num, width: num, x: num, y:num}
  async getLocation(locator, timeout){
    var waitTimeout = timeout || 10000;
    await this.waitFor(locator, waitTimeout);
    var element = await this.driver.findElement(locator, waitTimeout);
    var location = await element.getRect().then(function(params){
      return params;
    });
    return location;
  }


  async getDisplayedText(locator, timeout){
    var waitTimeout = timeout || 10000;
    await this.waitFor(locator, waitTimeout);
    var element = await this.driver.findElement(locator, waitTimeout);
    var currentText = await element.getText().then((text) => {return text;});
    return currentText;
  }

  //not finall version
  async getNormalizedPosition(locator, resolution, timeout, RTL){
    var currentPosition = await this.getLocation(locator, timeout);
    var currentPosition = locator;
     if(RTL){
       var normalizedPosition = currentPosition;
       normalizedPosition.x = resolution.x - currentPosition.x;
       return normalizedPosition;
     }
     else{
       return currentPosition;
     }
   }
   //get language from url (probably will be updated)
  async getLanguage(){
    var url = this.driver.gfetCurrentUrl();
   
    if(url.includes(language.langDelimiter)){
        return url.split(language.langDelimiter).slice(language.langShortcut);
    }
    else{
      return language.defaultLang;
    }
  }

  async isRTLLang(lang){
    this.language = new language();
    if(this.language.rtlLangs.includes(lang)){
      return true;
    }
    else{
      return false;
    }
  }

  async isSupportedLang(lang){
    if(true){
      return true;
    }
    else{
      return false;
    }
  }



}

module.exports = BasePage;
