// document.querySelector("#read-button").addEventListener('click', function() {
// 	if(document.querySelector("#file-input").files.length == 0) {
// 		alert('Error : No file selected');
// 		return;
// 	}

// 	// first file selected by user
// 	var file = document.querySelector("#file-input").files[0];
// 	// perform validation on file type & size if required

// 	// read the file
// 	var reader = new FileReader();

// 	// file reading started
// 	reader.addEventListener('loadstart', function() {
// 	    console.log('File reading started');
// 	});

//     // file reading finished successfully
//     let readerBook = document.getElementById("reader-book");
// 	reader.addEventListener('load', function(e) {
// 	   // contents of file in variable     
// 	    var text = e.target.result;
//         readerBook.innerHTML = text;
// 	});

// 	// file reading failed
// 	reader.addEventListener('error', function() {
// 	    alert('Error : Failed to read file');
// 	});

// 	// file read progress 
// 	reader.addEventListener('progress', function(e) {
// 	    if(e.lengthComputable == true) {
// 	    	var percent_read = Math.floor((e.loaded/e.total)*100);
// 	    	console.log(percent_read + '% read');
// 	    }
// 	});

// 	// read as text file
// 	reader.readAsText(file);
// });




//open pop-up additional info
(() => {
	const block = document.querySelector('#additionally');
	const button = document.querySelector('#open-additionally');
	
	function toggle() {
	  block.classList.toggle('reader-header--visible');
	}
	function remove() {
	  block.classList.remove('reader-header--visible');
	}
	
	document.addEventListener('click', e => {
	  const target = e.target;
	  
	  target === button ? toggle() : target !== block ? remove() : false;
	});
  })();
//open pop-up settings
  (() => {
	const block = document.querySelector('#settings');
	const button = document.querySelector('#open-settings');
	
	function toggle() {
	  block.classList.toggle('reader-header--visible');
	}
	function remove() {
	  block.classList.remove('reader-header--visible');
	}

	document.addEventListener('click', e => {
	  const target = e.target;
	  if(target === button) {
		toggle();
		console.log('odin');
	  } else if(target == block) {
		console.log('dva'); //does't work ...
	  } else if(target !== block) {
		remove();
		console.log('tri');
	  } 
	});
  })();
//open pop-up quote
  (() => {
	const block = document.querySelector('#quote');
	const button = document.querySelector('#open-quote');
	const buttonClose = document.querySelector('#quote-close');
	
	function toggle() {
	  block.classList.toggle('overlay--visible');
	}
	function remove() {
	  block.classList.remove('overlay--visible');
	}
	
	document.addEventListener('click', e => {
	  const target = e.target;
	  if(target === button) {
		toggle();
	  } else if(target === block) {
		remove();
	  } 
	});
	buttonClose.addEventListener('click', function() {
		block.classList.remove('overlay--visible');
	})
  })();

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
	readerPage.classList.add("reader-page--font-size-18");
	textSmaller.classList.toggle("reader-settings__icon--active");
	textBigger.classList.toggle("reader-settings__icon--active");
});
//1.2 text - smaller
textSmaller.addEventListener('click', function() {
	readerPage.classList.remove("reader-page--font-size-18");
	textSmaller.classList.toggle("reader-settings__icon--active");
	textBigger.classList.toggle("reader-settings__icon--active");
});
//2.1 text alignment - bigger
alignmentLeft.addEventListener('click', function() {
	readerPage.classList.remove("reader-page--text-alignment-justify");
	alignmentLeft.classList.toggle("reader-settings__icon--active");
	alignmentJustify.classList.toggle("reader-settings__icon--active");
});
//2.2 text alignment - smaller
alignmentJustify.addEventListener('click', function() {
	readerPage.classList.add("reader-page--text-alignment-justify");
	alignmentLeft.classList.toggle("reader-settings__icon--active");
	alignmentJustify.classList.toggle("reader-settings__icon--active");
});
//3.1 line spasing - bigger
lineSpacing16.addEventListener('click', function() {
	readerPage.classList.add("reader-page--line-height-16");
	lineSpacing16.classList.toggle("reader-settings__icon--active");
	lineSpacing14.classList.toggle("reader-settings__icon--active");
});
//3.2 line spasing - smaller
lineSpacing14.addEventListener('click', function() {
	readerPage.classList.remove("reader-page--line-height-16");
	lineSpacing16.classList.toggle("reader-settings__icon--active");
	lineSpacing14.classList.toggle("reader-settings__icon--active");
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
	//change style
	readerPage.classList.remove("reader-page--arial");
	readerPage.classList.remove("reader-page--verdana");
	readerPage.classList.remove("reader-page--gill-sans");
	//change button of style
	styleTimes.classList.toggle("reader-settings__style--active");
	styleArial.classList.remove("reader-settings__style--active");
	styleVerdana.classList.remove("reader-settings__style--active");
	styleGillSans.classList.remove("reader-settings__style--active");
});
//5.2 Arial
styleArial.addEventListener('click', function() {
	//change style
	readerPage.classList.add("reader-page--arial");
	readerPage.classList.remove("reader-page--verdana");
	readerPage.classList.remove("reader-page--gill-sans");
	//change button of style
	styleTimes.classList.remove("reader-settings__style--active");
	styleArial.classList.toggle("reader-settings__style--active");
	styleVerdana.classList.remove("reader-settings__style--active");
	styleGillSans.classList.remove("reader-settings__style--active");
});
//5.3 Verdana
styleVerdana.addEventListener('click', function() {
	//change style
	readerPage.classList.add("reader-page--verdana");
	readerPage.classList.remove("reader-page--arial");
	readerPage.classList.remove("reader-page--gill-sans");
	//change button of style
	styleTimes.classList.remove("reader-settings__style--active");
	styleArial.classList.remove("reader-settings__style--active");
	styleVerdana.classList.toggle("reader-settings__style--active");
	styleGillSans.classList.remove("reader-settings__style--active");
});
//5.4 Gill Sans
styleGillSans.addEventListener('click', function() {
	//change style
	readerPage.classList.add("reader-page--gill-sans");
	readerPage.classList.remove("reader-page--arial");
	readerPage.classList.remove("reader-page--verdana");
	//change button of style
	styleTimes.classList.remove("reader-settings__style--active");
	styleArial.classList.remove("reader-settings__style--active");
	styleVerdana.classList.remove("reader-settings__style--active");
	styleGillSans.classList.toggle("reader-settings__style--active");
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
