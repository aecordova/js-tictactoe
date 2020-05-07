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


  const p = () => {
    console.log('Current Board: [', ...positions, ']');
  };

  const clearBoard = () => {
    positions = positions.map(() => '_');
  };


  return {
    setPos, clearBoard, getBoard, p, posBlank,
  };
};

const Player = (name, marker) => {
  let score = 0;
  const getScore = () => score;
  const setScore = (newPoints) => {
    score += newPoints;
  };

  return {
    name, marker, getScore, setScore,
  };
};

const Game = (player1, player2, board) => {
  let gameOn= true;
  while(gameOn){
    
  }
  

}

// p1 = Player("Juan",x)
// p1.name = "Angel"

// console.log(p1.name);
// console.log("marker",p1.marker);
//  board = GameBoard();

//  board.setPos(5,x);
//  board.setPos(6,o);
//  board.p();
//  console.log(board.posBlank(5));
//  console.log(board.posBlank(1));
//  board.clearBoard();
//  console.log(board.posBlank(5));

// board.p();

// const Game = (board, player1, player2) => {

// }

// const Player = (name, marker) => {

// }
