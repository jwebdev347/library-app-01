const addBookBtn = document.querySelector(".add-book-btn");
const libraryContainer = document.querySelector(".library-container");

const titleInput = document.querySelector("#form-title");
const authorInput = document.querySelector("#author");
const pageCountInput = document.querySelector("#page-count");
const isReadInput = document.querySelector("#is-read");

let libraryArray = [];

function Book(title, author, pageCount, isRead) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.isRead = isRead;
}

Book.prototype.toggleRead = function() {
    if (this.isRead) {
        this.isRead = false;
    } else {
        this.isRead = true;
    }
};

function addBookToLibrary(event) {
    const book = new Book(titleInput.value,
        authorInput.value,
        pageCountInput.value,
        isReadInput.value
    );
    libraryArray.push(book);

    displayLibrary();
    event.preventDefault()
    console.log(event);
}

function removeBookFromLibrary(bookIndex) {
    // Remove item at that particular index from the array
    libraryArray.splice(bookIndex, 1);

    // Also re-display library
    displayLibrary();
    console.log(bookIndex);
}

function displayLibrary() {
    // First clear the container by looping over and removing each child
    while (libraryContainer.firstChild) {
        libraryContainer.removeChild(libraryContainer.lastChild)
    }

    libraryArray.forEach((item, index) => {
        console.log(index);
        // Create an element
        let newBookContainer = document.createElement("div");
        let newBookTitle = document.createElement("h1");
        let newBookAuthor = document.createElement("p");
        let newBookPageCount = document.createElement("p");
        // let newBookIsReadBtn = document.
        let newBookIsRead = document.createElement("p");
        let newBookRemoveBtn = document.createElement("button");

        newBookContainer.setAttribute("data-array-index", index);
        newBookTitle.textContent = item.title;
        newBookAuthor.textContent = item.author;
        // newBookPageCount.textContent = item.pageCount;
        newBookPageCount.textContent = index;
        newBookIsRead.textContent = item.isRead;
        newBookRemoveBtn.textContent = "Remove Book";

        newBookContainer.appendChild(newBookTitle);
        newBookContainer.appendChild(newBookAuthor);
        newBookContainer.appendChild(newBookPageCount);
        newBookContainer.appendChild(newBookIsRead);

        newBookRemoveBtn.addEventListener("click", () => {
            removeBookFromLibrary(index);
        });

        newBookContainer.appendChild(newBookRemoveBtn);

        libraryContainer.appendChild(newBookContainer);
    });
}

addBookBtn.addEventListener('click', addBookToLibrary);