// étape 4 : faire le lien entre un produit de la page d'accueil et la page produit
// étape 5 : récupérer l'id du produit à afficher 

var str = window.location.href;
var url = new URL(str);
var productId = url.searchParams.get("_id");
console.log(productId);



// étape 6 : insérer un produit et ses détails dans la page produit 

// Récupération des articles de l'API avec fetch 



let productData = [];

  
// fonction de recueil des données via l'API 
async function fetchProduct() {
  await fetch(`http://localhost:3000/api/products/` + productId)
 
  .then((res) => res.json()) 
  .then((data) => { 
    
    productData = data
    console.log(data);
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
  console.log(select);
  
  console.log(productData.colors);
  productData.colors.forEach((colors) => { // on utilise une boucle pour parcourir le tableau
    console.log(colors); 
    let tagOption = document.createElement("option");

    tagOption.innerHTML = `${colors}`;
    tagOption.value =`${colors}`; 

    //où doit se trouver le nouvel élément crée option : option est un enfant de select.
    select.appendChild(tagOption);

  }
  )
};

productDisplay()


// création de la balise form pour actionner le bouton
let form = document.querySelector(".item__content__addButton");
form.setAttribute('id', 'anchorCart'); 
document.getElementById("anchorCart").innerHTML = `<form action="./cart.html"><button id="addToCart" onclick="setData()">Ajouter au panier</button></form>`



// étape 7 : Ajouter des produits dans le panier 

// Utilisation du localStorage





  let cart = {
  
  idProduct: "_id",
  quantityProduct: "quantity",
  colorProduct: "colors"
  }
;
console.log(cart);
console.log(JSON.stringify(cart));







function saveCart(cart/*paramètre(quel panier?)*/) {
  localStorage.setItem("cart"/*key*/, JSON.stringify(cart/*value*/)); /*stringify prend un objet 
  et le transforme en chaine de caractères */
}
saveCart()





function getCart(){
  
  
  cart = localStorage.getItem("cart"/*key*/);
  
  
  if(cart == null){
    return []; //retourne un tableau vide

  }else{
    return (cart); /*parse qui prend une chaine de caractères et
    le retrasnforme en objet*/
    
    
  }
  

}
getCart()

function addCart(product) {
  let cart = getCart() //je récupère le panier dans la variable 
  let foundProduct = find(p => p.id == product.id);
  if(foundProduct != undefined){ /*si produit différent de undefined*/
    foundProduct.quantity++; /*on ajoute 1 à la quantité*/

  }else{
    product.quantity = 1; /*je crée une quantité*/
    cart.push(product); //le panier est un tableau que l'on pousse et on ajoute le produit dans le tableau


  }
  
  saveCart(cart);//on enregistre le nouveau panier 

}
addCart()

function addToCart(product){
  /*let addToCartStorage = localStorage.getItem('colors',colors, 'quantity', quantity);
  console.log(addToCartStorage);*/
  const button = document.querySelector("#addToCart");
    button.addEventListener("click", (event) => {

      /*e.preventDefault();
      let colors = document.getElementById('colors').value;
      let quantity = document.getElementById('quantity').value;
      localStorage.setItem('colors', colors)
      localStorage.setItem('quantity', quantity)
      */
    
      let addToCartStorage = localStorage.getItem('colors', colors, 'quantity', quantity);
      if(alreadyInCart) {
        //mettre à jour la quantité
        updateQuantity(product);
      }
      else {
        //ajouter au panier
        addNewProduct(product);
      }
      
        });
  
}

addToCart() 

function setData() {
  let productId = url.searchParams.get("_id").value;
  let colors = document.getElementById('colors').value;
  let quantity = document.getElementById('quantity').value;
  localStorage.setItem('_id', productId)
  localStorage.setItem('colors', colors)//'key', value
  localStorage.setItem('quantity', quantity)
};
setData()

  
