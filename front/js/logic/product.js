//fonction ajout au panier 
function addToProductArray () {
    let btn = document.getElementById("addToCart");
      btn.addEventListener("click", (event) => {
  
    let productArray = JSON.parse(localStorage.getItem("product")); 
    let quantity = document.getElementById("quantity");
    let select = document.getElementById("colors");
    let optionQuantity = quantity.value;
    let optionColor = select.value;
      console.log(optionQuantity);
      console.log(optionColor);
      console.log(productArray);
    
    //pour voir la couleur choisie et la quantité choisie dans l'array du localStorage
    const addColorQuantity = Object.assign({}, productData, {//on assigne à notre objet (produit) une couleur et une quantité
    color : `${optionColor}`,
    quantity : `${optionQuantity}`
    });
    console.log(addColorQuantity);
  
    //récupération des données de l'article à ajouter
    let newProduct = {
      id: productId,
      useColor: optionColor,
      useQuantity: optionQuantity,
      useImg: productData.imageUrl,
      useName: productData.name,
      usePrice: productData.price,
    };
      console.log(newProduct);
  
    //fonction de refactorisation dans la condition if/else : ajouter un produit sélectionné 
    //dans le localStorage
    function addProductLocalStorage () {
    productArray.push(newProduct);//on pousse le produit dans le panier
    localStorage.setItem("product", JSON.stringify(productArray));/*on convertit le javascript en chaine 
    de caractère JSON pour que le produit apparaisse dans le localStorage*/
    }
  
  
  // condition si déjà présent (if) ou non (else)
  
  if (productArray) {// si dans le panier il y a déjà un produit 
    let resultFind = //création variable de la recherche d'un résultat dans le panier 
    productArray.find ( //find permet de chercher un élément sur un tableau par rapport à une condition 
    (product) => product.id === productId && product.useColor === optionColor);
    /*si dans le panier, l'id du produit est égal à l'id du produit que l'on souhaite ajouter
    et que la couleur du produit est égal à la couleur du produit que l'on souhaite ajouter
    alors find retourne l'élément en question*/
      if(resultFind) { // si il trouve un produit même couleur même id 
        resultFind.useQuantity++;// il ajoute une quantité à celle déjà présente 
        localStorage.setItem("product", JSON.stringify(productArray));
  
      }else if (resultFind === undefined) { //si il n'y a pas de produit même couleur avec même id dans le panier 
  
        newProduct.useQuantity = 1 // il crée une quantité 
        addProductLocalStorage(); 
    }
  }
  else { //sinon le panier est vide 
      productArray = []
      addProductLocalStorage(); 
      }
    }
      )}
   
  addToProductArray(productData)/*paramètre product Data car on récupère ce paramètre une fois qu'il est passé dans ce productDisplay, on ne veut pas récupérer productData vide*/
  
          
       
  