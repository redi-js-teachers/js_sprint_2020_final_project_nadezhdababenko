//add books to bestsellers row on landingpage
let bestsellerBlock = document.getElementById("bestsellers-start-page");
for (let i = 0; i < 7; i++) {
    createBook(bestsellers[i]);
}
function createBook(book) {
    let bookItem = document.createElement('div');
    bookItem.innerHTML = `
        <div class="book book--120">
            <div class="book__cover">
                <a class="book__cover-link" href="#">
                    <img class="book__cover-img" src="${book.urlCover}" alt="${book.title}">
                </a>
            </div>
            <div class="book__description">
                <div class="book__title">
                    <a class="book__title-link" href="#">
                        ${book.title}
                    </a>
                </div>
                <div class="book__autor">
                    <a class="book__autor-link" href="#">
                    ${book.autor}
                    </a>
                </div>
            </div>
        </div>
    `
    bestsellerBlock.appendChild(bookItem);
}

//

