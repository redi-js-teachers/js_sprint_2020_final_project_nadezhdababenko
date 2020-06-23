let waitingListBookIds = getNumberArrayFromLocalStorageByKey(waitingListBookIdsKey);

//add books to Waiting List
let waitingListBlock = document.getElementById('waiting-list-books');
for(let i = 0; i < waitingListBookIds.length; i++) {
    let waitingListBookId = waitingListBookIds[i];
    let book = getBookById(waitingListBookId);
    createWaitingList(book);
}

function createWaitingList(book) {
    let author = getAuthorById(book.authorID);
    let bookItem = document.createElement('div');
    bookItem.classList.add('personal-page__book-card');
    bookItem.innerHTML = `
    <div class="book-card" data-book-id="${book.bookID}">
        <div class="book-card__content">
            <a class="book-card__cover-link" href="about-book.html?bookID=${book.bookID}">
                <img class="book-card__cover-img" src="${book.urlCover}">
            </a>
            <div class="book-card__description">
                <div class="book-card__title">
                    <a class="book-card__title-link" href="about-book.html?bookID=${book.bookID}">
                        ${book.title}
                    </a>
                </div>
                <div class="book-card__author">
                    <a class="book-card__author-link" href="about-author.html?authorID=${author.authorID}">
                        ${author.name}
                    </a>
                </div>
            </div>
        </div>
        <div class="book-card__actions">
            <div class="book-progress book-card__progress">
                <i class="book-progress__status-icon fa fa-bookmark"></i>
            </div>
            <button class="personal-activity book-card__action">
                <i class="personal-activity__icon fa fa-book"></i>
                <div class="personal-activity__title">
                    Add to book list
                </div>
            </button>
            <button class="personal-activity book-card__action delete">
                <i class="personal-activity__icon fa fa-trash"></i>
                <div class="personal-activity__title">
                    Delete
                </div>
            </button>
        </div>
    </div>
    `
    waitingListBlock.appendChild(bookItem);
}

//add books to Already Read
let alreadyReadBookIds = getNumberArrayFromLocalStorageByKey(alreadyReadBookIdsKey);

let finishedListBlock = document.getElementById('finished-list-books');
for(let i = 0; i < alreadyReadBookIds.length; i++) {
    let alreadyReadBookId = alreadyReadBookIds[i];
    let book = getBookById(alreadyReadBookId);
    createFinishedList(book);
}

function createFinishedList(book) {
    let author = getAuthorById(book.authorID);
    let bookItem = document.createElement('div');
    bookItem.classList.add('personal-page__book-card');
    bookItem.innerHTML = `
        <div class="book-card" data-book-id="${book.bookID}">
            <div class="book-card__content">
                <a class="book-card__cover-link" href="about-book.html?bookID=${book.bookID}">
                    <img class="book-card__cover-img" src="${book.urlCover}">
                </a>
                <div class="book-card__description">
                    <div class="book-card__title">
                        <a class="book-card__title-link" href="about-book.html?bookID=${book.bookID}">
                            ${book.title}
                        </a>
                    </div>
                    <div class="book-card__author">
                        <a class="book-card__author-link" href="about-author.html?authorID=${author.authorID}">
                            ${author.name}
                        </a>
                    </div>
                </div>
            </div>
            <div class="book-card__actions">
                <div class="book-progress book-card__progress">
                    <i class="book-progress__status-icon fa fa-star"></i>
                </div>
                <button class="personal-activity book-card__action">
                    <i class="personal-activity__icon fa fa-book"></i>
                    <div class="personal-activity__title">
                        Add to book list
                    </div>
                </button>
                <button class="personal-activity book-card__action delete">
                    <i class="personal-activity__icon fa fa-trash"></i>
                    <div class="personal-activity__title">
                        Delete
                    </div>
                </button>
            </div>
        </div>
    `
    finishedListBlock.appendChild(bookItem);
}

