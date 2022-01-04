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

// on le sélectionne de l'identifiant du produit et/ ou de la quantité à modifier