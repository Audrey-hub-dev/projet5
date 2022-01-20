// modification d'une quantité dans le panier

/*function changeQ() {
    //je sélectionne l'élément quantité que l'on peut modifier
   var numberDisplay = document.querySelectorAll(".itemQuantity") ;
    console.log(numberDisplay)
    

 
    //let numberDisplay = document.getElementsByClassName("itemQuantity") ;
    //je crée la variable pour parcourir les quantités dans le tableau 
    
   

    for (let i in numberDisplay) {
      

   //création d'une recherche des quantités dans le panier avec une boucle 
        addEventListener('change', (event) => {
            event.preventDefault();
            
            
            let numberDisplay = document.querySelectorAll(".itemQuantity") ;
    console.log(numberDisplay)
           
            let changeDisplay = cartArray[i].numberDisplay[i];
            //je crée la variable pour afficher la valeur numérique 
            let numberDisplayResult = numberDisplay[i].valueAsNumber;
            //je crée une variable qui montre les résultats de la recherche dans la tableau
            /* dans le tableau, recherche d'un produit avec sa valeur numérique qui doit être strictement inégale
            à la quantité déjà inscrite 
            */
        


           /*const resultFind = cartArray.find((product) =>
            
            
            
            
            product.numberDisplayResult
            
            
            !== changeDisplay);
           
           
             // la quantité modifiée du produit est affichée dans l'emplacement prévu
          resultFind.numberDisplay = numberDisplayResult
    
            cartArray[i].useQuantity = resultFind.useQuantity;
            
            
            localStorage.setItem("cart", JSON.stringify(cartArray));

        })
    
}   }   
changeQ();

*/

//function changeQ() {

//var numberDisplay = document.querySelectorAll(".itemQuantity")

//for (var i = 0; i < numberDisplay.length; i++) 
//numberDisplay[i].addEventListener("change", function(event){

//var quantityMod = document.querySelectorAll(".itemQuantity")

//for (var i = 0; i < cartArray.length; i++) 
   

    /*var quantityMod = document.querySelectorAll(".itemQuantity")
    var quantity = document.getElementById("quantity");
    var optionQuantity = quantity
    var useQuantity = optionQuantity
    let cartArray = JSON.parse(localStorage.getItem("cart")); 
for (var i=0; i < quantityMod.length; i++) {
   
    quantityMod[i].addEventListener("change", function(event){
        
        var qqMod = useQuantity

        var quantityValue = quantityMod[i]

//console.log(quantity)

const resultFind = cartArray.find((el) => el.quantityValue !== qqMod);

       resultFind.useQuantity = quantityValue    
            cartArray[i].useQuantity = resultFind.useQuantity;
    
localStorage.setItem("cart", JSON.stringify(cartArray));


    
 }
 
    )}
}

changeQ()
*/



/*let quantityMod = document.querySelectorAll('.itemQuantity');
let i = quantityMod.length;


    
  

function changeQ() {
    quantityMod[i].addEventListener("change", changeQ => {
       
let qqMod = cartArray[i].useQuantity
let quantityValue = quantityMod[i].value
    const resultFind = cartArray.find((el) => el.quantityValue !== qqMod);

    resultFind.useQuantity = quantityValue    
         cartArray[i].useQuantity = resultFind.useQuantity;
 
         localStorage.setItem("cart", JSON.stringify(cartArray));



}
    )}

    changeQ()

*/


/*let quantityMod = document.querySelectorAll('.itemQuantity');
document.getElementsByName("itemQuantity") [0].addEventListener('change',modQuantity );
 
function modQuantity() {
    for (var i = 0; i < quantityMod.length; i++)   {    
let qqMod = cartArray.useQuantity
let quantityValue = quantityMod.value
    if (resultFind = cartArray.find((el) => el.quantityValue !== qqMod)) {

    resultFind.useQuantity = quantityValue    
         cartArray.useQuantity = resultFind.useQuantity;
 
         localStorage.setItem("cart", JSON.stringify(cartArray));


}else{
    localStorage.setItem("cart", JSON.stringify(cartArray));
}





}
}
*/

function changeQ() {
    //je sélectionne l'élément quantité que l'on peut modifier
    let numberDisplay = document.querySelectorAll(".itemQuantity");
    for (let i = 0; i < numberDisplay.length; i++) {//création d'une recherche des quantités dans le panier avec une boucle 
        numberDisplay[i].addEventListener('change', () => {
            //je crée la variable pour parcourir les quantités dans le tableau 
            let changeDisplay = cart[i].useQuantity;
            //je crée la variable pour afficher la valeur numérique 
            let numberDisplayResult = numberDisplay[i].valueAsNumber;
            //je crée une variable qui montre les résultats de la recherche dans la tableau
            /* dans le tableau, recherche d'un produit avec sa valeur numérique qui doit être strictement inégale
            à la quantité déjà inscrite 
            */
            const resultFind = cart.find((product) => product.numberDisplayResult !== changeDisplay);
           
             // la quantité modifiée du produit est affichée dans l'emplacement prévu
            resultFind.useQuantity = numberDisplayResult;
    
            cart[i].useQuantity = resultFind.useQuantity;
            localStorage.setItem("cart", JSON.stringify(cart));

        })
    }
}      
changeQ();














