const settingsBtn = document.getElementById('open-settings');
let showReaderSettingsWindow = localStorage.getItem(showReaderSettingsWindowKey);
showReaderSettingsWindow = showReaderSettingsWindow === 'true';

//open pop-up additional info
(() => {
	document.addEventListener('click', e => {
	  const block = document.getElementById('additionally');
	  const button = document.getElementById('open-additionally');
	  const target = e.target;
	  if (target === button) {
		  console.log(block);
		toggle(block, 'reader-header--visible');
	  } else {
		remove(block, 'reader-header--visible');
	  }
	});
  })();

//open pop-up settings
  (() => {
	document.addEventListener('click', e => {
	  const block = document.getElementById('settings');
	  const button = document.getElementById('open-settings');
	  const target = e.target;
	  if (target === button) {
		toggle(block, 'reader-header--visible');
		localStorage.setItem(showReaderSettingsWindowKey, true);
	  } else {
		localStorage.setItem(showReaderSettingsWindowKey, false);
		remove(block, 'reader-header--visible');
	  } 
	});
  })();

//open pop-up quote
  (() => {
	document.addEventListener('click', e => {
	  const block = document.getElementById('quote');
	  const button = document.getElementById('open-quote');
	  const target = e.target;
	  if (target === button) {
		toggle(block, 'overlay--visible');
	  } else if (target === block) {
		remove(block, 'overlay--visible');
	  } 
	});
	
	const buttonClose = document.getElementById('quote-close');
	buttonClose.addEventListener('click', function() {
		block.classList.remove('overlay--visible');
	})
  })();

function toggle(block, className) {
	block.classList.toggle(className);
}
function remove(block, className) {
	block.classList.remove(className);
}

if (showReaderSettingsWindow === true) {
	const block = document.getElementById('settings');
	toggle(block, 'reader-header--visible');
} 

//change settings -> blocks
let readerPage = document.getElementById('reader-page');//main block contents header/reader/footer(should change theme)
let readerBook = document.getElementById('reader-book');//book's div with text(changes from #reader-page)

//change settings -> buttons
let textBigger = document.getElementById('text-bigger');
let textSmaller = document.getElementById('text-smaller');

let alignmentLeft = document.getElementById('alignment-left');
let alignmentJustify = document.getElementById('alignment-justify');

let lineSpacing16 = document.getElementById('line-spacing-16');
let lineSpacing14 = document.getElementById('line-spacing-14');

let whiteTheme = document.getElementById('white-theme');
let blackTheme = document.getElementById('black-theme');
let sepiaTheme = document.getElementById('sepia-theme');
let greyTheme = document.getElementById('grey-theme');

let styleTimes = document.getElementById('style-times');
let styleArial = document.getElementById('style-arial');
let styleVerdana = document.getElementById('style-verdana');
let styleGillSans = document.getElementById('style-gill-sans');

