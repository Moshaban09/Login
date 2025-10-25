let welcomeMessage = document.getElementById("welcomeMessage");
let logoutButton = document.getElementById("logoutButton");

let user = localStorage.getItem("loggedInUser");

if (!user) {
  window.location.href = "index.html";
} else {
  welcomeMessage.textContent = `Welcome, ${user}! 👋`;
}

logoutButton.addEventListener("click", function () {
  welcomeMessage.textContent = "Logging out...";
  welcomeMessage.classList.add("text-danger");

  setTimeout(() => {
    localStorage.removeItem("loggedInUser");
    window.location.href = "index.html";
  }, 1500);
});
