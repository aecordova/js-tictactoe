// eslint-disable-next-line import/extensions
import * as gameLogic from './game_logic.js';

const newGameBtn = document.getElementById('new-game-btn');
const newGameBox = document.getElementById('new-game-box');
const replayGameBtn = document.getElementById('replay-game-btn');
const winnerBanner = document.querySelector('.winner-banner');
const playerBox = document.getElementById('player-box');
const board = document.getElementById('board');
const cells = document.querySelectorAll('.board-cell');
const p1Badge = document.getElementById('p1-badge');
const p2Badge = document.getElementById('p2-badge');
const resetBtn = document.getElementById('reset-btn')
// const players = document.querySelectorAll('.player-badge');

let game;
const player1 = gameLogic.Player();
const player2 = gameLogic.Player();

const gameInit = () => {
  game = gameLogic.Game(player1, player2);
  clearBoard();
  showActivePlayer();
};

const showActivePlayer = () => {
  if (game.currentTurn() === player1) {
    p1Badge.classList.add('active');
    p2Badge.classList.remove('active');
  }
  if (game.currentTurn() === player2) {
    p2Badge.classList.add('active');
    p1Badge.classList.remove('active');
  }
};

const clearBoard = () => {
  cells.forEach((cell) => {
    if (cell.classList.value.includes('x')) {
      cell.classList.remove('x');
    }
    if (cell.classList.value.includes('o')) {
      cell.classList.remove('o');
    }
    game.board.clearBoard();
  });
};

const showWinner = () => {

};


newGameBtn.addEventListener('click', () => {
  gameInit();
  newGameBox.classList.toggle('d-none');
  board.classList.toggle('d-none');
  playerBox.classList.toggle('hidden');
});

replayGameBtn.addEventListener('click', () => {
  gameInit();
  winnerBanner.classList.add('d-none');
});

resetBtn.addEventListener('click', () => {
  gameInit();
});

cells.forEach((cell, i) => {
  cell.addEventListener('click', () => {
    if (game.isOn()) {
      cell.classList.add(`${game.mark(i)}`);
      if (game.isOn()) {
        showActivePlayer();
      } else {
        showWinner();
      }
    }
  });
});
