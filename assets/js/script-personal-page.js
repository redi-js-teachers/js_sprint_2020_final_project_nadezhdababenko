
<<<<<<< HEAD
let waitingListBookIds = getNumberArrayFromLocalStorageByKey(waitingListBookIdsKey);

//add books to Waiting List
let waitingListBlock = document.getElementById('waiting-list-books');
for(let i = 0; i < waitingListBookIds.length; i++) {
=======
let waitingListBookIds = localStorage.getItem(waitingListBookIdsKey);//дай элемент по ключу waitingListBookIdsKey 
waitingListBookIds = Array.from(waitingListBookIds);//преобразуем в массив, т.к не может понять что это массив

//add books to Waiting List
let waitingListBlock = document.getElementById('waiting-list-books');
for(let i = 0; i < waitingListBookIds.length; i+=2) {
    
>>>>>>> a6611175f5680371f1eaeac4e82a51d673fa8eec
    let waitingListBookId = waitingListBookIds[i];
    let book = getBookById(waitingListBookId);
    createWaitingList(book);
}
function createWaitingList(book) {
<<<<<<< HEAD
    let author = getAuthorById(book.authorID);
=======
>>>>>>> a6611175f5680371f1eaeac4e82a51d673fa8eec
    let bookItem = document.createElement('div');
    bookItem.classList.add('book-card');
    bookItem.innerHTML = `
        <div class="book-card__content">
            <a class="book-card__cover-link" href="#">
                <img class="book-card__cover-img" src="${book.urlCover}">
            </a>
            <div class="book-card__description">
                <div class="book-card__title">
                    <a class="book-card__title-link" href="#">
                        ${book.title}
                    </a>
                </div>
<<<<<<< HEAD
                <div class="book-card__author">
                    <a class="book-card__author-link" href="about-author.html?authorID=${author.authorID}">
                    ${author.name}
=======
                <div class="book-card__autor">
                    <a class="book-card__autor-link" href="#">
                    ${book.autor}
>>>>>>> a6611175f5680371f1eaeac4e82a51d673fa8eec
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
            <button class="personal-activity book-card__action">
                <i class="personal-activity__icon fa fa-trash"></i>
                <div class="personal-activity__title">
                    Delete
                </div>
            </button>
        </div>
    `
    waitingListBlock.appendChild(bookItem);
}

//add books to Already Read
<<<<<<< HEAD
let alreadyReadBookIds = getNumberArrayFromLocalStorageByKey(alreadyReadBookIdsKey);

let finishedListBlock = document.getElementById('finished-list-books');
for(let i = 0; i < alreadyReadBookIds.length; i++) {
=======
let alreadyReadBookIds = localStorage.getItem(alreadyReadBookIdsKey);//дай элемент по ключу waitingListBookIdsKey 
alreadyReadBookIds = Array.from(alreadyReadBookIds);//преобразуем в массив, т.к не может понять что это массив

let finishedListBlock = document.getElementById('finished-list-books');
for(let i = 0; i < alreadyReadBookIds.length; i+=2) {
>>>>>>> a6611175f5680371f1eaeac4e82a51d673fa8eec
    let alreadyReadBookId = alreadyReadBookIds[i];
    let book = getBookById(alreadyReadBookId);
    createFinishedList(book);
}
function createFinishedList(book) {
    let bookItem = document.createElement('div');
    bookItem.classList.add('book-card');
    bookItem.innerHTML = `
        <div class="book-card__content">
            <a class="book-card__cover-link" href="#">
                <img class="book-card__cover-img" src="${book.urlCover}">
            </a>
            <div class="book-card__description">
                <div class="book-card__title">
                    <a class="book-card__title-link" href="#">
                        ${book.title}
                    </a>
                </div>
<<<<<<< HEAD
                <div class="book-card__author">
                    <a class="book-card__author-link" href="#">
                    ${book.author}
=======
                <div class="book-card__autor">
                    <a class="book-card__autor-link" href="#">
                    ${book.autor}
>>>>>>> a6611175f5680371f1eaeac4e82a51d673fa8eec
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
            <button class="personal-activity book-card__action">
                <i class="personal-activity__icon fa fa-trash"></i>
                <div class="personal-activity__title">
                    Delete
                </div>
            </button>
        </div>
    `
    finishedListBlock.appendChild(bookItem);
}


//add books to STARTED
<<<<<<< HEAD
let startedBookIds = getNumberArrayFromLocalStorageByKey(startedBookIdsKey);

let startedListBlock = document.getElementById('started-list-books');
for(let i = 0; i < startedBookIds.length; i++) {
=======
let startedBookIds = localStorage.getItem(startedBookIdsKey);//дай элемент по ключу waitingListBookIdsKey 
startedBookIds = Array.from(startedBookIds);//преобразуем в массив, т.к не может понять что это массив

let startedListBlock = document.getElementById('started-list-books');
for(let i = 0; i < startedBookIds.length; i+=2) {
>>>>>>> a6611175f5680371f1eaeac4e82a51d673fa8eec
    let startedBookId = startedBookIds[i];
    let book = getBookById(startedBookId);
    createStartedList(book);
}
function createStartedList(book) {
    let bookItem = document.createElement('div');
    bookItem.classList.add('book-card');
    bookItem.innerHTML = `
        <div class="book-card__content">
            <a class="book-card__cover-link" href="#">
                <img class="book-card__cover-img" src="${book.urlCover}">
            </a>
            <div class="book-card__description">
                <div class="book-card__title">
                    <a class="book-card__title-link" href="#">
                        ${book.title}
                    </a>
                </div>
<<<<<<< HEAD
                <div class="book-card__author">
                    <a class="book-card__author-link" href="#">
                    ${book.author}
=======
                <div class="book-card__autor">
                    <a class="book-card__autor-link" href="#">
                    ${book.autor}
>>>>>>> a6611175f5680371f1eaeac4e82a51d673fa8eec
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
            <button class="personal-activity book-card__action">
                <i class="personal-activity__icon fa fa-trash"></i>
                <div class="personal-activity__title">
                    Delete
                </div>
            </button>
        </div>
    `
    startedListBlock.appendChild(bookItem);
}