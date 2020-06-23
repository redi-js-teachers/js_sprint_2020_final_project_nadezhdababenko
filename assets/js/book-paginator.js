//get url of clicked book from bestsellers row
var url_string = window.location.href; 
var url = new URL(url_string);
var bookID = getNumberParameterFromUrlByKey("bookID");

let bookField = document.getElementById('reader-book');
let calcField = document.getElementById('reader-book-processing');
let chunks = []; // peaces of text(either single words or tags)
let splittedPages = []; // an array storing the index of the first and last chunk to display on the page

document.addEventListener('DOMContentLoaded', initialize());
window.addEventListener('load', function() {
        if (bookID != null) {
            var script = document.createElement('script');
            script.onload = function () {
                splitToChunks(bookText);
                splitToPages();
                let currentPage = localStorage.getItem(pageNumberKey);
                drawPage(currentPage);
                let book = getBookById(bookID);
                createBookTitle(book);
            };
            script.src = 'assets/js/bookData/' + bookID + '.js';
            
            document.body.appendChild(script);

        }
    },
    false
);

function createBookTitle(book) {
	let bookTitle = document.querySelector('#book-title');
	bookTitle.innerHTML = book.title;
}

function initialize() { //sets initial configurations for bookField
    bookField.style.fontSize = localStorage.getItem(fontSizeKey) +'px';
    bookField.style.textAlign = localStorage.getItem(textAlignmentKey);
    bookField.style.lineHeight = localStorage.getItem(lineSpasingKey);
    bookField.style.fontFamily = localStorage.getItem(fontFamilyKey);

    calcField.style.fontSize = localStorage.getItem(fontSizeKey) +'px';
    calcField.style.textAlign = localStorage.getItem(textAlignmentKey);
    calcField.style.lineHeight = localStorage.getItem(lineSpasingKey);
    calcField.style.fontFamily = localStorage.getItem(fontFamilyKey);

    let currentFontFamilyActiveId = localStorage.getItem(fontFamilyActiveIdKey);
    document.getElementById(currentFontFamilyActiveId).classList.add('reader-settings__style--active');
    if(localStorage.getItem(pageNumberKey) == 0) {
        document.getElementById('back').classList.add('reader-page__back-btn--first-page');
    }
}

function splitToChunks(text) {
    let rows = text.split("\n");

    for (let i = 0; i < rows.length; i++) {
        
        let row = rows[i];
        if (row === "" && row.length === 0) {
            continue;
        }

		if (row.includes("<") || row.includes(">")) {
			chunks.push(row);
		} else {
            let words = row.split(" ");
            for (let j = 0; j < words.length; j++) {
                chunks.push(words[j]);
            }
		}
    }
}

function splitToPages() {
    let chunkStartIndex = 0;
    let chunkEndIndex = 0;
    let pageNumber = 0;

    while (chunkEndIndex < chunks.length && pageNumber < 25) {
        chunkEndIndex = splitToPage(chunkStartIndex);
        splittedPages[pageNumber] = [chunkStartIndex, chunkEndIndex];
        calcField.innerHTML = "";
        chunkStartIndex = chunkEndIndex;
        pageNumber++;
    }
}

function splitToPage(chunkIndex) {
    while (chunkIndex < chunks.length) {
        if (chunks[chunkIndex].includes('<') || chunks[chunkIndex].includes('>')) {
			calcField.insertAdjacentHTML('beforeend', chunks[chunkIndex] + '<div class="spacer spacer--6"></div>');
        } 
        else {
            calcField.insertAdjacentHTML('beforeend', chunks[chunkIndex] + ' ');
        }
        
        if (calcField.scrollHeight > calcField.offsetHeight) {
            calcField.innerHTML = "";
            return chunkIndex;
        }

        chunkIndex++;
    }

    return chunkIndex;
}

function drawPage(pageIndex) {
    let pageChunksIndexes = splittedPages[pageIndex];
    let chunkStartIndex = pageChunksIndexes[0];
    let chunkEndIndex = pageChunksIndexes[1];

    for (let i = chunkStartIndex; i < chunkEndIndex; i++) {
        if (chunks[i].includes('<') || chunks[i].includes('>')) {
			bookField.insertAdjacentHTML('beforeend', chunks[i] + '<div class="spacer spacer--6"></div>');
        } 
        else {
            bookField.insertAdjacentHTML('beforeend', chunks[i] + ' ');
        }
    }
}

let next = document.getElementById('next');
next.addEventListener('click', nextPage);

let back = document.getElementById('back');
back.addEventListener('click', prevPage);

function nextPage() {
    let currentPage = localStorage.getItem(pageNumberKey);

    if (currentPage < splittedPages.length - 1) {
        bookField.innerHTML = "";
        currentPage++;
        drawPage(currentPage);
        localStorage.setItem(pageNumberKey, currentPage);
    }
    if (currentPage > 0) {
        back.classList.remove('reader-page__back-btn--first-page');
    }
    if (currentPage === 0) {
        back.classList.add('reader-page__back-btn--first-page');
    }
    if (currentPage === splittedPages.length - 1) {
        next.classList.add('reader-page__next-btn--last-page');

    }
}

function prevPage() {
    let currentPage = localStorage.getItem(pageNumberKey);
    if (currentPage > 0) {
        bookField.innerHTML = "";
        currentPage--;
        drawPage(currentPage);
        back.classList.remove('reader-page__back-btn--first-page');
        localStorage.setItem(pageNumberKey, currentPage);
    }
    if (currentPage === 0) {
        back.classList.add('reader-page__back-btn--first-page');
    }
    if(currentPage < splittedPages.length - 1) {
        next.classList.remove('reader-page__next-btn--last-page');
    }
}
