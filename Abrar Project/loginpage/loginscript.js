// Add event listener to login form
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;
    // Check if username and password are valid
    if (username === 'admin' && password === 'password') {
        alert('Login successful!');
        // Redirect to dashboard page
        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid username or password');
    }
});