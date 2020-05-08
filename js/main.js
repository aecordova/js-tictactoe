const x = 'X';
const o = 'O';

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
    const winCombos = [[0, 1, 2], [3, 4, 5],
                       [6, 7, 8], [0, 3, 6],
                       [1, 4, 7], [2, 5, 8],
                       [2, 4, 6], [0, 4, 8]];

    let lines = winCombos.map((line) => line.map((pos) => positions[pos]).join(''));
    return lines.indexOf('XXX') > -1 || lines.indexOf('OOO') > -1;
  };

  const p = () => {
    console.log('Current Board: [', ...positions, ']');
  };

  const clearBoard = () => {
    positions = positions.map(() => '_');
  };


  return {
    setPos, clearBoard, getBoard, p, posBlank, winnerMove,
  };
};

// const Player = (name, marker) => {
//   let score = 0;
//   const getScore = () => score;
//   const setScore = (newPoints) => {
//     score += newPoints;
//   };

//   return {
//     name, marker, getScore, setScore,
//   };
// };

// const Game = (player1, player2, board) => {
//   let gameOn= true;
//   let moves = 0;
  


// }

// p1 = Player("Juan",x)
// p1.name = "Angel"

// console.log(p1.name);
// console.log("marker",p1.marker);
 board = GameBoard();

 board.setPos(0,x);
 board.setPos(1,x);
 board.setPos(2,x);
 board.setPos(5,x);
 board.setPos(6,o);
 board.p();
 console.log(board.winnerMove(board.getBoard(),x));

// board.p();

// const Game = (board, player1, player2) => {

// }

// const Player = (name, marker) => {

// }