//add books to STARTED
let startedBookIds = getNumberArrayFromLocalStorageByKey(startedBookIdsKey);
let startedListBlock = document.getElementById('started-list-books');
for(let i = 0; i < startedBookIds.length; i++) {
    let startedBookId = startedBookIds[i];
    let book = getBookById(startedBookId);
    createStartedList(book);
}

function createStartedList(book) {
    let author = getAuthorById(book.authorID);
    let bookItem = document.createElement('div');
    bookItem.classList.add('personal-page__book-card');
    bookItem.innerHTML = `
    <div class="book-card" data-book-id="${book.bookID}">
        <div class="book-card__content">
            <a class="book-card__cover-link" href="about-book.html?bookID=${book.bookID}">
                <img class="book-card__cover-img" src="${book.urlCover}">
            </a>
            <div class="book-card__description">
                <div class="book-card__title">
                    <a class="book-card__title-link" href="about-book.html?bookID=${book.bookID}">
                        ${book.title}
                    </a>
                </div>
                <div class="book-card__author">
                    <a class="book-card__author-link" href="about-author.html?authorID=${author.authorID}">
                        ${author.name}
                    </a>
                </div>
            </div>
        </div>
        <div class="book-card__actions">
            <div class="book-progress book-card__progress">
                <i class="book-progress__status-icon fa fa-star-half"></i>
                <div class="book-progress__amount">
                    1%
                </div>
            </div>
            <button class="personal-activity book-card__action">
                <i class="personal-activity__icon fa fa-book"></i>
                <div class="personal-activity__title">
                    Add to book list
                </div>
            </button>
            <button class="personal-activity book-card__action delete">
                <i class="personal-activity__icon fa fa-trash"></i>
                <div class="personal-activity__title">
                    Delete
                </div>
            </button>
        </div>
    </div>
    `
    startedListBlock.appendChild(bookItem);
}

// show recent books
for(let i = startedBookIds.length - 1, j = 0; i >= 0 && j < 4; i--, j++) {
    let startedBookId = startedBookIds[i];
    let book = getBookById(startedBookId);
    createRecentBooksList(book);
}

function createRecentBooksList(book) {
    let recentBooks = document.getElementById('recent-books');
    let bookItem = document.createElement('div');
    bookItem.classList.add('book');
    bookItem.classList.add('book--84');
    bookItem.classList.add('personal-page__recent-book');
    bookItem.innerHTML = `
    <div class="book-progress book__progress">
        <i class="book-progress__status-icon fa fa-star-half"></i>
        <div class="book-progress__amount">
            1%
        </div>
    </div>
    <div class="book__cover">
        <a class="book__cover-link" href="about-book.html?bookID=${book.bookID}">
            <img class="book__cover-img" src="${book.urlCover}" alt="${book.title}">
        </a>
    </div>
    `
    recentBooks.appendChild(bookItem);
}

// DELETE BOOK
let deleteBookBtns = document.querySelectorAll('.delete');
for (i = 0; i < deleteBookBtns.length; i++) {
    deleteBookBtns[i].addEventListener('click', deleteBook);
}

function deleteBook(e) {
    let currentBookId = Number(e.currentTarget.parentNode.parentNode.getAttribute('data-book-id'));//check book id
    removeBookFromArray(waitingListBookIds, currentBookId, waitingListBookIdsKey);
    removeBookFromArray(alreadyReadBookIds, currentBookId, alreadyReadBookIdsKey);
    removeBookFromArray(startedBookIds, currentBookId, startedBookIdsKey);
    e.currentTarget.parentNode.parentNode.remove(); //delete book-card like element at page
}

function removeBookFromArray(array, item, key){
    let index = array.indexOf(item);
    if (index > -1) {
        array.splice(index, 1);
        localStorage.setItem(key, array);//add new array in local storage without deleted book
    }
}

//add amount of each tabs
//AMOUNT OF BOOKS
let booksAmount = document.getElementById('books-amount');
addBookAmount();
function addBookAmount() {
    if(booksAmount == "") {
    booksAmount.innerHTML = 0;
    } else {
        let amount = alreadyReadBookIds.length + startedBookIds.length + waitingListBookIds.length;
        booksAmount.innerHTML = amount;
    }
}
