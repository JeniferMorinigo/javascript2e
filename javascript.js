const products = [
  { name: 'Caño 1/4', price: 30000 },
  { name: 'Caño 3/8', price: 45000 },
  { name: 'Caño 1/2', price: 60000 },
  { name: 'Caño 5/8', price: 75000 }
];

const cart = [];

function addToCart(productName, price) {
  cart.push({ name: productName, price: price });
  updateCart();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

function updateCart() {
  const cartItemsElement = document.getElementById('cart-items');
  cartItemsElement.innerHTML = '';

  let total = 0;
  cart.forEach((item, index) => {
      const itemElement = document.createElement('li');
      itemElement.innerHTML = `${item.name} - $${item.price} <button onclick="removeFromCart(${index})">Eliminar</button>`;
      cartItemsElement.appendChild(itemElement);
      total += item.price;
  });

  const totalElement = document.getElementById('total');
  totalElement.textContent = total;
}