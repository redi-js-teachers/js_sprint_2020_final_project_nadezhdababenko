//get url of clicked book from bestsellers row
var url_string = window.location.href; //window.location.href
var url = new URL(url_string);
var authorID = getNumberParameterFromUrlByKey("authorID");

//if authorID is indefined
if (authorID != null) {
    let thisAuthor = getAuthorById(authorID);
    createAuthorsDescription(thisAuthor);

    for (let i = 0; i < thisAuthor.bookIDs.length; i++) {
        let bookId = thisAuthor.bookIDs[i];
        let book = getBookById(bookId);
        createAuthorsBook(book);
    }
}

function createAuthorsDescription(author) {
    let authorsDescription = document.getElementById('about-author-description');
    let description = document.createElement('div');
    description.classList.add('about-author__row');
    description.classList.add('row');
    description.innerHTML = `
        <div class="about-author__photo col-md-3" id="about-author-photo">
            <img class="about-author__img" src="${author.urlPhoto}" alt="">
        </div>
        <div class="about-author__biography col-md-9" id="about-author-biography">
            <div class="about-author__name">
                ${author.name}
            </div>
            <div class="description-full" id="author-description">
                <div class="description-full__text description-full--show-more-height">
                    ${author.biography}
                </div>
                <div class="description-full__show-more">Read more</div>
            </div>
        </div>
    `
    authorsDescription.appendChild(description);
}

function createAuthorsBook(book) {
    let author = getAuthorById(book.authorID);
    let authorsBooksList = document.getElementById('authors-books-list');
    let bookItem = document.createElement('div');
    bookItem.classList.add('book-card');
    bookItem.innerHTML = `
        <div class="book-card__content">
            <a class="book-card__cover-link" href="#">
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
    authorsBooksList.appendChild(bookItem);
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

//show all description of the THIS book
$(".description-full__show-more").click(function () {
    if($(".description-full__text").hasClass("description-full--show-more-height")) {
        $(this).text("Read less");
    } else {
        $(this).text("Read more");
    }
    $(".description-full__text").toggleClass("description-full--show-more-height");
});