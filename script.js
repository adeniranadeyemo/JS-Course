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
const ans = 7;

btn.addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  console.log(typeof guess);

  if (!guess) {
    // const msg = document.querySelector('.message');
    msg.textContent = '⛔ No number!';
  } else if (guess !== ans) {
    msg.textContent = 'Not right';
  } else {
    msg.textContent = 'Correct!';
  }
});
