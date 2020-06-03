let currentPage = 0;
let maxHeight = 500;
let bookField = document.getElementById('book');
let chunks = []; // кусочки текста (либо отдельные слова, либо теги)
let splittedPages = []; // массив, хранящий индекс первого и последнего чанка для отображения на странице

document.addEventListener('DOMContentLoaded', function() {
    splitToChunks(book);
    splitToPages();
    drawPage(currentPage);
}, false);

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
        bookField.innerHTML = "";
        chunkStartIndex = chunkEndIndex;
        pageNumber++;
    }

    bookField.innerHTML = "";
}

function splitToPage(chunkIndex) {
    while (bookField.offsetHeight < maxHeight && chunkIndex < chunks.length) {

        if (chunks[chunkIndex].includes("<") || chunks[chunkIndex].includes(">")) {
			bookField.insertAdjacentHTML('beforeend', chunks[chunkIndex] + '<br />');
        } 
        else {
            bookField.insertAdjacentHTML('beforeend', chunks[chunkIndex] + ' ');
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
        if (chunks[i].includes("<") || chunks[i].includes(">")) {
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
    if (currentPage < splittedPages.length) {
        bookField.innerHTML = "";
        currentPage++;
        drawPage(currentPage);
    }
}

function prevPage() {
    if (currentPage > 0) {
        bookField.innerHTML = "";
        currentPage--;
        drawPage(currentPage);
    }
}