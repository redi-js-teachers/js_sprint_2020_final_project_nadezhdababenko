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
    let array = localStorage.getItem(key);//дай элемент по ключу key 
    
    if(array.length >0) {
        array = Array.from(array.split(','), Number);//преобразуем в массив, т.к не может понять что это массив
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
