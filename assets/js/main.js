function getBookById(bookID) {
    for (let i = 0; i < allBooks.length; i++) {
        let book = allBooks[i];
        if (book.bookID == bookID) {
            return book;
        }
    }
    alert('Book with bookID = ' + bookID + ' does not exist :/');
}