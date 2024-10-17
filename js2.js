
let cart = [];

function addToCart(product) {
    cart.push(product);
    renderCart();
}

function removeFromCart(product) {
    cart = cart.filter(item => item !== product);
    renderCart();
}

function renderCart() {
    const cartList = document.getElementById('cart');
    cartList.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = () => removeFromCart(item);
        li.appendChild(removeButton);
        cartList.appendChild(li);
    });
}
