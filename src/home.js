
import "./style.css";
import Coffee from "./images/coffee.jpg";


const pageContainer = document.querySelector("#content");

const homePageContainer = document.createElement("div");
homePageContainer.setAttribute("id", "home-page")

const coffeeImg = new Image();
coffeeImg.src = Coffee;

const descriptionContainer = document.createElement("div")
const descriptionHeader = document.createElement("h2");
descriptionHeader.textContent = "Espresso, French Crepes, and Waffles";
const description = document.createElement("p");
description.textContent = "Espresso drinks, worth every shot, made with locally roasted 100% Arabica beans. Serving French Crepes and Belgian Waffles all day. Enjoy the difference."
descriptionContainer.setAttribute("id", "cafe-description");
descriptionContainer.appendChild(descriptionHeader);
descriptionContainer.appendChild(description);


const button = document.createElement("button");
const header = document.createElement("h1");

homePageContainer.appendChild(coffeeImg);
homePageContainer.appendChild(descriptionContainer);



export default homePageContainer;