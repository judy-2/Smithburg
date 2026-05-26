function addToCart(name, price, image) {
    cart.push({ name, price, image });
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
  
        
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity += 1;
     } else {
         cart.push({
            name: name,
            price: price,
            image: image,
             quantity: 1,
            });
        }
        localStorage.setItem('cart', JSON.stringify(cart));
    }