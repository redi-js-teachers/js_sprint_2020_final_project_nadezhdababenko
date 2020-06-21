//add book to Waiting List
function addToWaitingList(bookID) {
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
        console.log("a" + waitingListBookIds);
    }
}

//add book to Already Read
function addToAlreadyRead(bookID) {
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
        console.log("b" + alreadyReadBookIds);
    } 
}
