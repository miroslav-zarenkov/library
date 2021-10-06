let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title,
        this.author = author,
        this.pages = pages,
        this.read = read
}

function addBookToLibrary() {
    myLibrary.push(bible, aGameOfThrones, theWisdomOfCrowds);
}

let bible = new Book("bible", "god", "1000", false);
let aGameOfThrones = new Book("A Game of Thrones", "George R.R. Martin", "720", false);
let theWisdomOfCrowds = new Book("The Wisdom of Crowd", "Joe Abercrombie", "528", false);