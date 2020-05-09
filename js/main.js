// eslint-disable-next-line import/extensions
import * as gameLogic from './game_logic.js';

const newGameBtn = document.getElementById('new-game-btn');
const newGameBox = document.getElementById('new-game-box');
const playerBox = document.getElementById('player-box');
const board = document.getElementById('board');

newGameBtn.addEventListener('click', () => {
  newGameBox.classList.toggle('d-none');
  board.classList.toggle('d-none');
  playerBox.classList.toggle('hidden');
});