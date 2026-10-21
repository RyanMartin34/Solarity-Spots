const navContainer = document.querySelector(".nav-container");
const navOpenBtn = document.querySelector(".nav-open-btn");
const loginBtn = document.querySelector(".login-btn");
const logoutBtn = document.querySelector(".logout-btn");
const signupBtn = document.querySelector(".signup-btn");

const isLoggedIn = false;

navOpenBtn.addEventListener("click", () => {
  navContainer.classList.toggle("open");
});

if (isLoggedIn) {
  if (loginBtn) loginBtn.style.display = "none";
  if (signupBtn) signupBtn.style.display = "none";
  if (logoutBtn) logoutBtn.style.display = "block";
} else {
  if (loginBtn) loginBtn.style.display = "block";
  if (signupBtn) signupBtn.style.display = "block";
  if (logoutBtn) logoutBtn.style.display = "none";
}
