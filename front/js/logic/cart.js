// modification d'une quantité dans le panier

function changeQ() {
    //je sélectionne l'élément quantité que l'on peut modifier
    let numberDisplay = document.querySelectorAll(".itemQuantity");
    for (let l = 0; l < numberDisplay.length; l++) {//création d'une recherche des quantités dans le panier avec une boucle 
        numberDisplay[l].addEventListener('change', () => {
            //je crée la variable pour parcourir les quantités dans le tableau 
            let changeDisplay = productArray[l].useQuantity;
            //je crée la variable pour afficher la valeur numérique 
            let numberDisplayResult = numberDisplay[l].valueAsNumber;
            //je crée une variable qui montre les résultats de la recherche dans la tableau
            /* dans le tableau, recherche d'un produit avec sa valeur numérique qui doit être strictement inégale
            à la quantité déjà inscrite 
            */
            const resultFind = productArray.find((product) => product.numberDisplayResult !== changeDisplay);
           
             // la quantité modifiée du produit est affichée dans l'emplacement prévu
            resultFind.useQuantity = numberDisplayResult;
    
            productArray[l].useQuantity = resultFind.useQuantity;
            localStorage.setItem("cart", JSON.stringify(productArray));

        })
    }
}      
changeQ();


//suppression d'une quantité dans le panier 


// étape 10 : passer la commande

//sélection du bouton "commmander"
const orderBtn = document.querySelector("#order");

