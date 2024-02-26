const myLibrary = [];

function Book() {

}

function addBookToLibrary() {

}


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