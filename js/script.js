let signinEmail = document.getElementById("signinEmail");
let signinPassword = document.getElementById("signinPassword");
let loginButton = document.getElementById("loginButton");
let errorMessage = document.getElementById("error-message");

let users = JSON.parse(localStorage.getItem("users")) || [];

loginButton.addEventListener("click", function (e) {
  let email = signinEmail.value.trim();
  let password = signinPassword.value.trim();

  if (!email || !password) {
    errorMessage.textContent = "Please enter both email and password.";
    return;
  }

  let authenticatedUser = null;

  for (let i = 0; i < users.length; i++) {
    if (users[i].email === email && users[i].password === password) {
      authenticatedUser = users[i];
      break;
    }
  }

  if (authenticatedUser) {
    errorMessage.classList.remove("text-danger");
    errorMessage.classList.add("text-success");
    errorMessage.textContent = "Login successful! Redirecting...";

    localStorage.setItem("loggedInUser", authenticatedUser.name);

    setTimeout(() => {
      window.location.href = "welcome.html";
    }, 1500);
  } else {
    errorMessage.classList.remove("text-success");
    errorMessage.classList.add("text-danger");
    errorMessage.textContent = "Invalid email or password.";
  }
});
