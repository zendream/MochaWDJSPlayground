class Language{
  constructor(){
    //temp shortcuts for supported languages 
    this.supportedLangs = ['en','fr','de','pl','es','ru'];
    /*
    supported RTL languages:
    Hebrew (he) - currently supported in Engage
    Pashto (ps)
    Urdu (ur)
    Azerbaijani (az)
    Persian (fa)
    Javanese (jv)
    Kashmiri (ks)
    Kazakh (kk)
    Kurdish (ku)
    Malay (ms)
    Malayalam (ml)- currently supported in Engage
    Punjabi (pa) - currently supported in Engage
    Sindhi (sd)
    Somali (so)
    Turkmen (tk)
    Uighur (ug)
    Yiddish (yi)
    Maldivian (dv)
    Arabic (ar) - currently supported in Engage
    */
    this.rtlLangs = ['he','ps','ur','az','fa','jv','ks','kk','ku','ms','ml','pa','sd','so','tk','ug','yi','dv','ar'];
    this.defaultRTL = false;
    this.defaultLang = 'en';
    this.langShortcut = 2;
    this.langDelimiter = 'lng=';
  }
    
  static get supportedLangs(){
    return  this.supportedLangs;
  }
  static get rtlLangs(){
    return this.rtlLangs;
  } 
  static get defaultRTL(){
    return this.defaultRTL;
  }
  static get defaultLang(){
    return this.defaultLang;
  } 
  static get langShortcut(){
    return this.langShortcut;
  }
  static get langDelimiter(){
    return this.langDelimiter;
  }
  var tmp = "noirwnovw";
}

module.exports = Language;