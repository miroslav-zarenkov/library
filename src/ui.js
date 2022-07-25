export { renderPage };
import "./style.scss";
import GithubLogo from "./github.png";
import { getFromLocalStorage, openForm } from "./logic";

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
  formBookTitleInput.setAttribute("maxlength", "30");
  formBookTitle.appendChild(formBookTitleInput);
  formDivFormWrapper.appendChild(formBookTitle);
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
  createPage(event);
  /*   let submitButton = document.querySelector("#submit-button");
  let cancelSubmitButton = document.querySelector("#cancel-submit-button"); */
  let addBookButton = document.querySelector(".add-book-button");
  /*  submitButton.addEventListener("click", addBookToLibrary);
  submitButton.addEventListener("click", closeForm);
  cancelSubmitButton.addEventListener("click", closeForm); */
  addBookButton.addEventListener("click", openForm);
};
