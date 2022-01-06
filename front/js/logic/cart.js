// modification d'une quantité dans le panier

function changeQ() {
    //je sélectionne l'élément quantité que l'on peut modifier
    let numberDisplay = document.querySelectorAll(".itemQuantity");
    for (let l = 0; l < numberDisplay.length; l++) {//création d'une recherche des quantités dans le panier avec une boucle 
        numberDisplay[l].addEventListener('change', () => {
            //je crée la variable pour parcourir les quantités dans le tableau 
            let changeDisplay = cart[l].useQuantity;
            //je crée la variable pour afficher la valeur numérique 
            let numberDisplayResult = numberDisplay[l].valueAsNumber;
            //je crée une variable qui montre les résultats de la recherche dans la tableau
            /* dans le tableau, recherche d'un produit avec sa valeur numérique qui doit être strictement inégale
            à la quantité déjà inscrite 
            */
            const resultFind = cart.find((product) => product.numberDisplayResult !== changeDisplay);
           
             // la quantité modifiée du produit est affichée dans l'emplacement prévu
            resultFind.useQuantity = numberDisplayResult;
    
            cart[l].useQuantity = resultFind.useQuantity;
            localStorage.setItem("cart", JSON.stringify(cart));

        })
    }
}      
changeQ();


//suppression d'une quantité dans le panier 


// étape 10 : passer la commande

//sélection du bouton "commmander"
const orderBtn = document.querySelector("#order");

//écoute du bouton order
orderBtn.addEventListener("click", (event) => {
    event.preventDefault();



// création d'une classe pour mettre l'objet dans lequel vont les valeurs du formulaire
/*class form{
    constructor(input){
    //constructor est une méthode pour utiliser et initialiser un objet lorsqu'on utilise le mot clé class
    this.firstName = document.querySelector("#firstName").value;
    this.lastName = document.querySelector("#lastName").value;
    this.address = document.querySelector("#address").value;
    this.city = document.querySelector("#city").value;
    this.email = document.querySelector("#email").value;
    this.input = document.querySelector(`#${input}`).value
    }
}

//appel de l'instance de class form pour créer l'objet formValues
const formValues = new form();
console.log(formValues)
console.log("formValues")
*/

//récupération des valeurs du formulaire pour les mettre dans le localStorage
/*localStorage.setItem("firstName", document.querySelector("#firstName").value);
localStorage.setItem("lastName", document.querySelector("#lastName").value);
localStorage.setItem("address", document.querySelector("#address").value);
localStorage.setItem("city", document.querySelector("#city").value);
localStorage.setItem("email", document.querySelector("#email").value);


//mettre les valeurs du formulaire dans un objet 
const form = {
    firstName: localStorage.getItem("firstName"),
    lastName: localStorage.getItem("lastName"),
    address: localStorage.getItem("address"),
    city: localStorage.getItem("city"),
    email : localStorage.getItem("email"),
}
console.log("form")
console.log(form)
*/


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

//mettre l'objet "formValues" dans le localStorage
//localStorage.setItem("formValues", JSON.stringify(formValues))




//mettre les valeurs du formulaire et les produits sélectionnés dans un objet à envoyer au serveur
/*const sendForm = {
    cart, 
    formValues
}
console.log("sendForm")
console.log(sendForm)
*/







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
        addressErrorMsg.innerHTML = "correct"
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

//mettre les valeurs du formulaire et les produits dans un objet à envoyer au serveur
/*const sendForm = {
    cart,
    formValues,
};
console.log("sendForm");
*/


//mettre les valeurs du formulaire et les produits sélectionnés dans un objet à envoyer au serveur
const order = { 
    cart, //tableau de produits
    formValues //objet de contact 
};
console.log("order")
console.log(order)


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


    
  
