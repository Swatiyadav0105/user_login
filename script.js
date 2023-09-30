const loginForm = document.getElementById('loginForm');
const errorText = document.getElementById('error');

loginForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Implement your authentication logic here
    // For simplicity, this example uses hardcoded values
    if (username === 'user' && password === 'password') {
        // Successful login
        alert("success");
        errorText.textContent = '';
        window.location.href = 'dashboard.html'; // Redirect to a secured page
    } else {
        // Failed login
        errorText.textContent = 'Invalid username or password. Please try again.';
    }
});
