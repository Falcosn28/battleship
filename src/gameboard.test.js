
import { GameBoard } from "./gameboard";
import { ships } from "./ship";

const gameboard = GameBoard();

test('create board row works', () => {
  expect(gameboard.createBoard().length).toBe(10);
});

test('create board columes works', () => {

  for (let x = 0; x < 10; x++) {
    expect(gameboard.createBoard().length).toBe(10);
  }

});

test('place ship', () => {
  const board = gameboard.createBoard()
  const ship = new ships(5)

  gameboard.placeShip([board[0][0]], ship);

  expect(board[0][0]).toBe(1);
  expect(board[0][1]).toBe(1);
  expect(board[0][2]).toBe(1);
  expect(board[0][3]).toBe(1);
  expect(board[0][4]).toBe(1);

});

