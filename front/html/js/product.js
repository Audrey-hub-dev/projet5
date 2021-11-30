
/** The using of localStorage */

const idForm = document.querySelector("item__content__settings"); 
const ajouterAuPanier = document.querySelector("item__content__addButton"); 


//Ecouter le bouton//
ajouterAuPanier.addEventListener("click", (event) => {
  event.preventDefault();

//Mettre le choix de l'utilisateur dans une variable// 
const choixFormulaire = idForm.ariaValueMax;
console.log(choixFormulaire);

//Récupération des valeurs de la page produit//
let optionsProduit = {
  nomProduit: idProduitChoisi.nomProduit,
  id_ProduitChoisi: idProduitChoisi._id, 
  option_produit: choix,
  couleur:bl, 
  quantity: 1,
}; 
console.log(optionsProduit);
//peut-être prendre les valeurs codées en HTML ? //

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

