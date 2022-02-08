// étape 8

//depuis la page panier, récupérer le panier (l'array) via localStorage

let cartArray = JSON.parse(localStorage.getItem("cart"))
//console.log(cartArray); 

//créer et insérer des éléments dans la page panier

//sélection de la l'id où je vais insérer le code html 
const cartItems = document.querySelector("#cart__items");
//console.log(cartItems); 

//si le panier est vide
if(cartArray === null) {
    
}else {
//si le panier n'est pas vide, on affiche les produits dans le localStorage
//boucle qui indique le nombre d'éléments dans le localStorage

for (let product in cartArray){

//je crée l'élément article
let article = document.createElement("article");
document.querySelector("#cart__items").appendChild(article);
article.className = "cart__item";
article.setAttribute('data-id', 'cartArray[product].productId');

//je crée l'élément div dans article 
let div = document.createElement("div");
article.appendChild(div);
div.className = "cart__item__img";

//je crée l'élément image dans la div 
let img = document.createElement("img");
div.appendChild(img);
img.src = cartArray[product].useImg;

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
title.innerHTML = cartArray[product].useName; 


//je crée l'élément p qui sera le prix dans la div titlePrice grâce à fetch 

/*fonction pour aller chercher les données dans l'API*/
let productData = []; // les données sont contenues dans une variable
async function fetchProduct() {//fonction pour fetch
    await fetch('http://localhost:3000/api/products/')
        .then((res) => res.json())
        .then((data) => (productData = data)); 
};       
fetchProduct();//je passe les données recueillies par fetch à la variable productData

/*fonction pour afficher les données dans le navigateur web*/
async function productDisplay () { //fonction d'affichage
    await fetchProduct();
   // fetchProduct est appelé pour la fonction productDisplay
   
    let productPrice = document.createElement("p");
    itemContentTitlePrice.appendChild(productPrice);
    productPrice.innerHTML = productData[product].price + "€"
    productPrice.setAttribute('id', 'priceFetch')
    
}

productDisplay();
    
//je crée l'élément p qui sera la couleur dans la div titlePrice
let productColor = document.createElement("p");
itemContentTitlePrice.appendChild(productColor);
productColor.innerHTML = cartArray[product].useColor; 

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
inputQuantity.value = cartArray[product].useQuantity;
inputQuantity.setAttribute("type", "number");
inputQuantity.className = "itemQuantity";
//inputQuantity.setAttribute('id', 'itemQ');
inputQuantity.setAttribute("name", "itemQuantity");
inputQuantity.setAttribute("min", "1");
inputQuantity.setAttribute("max", "100");


//je crée une deuxième sous-div dans la div settings
let itemContentSettingsDelete = document.createElement("div");
itemContentSettings.appendChild(itemContentSettingsDelete);
itemContentSettingsDelete.className = "cart__item__content__settings__delete";

//je crée une sous-div dans cette deuxième sous-div delete
let productDelete = document.createElement("p");
itemContentSettingsDelete.appendChild(productDelete); 
productDelete.className = "deleteItem";
productDelete.innerHTML = "supprimer";

}}; 

// création du total des quantités
//fonction du total des quantités
function totalQuantities () {
 let itemTotalQ = document.getElementsByClassName('itemQuantity');
 let totalProducts = itemTotalQ.length,
 totalQuantity = 0;

 for (let i = 0; i < totalProducts; ++i) {
     totalQuantity += itemTotalQ[i].valueAsNumber;
 }
// j'affiche l'élément du total quantités
 let productTotalQuantity = document.getElementById('totalQuantity');
 productTotalQuantity.innerHTML = totalQuantity;
 //console.log(totalQuantity);
}
totalQuantities()


//création du calcul des prix 
//fonction pour aller chercher les données dans l'API
let productData = []; // les données sont contenues dans une variable
async function fetchProduct() {//fonction pour fetch
    await fetch('http://localhost:3000/api/products/')
        .then((res) => res.json())
        .then((data) => (productData = data)); 
};       
fetchProduct();//je passe les données recueillies par fetch à la variable productData

//fonction pour calculer la somme totale 
async function totalPrice () { //fonction d'affichage
    await fetchProduct();


totalItem = 0
let itemTotalQ = document.getElementsByClassName('itemQuantity');
for (let product in cartArray){
    //le prix total est égal à la valeur de quantité de chaque produit 
    //multiplié par le prix de celui-ci
    totalItem += (itemTotalQ[product].valueAsNumber * productData[product].price);
    let productTotalPrice = document.getElementById('totalPrice');
    productTotalPrice.innerHTML = totalItem;
    //console.log(totalItem);
   }
}
totalPrice()
