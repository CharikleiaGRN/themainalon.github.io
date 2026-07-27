const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".site-nav");
if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(open));
  });
}
const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();
const form = document.querySelector("#newsletter-form");
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Connect this form to an email service before launch.");
  });
}
