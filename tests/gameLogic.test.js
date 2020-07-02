// Expect players are created corroectly
// Expect start with a clean board
//
const gameLogic = require('../js/game_logic.js');

const player1 = gameLogic.Player('PlayerOne', 'X');

describe('It shoud create Players with names, markers and scores', () => {
  test('It should return an object', () => {
    expect(typeof player1).toBe('object');
  });
  test('It should start with score 0', () => {
    expect(player1.getScore()).toBe(0);
  });
  test('It be able to set the score', () => {
    player1.setScore(5);
    expect(player1.getScore()).toBe(5);
  });
  test('It should be able to get the name of the player', () => {
    expect(player1.name).toBe('PlayerOne');
  });
  test('It should be able to get the marker of the player', () => {
    expect(player1.marker).toBe('X');
  });
});
