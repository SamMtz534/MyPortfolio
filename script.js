document.addEventListener("DOMContentLoaded", function() {
    // === Typing animation ===
    const nameElement = document.getElementById("searchText");
    const name = "Samantha Martinez"; // Text to animate
    let index = 0;

    function typeName() {
        if (index < name.length) {
            nameElement.textContent += name[index];
            index++;
            setTimeout(typeName, 150); // Adjust typing speed
        }
    }

    typeName();

    // === Page navigation when clicking the bubbles ===
    const wrappers = document.querySelectorAll(".about-wrapper");
    const pages = ["about.html", "projects.html", "socials.html"];

    wrappers.forEach((wrapper, i) => {
        wrapper.style.cursor = "pointer"; // makes it clear it's clickable
        wrapper.addEventListener("click", () => {
            window.location.href = pages[i];
        });
    });
});
