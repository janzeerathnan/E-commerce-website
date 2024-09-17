// Add event listener to contact form
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const message = document.querySelector('#message').value;
    // Send email using email API or backend service
    alert('Message sent successfully!');
});