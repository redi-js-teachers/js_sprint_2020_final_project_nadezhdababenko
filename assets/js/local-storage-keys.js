let pageNumberKey = 'pageNumber';
let fontSizeKey = 'fontSize';
let textAlignmentKey = 'textAlignment';
let lineSpasingKey = 'lineSpasing';
let themeKey = 'theme';
let fontFamilyKey = 'fontFamily';
let fontFamilyActiveIdKey = 'fontFamilyActive';


setDefaultValue(pageNumberKey, 0);
setDefaultValue(fontSizeKey, 16);
setDefaultValue(textAlignmentKey, "left");
setDefaultValue(lineSpasingKey, 1.4);
// setDefaultValue(themeKey, "white");
setDefaultValue(fontFamilyKey, "'Times New Roman', Times, serif");
setDefaultValue(fontFamilyActiveIdKey, "style-times");




function setDefaultValue(key, defaultValue) {
    let currentValue = localStorage.getItem(key);//вытаскивает из локалстор
    if (currentValue === null) {//если не задано ничего, то ..
        localStorage.setItem(key, defaultValue);//сохраняет дефолтное значение
    }
}