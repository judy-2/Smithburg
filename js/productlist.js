let cart =JSON.parsel(localStorage.getItem("cart")) || [];

updateCartCount();

function addToCart(name, price){
    let existingItem = cart.find(item => item.name === name);
    if(existingItem){
        existingItem.quantity++;
    } else {
        cart.push({
            name: name,
            price: price,
            quantity: 1,
            note: ""
        });
    }


localStorage.setItem("cart", JSON.stringify(cart));
updateCartCount();

}

function updateCartCount(){
    let totalItem = 0;
    cart.forEach(item => {
        totalItems += item.quantity;
    });

    document.getElementById("cart-count").innertext = totalItems;
}