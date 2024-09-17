// LOGIN
function login() {
    const password = document.getElementById("password").value;
    const username = document.getElementById("username").value;
    localStorage.setItem('username', username);
}
// LOGIN END