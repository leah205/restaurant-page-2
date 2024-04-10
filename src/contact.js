import "./style.css";

const contactPage = document.createElement("div");
contactPage.setAttribute("id", "contact-page");

const phoneDescription = document.createElement("p");
phoneDescription.textContent = "call us at 000-0000-0001";

const emailDescription = document.createElement("p");
emailDescription.textContent = "email us at fakeemail@gmail.com";

contactPage.appendChild(phoneDescription);
contactPage.appendChild(emailDescription);

export default contactPage;