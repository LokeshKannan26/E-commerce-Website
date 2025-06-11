// Simulated Backend Data
const products = [
  { id: 1, name: "Smartphone", price: 499.99, image: "smartphone.jpeg" },
  { id: 2, name: "Laptop", price: 899.99, image: "laptop.jpeg" },
  { id: 3, name: "Headphones", price: 199.99, image: "headphone.jpeg" },
  { id: 4, name: "Camera", price: 699.99, image: "camera.jpg" },
  { id: 5, name: "Smart Watch", price: 149.99, image: "smartwatch.jpeg" },
  { id: 6, name: "Keyboard", price: 49.99, image: "keyboard.jpeg" },
  { id: 7, name: "Monitor", price: 249.99, image: "monitor.jpeg" },
  { id: 8, name: "Mouse", price: 29.99, image: "mouse.jpeg" }
];

// Display Products
const productList = document.getElementById("product-list");

function renderProducts() {
  products.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>$${product.price.toFixed(2)}</p>
      <button class="add" onclick="addToCart(${product.id})">Add to Cart</button>
    `;

    productList.appendChild(card);
  });
}

// Cart using localStorage
function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function setCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function updateCartCount() {
  const cart = getCart();
  document.getElementById("cart-count").textContent = cart.length;
}

function addToCart(productId) {
  const cart = getCart();
  const product = products.find(p => p.id === productId);
  if (product) {
    cart.push(product);
    setCart(cart);
    updateCartCount();
    alert(`${product.name} added to cart!`);
  }
}

document.getElementById("view-cart").addEventListener("click", () => {
  const cart = getCart();
  if (cart.length === 0) {
    alert("Cart is empty.");
  } else {
    let message = "Your Cart:\n\n";
    cart.forEach((item, index) => {
      message += `${index + 1}. ${item.name} - $${item.price.toFixed(2)}\n`;
    });
    alert(message);
  }
});

// Initialize
renderProducts();
updateCartCount();
