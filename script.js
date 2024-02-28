const myLibrary = [];

let bookId = 0;
function Book(title, author, pages, read) {
    this.id = bookId++; // Assign a unique id to each book
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function isValidInput(input, type) {
    if (type === 'string') {
        return isValidString(input);
    } else if (type === 'number') {
        return isValidNumber(input);
    } else if (type === 'name') {
        return nameCheck(input);
    }
    return false;
}

function isValidString(input) {
    if (typeof input === 'string' && input.trim() !== '') {
        return input.length <= 50;
    }
    return false;
}

function isValidNumber(input) {
    if (input !== '' && !isNaN(input)) {
        const number = Number(input);
        return number >= 1 && number <= 9999;
    }
    return false;
}

function nameCheck(input) {
    if (input !== '') {
        const regex = /^[a-zA-Z]+(?:[.'\s][a-zA-Z]+)*$/;
        return regex.test(input);
    }
    return false;
}

// // code for showing the dialog

const openButton = document.querySelector(".open");
const closeButton = document.querySelector(".close");
const modal = document.querySelector(".modal");
const addButton = document.querySelector(".add");

openButton.addEventListener("click", () => {
    modal.showModal();
});

closeButton.addEventListener("click", () => {
    modal.close();
})

function displayBook(book) {
    const container = document.querySelector('.container');
    const bookContainer = document.createElement('div');
    bookContainer.classList.add('book', 'kode-mono');
    bookContainer.setAttribute('data-id', book.id);

    const info = document.createElement('div');
    info.classList.add('info');
    const buttons = document.createElement('div');
    buttons.classList.add('buttons');
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener("click", () => {
        deleteBook(book.id);
    });

    const titleParagraph = document.createElement('p');
    titleParagraph.classList.add('title');
    titleParagraph.textContent = book.title;

    const authorParagraph = document.createElement('p');
    authorParagraph.classList.add('author');
    authorParagraph.textContent = book.author;

    const pagesParagraph = document.createElement('p');
    pagesParagraph.classList.add('pages');
    pagesParagraph.textContent = book.pages + ' pgs';

    const readButton = document.createElement('button');
    readButton.classList.add(book.read ? 'read' : 'not-read');
    readButton.textContent = book.read ? 'Read' : 'Not Read';

    info.appendChild(titleParagraph);
    info.appendChild(authorParagraph);
    info.appendChild(pagesParagraph);
    bookContainer.appendChild(info);
    buttons.appendChild(readButton);
    buttons.appendChild(deleteButton);
    bookContainer.appendChild(buttons);
    container.appendChild(bookContainer);

    // Attach event listener to the read button
    readButton.addEventListener("click", () => {
        readButton.classList.toggle('read');
        readButton.classList.toggle('not-read');
        readButton.textContent = readButton.classList.contains('read') ? 'Read' : 'Not Read';
    });

    return bookContainer;
}

addButton.addEventListener("click", (event) => {
    event.preventDefault();

    let titleElement = document.querySelector('#title');
    let authorElement = document.querySelector('#author');
    let pagesElement = document.querySelector('#pages');
    const read = document.getElementById('Yes').checked;

    if (!isValidInput(titleElement.value, 'string') || !isValidInput(authorElement.value, 'name') || !isValidInput(pagesElement.value, 'number')) {
        alert("Please enter the required data in the correct format, and then click Add.");
        return;
    }

    const myBookObject = new Book(titleElement.value, authorElement.value, pagesElement.value, read);
    addBookToLibrary(myBookObject);
    displayBook(myBookObject);

    modal.close();
});

function deleteBook(id) {
    // Find the book in the array and remove it
    const bookIndex = myLibrary.findIndex(book => book.id === id);
    if (bookIndex > -1) {
        myLibrary.splice(bookIndex, 1);
    }

    // Find the book's DOM element and remove it
    const bookElement = document.querySelector(`[data-id="${id}"]`);
    if (bookElement) {
        bookElement.remove();
    }
}