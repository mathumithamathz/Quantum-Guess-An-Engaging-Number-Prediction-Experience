'use strict';

// Initialize game variables
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// Function to display a message
function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

// Function to update the score
function updateScore(newScore) {
  document.querySelector('.score').textContent = newScore;
}

// Function to handle a correct guess
function handleCorrectGuess() {
  displayMessage('Correct Number');
  document.querySelector('.number').textContent = secretNumber;
  document.querySelector('.title').textContent = 'Yay! You did it!';

  document.querySelector('.number').style.width = '80%';
  document.querySelector('main').style.boxShadow =
    '0px 0px 15px 1px rgba(255, 111, 97, 0.8)';

  if (score > highScore) {
    highScore = score;
    document.querySelector('.highscore').textContent = highScore;
  }
}

// Function to handle an incorrect guess
function handleIncorrectGuess(guess) {
  if (score > 1) {
    displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
    score--;
    updateScore(score);
  } else {
    displayMessage('💥 You lost the game!');
    updateScore(0);
  }
}

// Event listener for the 'Check' button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // No input
  if (!guess) {
    displayMessage('No Number');
    // Correct guess
  } else if (guess === secretNumber) {
    handleCorrectGuess();
    // Incorrect guess
  } else {
    handleIncorrectGuess(guess);
  }
});

// Event listener for the 'Again' button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  updateScore(score);

  document.querySelector('.guess').value = '';
  document.querySelector('.title').textContent = 'Guess My Number';

  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '150px';
  document.querySelector('main').style.boxShadow =
    '0px 0px 15px rgba(0, 0, 0, 0.5)';
});
