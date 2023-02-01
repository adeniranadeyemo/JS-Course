// 'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 15;

// document.querySelector('.guess').value = 20;
// console.log(document.querySelector('.guess').value);

const checkBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');
const body = document.querySelector('body');
// const message = document.querySelector('.message');
let displayScore = document.querySelector('.score');
let highScore = document.querySelector('.highscore');
let rightNumber = document.querySelector('.number');
let randNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

checkBtn.addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('⛔ No number!');
  } else if (guess === randNumber) {
    displayMessage('Correct!! 🎊');
    rightNumber.textContent = randNumber;
    rightNumber.style.width = '30rem';
    body.style.backgroundColor = '#2cbb00';

    if (score > highscore) {
      highscore = score;
      highScore.textContent = highscore;
    }
  } else if (guess !== randNumber) {
    if (score > 1) {
      displayMessage(
        guess > randNumber
          ? 'Not right, too high! 📈'
          : 'Not right, too low! 📉'
      );
      score--;
      displayScore.textContent = score;
    } else {
      displayMessage(`You've lost the game!`);
      displayScore.textContent = 0;
    }
  }
});

// checkBtn.addEventListener('click', () => {
//   const guess = Number(document.querySelector('.guess').value);
//   // console.log(guess, typeof guess);

//   if (!guess) {
//     msg.textContent = '⛔ No number!';
//   } else if (guess === randNumber) {
//     msg.textContent = 'Correct!! 🎊';
//     rightNumber.textContent = randNumber;
//     rightNumber.style.width = '30rem';
//     body.style.backgroundColor = '#2cbb00';

//     if (score > highscore) {
//       highscore = score;
//       highScore.textContent = highscore;
//     }
//   } else if (guess !== randNumber) {
//     if (score > 1) {
//       msg.textContent =
//         guess > randNumber
//           ? 'Not right, too high! 📈'
//           : 'Not right, too low! 📉';
//       score--;
//       displayScore.textContent = score;
//     } else {
//       msg.textContent = `You've lost the game!`;
//       displayScore.textContent = 0;
//     }
//   }
// });

againBtn.addEventListener('click', () => {
  let displayScore = document.querySelector('.score');
  let guess = document.querySelector('.guess');
  randNumber = Math.trunc(Math.random() * 20) + 1;

  score = 20;

  rightNumber.textContent = '?';
  rightNumber.style.width = '15rem';
  displayMessage('Start guessing...');
  displayScore.textContent = 20;
  guess.value = ' ';
  body.style.backgroundColor = '#222';
});
