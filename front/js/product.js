


// étape 7 : ajouter des produits dans le panier 

//Panier
const choixColor = document.querySelector("colors");
const choixQuantity = document.querySelector("quantity"); 
const ajouterAuPanier = document.querySelector("addToCart"); 

//Ecouter le bouton addToCart 
ajouterAuPanier.addEventListener("click", (event) => {
  event.preventDefault(); 

//Mettre le choix de l'utilisateur dans une variable// 
let colorUse = choixColor.ariaValueMax; 
let quantityUse = choixQuantity.ariaValueMax; 

//Récupération des valeurs de la page produit//
let optionsProduit = {
  nomProduit: produitName,
  idProduitChoisi: idProduit,
  quantityProduit: quantityUse,
  colorProduit: colorUse 
}; 
console.log(optionsProduit);
console.log(JSON.stringify(optionsProduit));
console.log(optionsProduit.nomProduit);


//Déclaration de la variable "produitLocalStorage"//
let produitLocalStorage = JSON.parse(localStorage.getItem(""));
console.log(produitLocalStorage); 

//si des produits sont déjà enregistrés dans le local storage//
if (produitLocalStorage) {

  
} else {
  produitLocalStorage = [];

  console.log(produitLocalStorage); 
  produitLocalStorage.push(optionsProduit); 
}

}); 


