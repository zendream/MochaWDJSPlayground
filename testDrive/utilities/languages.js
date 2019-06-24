class Language{
  //temp shortcuts for supported languages 
  const supportedLangs = ['en','fr','de','pl','es','ru'];
  /*
   *supported RTL languages:
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
  const rtlLangs = ['he','ps','ur','az','fa','jv','ks','kk','ku','ms','ml','pa','sd','so','tk','ug','yi','dv','ar'];
  var RTL = false;
  var defaultLang = 'en';

}

module.exports = Language;