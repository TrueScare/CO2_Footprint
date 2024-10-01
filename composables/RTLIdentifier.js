/*
Copyright 2015 Yahoo Inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright
  notice, this list of conditions and the following disclaimer.

* Redistributions in binary form must reproduce the above copyright
  notice, this list of conditions and the following disclaimer in the
  documentation and/or other materials provided with the distribution.

* Neither the name of the Yahoo Inc. nor the
  names of its contributors may be used to endorse or promote products
  derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES,
INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL YAHOO! INC. BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA,
OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT
LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

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
    isRTL(Locale) {
        if (Locale.indexOf("-") >= 0) {
            // locales usually come in the form of "de-DE", "en-GB" so in {baseLanguage}"minus"{specifier}
            // I can use that to get the base language
            Locale = Locale.substring(0, Locale.indexOf("-") - 1);
        }
        // see if the base language is in the list of rtl languages
        return (this.RTLLang.indexOf(Locale) >= 0);
    }
}