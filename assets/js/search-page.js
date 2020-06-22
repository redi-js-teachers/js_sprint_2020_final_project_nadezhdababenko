var url_string = window.location.href; 
var url = new URL(url_string);
var searchType = getParameterFromUrlByKey("search");
//add actibe class to tabs
var activeclass = document.querySelectorAll('.search-page__item');
for (var i = 0; i < activeclass.length; i++) {
    if(activeclass[i].dataset.searchType === searchType) {
        activeclass[i].classList.add('search-page__item--active');
    }
}

// SEARCH 
let searchInput = document.getElementById('search-input');
let searchPageList = document.getElementById('search-page-list');

searchInput.addEventListener('keyup', function() {
    let text = searchInput.value.toLowerCase();
    let byTitle = [];
    let byAuthor = [];
    if(text != "" && searchType === 'All') {
        byTitle = searchBookByTitle(text);
        byAuthor = searchBookByAuthor(text);

        var index;
        for (var i=0; i<byAuthor.length; i++) {
            index = byTitle.indexOf(byAuthor[i]);
            if (index > -1) {
                byTitle.splice(index, 1);
            }
        }

    } else if (text != "" && searchType === 'Books') {
        byTitle = searchBookByTitle(text);
    } else if (text != "" && searchType === 'Authors') {
        byAuthor = searchBookByAuthor(text);

    }
    
    searchPageList.innerHTML = "";
    createTitle(searchType);
    if (searchType === 'Books') {
        createAmount(byTitle.length);
    } else if (searchType === 'Authors') {
        createAmount(byAuthor.length);
    } else if (searchType === 'All') {
        let byAll = byTitle.length + byAuthor.length;
        createAmount(byAll);
    }

    for (let i = 0; i < byTitle.length; i++) {
        book = byTitle[i];
        createSearchedBook(book);
    }
    
    for (let i = 0; i < byAuthor.length; i++) {
        book = byAuthor[i];
        createSearchedBook(book);
    }
});

function createTitle(type) {
    let title = document.createElement('span');
    title.classList.add('search-page__list-title');
    title.innerHTML = type;
    searchPageList.appendChild(title);
}

function createAmount(amount) {
    let searchAmount = document.createElement('span');
    searchAmount.classList.add('search-page__list-amount');
    if(amount == 0) {
        searchAmount.innerHTML = "...";
    } else {
        searchAmount.innerHTML = amount;
    }
    searchPageList.appendChild(searchAmount);
}

function searchBookByTitle(title) {
    let findBooks = [];
    for (let i = 0; i < allBooks.length; i++) {
        let book = allBooks[i];
        if (book.title.toLowerCase().includes(title)) {
            findBooks.push(book);
        }
    }
    return findBooks;
}

function searchBookByAuthor(title) {
    let findBooks = [];
    for (let i = 0; i < allBooks.length; i++) {
        let book = allBooks[i];
        let author = getAuthorById(book.authorID);
        if (author.name.toLowerCase().includes(title)) {
            findBooks.push(book);
        }
    }
    return findBooks;
}

function createSearchedBook(book) {
    let author = getAuthorById(book.authorID);
    let bookItem = document.createElement('div');
    bookItem.classList.add('book-card');
    bookItem.classList.add('search-page__book');
    bookItem.innerHTML = `
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
        <div class="book-card__action-more dropdown-btn dropdown">
            <button class="dropdown-btn__btn dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <div class="dropdown-btn__title">
                    More
                </div>
            </button>
            <div class="dropdown-menu dropdown-btn__menu" aria-labelledby="dropdownMenuLink" x-placement="top-start" style="position: absolute; transform: translate3d(0px, -128px, 0px); top: 0px; left: 0px; will-change: transform;">
                <a class="dropdown-item dropdown-btn__item" href="#">Add a review</a>
                <a class="dropdown-item dropdown-btn__item" href="#">Add to list</a>
                <a class="dropdown-item dropdown-btn__item add-to-waiting-list" href="#" data-book-id="${book.bookID}">Add to  your waiting list</a>
                <a class="dropdown-item dropdown-btn__item add-to-already-read" href="#" data-book-id="${book.bookID}">Already read</a>
            </div>
        </div>
    `
    searchPageList.appendChild(bookItem);
}

//add book to Waiting List
let addToWaitingListBtns = document.getElementsByClassName("add-to-waiting-list"); 
for (var i = 0; i < addToWaitingListBtns.length; i++) {
    addToWaitingListBtns[i].addEventListener('click', function() {
        console.log(this.dataset.bookID);
        addToWaitingList(this.dataset.bookId);
    });
}

//add book to Already Read
let addToAlreadyReadBtns = document.getElementsByClassName("add-to-already-read");
for (var i = 0; i < addToAlreadyReadBtns.length; i++) {
    addToAlreadyReadBtns[i].addEventListener('click', function() {
        console.log(this.dataset.bookID);
        addToAlreadyRead(this.dataset.bookId);
    });
}