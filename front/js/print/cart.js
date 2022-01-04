// étape 8

//depuis la page panier, récupérer le panier (l'array) via localStorage

let productArray = JSON.parse(localStorage.getItem("cart"))
console.log(productArray); 


//créer et insérer des éléments dans la page panier

//sélection de la l'id où je vais insérer le code html 
const cartItems = document.querySelector("#cart__items");
console.log(cartItems); 

//si le panier est vide
if(productArray === null) {
    
}else {
//si le panier n'est pas vide, on affiche les produits dans le localStorage
//boucle qui indique le nombre d'éléments dans le localStorage

for (let product in productArray){

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
img.src = productArray[product].useImg;

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
title.innerHTML = productArray[product].useName; 

//je crée l'élément p qui sera le prix dans la div titlePrice
let productPrice = document.createElement("p");
itemContentTitlePrice.appendChild(productPrice);
productPrice.innerHTML = productArray[product].usePrice + "€";

//je crée l'élément p qui sera la couleur dans la div titlePrice
let productColor = document.createElement("p");
itemContentTitlePrice.appendChild(productColor);
productColor.innerHTML = productArray[product].useColor; 

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
inputQuantity.value = productArray[product].useQuantity;
inputQuantity.className = "itemQuantity";

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

   


        
    








