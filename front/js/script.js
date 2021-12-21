// Etape 3 du projet : Affichage des produits dans la page d'accueil (index.html)

// Je sélectionne et stocke la balise Section items
const itemsContainer = document.querySelector('.items');
console.log(itemsContainer);

/*Je crée un tableau d'objets*/
const products = [
    {
    colors:[ "Blue", "white", "black"],
    _id: "107fb5b75607497b96722bda5b504926",
    name: "Kanap Sinopé",
    price: 1849,
    imageUrl:"http://localhost:3000/images/kanap01.jpeg",
    description:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    altTxt:"Photo d'un canapé bleu, deux places"
    },
    
    {
        colors:["Black/Yellow","Black/Red"],
        _id: "415b7cacb65d43b2b5c1ff70f3393ad1",
        name: "Kanap Cyllène",
        price: 4499,
        imageUrl:"http://localhost:3000/images/kanap02.jpeg",
        description:"Morbi nec erat aliquam, sagittis urna non, laoreet justo. Etiam sit amet interdum diam, at accumsan lectus.",
        altTxt:"Photo d'un canapé jaune et noir, quattre places"
    },
    
    {
        colors:["Green","Red","Orange"],
        _id: "055743915a544fde83cfdfc904935ee7",
        name: "Kanap Cyllène",
        price: 3199,
        imageUrl:"http://localhost:3000/images/kanap03.jpeg",
        description:"Pellentesque fermentum arcu venenatis ex sagittis accumsan. Vivamus lacinia fermentum tortor.Mauris imperdiet tellus ante.",
        altTxt:"Photo d'un canapé d'angle, vert, trois places"
    },
    
    {
        colors:["Pink","White"],
        _id: "a557292fe5814ea2b15c6ef4bd73ed83",
        name: "Kanap Autonoé",
        price: 1499,
        imageUrl:"http://localhost:3000/images/kanap04.jpeg",
        description:"Donec mattis nisl tortor, nec blandit sapien fermentum at. Proin hendrerit efficitur fringilla. Lorem ipsum dolor sit amet.",
        altTxt:"Photo d'un canapé rose, une à deux place"
    },

    {
        colors:["Grey","Purple","Blue"],
        _id: "8906dfda133f4c20a9d0e34f18adcf06",
        name: "Kanap Eurydomé",
        price: 2249,
        imageUrl:"http://localhost:3000/images/kanap05.jpeg",
        description:"Ut laoreet vulputate neque in commodo. Suspendisse maximus quis erat in sagittis. Donec hendrerit purus at congue aliquam.",
        altTxt: "Photo d'un canapé gris, trois places"
    },
   
    {
        colors:["Grey","Navy"],
        _id: "77711f0e466b4ddf953f677d30b0efc9",
        name: "Kanap Hélicé",
        price: 999,
        imageUrl:"http://localhost:3000/images/kanap06.jpeg",
        description:"Curabitur vel augue sit amet arcu aliquet interdum. Integer vel quam mi. Morbi nec vehicula mi, sit amet vestibulum.",
        altTxt: "Photo d'un canapé gris, deux places"
    },
   
    {
        colors:["Red","Silver"],
        _id: "034707184e8e4eefb46400b5a3774b5f",
        name: "Kanap Thyoné",
        price: 1999,
        imageUrl:"http://localhost:3000/images/kanap07.jpeg",
        description:"EMauris imperdiet tellus ante, sit amet pretium turpis molestie eu. Vestibulum et egestas eros. Vestibulum non lacus orci.",
        altTxt: "Photo d'un canapé rouge, deux places"
    },
   
    {
        colors:[ "Pink","Brown","Yellow","White"],
        _id: "a6ec5b49bd164d7fbe10f37b6363f9fb",
        name: "Kanap orthosie",
        price: 3999,
        imageUrl:"http://localhost:3000/images/kanap08.jpeg",
        description:"Mauris molestie laoreet finibus. Aenean scelerisque convallis lacus at dapibus. Morbi imperdiet enim metus rhoncus.",
        altTxt: "Photo d'un canapé rose, trois places"
    }
    ]; 

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
      
    console.log(productData);//vérification que l'on a bien les données dans la console
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






    
    

    
    







