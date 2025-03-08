// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Typing Effect for Headline
const words = ["Web Developer", "Designer", "Creative Thinker"];
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function typeEffect() {
    currentWord = words[i];
    document.querySelector("h1").textContent = `Hi, I'm Samantha - ${currentWord.substring(0, j)}`;

    if (!isDeleting && j < currentWord.length) {
        j++;
        setTimeout(typeEffect, 100);
    } else if (isDeleting && j > 0) {
        j--;
        setTimeout(typeEffect, 50);
    } else {
        isDeleting = !isDeleting;
        if (!isDeleting) i = (i + 1) % words.length;
        setTimeout(typeEffect, 1000);
    }
}

typeEffect();
