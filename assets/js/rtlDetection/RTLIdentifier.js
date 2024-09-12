/* inspired by https://github.com/shadiabuhilal/rtl-detect */

export default class RTLIdentifier {
    RTLLang = [
        'ae',	/* Avestan */
        'ar',   /* Arabic */
        'arc',  /* Aramaic */
        'bcc',  /* Southern Balochi */
        'bqi',  /* Bakthiari */
        'ckb',  /* Soranî, Sorani */
        'dv',   /* Dhivehi */
        'fa',   /* Persian */
        'glk',  /* Gilaki */
        'he',   /* Hebrew */
        'ku',   /* Kurdî, Kurdish */
        'mzn',  /* Mazanderani */
        'nqo',  /* N'Ko */
        'pnb',  /* Western Punjabi */
        'prs',  /* Darī */
        'ps',   /* Pashto, */
        'sd',   /* Sindhi */
        'ug',   /* 'Uyghurche', Uyghur */
        'ur',   /* Urdu */
        'yi'    /* Yiddish */
    ];

    /**
     * matches the locale against the list of rtl languages
     * @param {string} Locale
     */
    isRTL(Locale){
        if(Locale.indexOf("-") >= 0){
            // locales usually come in the form of "de-DE", "en-GB" so in {baseLanguage}"minus"{specifier}
            // I can use that to get the base language
            Locale = Locale.substring(0,Locale.indexOf("-") -1 );
        }
        // see if the base language is in the list of rtl languages
        return (this.RTLLang.indexOf(Locale) >= 0);
    }
}