//1.1 text - bigger
textBigger.addEventListener('click', function() {
	let localFontSize = localStorage.getItem(fontSizeKey);
	localStorage.setItem(fontSizeKey, Number(localFontSize) + 2);
	location.reload();
	// readerPage.classList.add("reader-page--font-size-18");
});
//1.2 text - smaller
textSmaller.addEventListener('click', function() {
	let localFontSize = localStorage.getItem(fontSizeKey);
	localStorage.setItem(fontSizeKey, Number(localFontSize) - 2);
	location.reload();
	// readerPage.classList.remove("reader-page--font-size-18");
});
//2.1 text alignment - bigger
alignmentLeft.addEventListener('click', function() {
	let LocalTextAlignment = localStorage.getItem(textAlignmentKey);
	localStorage.setItem(textAlignmentKey, 'left');
	location.reload();
	// readerPage.classList.remove("reader-page--text-alignment-justify");
});
//2.2 text alignment - smaller
alignmentJustify.addEventListener('click', function() {
	let LocalTextAlignment = localStorage.getItem(textAlignmentKey);
	localStorage.setItem(textAlignmentKey, 'justify');
	location.reload();
	// readerPage.classList.add("reader-page--text-alignment-justify");
});
//3.1 line spasing - bigger
lineSpacing16.addEventListener('click', function() {
	let LocallineSpasing = localStorage.getItem(lineSpasingKey);
	localStorage.setItem(lineSpasingKey,  Number(LocallineSpasing) + 0.2);
	location.reload();
	// readerPage.classList.add("reader-page--line-height-16");
});
//3.2 line spasing - smaller
lineSpacing14.addEventListener('click', function() {
	let LocallineSpasing = localStorage.getItem(lineSpasingKey);
	localStorage.setItem(lineSpasingKey,  Number(LocallineSpasing) - 0.2);
	location.reload();
	// readerPage.classList.remove("reader-page--line-height-16");
});
//4.1 white-theme
whiteTheme.addEventListener('click', function() {
	//change theme
	readerPage.classList.remove("reader-page--black-theme");
	readerPage.classList.remove("reader-page--sepia-theme");
	readerPage.classList.remove("reader-page--grey-theme");
	//change button of theme
	whiteTheme.classList.toggle("reader-settings__color--active");
	blackTheme.classList.remove("reader-settings__color--active");
	sepiaTheme.classList.remove("reader-settings__color--active");
	greyTheme.classList.remove("reader-settings__color--active");
});
//4.2 black-theme
blackTheme.addEventListener('click', function() {
	//change theme
	readerPage.classList.remove("reader-page--white-theme");
	readerPage.classList.remove("reader-page--sepia-theme");
	readerPage.classList.remove("reader-page--grey-theme");
	readerPage.classList.add("reader-page--black-theme");
	//change button of theme
	whiteTheme.classList.remove("reader-settings__color--active");
	blackTheme.classList.toggle("reader-settings__color--active");
	sepiaTheme.classList.remove("reader-settings__color--active");
	greyTheme.classList.remove("reader-settings__color--active");
});
//4.3 sepia-theme
sepiaTheme.addEventListener('click', function() {
	//change theme
	readerPage.classList.remove("reader-page--white-theme");
	readerPage.classList.remove("reader-page--black-theme");
	readerPage.classList.remove("reader-page--grey-theme");
	readerPage.classList.add("reader-page--sepia-theme");
	//change button of theme
	whiteTheme.classList.remove("reader-settings__color--active");
	blackTheme.classList.remove("reader-settings__color--active");
	sepiaTheme.classList.toggle("reader-settings__color--active");
	greyTheme.classList.remove("reader-settings__color--active");
});
//4.4 grey-theme
greyTheme.addEventListener('click', function() {
	//change theme
	readerPage.classList.remove("reader-page--white-theme");
	readerPage.classList.remove("reader-page--black-theme");
	readerPage.classList.remove("reader-page--sepia-theme");
	readerPage.classList.add("reader-page--grey-theme");
	//change button of theme
	whiteTheme.classList.remove("reader-settings__color--active");
	blackTheme.classList.remove("reader-settings__color--active");
	sepiaTheme.classList.remove("reader-settings__color--active");
	greyTheme.classList.toggle("reader-settings__color--active");
});

//5.1 Times
styleTimes.addEventListener('click', function() {
	localStorage.setItem(fontFamilyKey,  "'Times New Roman', Times, serif");
	localStorage.setItem(fontFamilyActiveIdKey,  this.id);
	location.reload();
});
//5.2 Arial
styleArial.addEventListener('click', function() {
	localStorage.setItem(fontFamilyKey,  "Arial, Helvetica, sans-serif");
	localStorage.setItem(fontFamilyActiveIdKey,  this.id);
	location.reload();
});
//5.3 Verdana
styleVerdana.addEventListener('click', function() {
	localStorage.setItem(fontFamilyKey,  "Verdana, Geneva, Tahoma, sans-serif");
	localStorage.setItem(fontFamilyActiveIdKey,  this.id);
	location.reload();
});
//5.4 Gill Sans
styleGillSans.addEventListener('click', function() {
	localStorage.setItem(fontFamilyKey,  "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif");
	localStorage.setItem(fontFamilyActiveIdKey,  this.id);
	location.reload();
});

//Full screen function
let fullScreen = document.getElementById('full-screen');
function openFullscreen() {
	let elem = document.getElementById('reader-page');
	if (elem.requestFullscreen) {
	  elem.requestFullscreen();
	} else if (elem.mozRequestFullScreen) { /* Firefox */
	  elem.mozRequestFullScreen();
	} else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
	  elem.webkitRequestFullscreen();
	} else if (elem.msRequestFullscreen) { /* IE/Edge */
	  elem.msRequestFullscreen();
	}
	fullScreen.classList.remove('fa-arrows-alt');
	fullScreen.classList.add('fa-undo');
  }
  
  function closeFullscreen() {
	let elem = document.getElementById('reader-page');
	if (document.exitFullscreen) {
	  document.exitFullscreen();
	} else if (document.mozCancelFullScreen) {
	  document.mozCancelFullScreen();
	} else if (document.webkitExitFullscreen) {
	  document.webkitExitFullscreen();
	} else if (document.msExitFullscreen) {
	  document.msExitFullscreen();
	}
	fullScreen.classList.add('fa-arrows-alt');
	fullScreen.classList.remove('fa-undo');
  }

  function openCloseFullScreen() {
	if(fullScreen.classList.contains('fa-arrows-alt')) {
		openFullscreen()
	} else if(fullScreen.classList.contains('fa-undo')) {
		closeFullscreen()
	}
  }
fullScreen.addEventListener('click', openCloseFullScreen);
