let cartCount = 0;

function addToCart(){
  cartCount++;
  document.getElementById("cart-count").innerText = cartCount;
}

let cart =JSON.parsel(localStorage.Storage.getItem("cart")) || [];

displayCart();

function displaycart(){

  let cartContainer = document.getElementById("cart-items");

  let recieptContainer = document.getElementById("receipt");

  cartContainer.innerHTML = "";

  recieptContainer.innerHTML = "";

  let total =0;

  cart.forEach((item,index) => {

    total += item.price * item.quantity;

    cartContainer.innerHTML +=

    <div class="cart-item">
    
    <h2>${item.name}</h2>

    <p>Price: $${item.price}</p>

    <p>Quantity: ${item.quantity}</p>

    <button onclick="increaseQuantity(${index})">
      +
    </button>

    <button onclick="removeItem(${index})">
      Remove
    </button>

    <br></br>

    <textarea
      placeholder="Add notes..."
      onchange="saveNote(${ndex}, this.value)">
        ${item.note}</textarea>
    </div>

    receiptContainer.innerHTML += 

    <p>
      Note: ${item.note || "None"}
    </p>

  });

  document.getElementById("total").innerText =
  "Total: $" + total;

  localStorage.setItem("cart", JSON.stringify(cart));
}

function increaseQuantity(index){
  cart[index].quantity++;
  displayCart();
}

function decreaseQuantity(index){
  if(cart[index].quantity > 1){
    cart[index].quantity--;
  }
  displayCart();
}

function removeItem(index){
  cart.splice(index,1);
  displayCart();
}

function saveNote(index, value){
  cart[index].note = value;
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
}