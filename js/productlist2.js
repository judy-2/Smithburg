const cartItems = document.querySelector(".cart-items");
const totalElement = document.getElementById("total");
const cartSidebar = document.querySelector(".cart-sidebar");

function updateCart() {
    if (!cartItems) return;
    cartItems.innerHTML = "";
    let total = 0;
    cart.forEach((item, index) => {
        const li = document.createElement("li");
        li.className = "cart-item";
        li.innerHTML = `
            <span class="item-name">${item.name}</span>
            <span class="item-price">$${item.price.toFixed(2)}</span>
            <button onclick="removeFromCart(${index})">x</button>
        `;

        cartItems.appendChild(li);
        total += item.price;
    });

    if (totalElement) {
        totalElement.textContent = total.toFixed(2);
    }

    updateCartCount();
}

// add to cart
function addToCart(name, price) {
    cart.push({ name, price });
    saveCart();
    updateCart();
    updateCartCount();

    if (cartSidebar) {
        cartSidebar.classList.add("active");
    }
}

// remove 
function removeFromCart(index) {
    cart.splice(index, 1);
    saveCart();
    updateCart();
}

// close sidebar
document.querySelector(".close-cart")
?.addEventListener("click", () => {
    cartSidebar.classList.remove("active");
});

// toggle sidebar
function toggleCart() {
    cartSidebar.classList.toggle("active");
}

updateCart();
updateCartCount();