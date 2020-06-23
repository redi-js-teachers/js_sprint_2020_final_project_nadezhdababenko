//add books to rows
let bestsellerBlock = document.getElementById("bestsellers");
let newBlock = document.getElementById("new");
let youMightLikeBlock = document.getElementById("you-might-like");
let russianClassicsBlock = document.getElementById("russian-classics");
let popularNowBlock = document.getElementById("popular-now");
let bbcNovelsBlock = document.getElementById("bbc-novels");
let biographiesBlock = document.getElementById("biographies");
let fictionBlock = document.getElementById("fiction");
initialize();
function initialize() {
    fillBlock(bestsellerIDs, bestsellerBlock);
    fillBlock(newIDs, newBlock);
    fillBlock(youMightLikeIDs, youMightLikeBlock);
    fillBlock(russianClassicsIDs, russianClassicsBlock);
    fillBlock(popularNowIDs, popularNowBlock);
    fillBlock(bestBbcNovelsIDs, bbcNovelsBlock);
    fillBlock(biographiesIDs, biographiesBlock);
    fillBlock(fictionIDs, fictionBlock);
}

function fillBlock(bookIds, block) {
    if(block == newBlock) {
        for (let i = 0; i < 4; i++) {
            let bookId = bookIds[i];
            let book = getBookById(bookId);
            createBook(book, block);
        }
    } else {
        for (let i = 0; i < 7; i++) {
            let bookId = bookIds[i];
            let book = getBookById(bookId);
            createBook(book, block);
        }
    }
}

function createBook(book, block) {
    let author = getAuthorById(book.authorID);
    let bookItem = document.createElement('div');
    bookItem.innerHTML = `
        <div class="book book--120 list__book book--border">
            <div class="book__cover">
                <a class="book__cover-link" href="about-book.html?bookID=${book.bookID}">
                    <img class="book__cover-img" src="${book.urlCover}" alt="${book.title}">
                </a>
            </div>
            <div class="book__description">
                <div class="book__title">
                    <a class="book__title-link" href="about-book.html?bookID=${book.bookID}">
                        ${book.title}
                    </a>
                </div>
                <div class="book__author">
                    <a class="book__author-link" href="about-author.html?authorID=${author.authorID}">
                    ${author.name}
                    </a>
                </div>
            </div>
        </div>
    `
    block.appendChild(bookItem);
}
