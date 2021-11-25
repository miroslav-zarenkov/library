let myLibrary = [];
let book;
let submitButton = document.querySelector("#submit-button");
let cancelSubmitButton = document.querySelector("#cancel-submit-button")
let bookList = document.querySelector(".book-list");
let addBookFormContainer = document.querySelector(".add-book-form-container");
let addBookButton = document.querySelector("#add-book-button");
let content = document.querySelector(".main-content");
let attribute;

submitButton.addEventListener("click", addBookToLibrary);
submitButton.addEventListener("click", closeForm);
cancelSubmitButton.addEventListener("click", closeForm);
addBookButton.addEventListener("click", openForm);

getFromLocalStorage();
displayBooks();

// function Book(title, author, pages, read) {
//     this.title = title,
//         this.author = author,
//         this.pages = pages,
//         this.read = read
// }

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

function addSomeBooks() {
    book = new Book("The Wisdom Of Crowds", "Joe Abercrombie", "528", false);
    myLibrary.push(book);
    book = new Book("A Game of Thrones", "George R.R. Martin", "720", true);
    myLibrary.push(book);
    resetBookList();
    displayBooks();
    addToLocalStorage();
}

function addBookToLibrary() {
    if (myLibrary === null) {
        myLibrary = [];
    }

    book = new Book(
        document.querySelector("#book-title").value,
        document.querySelector("#book-author").value,
        document.querySelector("#book-pages").value,
        document.querySelector("#book-read").checked
    )

    myLibrary.push(book);
    document.querySelector("#book-title").value = "";
    document.querySelector("#book-author").value = "";
    document.querySelector("#book-pages").value = "";
    document.querySelector("#book-read").checked = false;
    resetBookList();
    displayBooks();
    addToLocalStorage();
}

function resetBookList() {
    bookList.innerHTML = "";
}

function displayBooks() {
    if (myLibrary === null) {
        return;
    }

    for (i = 0; i < myLibrary.length; i++) {
        const bookCard = document.createElement("div");
        const bookCardTitle = document.createElement("div");
        const bookCardTitleSmall = document.createElement("div");
        const bookCardAuthor = document.createElement("div");
        const bookCardAuthorSmall = document.createElement("div");
        const bookCardPages = document.createElement("div");
        const bookCardPagesSmall = document.createElement("div");
        const bookCardRead = document.createElement("div")
        const bookCardDelete = document.createElement("button");

        bookCard.classList.add("book-card");
        bookCardTitle.classList.add("book-card-title");
        bookCardTitleSmall.classList.add("small-text")
        bookCardAuthor.classList.add("book-card-author");
        bookCardAuthorSmall.classList.add("small-text")
        bookCardPages.classList.add("book-card-pages");
        bookCardPagesSmall.classList.add("small-text");
        bookCardRead.classList.add("book-card-read");

        bookCard.setAttribute("data-number", i);

        bookCardTitle.textContent = myLibrary[i].title;
        bookCardTitleSmall.textContent = "title"
        bookCardAuthor.textContent = myLibrary[i].author;
        bookCardAuthorSmall.textContent = "author"
        bookCardPages.textContent = myLibrary[i].pages;
        bookCardPagesSmall.textContent = "pages";
        if (myLibrary[i].read) {
            bookCardRead.textContent = "Read";
            bookCardRead.classList.add("green");
        } else {
            bookCardRead.textContent = "Not read";
            bookCardRead.classList.add("red");
        }
        bookCardDelete.textContent = "Delete book";

        bookCard.appendChild(bookCardTitle);
        bookCard.appendChild(bookCardTitleSmall);
        bookCard.appendChild(bookCardAuthor);
        bookCard.appendChild(bookCardAuthorSmall);
        bookCard.appendChild(bookCardPages);
        bookCard.appendChild(bookCardPagesSmall);
        bookCard.appendChild(bookCardRead);
        bookCard.appendChild(bookCardDelete);
        bookList.appendChild(bookCard);

        bookCardDelete.addEventListener("click", deleteBook)
        bookCardRead.addEventListener("click", toggleRead)
    }
}

function openForm() {
    content.classList.add("blur");
    addBookFormContainer.style.display = "block";
}

function closeForm() {
    content.classList.remove("blur");
    addBookFormContainer.style.display = "none";
}

function deleteBook() {
    attribute = this.parentElement.getAttribute("data-number");
    myLibrary.splice(attribute, 1);
    this.parentElement.remove();
    resetBookList();
    displayBooks();
    addToLocalStorage();
}

function toggleRead() {
    attribute = this.parentElement.getAttribute("data-number");
    if (myLibrary[attribute].read) {
        myLibrary[attribute].read = false;
        this.textContent = "Not read";
        this.classList.remove("green");
        this.classList.add("red");
    } else {
        myLibrary[attribute].read = true;
        this.textContent = "Read";
        this.classList.remove("red");
        this.classList.add("green");
    }
    addToLocalStorage();
}

function addToLocalStorage() {
    localStorage.setItem("myLibraryLocal", JSON.stringify(myLibrary));
}

function getFromLocalStorage() {
    myLibrary = JSON.parse(localStorage.getItem("myLibraryLocal"));
}

function clearLocalStorage() {
    localStorage.clear();
}