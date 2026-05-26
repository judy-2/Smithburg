cart = JSON.parse(localStorage.getItem("cart")) || [];

const checkoutItems = document.getElementById("checkout-items");
const checkoutTotal = document.getElementById("checkout-total");

let total = 0;

cart.forEach((item) => {

    if (!item.quantity){
        item.quantity = 1;
    }

    const itemTotal = item.price * item.quantity;

    const li = document.createElement('li');
    li.innerHTML = `
    <img src="${item.image}" class="checkout-img">

    ${item.name} 
    x ${item.quantity}
    - $${itemTotal.toFixed(2)}
    `;

    checkoutItems.appendChild(li);
    total += itemTotal;
});

checkoutTotal.textContent = total.toFixed(2);

