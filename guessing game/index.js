const minNum = 1;
const maxNum = 100;

const message = document.getElementById("message");
const submitGuess = document.getElementById("submitGuess");

let attempts = 0;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
// Load Confetti Library (Only runs once)
function loadConfetti() {
  const script = document.createElement("script");
  script.src =
    "https://cdn.jsdelivr.net/npm/canvas-confetti@1.3.1/dist/confetti.browser.min.js";
  script.async = true;
  document.body.appendChild(script);
}

// Call the function to load the confetti script
loadConfetti();

submitGuess.onclick = function () {
  const guessInput = parseInt(document.getElementById("guessInput").value);

  // Remove and reapply the shake effect for incorrect guesses
  message.classList.remove("shake");
  void message.offsetWidth;
  message.classList.add("shake");

  if (isNaN(guessInput) || guessInput < minNum || guessInput > maxNum) {
    message.textContent = "Please enter a valid number";
  } else {
    attempts++;
    if (guessInput < answer) {
      message.textContent = `TOO LOW! TRY AGAIN`;
    } else if (guessInput > answer) {
      message.textContent = `TOO HIGH! TRY AGAIN!`;
    } else {
      message.textContent = `🎉 CORRECT! The answer was ${answer}. It took you ${attempts} attempts 🎊`;

      // Trigger confetti effect
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
      });
    }
  }
};