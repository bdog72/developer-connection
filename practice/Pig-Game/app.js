//
//
let scores, roundScore, activePlayer;

scores = [0, 0];
roundScore = 0;
activePlayer = 0;

document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

document.querySelector('.btn-roll').addEventListener('click', function () {
  let dice = Math.floor(Math.random() * 6) + 1;

  const diceDom = document.querySelector('.dice');
  diceDom.style.display = 'block';
  diceDom.src = `dice-${dice}.png`;
});

// document.querySelector(`#current-${activePlayer}`).textContent = dice;
// document.querySelector(`#current-${activePlayer}`).innerHTML = `
//   <em>${dice}</em>
// `;

// const x = document.querySelector('#score-0').textContent;
// console.log(x);

// document.querySelector('.btn-roll').addEventListener('click', btn);
