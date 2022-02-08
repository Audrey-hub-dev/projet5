// Etape 3 du projet : Affichage des produits dans la page d'accueil (index.html)

// Je sélectionne et stocke la balise Section items
const itemsContainer = document.querySelector('.items');
//console.log(itemsContainer);

//Utilisation du DOM pour récupérer les éléments de la page index.html

/*je crée un lien href*/
let link = document.createElement('a');
let linkhref = document.getElementById('items');
linkhref.appendChild(link);


/*je crée une section article dans le lien*/
/*pour ce faire, je crée un identifiant au link href*/
link.setAttribute('id','anchor');
let article = document.createElement("article");
let art = document.getElementById('anchor');
art.appendChild(article);

/*je crée une balise img avec un attribut alt dans l'article*/
let img = document.createElement("img");
article.appendChild(img); 
img.setAttribute('alt', '', '');


/*je crée un titre h3 avec une class dans l'article*/
let h3 = document.createElement("h3");
article.appendChild(h3); 
h3.setAttribute('class', 'productName');

/*je crée un paragraphe avec une class dans l'article*/
let p = document.createElement("p");
article.appendChild(p);
p.setAttribute('class', 'productDescription');


/*j'utilise Fetch pour obtenir les produits de l'API*/
//pour ce faire, j'utilise la méthode async/await pour déclarer une fonction, 
//cette fonction attendra la résolution de la demande pour poursuivre.
//le console.log s'affiche après exécution de ce qui précède.


/*fonction pour aller chercher les données dans l'API*/
let productData = []; // les données sont contenues dans une variable

async function fetchProduct() {//fonction pour fetch
    await fetch('http://localhost:3000/api/products/')
        .then((res) => res.json())
        .then((data) => (productData = data)); 
      
    //console.log(productData);//vérification que l'on a bien les données dans la console
};       
fetchProduct();//je passe les données recueillies par fetch à la variable productData

/*fonction pour afficher les données dans le navigateur web*/

async function productDisplay () { //fonction d'affichage
    await fetchProduct();
   // fetchProduct est appelé pour la fonction productDisplay
    items.innerHTML = productData //endroit où sera appelé la map
        .map((product) => //chaque tour de boucle est un product
    //affichage du texte HTML 
    `<a href="./product.html?_id=${product._id}">
    <article>
    <img src=${product.imageUrl} alt=${product.altTxt}>
    <h3>${product.name}</h3>
    <p>${product.description}</p>
    </article>
    </a>`
            
    )
    .join("")//suppression des virgules par défaut
    ;
  
};
productDisplay();



    
    

    
    







