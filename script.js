const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const themeButton = document.querySelector(".theme-toggle");
const themeLabel = document.querySelector(".theme-label");
const bookingForm = document.querySelector("#booking-form");
const formMessage = document.querySelector("#form-message");
const dateInput = document.querySelector("#date");

if (menuButton && navLinks) {
  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    navLinks.classList.toggle("is-open", !isOpen);
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuButton.setAttribute("aria-expanded", "false");
      navLinks.classList.remove("is-open");
    });
  });
}

if (themeButton) {
  themeButton.addEventListener("click", () => {
    const isLight = document.body.classList.toggle("light-theme");
    themeButton.setAttribute("aria-pressed", String(isLight));
    themeLabel.textContent = isLight ? "Dark mode" : "Light mode";
    themeButton.setAttribute("aria-label", isLight ? "Switch to dark theme" : "Switch to light theme");
  });
}

if (dateInput) {
  const today = new Date();
  const localToday = new Date(today.getTime() - today.getTimezoneOffset() * 60000)
    .toISOString().slice(0, 10);
  dateInput.min = localToday;
}

if (bookingForm && formMessage) {
  bookingForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!bookingForm.checkValidity()) {
      bookingForm.reportValidity();
      return;
    }
    formMessage.textContent = "Thanks! Your request is ready. This demo form does not send data to a server yet.";
    bookingForm.reset();
  });
}

const year = document.querySelector("#year");
if (year) year.textContent = String(new Date().getFullYear());