/*function qq() {

let numberDisplay = document.querySelectorAll(".itemQuantity") ;
    console.log(numberDisplay)


    for ( let i=0; i< numberDisplay.length; i++) {

        //création d'une recherche des quantités dans le panier avec une boucle 
            
             numberDisplay[i].addEventListener('change',() => {
             



                let changeDisplay = cartArray[i].useQuantity;
                //je crée la variable pour afficher la valeur numérique 
                let numberDisplayResult = numberDisplay[i].valueAsNumber;
                //je crée une variable qui montre les résultats de la recherche dans la tableau
                /* dans le tableau, recherche d'un produit avec sa valeur numérique qui doit être strictement inégale
                à la quantité déjà inscrite 
                */
            
        
        
                /*let resultFind = cartArray.find((product) =>
                
                
                
                
                product.numberDisplayResult
                
                
                !== changeDisplay);
               
                
               
                 // la quantité modifiée du produit est affichée dans l'emplacement prévu
                numberDisplayResult = resultFind.numberDisplay
        
                cartArray[i].useQuantity = resultFind.useQuantity;
                
                
                localStorage.setItem("cart", JSON.stringify(cartArray));
        
            })




             }
                
            }

     qq()
        
*/





    




  







/*
// condition si déjà présent (if) ou non (else)
  
if (cartArray) {// si dans le panier il y a déjà un produit 
    let resultFind = //création variable de la recherche d'un résultat dans le panier 
    cartArray.find ( //find permet de chercher un élément sur un tableau par rapport à une condition 
    (product) => product.id === productId && product.useColor === optionColor);
    /*si dans le panier, l'id du produit est égal à l'id du produit que l'on souhaite ajouter
    et que la couleur du produit est égal à la couleur du produit que l'on souhaite ajouter
    alors find retourne l'élément en question*/
     /* if(resultFind) { // si il trouve un produit même couleur même id 
        resultFind.useQuantity++;// il ajoute une quantité à celle déjà présente 
        localStorage.setItem("cart", JSON.stringify(cartArray));
  
      }else if (resultFind === undefined) { //si il n'y a pas de produit même couleur avec même id dans le panier 
  
        //newProduct.useQuantity = 1 // il crée une quantité 
        addProductLocalStorage(); 
    }
  }
  else { //sinon le panier est vide 
      cartArray = []
      addProductLocalStorage(); 
      }
    }
      )}
   
  addToCart(productData)/*paramètre product Data car on récupère ce paramètre une fois qu'il est passé dans ce productDisplay, on ne veut pas récupérer productData vide*/
  









/*

//suppression d'une quantité dans le panier 

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)

}else {
    ready()

}


function ready() {

var removeCartItem = document.getElementsByClassName('deleteItem')
console.log(removeCartItem)

for (var i=0; i< removeCartItem.length; i++) {
    var button = removeCartItem[i]
    button.addEventListener('click', removeCartItem) 
       
    }    

var inputItemQuantity = document.getElementsByClassName('itemQuantity')
    
    for (var i=0 ; i < inputItemQuantity.length; i++) {
        var input = inputItemQuantity[i]
        input.addEventListener('change', quantityChanged)
    }

}



function removeCartItem(event) {
    
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.parentElement.parentElement.remove()
    updateCartTotal()


}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1

    }
    updateCartTotal()
}



let section = document.querySelector(".cart");
section.setAttribute('id', 'idCart'); 


function updateCartTotal() {
    var cartContainer = document.querySelector('.cart')
    var cartItemsContainer = cartContainer.querySelector('#cart__items')
    console.log(cartItemsContainer)
    var total = 0
    for (var i = 0; i < cartItemsContainer.length; i++) {
        var cartItems = cartItemsContainer[i]
        var priceElement = cartItems.getElementsByClassName('cart__item__content__titlePrice') [0]
       console.log(priceElement)
        var quantityElement = cartItems.getElementsByClassName('cart__item__content__settings__quantity') [0]
        console.log(quantityElement)

        var price = parseFloat(priceElement.innertext.replace('$', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
        console.log(price * quantity)
    }
    
    document.getElementsByClassName('cart__price')[0].innerHTML = '$' + total
    
}


*/ 


















