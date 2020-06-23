//add books to bestsellers row on landingpage
let bestsellerBlock = document.getElementById("bestsellers-start-page");
for (let i = 0; i < bestsellerIDs.length; i++) {
    let bookId = bestsellerIDs[i];
    let book = getBookById(bookId);
    createBook(book);
}

function createBook(book) {
    let author = getAuthorById(book.authorID);
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
    bestsellerBlock.appendChild(bookItem);
}

//open-close log-in pop-up
(() => {
	const block = document.querySelector('#log-in-pop-up');
	const button = document.querySelector('#log-in-btn');
	
	function toggle() {
	  block.classList.toggle('overlay--visible');
	}
	function remove() {
	  block.classList.remove('overlay--visible');
	}
	
	document.addEventListener('click', e => {
	  const target = e.target;
	  
	  target === button ? toggle() : target === block ? remove() : false;
	});
  })();

  //open log in pop up with email
  let logInEmail = document.getElementById('log-in-email');
  logInEmail.addEventListener('click', function() {
	const block = document.querySelector('#log-in-pop-up');
    block.classList.remove('overlay--visible');
	const blockEmail = document.querySelector('#log-in-email-pop-up');
    blockEmail.classList.toggle('overlay--visible');
  });

  //close log in pop up with email
  let backToMainLogIn = document.getElementById('back-to-main-log-in');
  backToMainLogIn.addEventListener('click', function() {
    const block = document.querySelector('#log-in-pop-up');
    block.classList.toggle('overlay--visible');
	const blockEmail = document.querySelector('#log-in-email-pop-up');
    blockEmail.classList.remove('overlay--visible');
  });
  