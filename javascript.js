// script.js

// Hardcoded username and password for demonstration
const validUsername = "user1";
const validPassword = "password123";

document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Get the username and password entered by the user
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Check if the username and password match the valid credentials
    if (username === validUsername && password === validPassword) {
        // Hide the login form and show the user block
        document.querySelector(".login-container").style.display = "none";
        document.getElementById("userBlock").style.display = "block";
        document.getElementById("userNameDisplay").textContent = username;
    } else {
        // Show error message if the login is incorrect
        document.getElementById("errorMessage").style.display = "block";
    }
});

// Logout function
function logout() {
    document.querySelector(".login-container").style.display = "block";
    document.getElementById("userBlock").style.display = "none";
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
}
