export { renderPage };
import "./style.scss";
import GithubLogo from "./github.png";
import {
  getFromLocalStorage,
  openForm,
  closeForm,
  addBookToLibrary,
  displayBooks,
  myLibrary,
  clearLocalStorage,
  addSomeBooks,
} from "./logic";

const createWrapper = () => {
  const mainWrapper = document.createElement("div");
  mainWrapper.classList.add("main-wrapper");

  return mainWrapper;
};

const createHeader = () => {
  const header = document.createElement("header");
  const headerTitle = document.createElement("h1");
  headerTitle.textContent = "Library";
  header.appendChild(headerTitle);

  return header;
};

const createForm = () => {
  const formDiv = document.createElement("div");
  formDiv.classList.add("add-book-form-container");
  const formDivFormWrapper = document.createElement("form");
  formDivFormWrapper.classList.add("add-book-form");
  const formBookTitle = document.createElement("label");
  formBookTitle.textContent = "Title";
  const formBookTitleInput = document.createElement("input");
  formBookTitleInput.setAttribute("type", "text");
  formBookTitleInput.setAttribute("id", "book-title");
  formBookTitleInput.setAttribute("name", "book-title");
  formBookTitleInput.setAttribute("maxlength", "30");
  formBookTitleInput.setAttribute("placeholder", "1984");
  const formBookAuthor = document.createElement("label");
  formBookAuthor.textContent = "Author";
  const formBookAuthorInput = document.createElement("input");
  formBookAuthorInput.setAttribute("type", "text");
  formBookAuthorInput.setAttribute("id", "book-author");
  formBookAuthorInput.setAttribute("name", "book-author");
  formBookAuthorInput.setAttribute("maxlength", "30");
  formBookAuthorInput.setAttribute("placeholder", "George Orwell");
  const formBookPages = document.createElement("label");
  formBookPages.textContent = "Pages";
  const formBookPagesInput = document.createElement("input");
  formBookPagesInput.setAttribute("type", "number");
  formBookPagesInput.setAttribute("id", "book-pages");
  formBookPagesInput.setAttribute("name", "book-pages");
  formBookPagesInput.setAttribute("min", "0");
  formBookPagesInput.setAttribute("max", "9999");
  formBookPagesInput.setAttribute("placeholder", "328");
  const formBookRead = document.createElement("label");
  formBookRead.textContent = "Read";
  const formBookReadInput = document.createElement("input");
  formBookReadInput.setAttribute("type", "checkbox");
  formBookReadInput.setAttribute("id", "book-read");
  formBookReadInput.setAttribute("name", "book-read");
  const formBookButtonsWrapper = document.createElement("div");
  formBookButtonsWrapper.classList.add("form-btn-wrapper");
  const formBookSubmit = document.createElement("button");
  formBookSubmit.textContent = "Submit";
  formBookSubmit.classList.add("submit-form-button");
  formBookSubmit.setAttribute("type", "submit");
  const formBookCancel = document.createElement("button");
  formBookCancel.textContent = "Cancel";
  formBookCancel.classList.add("cancel-form-button");
  formBookCancel.setAttribute("type", "button");
  formBookTitle.appendChild(formBookTitleInput);
  formBookAuthor.appendChild(formBookAuthorInput);
  formBookPages.appendChild(formBookPagesInput);
  formBookRead.appendChild(formBookReadInput);
  formBookButtonsWrapper.appendChild(formBookSubmit);
  formBookButtonsWrapper.appendChild(formBookCancel);
  formDivFormWrapper.appendChild(formBookTitle);
  formDivFormWrapper.appendChild(formBookAuthor);
  formDivFormWrapper.appendChild(formBookPages);
  formDivFormWrapper.appendChild(formBookRead);
  formDivFormWrapper.appendChild(formBookButtonsWrapper);
  formDiv.appendChild(formDivFormWrapper);

  return formDiv;
};

const createMain = () => {
  const main = document.createElement("main");
  const mainAddBook = document.createElement("div");
  mainAddBook.classList.add("add-book-div");
  const mainAddBookButton = document.createElement("button");
  mainAddBookButton.classList.add("add-book-button");
  mainAddBookButton.textContent = "Add book";
  const mainBookList = document.createElement("div");
  mainBookList.classList.add("book-list");
  mainAddBook.appendChild(mainAddBookButton);
  main.appendChild(mainAddBook);
  main.appendChild(mainBookList);

  return main;
};

const createFooter = () => {
  const footer = document.createElement("footer");
  const footerDiv = document.createElement("div");
  const footerLink = document.createElement("a");
  const footerLinkImg = document.createElement("img");
  footerLinkImg.classList.add("github-logo");
  footerLinkImg.setAttribute("src", GithubLogo);
  footerDiv.textContent = "Developed by miroslav-zarenkov";
  footerLink.setAttribute("href", "https://github.com/miroslav-zarenkov");
  footerLink.setAttribute("target", "_blank");
  footerLink.setAttribute("rel", "noopener noreferrer");
  footer.appendChild(footerDiv);
  footer.appendChild(footerLink);
  footerLink.appendChild(footerLinkImg);

  return footer;
};

const createPage = (event) => {
  document.body.appendChild(createWrapper());
  document.querySelector(".main-wrapper").appendChild(createHeader());
  document.querySelector(".main-wrapper").appendChild(createMain());
  document.querySelector(".main-wrapper").appendChild(createFooter());
  document.body.appendChild(createForm());
};

const renderPage = (event) => {
  getFromLocalStorage();
  console.log(myLibrary);
  createPage(event);
  document
    .querySelector(".add-book-button")
    .addEventListener("click", openForm);
  document
    .querySelector(".submit-form-button")
    .addEventListener("click", addBookToLibrary);
  document
    .querySelector(".cancel-form-button")
    .addEventListener("click", closeForm);
  displayBooks();
};
