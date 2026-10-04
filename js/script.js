const menuButton = document.getElementById("mobile-menu");
const navLinks = document.getElementById("nav-links");
const menuOverlay = document.getElementById("menu-overlay");


// Open / close menu
menuButton.addEventListener("click", () => {

    menuButton.classList.toggle("active");
    navLinks.classList.toggle("active");
    menuOverlay.classList.toggle("active");

    // Accessibility
    const isOpen = menuButton.classList.contains("active");

    menuButton.setAttribute("aria-expanded", isOpen);

    // Stop page scrolling when menu is open
    document.body.classList.toggle("menu-open", isOpen);
});


// Close menu when clicking overlay
menuOverlay.addEventListener("click", closeMenu);


// Close menu when clicking a navigation link
navLinks.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", closeMenu);

});


// Close menu function
function closeMenu() {

    menuButton.classList.remove("active");
    navLinks.classList.remove("active");
    menuOverlay.classList.remove("active");

    menuButton.setAttribute("aria-expanded", "false");

    document.body.classList.remove("menu-open");
}