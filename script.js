const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelector(".nav-links");
const themeButton = document.querySelector(".theme-button");
const bookingForm = document.querySelector("#booking-form");
const formMessage = document.querySelector("#form-message");
const dateInput = document.querySelector("#date");

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  navLinks.classList.toggle("open", !isOpen);
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

themeButton.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");
  const isLight = document.body.classList.contains("light-theme");
  themeButton.textContent = isLight ? "Dark Mode" : "Light Mode";
  themeButton.setAttribute("aria-pressed", String(isLight));
});

const now = new Date();
dateInput.min = new Date(now.getTime() - now.getTimezoneOffset() * 60000).toISOString().slice(0, 10);

bookingForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!bookingForm.checkValidity()) {
    bookingForm.reportValidity();
    return;
  }
  formMessage.textContent = "Thank you! Your request is ready. This demo does not send data to a server.";
  bookingForm.reset();
});

document.querySelector("#year").textContent = new Date().getFullYear();
