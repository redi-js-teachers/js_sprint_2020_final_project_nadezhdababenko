let bookField = document.getElementById('reader-book');
let calcField = document.getElementById('reader-book-processing');
let chunks = []; // peaces of text(either single words or tags)
let splittedPages = []; // an array storing the index of the first and last chunk to display on the page

document.addEventListener('DOMContentLoaded', initialize());

window.addEventListener('load', function() {
        splitToChunks(book);
        splitToPages();
        let currentPage = localStorage.getItem(pageNumberKey);
        drawPage(currentPage);
    },
    false
);

function initialize() { //sets initial configurations for bookField
    bookField.style.fontSize = localStorage.getItem(fontSizeKey) +'px';
    bookField.style.textAlign = localStorage.getItem(textAlignmentKey);
    bookField.style.lineHeight = localStorage.getItem(lineSpasingKey);
    bookField.style.fontFamily = localStorage.getItem(fontFamilyKey);

    let currentFontFamilyActiveId = localStorage.getItem(fontFamilyActiveIdKey);
    document.getElementById(currentFontFamilyActiveId).classList.add('reader-settings__style--active');
    if(localStorage.getItem(pageNumberKey) === 0) {
        document.getElementById('back').classList.add = 'reader-page__back-btn--first-page';
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

    while (chunkEndIndex < chunks.length) {
        chunkEndIndex = splitToPage(chunkStartIndex);
        splittedPages[pageNumber] = [chunkStartIndex, chunkEndIndex];
        calcField.innerHTML = "";
        chunkStartIndex = chunkEndIndex;
        pageNumber++;
    }

    calcField.innerHTML = "";
}

function splitToPage(chunkIndex) {

    while (chunkIndex < chunks.length) {

        if (chunks[chunkIndex].includes('<') || chunks[chunkIndex].includes('>')) {
			calcField.insertAdjacentHTML('beforeend', chunks[chunkIndex] + '<br />');
        } 
        else {
            calcField.insertAdjacentHTML('beforeend', chunks[chunkIndex] + ' ');
        }
        
        if (calcField.scrollHeight > calcField.offsetHeight) {
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
			bookField.insertAdjacentHTML('beforeend', chunks[i] + '<br />');
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

    if (currentPage < splittedPages.length) {
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
}