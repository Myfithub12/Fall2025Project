document.getElementById('loginForm').addEventListener('submit', function(event) {

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username.length < 5) {
        alert('Username must be at least 5 characters long.');
        event.preventDefault();
    } else if (password.length < 8) {
        alert('Password must be at least 8 characters long.');
        event.preventDefault();
    }
});

document.getElementById('signupForm').addEventListener('submit', function(event) {

    const newPassword = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const newEmail = document.getElementById('new-email').value;

    if (newPassword !== confirmPassword) {
        alert('Passwords do not match!');
        event.preventDefault();
        return;
    }

    if (newPassword.length < 8) {
        alert('Password must be at least 8 characters long.');
        event.preventDefault();
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(newEmail)) {
        alert('Please enter a valid email address.');
        event.preventDefault();
        return;
    }

});