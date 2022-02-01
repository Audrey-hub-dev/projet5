//étape 11
//sélection élément du DOM pour le positionnement de l'id
const orderId = document.querySelector("#orderId")
//récupération de l'id de la commande provenant du serveur dans le localStorage
orderId.innerHTML = localStorage.getItem("orderId")
//supprimer tout le localStorage
localStorage.clear()

