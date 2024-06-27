let usernameInput = document.getElementById("usernameInput");
let passwordInput = document.getElementById("passwordInput");
let notRegistered = document.getElementById("notRegistered");
let loginButton = document.getElementById("loginButton");
let logoutButton = document.getElementById("logoutButton");
let registerButton = document.getElementById("registerButton");
let message = document.getElementById("message");

logoutButton.style.display = "none";
localStorage.setItem("admin", "admin123");

function onRegister() {
  registerButton.style.display = "none";
  loginButton.style.display = "block, flex";
  localStorage.setItem(usernameInput.value, passwordInput.value);
  if (usernameInput.value != "admin" && passwordInput.value != "admin123") {
    localStorage.setItem("role", "basic");
  }
  logoutButton.style.display = "block, flex";
}
function onLogin() {
  if (localStorage.getItem(usernameInput.value) === passwordInput.value) {
    console.log("true");
    if (usernameInput.value == "naufal") {
      window.open("https://www.instagram.com/_naufalbintang_/");
    }
    message.textContent = "logged in";
    message.style.color = "#198754";
  } else if (
    usernameInput.value == "admin" &&
    passwordInput.value == "admin123"
  ) {
    console.log("true");
    message.textContent = "logged in as admin";
    message.style.color = "#198754";
  } else {
    console.log("false");
    message.textContent = "wrong username or password, please try again";
    message.style.color = "#dc3545";
  }
  logoutButton.style.display = "block";
  loginButton.style.display = "none";
  registerButton.style.display = "none";
}
function onLogout() {
  console.log("logout");
  location.reload();
}
