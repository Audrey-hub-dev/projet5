// étape 4 : faire le lien entre un produit de la page d'accueil et la page produit
// étape 5 : récupérer l'id du produit à afficher 

var str = window.location.href;
var url = new URL(str);
var productId = url.searchParams.get("_id");
console.log(productId);
let product = "";

// étape 6 : insérer un produit et ses détails dans la page produit 

// Récupération des articles de l'API avec fetch 
getProduct();
function getProduct() {
    fetch(`http://localhost:3000/api/products/` + productId)
    .then((response) => response.json()) 
    .then((data) => {
        const product = data;
        productDisplay(data); 
    });

// création de la fiche produit 
    function productDisplay(product) {

      //Insertion et création des éléments des produits 
    
        let productImg = document.createElement("img");
        document.querySelector(".item__img").appendChild(productImg);
        productImg.src = product.imageUrl;
        productImg.alt = product.altTxt;

        let productName = document.getElementById('title');
        productName.innerHTML = product.name;

        let productPrice = document.getElementById('price');
        productPrice.innerHTML = product.price;

        let productDescription = document.getElementById('description');
        productDescription.innerHTML = product.description;

        for (let colors of product.colors) {
        console.log(colors);
        let productColors = document.createElement("option");
        document.querySelector("#colors").appendChild(productColors);
        productColors.value = colors;
        productColors.innerHTML = colors;
        
      }};
        productDisplay();
      }; 