const cart = [];
const cartSidebar = document.querySelector('.cart-siderbar');
const cartItemsList = document.querySelector('.cart-items');
const cartElement = document.getElementById('total');

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const product = {
            id: button.dataset.id,
            name: button.dataset.name,
            price: parseFloat(button.dataset.price)
        };
        cart.push(product);
        updateCartDisplay();
        cartSidebar.classList.add('active');
    });
});

function updateCartDisplay() {
    cartItemsList.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.className = 'cart-item';
        li.innerHTML = `
        <span>${item.name}</span>
        <span>$${item.price.toFixed(2)}</span>
        <button onclick="removeFromCart(${index})">&times;</button>
     `;
     cartItemsList.appendChild(li);
     total += item.price;
    });

    totalElement.textContext = total.toFixed(2);
    }

    function removeFromCart(index){
    cart.splice(index, 1);
    updateCartDisplay();
    }

    document.querySelector('.close-cart').addEventListener('click', () => {
        cartSidebar.classList.remove('active');
    });

    function toggleCart() {
        document
        .getElementById("cartSidebar")
        .classList
        .toggle("show")
    }