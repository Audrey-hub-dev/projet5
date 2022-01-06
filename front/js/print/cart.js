// étape 8

//depuis la page panier, récupérer le panier (l'array) via localStorage

let cart = JSON.parse(localStorage.getItem("cart"))
console.log(cart); 


//créer et insérer des éléments dans la page panier

//sélection de la l'id où je vais insérer le code html 
const cartItems = document.querySelector("#cart__items");
console.log(cartItems); 

//si le panier est vide
if(cart === null) {
    
}else {
//si le panier n'est pas vide, on affiche les produits dans le localStorage
//boucle qui indique le nombre d'éléments dans le localStorage

for (let product in cart){

//je crée l'élément article
let article = document.createElement("article");
document.querySelector("#cart__items").appendChild(article);
article.className = "cart__item";
article.setAttribute('data-id', 'productArray[product].productId');

//je crée l'élément div dans article 
let div = document.createElement("div");
article.appendChild(div);
div.className = "cart__item__img";

//je crée l'élément image dans la div 
let img = document.createElement("img");
div.appendChild(img);
img.src = cart[product].useImg;

//je crée une deuxième div dans l'élément article
let itemContent = document.createElement("div");
article.appendChild(itemContent);
itemContent.className = "cart__item__content";

//je crée une sous-div dans la deuxième div 
let itemContentTitlePrice = document.createElement("div");
itemContent.appendChild(itemContentTitlePrice);
itemContentTitlePrice.className = "cart__item__content__titlePrice";

//je crée un titre h2 dans cette sous-div 
let title = document.createElement("h2");
itemContentTitlePrice.appendChild(title);
title.innerHTML = cart[product].useName; 

//je crée l'élément p qui sera le prix dans la div titlePrice
let productPrice = document.createElement("p");
itemContentTitlePrice.appendChild(productPrice);
productPrice.innerHTML = cart[product].usePrice + "€";

//je crée l'élément p qui sera la couleur dans la div titlePrice
let productColor = document.createElement("p");
itemContentTitlePrice.appendChild(productColor);
productColor.innerHTML = cart[product].useColor; 

//je crée l'élément div qui est le troisième div nommé settings
let itemContentSettings = document.createElement("div");
itemContent.appendChild(itemContentSettings);
itemContentSettings.className = "cart__item__content__settings";

//je crée une sous-div  dans la troisième div settings 
let quantity = document.createElement("div");
itemContentSettings.appendChild(quantity);
quantity.className = "cart__item__content__settings__quantity";

//je crée l'élément p qui sera la quantité dans la div quantity
let productQuantity = document.createElement("p");
quantity.appendChild(productQuantity);
productQuantity.innerHTML = "Qté : ";

//je crée l'élément input dans la div quantity
let inputQuantity = document.createElement("input");
quantity.appendChild(inputQuantity);
inputQuantity.value = cart[product].useQuantity;
inputQuantity.setAttribute("type", "number");
inputQuantity.className = "itemQuantity";
inputQuantity.setAttribute('id', 'itemQ');
inputQuantity.setAttribute("name", "itemQuantity");
inputQuantity.setAttribute("min", "1");
inputQuantity.setAttribute("max", "100");


//je crée une deuxième sous-div dans la div settings
let itemContentSettingsDelete = document.createElement("div");
itemContentSettings.appendChild(itemContentSettingsDelete);
itemContentSettingsDelete.className = "cart__item__content__settings__delete";

//je créeune sous-div dans cette deuxième sous-div delete
let productDelete = document.createElement("p");
itemContentSettingsDelete.appendChild(productDelete); 
productDelete.className = "deleteItem";
productDelete.innerHTML = "supprimer";

}}; 


//création du calcul des quantités 
// je crée une variable pour y mettre les quantités
let totalQuantityCalc = [];
//création d'une recherche des quantités dans le panier avec une boucle 
for (let k = 0; k < cart.length; k++) {
//création variable des quantités	
let useQuantityCart = cart[k].useQuantity;

//je crée un tableau avant de faire un calcul, je mets les quantités dans un tableau en passant par la variable
totalQuantityCalc.push(useQuantityCart)
console.log(totalQuantityCalc)
}

//j'additionne les quantités avec la méthode .reduce()
const calcQ = (accumulator, currentValue) => accumulator + currentValue 
const totalQ = totalQuantityCalc.reduce(calcQ);

// j'affiche l'élément du total quantity
let productTotalQuantity = document.getElementById('totalQuantity');
    productTotalQuantity.innerHTML = totalQ;
    console.log(totalQ);



//création du calcul des prix 
//je sélectionne l'élément de quantité de chaque produit
let itemQ = document.getElementsByClassName('itemQuantity');
//je crée la variable quantityPrice pour récupérer toutes les quantités 
let quantityPrice = itemQ.length;
//je définis le prix total par un nombre
totalP = 0;
//je récupère le prix total dans les quantités totales lors de la modification de quantité dans le panier 
for (let m = 0; m < quantityPrice; m++) {//création d'une recherche des quantités dans le panier avec une boucle 
    totalP += (itemQ[m].valueAsNumber * cart[m].usePrice);
    // le prix total est égal à la valeur de quantité de chaque produit multiplié par le prix de celui-ci
}   
// j'affiche l'élément du total price
let productTotalPrice = document.getElementById('totalPrice');
    productTotalPrice.innerHTML = totalP;
    console.log(totalP);



