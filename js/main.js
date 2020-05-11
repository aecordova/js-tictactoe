// eslint-disable-next-line import/extensions
import * as gameLogic from './game_logic.js';

const newGameBtn = document.getElementById('new-game-btn');
const newGameBox = document.getElementById('new-game-box');
const replayGameBtn = document.getElementById('replay-game-btn');
const winnerBanner = document.querySelector('.winner-banner');
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
  clearBoard();
});

replayGameBtn.addEventListener('click', () => {
  game = gameLogic.Game(player1, player2);
  winnerBanner.classList.add('d-none');
  //players[0].classList.add('highlight');
  clearBoard();
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

const clearBoard = () => {
  cells.forEach((cell) => {
    
    if (cell.classList.value.includes('x')){
      cell.classList.remove('x');
    }
    if (cell.classList.value.includes('o')){
      cell.classList.remove('o');
    }
    // players.forEach((player) => {
    //   player.classList.remove('highlight');
    // });

  });
}



