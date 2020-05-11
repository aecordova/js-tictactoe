// eslint-disable-next-line import/extensions
import * as gameLogic from './game_logic.js';

const newGameBtn = document.getElementById('new-game-btn');
const newGameBox = document.getElementById('new-game-box');
const playerBox = document.getElementById('player-box');
const board = document.getElementById('board');
const box0 = document.getElementById('box-0');
const box1 = document.getElementById('box-1');
const box2 = document.getElementById('box-2');
const box3 = document.getElementById('box-3');
const box4 = document.getElementById('box-4');
const box5 = document.getElementById('box-5');
const box6 = document.getElementById('box-6');
const box7 = document.getElementById('box-7');
const box8 = document.getElementById('box-8');
const cells = document.querySelectorAll('.board-cell')
let game;
const player1 = gameLogic.Player();
const player2 = gameLogic.Player();

newGameBtn.addEventListener('click', () => {
  game = gameLogic.Game(player1, player2);
  newGameBox.classList.toggle('d-none');
  board.classList.toggle('d-none');
  playerBox.classList.toggle('hidden');
});

cells.forEach((cell, i) => {
  cell.addEventListener('click', (e) => {
    cell.classList.add(`${game.mark(i)}`);  
  });
});

