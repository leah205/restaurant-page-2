import homePageContainer from "./home.js";
import menuContainer from "./menu.js";
import contactPage from "./contact.js";

const pageContainer = document.querySelector("#content");

const header = document.querySelector("header");

const headerTitle = document.createElement("h1");
headerTitle.textContent = "Coffee House";
header.appendChild(headerTitle);

const navBar = document.createElement("nav");
navBar.setAttribute("id", "nav-bar");

const homeButton = document.createElement("button");
homeButton.textContent = "Home";
navBar.appendChild(homeButton);

const menuButton = document.createElement("button");
menuButton.textContent = "Menu";
navBar.appendChild(menuButton);

const contactButton = document.createElement("button");
contactButton.textContent = "Contact";
navBar.appendChild(contactButton);

header.appendChild(navBar);



contactButton.addEventListener("click", () => {
    pageContainer.removeChild(pageContainer.firstChild);
    pageContainer.appendChild(contactPage);
});

homeButton.addEventListener("click", () => {
     pageContainer.removeChild(pageContainer.firstChild);
    pageContainer.appendChild(homePageContainer);
});

menuButton.addEventListener("click", () => {
    pageContainer.removeChild(pageContainer.firstChild);
    pageContainer.appendChild(menuContainer);
});
pageContainer.appendChild(homePageContainer);









