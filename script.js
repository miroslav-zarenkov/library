let myLibrary = [];
let book;
let submitButton = document.querySelector("#submit-button");
let bookList = document.querySelector(".book-list");
let addBookForm = document.querySelector(".add-book-form")
let addBookButton = document.querySelector("#add-book-button")

submitButton.addEventListener("click", addBookToLibrary);
submitButton.addEventListener("click", closeForm);
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

        bookCard.classList.add("book-card");
        bookCardTitle.classList.add("book-card-title");
        bookCardAuthor.classList.add("book-card-author");
        bookCardPages.classList.add("book-card-pages");
        bookCardRead.classList.add("book-card-read");

        bookCardTitle.textContent = myLibrary[i].title;
        bookCardAuthor.textContent = myLibrary[i].author;
        bookCardPages.textContent = myLibrary[i].pages;
        if (myLibrary[i].read) {
            bookCardRead.textContent = "Read";
        } else {
            bookCardRead.textContent = "Not read";
        }

        bookCard.appendChild(bookCardTitle);
        bookCard.appendChild(bookCardAuthor);
        bookCard.appendChild(bookCardPages);
        bookCard.appendChild(bookCardRead)
        bookList.appendChild(bookCard);
    }
}

function openForm() {
    addBookForm.style.display = "block";
}

function closeForm() {
    addBookForm.style.display = "none";
}