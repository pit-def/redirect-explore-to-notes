// Set the redirect delay in seconds
const REDIRECT_DELAY = 5;
const TARGET_URL = "https://notes.pietrodefinis.com/";

document.addEventListener('DOMContentLoaded', () => {
    const countdownElement = document.getElementById('countdown');
    let secondsLeft = REDIRECT_DELAY;

    // Initial display
    if (countdownElement) {
        countdownElement.textContent = secondsLeft;
    }

    const timer = setInterval(() => {
        secondsLeft--;
        
        if (countdownElement) {
            countdownElement.textContent = secondsLeft > 0 ? secondsLeft : 0;
        }

        if (secondsLeft <= 0) {
            clearInterval(timer);
            window.location.href = TARGET_URL;
        }
    }, 1000);
});
