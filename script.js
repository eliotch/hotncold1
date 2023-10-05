const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const button=button
function startGame() {
  attempts++;
  const userGuess = prompt("Guess a number between 1 and 100:");
  if (parseInt(userGuess) === randomNumber) {
    alert(`Congratulations! You guessed the number ${randomNumber} in ${attempts} attempts.`);
  } else {
    const hint = userGuess < randomNumber ? "higher" : "lower";
    alert(`Try again! The number is ${hint} than your guess.`);
    startGame();
  }
}

startGame();
