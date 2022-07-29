export {
  addToLocalStorage,
  getFromLocalStorage,
  clearLocalStorage,
  openForm,
  closeForm,
  addBookToLibrary,
  displayBooks,
  myLibrary,
  addSomeBooks,
  submitForm,
};
let myLibrary = [];

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

const addSomeBooks = () => {
  let book;
  book = new Book("The Wisdom Of Crowds", "Joe Abercrombie", "528", false);
  myLibrary.push(book);
  book = new Book("A Game of Thrones", "George R.R. Martin", "720", true);
  myLibrary.push(book);
  addToLocalStorage();
};

const addBookToLibrary = () => {
  if (myLibrary === null) {
    myLibrary = [];
  }
  let book;
  book = new Book(
    document.querySelector("#book-title").value,
    document.querySelector("#book-author").value,
    document.querySelector("#book-pages").value,
    document.querySelector("#book-read").checked
  );

  myLibrary.push(book);
  /* clearFormInputs(); */
  closeForm();
  resetBookList();
  displayBooks();
  addToLocalStorage();
};

const resetBookList = () => {
  document.querySelector(".book-list").innerHTML = "";
};

const displayBooks = () => {
  if (myLibrary === null) {
    return;
  }

  for (let i = 0; i < myLibrary.length; i++) {
    const bookCard = document.createElement("div");
    const bookCardTitle = document.createElement("div");
    const bookCardTitleSmall = document.createElement("div");
    const bookCardAuthor = document.createElement("div");
    const bookCardAuthorSmall = document.createElement("div");
    const bookCardPages = document.createElement("div");
    const bookCardPagesSmall = document.createElement("div");
    const bookCardRead = document.createElement("div");
    const bookCardDelete = document.createElement("button");

    bookCard.classList.add("book-card");
    bookCardTitle.classList.add("book-card-title");
    bookCardTitleSmall.classList.add("small-text");
    bookCardAuthor.classList.add("book-card-author");
    bookCardAuthorSmall.classList.add("small-text");
    bookCardPages.classList.add("book-card-pages");
    bookCardPagesSmall.classList.add("small-text");
    bookCardRead.classList.add("book-card-read");

    bookCard.setAttribute("data-number", i);

    bookCardTitle.textContent = myLibrary[i].title;
    bookCardTitleSmall.textContent = "title";
    bookCardAuthor.textContent = myLibrary[i].author;
    bookCardAuthorSmall.textContent = "author";
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
    document.querySelector(".book-list").appendChild(bookCard);

    bookCardDelete.addEventListener("click", deleteBook);
    bookCardRead.addEventListener("click", toggleRead);
  }
};

const openForm = () => {
  document.querySelector(".main-wrapper").classList.add("blur");
  document.querySelector(".add-book-form-container").style.display = "block";
};

const closeForm = () => {
  document.querySelector(".main-wrapper").classList.remove("blur");
  document.querySelector(".add-book-form-container").style.display = "none";
  clearFormInputs();
};

const deleteBook = (e) => {
  let attribute = e.target.parentElement.getAttribute("data-number");
  myLibrary.splice(attribute, 1);
  e.target.parentElement.remove();
  resetBookList();
  displayBooks();
  addToLocalStorage();
};

const toggleRead = (e) => {
  let attribute = e.target.parentElement.getAttribute("data-number");
  if (myLibrary[attribute].read) {
    myLibrary[attribute].read = false;
    e.target.textContent = "Not read";
    e.target.classList.remove("green");
    e.target.classList.add("red");
  } else {
    myLibrary[attribute].read = true;
    e.target.textContent = "Read";
    e.target.classList.remove("red");
    e.target.classList.add("green");
  }
  addToLocalStorage();
};

const addToLocalStorage = () => {
  localStorage.setItem("myLibraryLocal", JSON.stringify(myLibrary));
};

const getFromLocalStorage = () => {
  myLibrary = JSON.parse(localStorage.getItem("myLibraryLocal"));
};

const clearLocalStorage = () => {
  localStorage.clear();
};

const clearFormInputs = () => {
  document.querySelector("#book-title").value = "";
  document.querySelector("#book-author").value = "";
  document.querySelector("#book-pages").value = "";
  document.querySelector("#book-read").checked = false;
};

const submitForm = (event) => {
  event.preventDefault();
  console.log("submit button works");
  const inputTitle = document.querySelector("#book-title");
  const inputAuthor = document.querySelector("#book-author");
  const inputPages = document.querySelector("#book-pages");

  if (inputTitle.validity.valid) {
    console.log("title ok");
    document.querySelector("#title-error-span").textContent = "";
    document.querySelector("#title-error-span").classList.add("hidden");
  } else {
    console.log("title error");
    document.querySelector("#title-error-span").textContent = "STUPID";
    document.querySelector("#title-error-span").classList.remove("hidden");
  }
  if (inputAuthor.validity.valid) {
    console.log("author ok");
    document.querySelector("#author-error-span").textContent = "";
    document.querySelector("#author-error-span").classList.add("hidden");
  } else {
    console.log("author error");
    document.querySelector("#author-error-span").textContent = "STUPID";
    document.querySelector("#author-error-span").classList.remove("hidden");
  }
  if (inputPages.validity.valid) {
    console.log("pages ok");
    document.querySelector("#pages-error-span").textContent = "";
    document.querySelector("#pages-error-span").classList.add("hidden");
  } else {
    console.log("pages error");
    document.querySelector("#pages-error-span").textContent = "STUPID";
    document.querySelector("#pages-error-span").classList.remove("hidden");
  }
  if (
    inputTitle.validity.valid &&
    inputAuthor.validity.valid &&
    inputPages.validity.valid
  ) {
    addBookToLibrary();
  }
};
