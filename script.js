// Select the mobile menu button and navigation links.
const menuButton = document.querySelector("#menu-button");
const navigationLinks = document.querySelector("#nav-links");

// Open or close the navigation menu on small screens.
menuButton.addEventListener("click", () => {
    const menuIsOpen = navigationLinks.classList.toggle("open");

    menuButton.setAttribute(
        "aria-expanded",
        menuIsOpen.toString()
    );

    menuButton.textContent = menuIsOpen ? "Close" : "Menu";
});

// Close the mobile menu after a navigation link is clicked.
const individualLinks = navigationLinks.querySelectorAll("a");

individualLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navigationLinks.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.textContent = "Menu";
    });
});

// Automatically display the current year in the footer.
const currentYear = document.querySelector("#current-year");

currentYear.textContent = new Date().getFullYear();