/*



// étape 10 : passer la commande

//sélection du bouton "commmander"
const orderBtn = document.querySelector("#order");

//écoute du bouton order
orderBtn.addEventListener("click", (event) => {
    event.preventDefault();

//récupération des valeurs du formulaire 
const formValues = {
    firstName: document.querySelector("#firstName").value,
    lastName: document.querySelector("#lastName").value,
    address: document.querySelector("#address").value,
    city: document.querySelector("#city").value,
    email: document.querySelector("#email").value,
}
console.log("formValues")
console.log(formValues)


//gestion des expressions régulières et de la sauvegarde du localStorage

//expression de fonction pour le prénom, le nom et la ville car même expression régulière
let regExFirstLastCity = (value) => {
    return /^[A-Za-z'zéèêëàâîïôöûüçÀÂÉÈÔÙÛÇ-]{3,30}$/.test(value)
}
let regExAddress = (value) => {
    return /^[0-9]{1,3}(?:(?:[,. ]){1}[-a-zA-Zàâäéèêëïîôöùûüç]+)+$/.test(value)
}
let regExEmail = (value) => {
    return /^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/.test(value)
}

//contrôle du prénom
function controlFirstName() {
    let firstNameRegex = formValues.firstName;
    let firstErrorMsg = document.getElementById("firstNameErrorMsg");

    //contrôle des expressions régulières
    if (regExFirstLastCity(firstNameRegex)) {// utilisation des expressions régulières
        //uniquement les lettres de a à z, min 2 caractères et max 25
        firstErrorMsg.innerHTML = "correct"
        console.log("ok")
        return true
        

    }else{
        firstErrorMsg.innerHTML = "Le champ n'est pas correct"
        console.log(firstErrorMsg)
        return false
       
    }
};

//contrôle du nom 

function controlLastName() {
let lastNameRegex = formValues.lastName;
let lastErrorMsg = document.getElementById("lastNameErrorMsg");

// contrôle expression régulière
    if (regExFirstLastCity(lastNameRegex)) {// utilisation des expressions régulières
    //uniquement les lettres de a à z, min 2 caractères et max 25
        lastErrorMsg.innerHTML = "correct"
        console.log("ok")
        return true

    }else{
        lastErrorMsg.innerHTML = "Le champ n'est pas correct"
        console.log(lastErrorMsg)
        return false
    }
};

//contrôle de l'adresse 
function controlAddress() {
    let addressRegex = formValues.address;
    let addressErrorMsg = document.getElementById("addressErrorMsg");

    //contrôle expression régulière
    if (regExAddress(addressRegex)) {/*soit donc un ensemble quelconque de chiffre suivit éventuellement d'un espace
        suivit d'un ensemble quelconque de lettres espaces virgules ou points suivit éventuellement d'un espace suivit d'une suite de 5 chiffres suivit éventuellement d'un espace suivit d'une ensemble quelconque de lettres
        */
      /*  addressErrorMsg.innerHTML = "correct"
        console.log("ok")
        return true

    }else{
        addressErrorMsg.innerHTML = "Le champ n'est pas correct"
        console.log(addressErrorMsg)
        return false
    }
};
    
//contrôle de la ville 
function controlCity() {
    let cityRegex = formValues.city;
    let cityErrorMsg = document.getElementById("cityErrorMsg");

    //contrôle expression régulière
    if (regExFirstLastCity(cityRegex)) {
        cityErrorMsg.innerHTML = "correct"
        console.log("ok")
        return true
        
    }else{
        cityErrorMsg.innerHTML = "Le champ n'est pas correct"
        console.log(cityErrorMsg)
        return false

    }
};

//contrôle de l'email 
function controlEmail() {
    let emailRegex = formValues.email;
    let emailErrorMsg = document.getElementById("emailErrorMsg");

    //contrôle expression régulière
    if (regExEmail(emailRegex)) {
        emailErrorMsg.innerHTML = "correct"
        console.log("ok")
        return true
    }else{
        emailErrorMsg.innerHTML = "Le champ n'est pas correct"
        console.log(emailErrorMsg)
        return false
    }
};


//sauvegarde du localStorage pour l'envoie au serveur
 
if (controlFirstName() && controlLastName() && controlAddress() && controlCity() && controlEmail() ) {
    //Mettre les valeurs (l'objet formValues) dans le localStorage
    localStorage.setItem("formValues", JSON.stringify(formValues));
    
}else{
    alert("veuillez renseigner correctement les champs")
    
};

//fin de la gestion des expressions régulières et de la sauvegarde du localStorage

//mettre les valeurs du formulaire et les produits sélectionnés dans un objet à envoyer au serveur
const order = { 
    cart, //tableau de produits
    formValues //objet de contact 
};

console.log("order" + order)


const options = {
    method: 'POST',
    body: JSON.stringify(order),
    headers: {
        "Content-Type": "application/json" 
    },
};


//envoie de l'objet sendForm au serveur
fetch('http://localhost:3000/api/products/order' , options )
.then((response) => response.json())
.then((response) => console.log(response)); 


   


}); //fin écoute du bouton 


//sauvegarder les champs du formulaire 
//chercher la key dans le localStorage et la mettre dans une variable
const dataForm = localStorage.getItem("formValues");
const dataFormArray = JSON.parse(dataForm);

//mettre les valeurs du localStorage dans les champs du formulaire
//document.querySelector("#firstName").setAttribute('value', dataFormArray.firstName)


//fonction pour sauvegarder les données du formulaire 
function saveForm(input) {
    //condition pour ne pas avoir de problème dans la console si le formulaire est vide
    if (dataFormArray == null){   
        
    }else{
    document.querySelector(`#${input}`).value = dataFormArray[input]; 
    }
};

saveForm("firstName");
saveForm("lastName");
saveForm("address");
saveForm("city");
saveForm("email")

console.log("dataFormArray"); 


    
*/
