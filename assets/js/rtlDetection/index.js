import RTLIdentifier from "./RTLIdentifier.js";

document.addEventListener('DOMContentLoaded', () => {
    let rtlIdentifier = new RTLIdentifier();
    let locale = new Intl.Locale(navigator.language);
    if(rtlIdentifier.isRTL("ar")){
        document.body.classList.toggle("isRTL");
    }
});
