// modification d'une quantité dans le panier
function quantityMod() {
    //je sélectionne l'élément quantité que l'on peut modifier
    //je crée la variable pour parcourir les quantités dans le tableau 
    let itemQMod = document.querySelectorAll(".itemQuantity");
   

    for (let l = 0; l < itemQMod.length; l++){
         //création d'une recherche des quantités dans le panier avec une boucle 
        itemQMod[l].addEventListener("change" , (event) => {//écoute des changements de quantités
            event.preventDefault();

            //création d'une variable pour cibler les quantités de 1 à 100
            //1 étant le minimum et 100 étant le maximum
            let input = event.target
            if (isNaN(input.value) || input.value <= 0 || 101 <= input.value) {
                input.value = 1
            }
        
           //création d'une variable qui repère les quantités à modifier 
            let listenModif = cartArray[l].useQuantity;
            //écoute du changement de la valeur de quantité 
            let listenQuantity = itemQMod[l].value;
            
            //création d'une fonction pour repérer si le produit désigné a subi une modification de quantité 
            let resultFind = cartArray.find(
                (product) => product.listenQuantity !== listenModif);
            
                
            if (resultFind != listenModif) {//si le produit a subi une modification de quantité 
                //écoute du changement de quantité dans qttModif
                //resultFind.itemQMod = listenQuantity;
                //création de la nouvelle quantité 
                cartArray[l].useQuantity = listenQuantity;
                //sauvegarde de la nouvelle quantité 
                localStorage.setItem("cart", JSON.stringify(cartArray));

            }
            //else{// si le produit n'a subi aucune modification de quantité 
                //la quantité reste la même 
                //cartArray[l].useQuantity = listenQuantity;
                //sauvegarde de la nouvelle quantité 
                //localStorage.setItem("cart", JSON.stringify(cartArray));

            //}   
        })
    }
}
quantityMod();



//suppression d'une quantité dans le panier 
function deleteItem() {
    //je sélectionne le bouton dans le html
    let buttonClicked = document.querySelectorAll(".deleteItem");
    //je crée une boucle pour parcourir tous les éléments du tableau 
    for (let j = 0; j < buttonClicked.length; j+=1){
        //écoute du bouton supprimer
        buttonClicked[j].addEventListener("click" , (event) => {
        event.preventDefault(); 

        //buttonClicked = target //je définis le bouton comme une cible pour pouvoir agir dessus
        let buttonClicked = event.target
        //j'utilise la méthode element.closest 
        buttonClicked.parentElement.parentElement.parentElement.parentElement.remove()
        //j'utilise la méthode splice pour retire un élément du tableau dans le localStorage
        cartArray.splice(j, 1) 
        //création alerte à confirmer pour le produit à supprimer 
        confirm("Etes-vous sûr de vouloir supprimer ce produit?")
        //sauvegarde des éléments supprimés dans le localStorage
        localStorage.setItem('cart', JSON.stringify(cartArray))
        
        })
    }}

deleteItem();










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
