let myLibrary = [];
let book;
let submitButton = document.querySelector("#submit-button");
let div = document.createElement("div");
let addBookDiv = document.querySelector(".add-book");
submitButton.addEventListener("click", addBookToLibrary);
addFirstBook();

function Book(title, author, pages, read) {
    this.title = title,
        this.author = author,
        this.pages = pages,
        this.read = read
}

function addFirstBook() {
    book = new Book("The Wisdom Of Crowds", "Joe Abercrombie", "528", false);
    myLibrary.push(book);

    div.innerHTML = book.title + " " + book.author + " " + book.pages + " " + book.read;
    addBookDiv.appendChild(div);
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


    let newDiv = document.createElement("div");
    newDiv.innerHTML = book.title + " " + book.author + " " + book.pages + " " + book.read;
    div.appendChild(newDiv);

}