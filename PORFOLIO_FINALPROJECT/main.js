window.addEventListener("scroll", function(){
    const nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 0);
});

const sentences = [
    "Nice to meet you!",
    "Welcome to my Porfolio!",
    "Spreadsheet enthusiast.",
    "Achiever.",
    "Always trying to look deeper.",
];

let currentSentenceIndex = Math.floor(Math.random() * sentences.length);
let currentSentence = sentences[currentSentenceIndex];
const animatedWelcome = document.querySelector('.animated-welcome h3'); 
let typingSpeed = 100; 
let erasingSpeed = 50; 
let pauseDuration = 1500; 
let currentCharIndex = 0; 
let isErasing = false;

function typeText() {
    let typingInterval = setInterval(() => {
        animatedWelcome.textContent += currentSentence[currentCharIndex];
        currentCharIndex++;
    
        if (currentCharIndex === currentSentence.length) {
            clearInterval(typingInterval);
    
            setTimeout(eraseText, pauseDuration);
        }
    }, typingSpeed);

}


function eraseText() {
    if (!isErasing) {
        isErasing = true; // Mark that we are in the process of erasing

        let erasingInterval = setInterval(() => {
            animatedWelcome.textContent = animatedWelcome.textContent.slice(0, currentCharIndex - 1);
            currentCharIndex--;
        
            if (currentCharIndex === 0) {  // Once the text is erased
                clearInterval(erasingInterval);

                setTimeout(() => {
                    currentSentenceIndex = Math.floor(Math.random() * sentences.length); // Pick a new random sentence
                    currentSentence = sentences[currentSentenceIndex]; // Update the sentence
                    isErasing = false; // Reset erasing flag
                    currentCharIndex = 0; // Reset char index for the next sentence
                    setTimeout(typeText, pauseDuration); // Start typing the new sentence after a delay
                }, pauseDuration);
            }
        }, erasingSpeed);
    }
}




document.addEventListener("DOMContentLoaded", typeText);

