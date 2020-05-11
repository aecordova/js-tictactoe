// eslint-disable-next-line import/extensions
import * as gameLogic from './game_logic.js';

const newGameBtn = document.getElementById('new-game-btn');
const newGameBox = document.getElementById('new-game-box');
const playerBox = document.getElementById('player-box');
const board = document.getElementById('board');
const cells = document.querySelectorAll('.board-cell')
const players = document.querySelectorAll('.player-badge')
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
    if (game.isOn()){
      cell.classList.add(`${game.mark(i)}`);

      players.forEach((player) => {
        player.classList.toggle('highlight');
      });
    }
  });
});

