let signupName = document.getElementById("signupName");
let signupEmail = document.getElementById("signupEmail");
let signupPassword = document.getElementById("signupPassword");
let signupButton = document.getElementById("signupButton");
let errorMessage = document.getElementById("error-message");

let patterns = {
  name: /^[A-Za-z\s]{3,20}$/,
  email: /^[^@\s]+@[^@\s]+\.[a-zA-Z]+$/,
  password: /^[A-Za-z0-9@#$%^&*!]{6,}$/,
};

let users = JSON.parse(localStorage.getItem("users")) || [];

signupButton.addEventListener("click", function (e) {
  let name = signupName.value.trim();
  let email = signupEmail.value.trim();
  let password = signupPassword.value.trim();

  if (!patterns.name.test(name)) {
    errorMessage.textContent = "Name must be 3–20 letters (A–Z only).";
    return;
  }

  if (!patterns.email.test(email)) {
    errorMessage.textContent = "Please enter a valid email address.";
    return;
  }

  if (!patterns.password.test(password)) {
    errorMessage.textContent =
      "Password must be at least 6 characters and include letters and numbers.";
    return;
  }

  /*
  let emailExists = false;

  for (let i = 0; i < users.length; i++) {
    if (users[i].email === email) {
      emailExists = true;
      break;
    }
  }

  if (emailExists) {
    errorMessage.textContent = "Email already registered.";
    return;
  }
  */

  if (users.some((user) => user.email === email)) {
    errorMessage.textContent = "Email already registered.";
    return;
  }

  users.push({ name, email, password });
  localStorage.setItem("users", JSON.stringify(users));

  errorMessage.classList.remove("text-danger");
  errorMessage.classList.add("text-success");
  errorMessage.textContent = "Registration successful! Redirecting...";

  setTimeout(() => {
    window.location.href = "index.html";
  }, 1500);
});
