let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title,
        this.author = author,
        this.pages = pages,
        this.read = read
}

function addBookToLibrary() {
    let book = new Book(
        document.querySelector("#book-title").value,
        document.querySelector("#book-author").value,
        document.querySelector("#book-pages").value,
        document.querySelector("#book-read").checked)

    myLibrary.push(book);
    document.querySelector("#book-title").value = "";
    document.querySelector("#book-author").value = "";
    document.querySelector("#book-pages").value = "";
    document.querySelector("#book-read").checked = false;
}