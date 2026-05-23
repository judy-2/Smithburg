let cart = JSON.parse(localStorage.getItem("cart")) || [];

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

// Update cart count 
function updateCartCount() {
    const cartCount = document.getElementById("cart-count");
    if (!cartCount) return;
    cartCount.textContent = cart.length;
}

updateCartCount();