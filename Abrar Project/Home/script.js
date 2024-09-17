// Add event listener to add to cart button
document.querySelectorAll('.add-to-cart').forEach((button) => {
    button.addEventListener('click', () => {
        // Add product to cart
        const product = button.parentNode;
        const productName = product.querySelector('h3').textContent;
        const productPrice = product.querySelector('p').textContent;
        const cart = document.querySelector('.cart ul');
        const cartItem = document.createElement('li');
        cartItem.textContent = `${productName} - ${productPrice}`;
        cart.appendChild(cartItem);
        // Update total price
        const // Add event listener to add to cart button
        document.querySelectorAll('.add-to-cart').forEach((button) => {
            button.addEventListener('click', () => {
                // Add product to cart
                const product = button.parentNode;
                const productName = product.querySelector('h3').textContent;
                const productPrice = product.querySelector('p').textContent;
                const cart = document.querySelector('.cart ul');
                const cartItem = document.createElement('li');
                cartItem.textContent = `${productName} - ${productPrice}`;
                cart.appendChild(cartItem);
                // Update total price
                const totalPrice = document.querySelector('.cart p');
                const total = cart.children.length * 19.99;
                totalPrice.textContent = `Total: $${total.toFixed(2)}`;
            });
        });
        
        // Add event listener to checkout button
        document.querySelector('.checkout').addEventListener('click', () => {
            // Checkout functionality
            alert('Checkout successful!');
        });totalPrice = document.querySelector('.cart p');
        const total = cart.children.length * 19.99;
        totalPrice.textContent = `Total: $${total.toFixed(2)}`;
    });
});

// Add event listener to checkout button
document.querySelector('.checkout').addEventListener('click', () => {
    // Checkout functionality
    alert('Checkout successful!');
});

// navigation.js
const pages = {
    contact: 'contact.html',
    chart: 'chart.html'
    // Add more pages to the object
  };
  
  function navigateTo(page) {
    const pageContent = document.getElementById('page-content');
    pageContent.innerHTML = '';
    fetch(page)
      .then(response => response.text())
      .then(html => pageContent.innerHTML = html);
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        navigateTo(pages[link.getAttribute('href')]);
      });
    });
  });