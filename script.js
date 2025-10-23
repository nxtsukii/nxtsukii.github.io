const texts = [
    "Web Developer",
    "Software Developer",
    "Game Developer",
    "Game Designer",
    "Streamer"
]

const speed = 100; // typing speed in ms
const eraseSpeed = 60; // deleting speed
const delayBetween = 1500; // delay before erasing next word

let textIndex = 0;
let charIndex = 0;
const typedText = document.getElementById("typed-text");

function type() {
    if (charIndex < texts[textIndex].length) {
        typedText.textContent += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, speed);
    } else {
        setTimeout(erase, delayBetween);
    }
}

function erase() {
    if (charIndex > 0) {
        typedText.textContent = texts[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, eraseSpeed);
    } else {
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(type, 300);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    if (texts.length) setTimeout(type, 500);
});
