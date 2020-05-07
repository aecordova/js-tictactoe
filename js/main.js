const x = 'X';
const o = 'O';

const GameBoard = () => {
  let positions = ["_","_","_","_","_","_","_","_","_"];

  const setPos = (index, marker) => {
    positions[index] = marker;
  };

  const getBoard = () => positions;
  
  const p = () => {
    console.log("Current Board: [", ...positions,"]");
  };

  const clearBoard = () => {
     positions = positions.map(() => "_");
  };

  return { setPos, clearBoard, getBoard, p };
};

// board = GameBoard();

// board.setPos(5,x);
// board.setPos(6,o);
// board.p();
// board.clearBoard();
// board.p();

// const Game = (board, player1, player2) => {
  
// }

// const Player = (name, marker) => {

// }