//écoute du bouton order
orderBtn.addEventListener("click", () => {


// création d'une classe pour mettre l'objet dans lequel vont les valeurs du formulaire
class form{
    constructor(){
    //constructor est une méthode pour utiliser et initialiser un objet lorsqu'on utilise le mot clé class
    this.firstName = document.querySelector("#firstName").value;
    this.lastName = document.querySelector("#lastName").value;
    this.address = document.querySelector("#address").value;
    this.city = document.querySelector("#city").value;
    this.email = document.querySelector("#email").value

}}

//appel de l'instance de class form pour créer l'objet formValues
const formValues = new form();
console.log(formValues)


//gestion des expressions régulières et de l'envoie au serveur 


//contrôle du prénom
function controlFirstName() {
    let firstNameRegex = formValues.firstName;
    let firstErrorMsg = document.getElementById("firstNameErrorMsg");

    //contrôle des expressions régulières
    if (/^[A-Za-z]{3,30}$/.test(firstNameRegex)) {// utilisation des expressions régulières
        //uniquement les lettres de a à z, min 2 caractères et max 25
        firstErrorMsg.innerHTML = "correct"
        console.log("ok")

    }else{
        firstErrorMsg.innerHTML = "Le champ n'est pas correct"
        console.log(firstErrorMsg)
    }

    //validation pour l'envoie au serveur 
    if ((/^[A-Za-z]{3,30}$/.test(firstNameRegex))) {
        //Mettre les valeurs (l'objet formValues) dans le localStorage
        localStorage.setItem("firstName", JSON.stringify(firstName));

    }else{
        alert("veuillez renseigner correctement les champs")

    }
}
controlFirstName()

//contrôle du nom 
function controlLastName() {
    let lastNameRegex = formValues.lastName;
    let lastErrorMsg = document.getElementById("lastNameErrorMsg");

    // contrôle expression régulière
    if (/^[A-Za-z]{3,30}$/.test(lastNameRegex)) {// utilisation des expressions régulières
        //uniquement les lettres de a à z, min 2 caractères et max 25
        lastErrorMsg.innerHTML = "correct"
        console.log("ok")

    }else{
        lastErrorMsg.innerHTML = "Le champ n'est pas correct"
        console.log(lastErrorMsg)
    }

    //validation pour l'envoie au serveur 
    if ((/^[A-Za-z]{3,30}$/.test(lastNameRegex))) {
        //Mettre les valeurs (l'objet formValues) dans le localStorage
        localStorage.setItem("lastName", JSON.stringify(lastName));

    }else{
        alert("veuillez renseigner correctement les champs")

    }
}
controlLastName()


//contrôle de l'adresse
function controlAddress() {
    let addressRegex = formValues.address;
    let addressErrorMsg = document.getElementById("addressErrorMsg");

    //contrôle expression régulière
    if (/^[0-9]{1,3}(?:(?:[,. ]){1}[-a-zA-Zàâäéèêëïîôöùûüç]+)+$/.test(addressRegex)) {/*soit donc un ensemble quelconque de chiffre suivit éventuellement d'un espace
        suivit d'un ensemble quelconque de lettres espaces virgules ou points suivit éventuellement d'un espace suivit d'une suite de 5 chiffres suivit éventuellement d'un espace suivit d'une ensemble quelconque de lettres
        */
        addressErrorMsg.innerHTML = "correct"
        console.log("ok")

    }else{
        addressErrorMsg.innerHTML = "Le champ n'est pas correct"
        console.log(addressErrorMsg)
    }

    //validation pour l'envoie au serveur 
    if(/^[0-9]{1,3}(?:(?:[,. ]){1}[-a-zA-Zàâäéèêëïîôöùûüç]+)+$/.test(addressRegex))  {
        //Mettre les valeurs (l'objet formValues) dans le localStorage
        localStorage.setItem("address", JSON.stringify(address));

    }else{
        alert("veuillez renseigner correctement les champs")

    }
}
controlAddress()


//contrôle de la ville 
function controlCity() {
    let cityRegex = formValues.city;
    let cityErrorMsg = document.getElementById("cityErrorMsg");

    //contrôle expression régulière
    if (/^[a-zéèêëàâîïôöûü-]+$/.test(cityRegex)) {
        cityErrorMsg.innerHTML = "correct"
        console.log("ok")
    }else{
        cityErrorMsg.innerHTML = "Le champ n'est pas correct"
        console.log(cityErrorMsg)
    }

    //validation pour l'envoie au serveur 
    if (/^[a-zéèêëàâîïôöûü-]+$/.test(cityRegex)) {
        //Mettre les valeurs (l'objet formValues) dans le localStorage
        localStorage.setItem("city", JSON.stringify(city));

    }else{
        alert("veuillez renseigner correctement les champs")

    }
}
controlCity()

//contrôle de l'email 
function controlEmail() {
    let emailRegex = formValues.email;
    let emailErrorMsg = document.getElementById("emailErrorMsg");

    //contrôle expression régulière
    if (/^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/ .test(emailRegex)) {
        emailErrorMsg.innerHTML = "correct"
        console.log("ok")
    }else{
        emailErrorMsg.innerHTML = "Le champ n'est pas correct"
        console.log(emailErrorMsg)
    }

    //validation pour l'envoie au serveur 
    if(/^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/ .test(emailRegex))  {
        //Mettre les valeurs (l'objet formValues) dans le localStorage
        localStorage.setItem("email", JSON.stringify(email));

    }else{
        alert("veuillez renseigner correctement les champs")

    }
}
controlEmail()


 //Mettre les valeurs (l'objet formValues) dans le localStorage
 //localStorage.setItem("formValues", JSON.stringify(formValues));


//mettre les valeurs du formulaire et les produits dans un objet à envoyer au serveur
const formProduct = {
    formValues,
    productArray
}
console.log(formProduct)

}); 

//fin écoute du bouton commander 


//sauvegarder les champs du formulaire 
//chercher la key dans le loaclStorage et la mettre dans une variable
const dataForm = localStorage.getItem("formValues");
const dataFormArray = JSON.parse(dataForm);

//mettre les values du localStorage dans les champs du formulaire
//document.querySelector("#firstName").setAttribute('value', dataFormArray.firstName)


// fonction pour sauvegarder 
function saveForm(input) {
    document.querySelector(`#${input}`).value = dataFormArray[input]; 
};

saveForm("firstName");
saveForm("lastName");
saveForm("address");
saveForm("city");
saveForm("email")

console.log("dataFormArray"); 


    
  