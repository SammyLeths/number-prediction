'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const defaultMessageClass = 'message';

const displayMessage = function (message, messageClass) {
  document.querySelector('.' + messageClass).textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // No input
  if (!guess) {
    displayMessage('Enter a Number!', defaultMessageClass);

    // Player wins
  } else if (guess === secretNumber) {
    displayMessage('Correct Number!', defaultMessageClass);
    displayMessage('Great, Your Prediction is Accurate!', 'headline');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#0D98BA';
    document.querySelector('body').style.backgroundImage =
      'url(./assets/img/6k2.gif)';

    document.querySelector('.guess').setAttribute('disabled', true);
    document.querySelector('.check').setAttribute('disabled', true);

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // Wrong prediction
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber ? 'Too high!' : 'Too low!',
        defaultMessageClass
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game!', defaultMessageClass);
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start predicting...', defaultMessageClass);
  displayMessage('Predict My Number!', 'headline');

  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#737376';
  document.querySelector('body').style.backgroundImage = 'none';
  document.querySelector('.number').style.width = '15rem';

  document.querySelector('.guess').removeAttribute('disabled');
  document.querySelector('.check').removeAttribute('disabled');
});
