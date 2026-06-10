function addToCart(name, price) {
    cart.push({ name, price});
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
  
        
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity += 1;
     } else {
         cart.push({
            name: name,
            price: price,
             quantity: 1,
            });
        }
        localStorage.setItem('cart', JSON.stringify(cart));
    }