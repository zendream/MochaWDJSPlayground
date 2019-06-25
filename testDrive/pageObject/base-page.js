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

  //###############for work with objects####################

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

   //##################Languages#############################

   //get language from url (probably will be updated)
  async getLanguage(url){
    this.language = new Language();
    
    if(url.includes(this.language.langDelimiter)){
      //get language as substring based on demo, e.g. ...lng=en... in url
        return url.split(this.language.langDelimiter)[1].substr(0, 2);
    }
    else{
      return this.language.defaultLang;
    }
  }

  async isRTLLang(lang){
    this.language = new Language();
    return this.language.rtlLangs.includes(lang)
  }

  async isSupportedLang(lang){
    this.language = new Language();
    return this.language.supportedLangs.includes(lang);
  }

  async changeLanguage(newLng, url){
    if(!await this.isSupportedLang(newLng)){
      throw new Error('Not supported language');
    }
    else{
      if(!url){
        url = this.driver.getCurrentUrl();
      }
      var currentLng = await this.getLanguage(url);
      currentLng = 'lng=' + currentLng;
      newLng = 'lng=' + newLng;
      if(url.includes(currentLng)){
        url = url.replace(currentLng, newLng);
      }
      else{
        url = url.concat('/').concat(newLng);
      }
      return url;
    }
  }

}

module.exports = BasePage;
