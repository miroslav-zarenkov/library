let myLibrary = [];
let book;
let submitButton = document.querySelector("#submit-button");
let div = document.createElement("div");
let addBookDiv = document.querySelector(".add-book");
let bookList = document.querySelector(".book-list");
submitButton.addEventListener("click", addBookToLibrary);
addSomeBooks();
displayBooks();

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
    bookList.innerHTML = "";
    displayBooks();
}

function displayBooks() {
    for (i = 0; i < myLibrary.length; i++) {
        //let newDiv = document.createElement("div");
        // div.innerHTML = JSON.stringify(myLibrary);
        //div.classList.add("divclass");
        //addBookDiv.appendChild(newDiv);
        //     console.log(JSON.stringify(myLibrary[i]))


        //let newDiv = document.createElement("div");
        bookList.innerHTML += "<div class='what'>" + myLibrary[i].title + myLibrary[i].author + myLibrary[i].pages + myLibrary[i].read + "</div>";
        //console.log(newDiv.innerHTML);
        //addBookDiv.appendChild(newDiv);
    }
}