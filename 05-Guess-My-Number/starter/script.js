'use strict';

console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number!';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

// guessValue = 23;
// console.log(guessValue);

document.querySelector('.check').addEventListener('click', function () {
  let guessValue = document.querySelector('.guess').value;
  console.log(guessValue);
});
