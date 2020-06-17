let searchInput = document.getElementById('search-input');
let searchPageList = document.getElementById('search-page-list');

// SEARCH ONLY BY BOOK
searchInput.addEventListener('keyup', function() {
    let text = searchInput.value.toLowerCase();
    let result = [];
    if(text != "") {
        result = searchBookByTitle(text);
    } 
    
    searchPageList.innerHTML = "";
    for (let i = 0; i < result.length; i++) {
        book = result[i];
        createSearchedBook(book);
    }
});

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

function createSearchedBook(book) {
    let author = getAuthorById(book.authorID);
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
                <div class="book-card__author">
                    <a class="book-card__author-link" href="#">
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
            <button class="personal-activity book-card__action">
                <i class="personal-activity__icon fa fa-trash"></i>
                <div class="personal-activity__title">
                    Delete
                </div>
            </button>
        </div>
    `
    searchPageList.appendChild(bookItem);
}