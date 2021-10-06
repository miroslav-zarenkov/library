function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        return `${title} by ${author}, ${pages} pages, ${read}`
    }
}
let aGameOfThrones = new Book("A Game of Thrones", "George R.R. Martin", "720", "read")
let theWisdomOfCrowds = new Book("The Wisdom of Crowd", "Joe Abercrombie", "528", "not read")
console.log(aGameOfThrones.info());
console.log(theWisdomOfCrowds.info());