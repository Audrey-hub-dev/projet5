// étape 4 : faire le lien entre un produit de la page d'accueil et la page produit
// étape 5 : récupérer l'id du produit à afficher 

var str = window.location.href;
var url = new URL(str);
var productId = url.searchParams.get("_id");
//console.log(productId);


// étape 6 : insérer un produit et ses détails dans la page produit 

// Récupération des articles de l'API avec fetch 

let productData = [];
 
// fonction de recueil des données via l'API 
async function fetchProduct() {
  await fetch(`http://localhost:3000/api/products/` + productId)
 
  .then((res) => res.json()) 
  .then((data) => { 
    
    productData = data
    //console.log(data);
  });

};


let img = document.querySelector(".item__img");
img.setAttribute('id', 'imagek'); 

// fonction d'affichage des éléments du produit 

async function productDisplay() {
  await fetchProduct();
  
  document.getElementById("imagek").innerHTML = `<img src=${productData.imageUrl} alt=${productData.altTxt}>`
  document.getElementById("title").innerHTML = `<h1>${productData.name}</h1>`
  document.getElementById("price").innerHTML = `<span>${productData.price}</span>`
  document.getElementById("description").innerHTML = `<p>${productData.description}</description>`

  
  let select = document.getElementById("colors")
  //console.log(select);

  //console.log(productData.colors);
  productData.colors.forEach((colors) => { // on utilise une boucle pour parcourir le tableau
    
  let tagOption = document.createElement("option");

    tagOption.innerHTML = `${colors}`;
    tagOption.value =`${colors}`; 

    //où doit se trouver le nouvel élément crée option : option est un enfant de select.
    select.appendChild(tagOption);

  }
  );
};

productDisplay()

// création de la balise form pour actionner le bouton
let form = document.querySelector(".item__content__addButton");
form.setAttribute('id', 'anchorCart'); 
document.getElementById("anchorCart").innerHTML = `<form action="./cart.html"><button id="addToCart">Ajouter au panier</button></form>`
