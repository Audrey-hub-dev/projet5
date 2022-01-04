/**
 * ici nous allons faire des fonctions qui gèrent le panier.
 * on doit avoir un panier.
 * -> soit il existe, soit on le crée
 */

function getCart() {
    let cart = localStorage.getItem('cart');
    return cart === null ? createEmptyCart() : cart;
}

function createEmptyCart() {
    return {
        items : [],
        totalQty : 0,
        totalPrice : 0
    };
}

function saveCart(cart) {
    localStorage.setItem('cart' , JSON.stringify(cart));
}

function addProductToCart(product , cart) {
    // il faut vérifier si le produit est déjà dans le panier.
    let exists = productExists(product , cart);

    // s'il existe, mettre à jour la quantité
    if(exists) 
        updateQuantity(product, cart);
    else
        createProduct(product, cart);
}

function productExists(product, cart) {
    let exists = false;

    for(let item in cart.items)
        if(item.productId === product.productId && item.color == product.color)
        exists = true;

    return exists;
}

function orchestra(product) {
    cart = getCart();



    updateCartProperties();
    saveCart();
}