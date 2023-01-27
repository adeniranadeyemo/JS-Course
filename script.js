// 'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 15;

// document.querySelector('.guess').value = 20;
// console.log(document.querySelector('.guess').value);

const btn = document.querySelector('.check');
const msg = document.querySelector('.message');
let randNumber = Math.trunc(Math.random() * 20) + 1;
let rightNumber = document.querySelector('.number');
let score = 20;
const body = document.querySelector('body');
const againBtn = document.querySelector('.again');

btn.addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  // console.log(guess, typeof guess);
  let displayScore = document.querySelector('.score');
  let highScore = document.querySelector('.highscore');

  if (!guess) {
    msg.textContent = '⛔ No number!';
  } else if (guess > randNumber) {
    if (score > 1) {
      msg.textContent = 'Not right, too high! 📈';
      score--;
      displayScore.textContent = score;
    } else {
      msg.textContent = `You've lost the game!`;
      displayScore.textContent = 0;
    }
  } else if (guess < randNumber) {
    if (score > 1) {
      msg.textContent = 'Not right, too low! 📉';
      score--;
      displayScore.textContent = score;
    } else {
      msg.textContent = `You've lost the game!`;
      displayScore.textContent = 0;
    }
  } else {
    msg.textContent = 'Correct!! 🎊';
    highScore.textContent = score;
    rightNumber.textContent = randNumber;
    rightNumber.style.width = '30rem';
    body.style.backgroundColor = '#2cbb00';
  }
});

againBtn.addEventListener('click', () => {
  let displayScore = document.querySelector('.score');
  let highScore = document.querySelector('.highscore');
  let guess = document.querySelector('.guess');
  randNumber = Math.trunc(Math.random() * 20) + 1;

  score = 20;

  rightNumber.textContent = '?';
  rightNumber.style.width = '15rem';
  msg.textContent = 'Start guessing...';
  displayScore.textContent = 20;
  highScore.textContent = 0;
  guess.value = ' ';
  body.style.backgroundColor = '#222';
});
