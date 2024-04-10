import "./style.css";
import savoryCrepe from "./images/savory-crepe.jpeg";
import almondCroissant from "./images/almond-croissant.jpeg";
import belgianWaffle from "./images/belgian-waffle.jpeg";
import blueberryScone from "./images/blueberry-scone.jpeg";
import cafeMocha from "./images/cafe-mocha.jpeg";
import caffeAmericano from "./images/caffe-americano.jpeg";
import caffeLatte from "./images/caffe-latte.jpeg";
import chaiLatte from "./images/chai-latte.jpeg";
import hotChocolate from  "./images/hot-chocolate.jpeg";
import icedDrink from  "./images/iced-drink.jpeg";
import panini from  "./images/panini.jpeg";
import quiche from  "./images/quiche.jpeg";
import roastedCoffeeBeans from  "./images/roasted-coffee-beans.webp";
import sweetFrenchCrepe from  "./images/sweet-french-crepe.jpeg";
import tea from  "./images/tea.jpeg";



const menuContainer = document.createElement("div");
menuContainer.setAttribute("id", "menu-container");


function createMenuGroup(name,price,photoUrl){
    const menuGroup = document.createElement("div");
    menuGroup.setAttribute("id","menu-group");

    const menuPhoto = new Image();
    menuPhoto.src = photoUrl;
    menuPhoto.setAttribute("id","item-photo");

    const menuName = document.createElement("h3");
    menuName.textContent = name;
    menuName.setAttribute("id","item-name");

    const menuPrice = document.createElement("h4");
    menuPrice.textContent = price;
    menuPrice.setAttribute("id","item-price");

    const shopNow = document.createElement("p");
    shopNow.textContent = "Shop Now";
    shopNow.setAttribute("id","item-btn");

    menuGroup.appendChild(menuPhoto);
    menuGroup.appendChild(menuName);
    menuGroup.appendChild(menuPrice);
    menuGroup.appendChild(shopNow);
    console.log(menuGroup);
    return(menuGroup);
}
let photoUrlArr = [savoryCrepe, sweetFrenchCrepe, belgianWaffle, quiche, panini,
caffeAmericano, caffeLatte, cafeMocha, hotChocolate, chaiLatte, tea, almondCroissant, blueberryScone,
icedDrink, roastedCoffeeBeans];
 
let menuNameArr = ["Savory French Crepes", "Sweet French Crepes", "Belgian Waffles",
"Quiches", "Paninins", "Caffe Americano", "Caffe Latte", "Caffe Mocha", "Hot Chocolate",
"Chai Latte", "Tea(infusion bag)","Almond Croissant","Blueberry Scone", "Iced Drinks",
"Roasted Coffee Beans"
]

let menuPriceArr = ["$10.00-$12.00", "7.50-9.00","7.50-9.00", "$7.75", "$7.75","$2.75-$3.75",
"$3.25 - $4.75", "$3.50 - $5.00", "$3.50 - $5.00", "$3.50 - $5.00", "$3.00 - $3.75",
"$4.00","$3.50", "$3.50 - $4.75", "$9.99"]

console.log(menuNameArr.length);
console.log(menuPriceArr.length);

for(let i = 0; i < 15; i++){
    menuContainer.appendChild(createMenuGroup(menuNameArr[i], menuPriceArr[i], photoUrlArr[i]))
}

export default menuContainer;