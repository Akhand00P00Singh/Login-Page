function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === 'user' && password === 'pass') {
        window.location.href = 'next-page.html';
    } else {
        alert('Incorrect username or password');
    }
}