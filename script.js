let myLibrary = [];
let book;
let submitButton = document.querySelector("#submit-button");
let cancelSubmitButton = document.querySelector("#cancel-submit-button")
let bookList = document.querySelector(".book-list");
let addBookForm = document.querySelector(".add-book-form-container");
let addBookButton = document.querySelector("#add-book-button");
let content = document.querySelector(".main-content");
let attribute;

submitButton.addEventListener("click", addBookToLibrary);
submitButton.addEventListener("click", closeForm);
cancelSubmitButton.addEventListener("click", closeForm);
addBookButton.addEventListener("click", openForm);

addSomeBooks();
displayBooks();
closeForm();

function Book(title, author, pages, read) {
    this.title = title,
        this.author = author,
        this.pages = pages,
        this.read = read
}

function addSomeBooks() {
    book = new Book("The Wisdom Of Crowds", "Joe Abercrombie", "528", false);
    myLibrary.push(book);
    book = new Book("A Game of Thrones", "George R.R. Martin", "720", true);
    myLibrary.push(book);
}

function addBookToLibrary() {
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
}

function resetBookList() {
    bookList.innerHTML = "";
}

function displayBooks() {
    for (i = 0; i < myLibrary.length; i++) {
        const bookCard = document.createElement("div");
        const bookCardTitle = document.createElement("div");
        const bookCardAuthor = document.createElement("div");
        const bookCardPages = document.createElement("div");
        const bookCardRead = document.createElement("div")
        const bookCardDelete = document.createElement("button");

        bookCard.classList.add("book-card");
        bookCardTitle.classList.add("book-card-title");
        bookCardAuthor.classList.add("book-card-author");
        bookCardPages.classList.add("book-card-pages");
        bookCardRead.classList.add("book-card-read");

        bookCard.setAttribute("data-number", `${i}`);

        bookCardTitle.textContent = myLibrary[i].title;
        bookCardAuthor.textContent = myLibrary[i].author;
        bookCardPages.textContent = myLibrary[i].pages;
        if (myLibrary[i].read) {
            bookCardRead.textContent = "Read";
        } else {
            bookCardRead.textContent = "Not read";
        }
        bookCardDelete.textContent = "Delete book";

        bookCard.appendChild(bookCardTitle);
        bookCard.appendChild(bookCardAuthor);
        bookCard.appendChild(bookCardPages);
        bookCard.appendChild(bookCardRead);
        bookCard.appendChild(bookCardDelete);
        bookList.appendChild(bookCard);

        bookCardDelete.addEventListener("click", deleteBook)
        bookCardRead.addEventListener("click", toggleRead)
    }
}

function openForm() {
    content.classList.add("blur");
    addBookForm.style.display = "block";

}

function closeForm() {
    content.classList.remove("blur");
    addBookForm.style.display = "none";
}

function deleteBook() {
    attribute = this.parentElement.getAttribute("data-number");
    myLibrary.splice(attribute, 1);
    this.parentElement.remove();
}

function toggleRead() {
    attribute = this.parentElement.getAttribute("data-number");
    if (myLibrary[attribute].read) {
        myLibrary[attribute].read = false;
        this.textContent = "Not read";
    } else {
        myLibrary[attribute].read = true;
        this.textContent = "Read";
    }
}