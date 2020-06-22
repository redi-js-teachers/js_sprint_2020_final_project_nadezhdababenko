let url_string = window.location.href; 
let url = new URL(url_string);
let categoryBooks = getParameterFromUrlByKey("category");

let bookArray;
let title;
switch(categoryBooks) {
    case "popularNow": 
        bookArray = popularNowIDs;
        title = "Popular now";
        break;
    case "youMightLike":
        bookArray = youMightLikeIDs;
        title = "You might like";
        break;
    case "new":
        bookArray = newIDs;
        title = "New";
        break;
    case "bestsellers":
        bookArray = bestsellerIDs;
        title = "Bestsellers";
        break;
    case "russianClassics":
        bookArray = russianClassicsIDs;
        title = "Russian classics";
        break;
    case "biographies":
        bookArray = biographiesIDs;
        title = "Biographies";
        break;
    case "fiction":
        bookArray = fictionIDs;
        title = "Fiction";
        break;
    case "bestBBCNovels":
        bookArray = bestBbcNovelsIDs;
        title = "Best BBC novels";
        break;
    default:
        alert('No such category found ..');
  }

let categoryBlock = document.getElementById('books-category');

createTitle(title);
createList(bookArray);

function createTitle(title) {
    let categoryTitle = document.querySelector('.category-page__title');
    categoryTitle.innerHTML = title;
}

function createList(array) {
    for(i = 0; i < array.length; i++) {
        let item = array[i];
        let book = getBookById(item);
        createBook(book);
    }
}

function createBook(book) {
    let author = getAuthorById(book.authorID);
    let bookItem = document.createElement('div');
    bookItem.classList.add('book-card');
    bookItem.classList.add('category-page__book');
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
    categoryBlock.appendChild(bookItem);
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