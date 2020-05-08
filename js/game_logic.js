
const Player = (name = '', marker = '_') => {
  let score = 0;
  const getScore = () => score;
  const setScore = (newPoints) => {
    score += newPoints;
  };

  return {
    name, marker, getScore, setScore,
  };
};

const GameBoard = () => {
  let positions = ['_', '_', '_', '_', '_', '_', '_', '_', '_'];

  const getBoard = () => positions;

  const posBlank = (index) => positions[index] === '_';

  const setPos = (index, marker) => {
    if (posBlank) {
      positions[index] = marker;
    }
    return posBlank;
  };

  const winnerMove = () => {
    const winCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6],
      [1, 4, 7], [2, 5, 8], [2, 4, 6], [0, 4, 8]];
    const lines = winCombos.map((line) => line.map((pos) => positions[pos]).join(''));
    return lines.indexOf('XXX') > -1 || lines.indexOf('OOO') > -1;
  };

  const avlPos = () => {
    let ct = 0;
    for (let i = 0; i < positions.length; i += 1) {
      if (positions[i] === '_') {
        ct += 1;
      }
    }
    return ct;
  };

  const clearBoard = () => {
    positions = positions.map(() => '_');
  };

  return {
    setPos, clearBoard, getBoard, posBlank, winnerMove, avlPos,
  };
};

const setDefNamesNMarkers = (p1, p2) => {
  if (p1.name === '') {
    p1.name = 'Player 1';
  }
  if (p1.marker === '_') {
    p1.marker = 'X';
  }
  if (p2.name === '') {
    p2.name = 'Player 2';
  }
  if (p2.marker === '_') {
    p2.marker = 'O';
  }
};

const Game = (p1, p2) => {
  let gameOn = true;
  let winner = 'No One';

  let turn = p1;
  const board = GameBoard();
  setDefNamesNMarkers(p1, p2);

  const currentTurn = () => turn;
  const isOn = () => gameOn;
  const getWinner = () => winner;
  const terminate = () => { gameOn = false; };

  const switchTurns = () => {
    if (turn === p1) {
      turn = p2;
    } else {
      turn = p1;
    }
  };

  const mark = (pos) => {
    if (board.setPos(pos, turn.marker)) {
      if (board.winnerMove()) {
        winner = turn.name;
        terminate();
      }
      if (board.avlPos() === 0) {
        winner = 'Draw';
        terminate();
      }
      switchTurns();
    }
  };


  return {
    currentTurn, board, mark, p1, p2, isOn, getWinner,
  };
};

export {
  Player, Game, GameBoard,
};


/* Comment out the "export" block above and uncomment the following linesand run
 this file from the terminal to simulate in the console: (e.g. node ./js/game_logic.js) */

/*
function simulateInConsole() {
  const player1 = Player();
  const player2 = Player();
  const game = Game(player1, player2);
  let moves = 0;

  const pToConsole = (b) => {
    console.log('                    |', b[0], b[1], b[2], '|');
    console.log('                    |', b[3], b[4], b[5], '|');
    console.log('                    |', b[6], b[7], b[8], '|');
  };

  function move(pos) {
    console.log('>> ', game.currentTurn().name, ' Moves: ');
    game.mark(pos);
    pToConsole(game.board.getBoard());
    moves++;
    console.log('Winner: ', game.getWinner());
    console.log('moves:', moves);
  }

  console.log('--------------NEW-GAME-------------');
  console.log('P1-Name:', game.p1.name);
  console.log('P1-Marker: ', game.p1.marker);
  console.log('P2-Name:', game.p2.name);
  console.log('P2-Marker: ', game.p2.marker);
  console.log('-----------------------------------');
  console.log('\ngameOn:', game.isOn());


  let validPos;

  while (game.isOn()) {
    console.log('');
    do {
      validPos = Math.floor(Math.random() * 10);
      console.log('--Trying pos:', validPos, '--Available?:', game.board.posBlank(validPos));
    } while (validPos > 8 || !game.board.posBlank(validPos));
    move(validPos);
  }

  console.log('gameOn:', game.isOn());
  console.log('Winner: ', game.getWinner());


  console.log('-----------------------------------');
}

simulateInConsole(); */