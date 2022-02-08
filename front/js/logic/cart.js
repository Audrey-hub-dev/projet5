//étape 9

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
                //création de la nouvelle quantité 
                cartArray[l].useQuantity = listenQuantity;
                //sauvegarde de la nouvelle quantité 
                localStorage.setItem("cart", JSON.stringify(cartArray));

            }
            
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
        //j'utilise la méthode splice pour retirer un élément du tableau dans le localStorage
        cartArray.splice(j, 1) 
        //création alerte à confirmer pour le produit à supprimer 
        let proceed = confirm("Etes-vous sûr de vouloir supprimer ce produit?")
        if (proceed) {
            //sauvegarde du nouveau panier dans le localStorage
            localStorage.setItem('cart', JSON.stringify(cartArray))

        }else{

        } 
        
        })
    }
}

deleteItem();


// étape 10 : passer la commande

//sélection du formulaire 
let form = document.querySelector(".cart__order__form");

//expression de fonction pour le prénom, le nom et la ville car même expression régulière
let regExFirstLastCity = new RegExp("^[A-Za-z'zéèêëàâîïôöûüçÀÂÉÈÔÙÛÇ-]{3,30}$")
    
//expression de fonction pour l'adresse postale
 let regExAddress = new RegExp("^[A-Za-z0-9]{2,50}|[A-Za-z]{2,50}&(?:(?:[,. ]){1}[-a-zA-Zàâäéèêëïîôöùûüç]+)+$")
    
//expression de fonction pour l'email
 let regExEmail = new RegExp("^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$")
    

//ecouter la modification du prénom
form.firstName.addEventListener('change', function() {
    validFirstName(this);
});
//contrôle de la saisie du prénom 
const validFirstName = function(inputFirstName) {
    let testFirstName = regExFirstLastCity.test(inputFirstName.value);
    let firstNameErrorMsg = inputFirstName.nextElementSibling;

    if (testFirstName) { //si testFirstName vrai, je récupère la balise suivante qui est emailErrorMsg
    // et on change la balise qui est juste en dessous
        firstNameErrorMsg.innerHTML = ""
    }
    else{
        firstNameErrorMsg.innerHTML = "prénom non valide"
    }
};

//ecouter la modification du nom 
form.lastName.addEventListener('change', function() {
    validLastName(this);
});
//contrôle de la saisie du nom 
const validLastName = function(inputLastName) {
    let testLastName = regExFirstLastCity.test(inputLastName.value);
    let lastNameErrorMsg = inputLastName.nextElementSibling;

    if (testLastName) { 
        lastNameErrorMsg.innerHTML = ""
    }
    else{
        lastNameErrorMsg.innerHTML = "nom non valide"
    }
};

//ecouter la modification de l'adresse
form.address.addEventListener('change', function() {
    validAddress(this);
});
//contrôle de la saisie de l'adresse
const validAddress = function(inputAddress) {
    let testAddress = regExAddress.test(inputAddress.value);
    let addressErrorMsg = inputAddress.nextElementSibling;
 
    if (testAddress) { 
        addressErrorMsg.innerHTML = ""
    }
    else{
        addressErrorMsg.innerHTML = "adresse non valide"
    }
};

//ecouter la modification de la ville
form.city.addEventListener('change', function() {
    validCity(this);
});
//contrôle de la saisie de la ville
const validCity = function(inputCity) {
    let testCity = regExFirstLastCity.test(inputCity.value);
    let cityErrorMsg = inputCity.nextElementSibling;
    
    if (testCity) { 
        cityErrorMsg.innerHTML = ""
    }
    else{
        cityErrorMsg.innerHTML = "ville non valide"
    }
};


//ecouter la modification de l'email 
form.email.addEventListener('change', function() {
    validEmail(this);
});
//contrôle de la saisie de l'email
const validEmail = function(inputEmail) {
    let testEmail = regExEmail.test(inputEmail.value);
    let emailErrorMsg = inputEmail.nextElementSibling;
   
    if (testEmail) { 
        emailErrorMsg.innerHTML = ""
    }
    else{
        emailErrorMsg.innerHTML = "email non valide"
    }
};



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
    //console.log("formValues")
    //console.log(formValues)

        //le bouton commander s'active uniquement si le formulaire est bien rempli et que 
        //le panier contient au moins un article
        if (validFirstName(form.firstName) 
            && validLastName(form.lastName)
            && validAddress (form.address)
            && validCity (form.city)
            && validEmail (form.email)
            && cartArray != [])
             {
               form.click();
                //sauvegarde des données du formulaire dans le localStorage
                localStorage.setItem("formValues", JSON.stringify(formValues));
            }  

        // constitution d'un objet tableau de produits 
        let arrayProducts = [];
        for (let i = 0; i<cartArray.length;i++) {
            arrayProducts.push(cartArray[i].id);
        }
        //mettre les valeurs du formulaire et les produits sélectionnés dans un objet à envoyer au serveur

        const order = { 
            // constitution d'un objet contact à partir des données du formulaire
            contact: formValues,
            products : arrayProducts, 
        };

        const promise = {
            method: "POST",
            body: JSON.stringify(order),
            headers: {
                'Accept': 'application/json',
                "Content-Type" : "application/json",
            }
        };
        //console.log(promise)
        fetch("http://localhost:3000/api/products/order", promise)
        .then((response) => response.json())
        .then((data) => {
            //console.log(data);
            //mettre l'id dans le localStorage
            localStorage.setItem("orderId", data.orderId);
            //rediriger vers la page confirmation 
            window.location = 'confirmation.html'
          
        })
        .catch((err) => {
            alert ("Erreur : " + err.message);
        });


}); //fin écoute du bouton order






