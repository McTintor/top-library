const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(Book) {
    myLibrary.push(Book);
}


// code for showing the dialog

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

addButton.addEventListener("click", (event) => {
    event.preventDefault();

    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let pages = document.querySelector('#pages').value;
    const myBookObject = new Book(title, author, pages, false);

    let container = document.querySelector('.container');

    const bookContainer = document.createElement('div');
    bookContainer.classList.add('book');
    bookContainer.classList.add('kode-mono');

    let info = document.createElement('div');
    info.classList.add('info');

    let titleParagraph = document.createElement('p');
    titleParagraph.classList.add('title');
    titleParagraph.textContent = title;

    let authorParagraph = document.createElement('p');
    authorParagraph.classList.add('author');
    authorParagraph.textContent = author;

    let pagesParagraph = document.createElement('p');
    pagesParagraph.classList.add('pages');
    pagesParagraph.textContent = pages;

    bookContainer.appendChild(titleParagraph);
    bookContainer.appendChild(authorParagraph);
    bookContainer.appendChild(pagesParagraph);
    info.appendChild(bookContainer);
    container.appendChild(info);

})