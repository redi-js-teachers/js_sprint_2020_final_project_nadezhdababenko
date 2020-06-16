//get url of clicked book from bestsellers row
var url_string = window.location.href; //window.location.href
var url = new URL(url_string);
var bookID = getNumberParameterFromUrlByKey("bookID");

//create clicked book -> cover
let bookCover = document.getElementById("about-book-cover"); //block with book cover
//if bookID is indefined
if (bookID != null) {
    let thisBook = getBookById(bookID);
    //create book cover
    createBookCover(thisBook);
    //create book description
    let bookDescription = document.getElementById("about-book-description"); //block with book description
    createBookDescription(thisBook);
    //create related books
    let relatedBooks = document.getElementById("related-books"); //block related books
    for (let i = 0; i < thisBook.relatedBookIDs.length; i++) {
        let relatedBookId = thisBook.relatedBookIDs[i];
        let relatedBook = getBookById(relatedBookId);
        createRelatedBooks(relatedBook);
    }
}
//create clicked book cover
function createBookCover(book) {
    let bookItem = document.createElement('div');
    bookItem.innerHTML = `
    <div class="book book--176">
        <div class="book-progress book__progress">
            <i class="book-progress__status-icon fa fa-star-half"></i>
            <div class="book-progress__amount">
                0%
            </div>
        </div>
        <div class="book__cover">
            <a class="book__cover-link" href="#">
                <img class="book__cover-img" src="${book.urlCover}" alt="${book.title}">
            </a>
        </div>
    </div>
    `
    bookCover.appendChild(bookItem);
}
//create clicked book description
function createBookDescription(book) {
    let author = getAuthorById(book.authorID);
    let bookDescription = document.getElementById("about-book-description"); //block with book description
    let bookItem = document.createElement('div');
    bookItem.innerHTML = `
    <a class="about-book__author" href="about-author.html?authorID=${author.authorID}">
        ${author.name}
    </a>
    <div class="about-book__book-title">
        ${book.title}
    </div>
    <div class="about-book__actions">
        <a href="reader.html?bookID=${book.bookID}" class="personal-activity about-book__action-read" id="read-book">
            <div class="personal-activity__title">
                Read
            </div>
        </a>

        <div class="about-book__action-more dropdown-btn dropdown">
            <button class="dropdown-btn__btn dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <div class="dropdown-btn__title">
                    More
                </div>
            </button>
            <div class="dropdown-menu dropdown-btn__menu" aria-labelledby="dropdownMenuLink">
                <a class="dropdown-item dropdown-btn__item" href="#">Add a review</a>
                <a class="dropdown-item dropdown-btn__item" href="#">Add to list</a>
                <a class="dropdown-item dropdown-btn__item" href="#" id="add-to-waiting-list">Add to  your waiting list</a>
                <a class="dropdown-item dropdown-btn__item" href="#" id="add-to-already-read">Already read</a>
            </div>
        </div>
    </div>
    <!-- DESCRIPTION OF THE BOOK -->
    <div class="description-full" id="profile-description">
        <div class="description-full__text description-full--show-more-height">
            ${book.description}
        </div>
        <div class="description-full__show-more">Read more</div>
    </div>
    `
    bookDescription.appendChild(bookItem);
}

//create clicked related books
function createRelatedBooks(book) {
    let author = getAuthorById(book.authorID);
    let relatedBooks = document.getElementById("related-books"); //block related books
    let bookItem = document.createElement('div');
    bookItem.innerHTML = `
        <div class="book book--120 list__book">
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
    relatedBooks.appendChild(bookItem);
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

//add book to Waiting List
let addToWaitingListBtn = document.getElementById("add-to-waiting-list"); 
addToWaitingListBtn.addEventListener('click', function() {
    let waitingListBookIds = getNumberArrayFromLocalStorageByKey(waitingListBookIdsKey);
    
    //check ALREADY READ?
    let alreadyReadBookIds = getNumberArrayFromLocalStorageByKey(alreadyReadBookIdsKey);
    
    if(alreadyReadBookIds.includes(bookID)) {
        return;
    }
    //add to waiting list
    if(!waitingListBookIds.includes(bookID)) {//если этот элемент не содержит идентификатор из урл
        waitingListBookIds.push(bookID);
        localStorage.setItem(waitingListBookIdsKey, waitingListBookIds);// отправляем все в локал стор
    }
});

//add book to Already Read
let addToAlreadyReadBtn = document.getElementById("add-to-already-read"); 
addToAlreadyReadBtn.addEventListener('click', function() {
    let alreadyReadBookIds = getNumberArrayFromLocalStorageByKey(alreadyReadBookIdsKey);

    //check WAITING LIST?
    let waitingListBookIds = getNumberArrayFromLocalStorageByKey(waitingListBookIdsKey);
    
    if(waitingListBookIds.includes(bookID)) {
        return;
    }
    //add to already read
    if(!alreadyReadBookIds.includes(bookID)) {//если этот элемент не содержит идентификатор из урл
        alreadyReadBookIds.push(bookID);
        localStorage.setItem(alreadyReadBookIdsKey, alreadyReadBookIds);// отправляем все в локал стор
    }
});

//add read-book-button actions
let readBook = document.getElementById('read-book');
readBook.addEventListener('click', function() {
    let startedBookIds = getNumberArrayFromLocalStorageByKey(startedBookIdsKey);

    //check ALREADY READ?
    let alreadyReadBookIds = getNumberArrayFromLocalStorageByKey(alreadyReadBookIdsKey);

    if(alreadyReadBookIds.includes(bookID)) {
        return;
    }
    
    //check WAITING LIST?
    let waitingListBookIds = getNumberArrayFromLocalStorageByKey(waitingListBookIdsKey);

    if(waitingListBookIds.includes(bookID)) {
        return;
    }
    //add to started
    if(!startedBookIds.includes(bookID)) {//если этот элемент не содержит идентификатор из урл
        startedBookIds.push(bookID);
        localStorage.setItem(startedBookIdsKey, startedBookIds);// отправляем все в локал стор
    }
});
