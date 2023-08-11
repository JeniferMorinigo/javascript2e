const products = [
  { name: 'Caño 1/4', price: 30000 },
  { name: 'Caño 3/8', price: 45000 },
  { name: 'CAÑO 1/2', price: 60000 },
  { name: 'Caño 5/8', price: 75000 }
];

const cart = [];

function addToCart(productName, price) {
  cart.push({ name: productName, price: price });
  updateCart();
}

function removeFromCart(index) {
  const confirmDelete = confirm("¿Estás seguro de eliminar este producto?");
  if (confirmDelete) {
      cart.splice(index, 1);
      updateCart();
  }
}

function updateCart() {
  const cartElement = document.getElementById('cart');
  cartElement.innerHTML = '';

  let total = 0;
  cart.forEach((item, index) => {
      const itemElement = document.createElement('div');
      itemElement.innerHTML = `${item.name} - $${item.price}
          <button onclick="removeFromCart(${index})">Eliminar</button>`;
      cartElement.appendChild(itemElement);
      total += item.price;
  });

  const totalElement = document.createElement('p');
  totalElement.textContent = `Total: $${total}`;
  cartElement.appendChild(totalElement);
}