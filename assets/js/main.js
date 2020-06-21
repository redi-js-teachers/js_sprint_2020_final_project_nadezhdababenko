function getBookById(bookID) {
    for (let i = 0; i < allBooks.length; i++) {
        let book = allBooks[i];
        if (book.bookID == bookID) {
            return book;
        }
    }
    alert('Book with bookID = ' + bookID + ' does not exist :/');
}

function getAuthorById(authorID) {
    for (let i = 0; i < authors.length; i++) {
        let author = authors[i];
        if (author.authorID == authorID) {
            return author;
        }
    }
}

function getNumberArrayFromLocalStorageByKey(key) {
    let array = localStorage.getItem(key);//give element bykey 
    if(array.length >0) {
        array = Array.from(array.split(','), Number);//convert to array, it can not understand that it is array
    } else {
        array = [];
    }

    return array;
}

function getNumberParameterFromUrlByKey(key) {
    var parameter = url.searchParams.get(key);
    if (parameter != undefined) {
        return Number(parameter);
    } else {
        return null;
    }
}

function getParameterFromUrlByKey(key) {
    var parameter = url.searchParams.get(key);
    if (parameter != undefined) {
        return parameter;
    } else {
        return null;
    }
}
