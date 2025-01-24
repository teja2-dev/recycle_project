// Example: Toggle mobile menu (if required)/
document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".navbar ul");
    const toggleButton = document.createElement("button");
    toggleButton.innerText = "Menu";
    toggleButton.className = "menu-toggle";

    document.querySelector(".main-header").appendChild(toggleButton);

    toggleButton.addEventListener("click", () => {
        navbar.classList.toggle("active");
    });
});