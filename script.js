document.addEventListener("DOMContentLoaded", function() {
    const nameElement = document.getElementById("searchText");
    const name = "Samantha Martinez"; // Your name or any text you want to animate
    let index = 0;

    function typeName() {
        if (index < name.length) {
            nameElement.textContent += name[index];
            index++;
            setTimeout(typeName, 150); // Adjust typing speed
        }
    }

    typeName();
});
