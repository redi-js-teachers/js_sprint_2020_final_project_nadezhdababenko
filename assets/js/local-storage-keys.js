let pageNumberKey = 'pageNumber';
let fontSizeKey = 'fontSize';
let textAlignmentKey = 'textAlignment';
let lineSpasingKey = 'lineSpasing';
let themeKey = 'theme';
let fontFamilyKey = 'fontFamily';
let fontFamilyActiveIdKey = 'fontFamilyActive';
let waitingListBookIdsKey = 'waitingListBookIds';
let alreadyReadBookIdsKey = 'alreadyReadBookIds';
let startedBookIdsKey = 'startedBookIds';
let showReaderSettingsWindowKey = 'showReaderSettingsWindow';

setDefaultValue(pageNumberKey, 0);
setDefaultValue(fontSizeKey, 16);
setDefaultValue(textAlignmentKey, "left");
setDefaultValue(lineSpasingKey, 1.4);
setDefaultValue(fontFamilyKey, "'Times New Roman', Times, serif");
setDefaultValue(fontFamilyActiveIdKey, "style-times");
setDefaultValue(waitingListBookIdsKey, []);
setDefaultValue(alreadyReadBookIdsKey, []);
setDefaultValue(startedBookIdsKey, []);
setDefaultValue(showReaderSettingsWindowKey, false);


function setDefaultValue(key, defaultValue) {
    let currentValue = localStorage.getItem(key);//take from local storage
    if (currentValue === null) {//if gave nothing ..
        localStorage.setItem(key, defaultValue);//save as default value
    }
}
