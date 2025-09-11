// Simple button alert
document.getElementById("helloBtn").addEventListener("click", () => {
    alert("Hello! Thanks for visiting 🚀");
});

// Hamburger menu toggle
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});