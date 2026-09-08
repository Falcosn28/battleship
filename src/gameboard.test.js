
import { GameBoard } from "./gameboard.js";
import { ships } from "./ship";


test('create board row works', () => {
  const gameboard = GameBoard();
  const board = gameboard.getBoard()

  expect(board.length).toBe(10);
});

test('create board columes works', () => {
  const gameboard = GameBoard();
  const board = gameboard.getBoard()

  expect(board.length).toBe(10);

  for (let x = 0; x < 10; x++) {
    expect(board[x].length).toBe(10);
  }

});

test('place ship 00', () => {
  const gameboard = GameBoard();
  const board = gameboard.getBoard()
  const ship = new ships(5)

  gameboard.placeShip([0, 0], ship.length);

  expect(board[0][0]).toBe(1);
  expect(board[0][1]).toBe(1);
  expect(board[0][2]).toBe(1);
  expect(board[0][3]).toBe(1);
  expect(board[0][4]).toBe(1);
  expect(board[0][5]).toBe(0);
  expect(board[0][6]).toBe(0);

});

test('place ship 01', () => {
  const gameboard = GameBoard();
  const board = gameboard.getBoard()
  const ship = new ships(4)

  gameboard.placeShip([1, 2], ship.length);

  expect(board[1][0]).toBe(0);
  expect(board[1][1]).toBe(0);
  expect(board[1][2]).toBe(1);
  expect(board[1][3]).toBe(1);
  expect(board[1][4]).toBe(1);
  expect(board[1][5]).toBe(1);
  expect(board[1][6]).toBe(0);

});


test.skip('attack', () => {

  const gameboard = GameBoard();
  const ship = new ships(4)

  gameboard.placeShip([1, 2], ship);

  expect(gameboard.receiveAttack([1,2])).toBe("hit");
  expect(gameboard.receiveAttack([1,0])).toEqual([1,0]);
  expect(gameboard.receiveAttack([2,0])).toEqual([2,0]);
  expect(gameboard.receiveAttack([1,6])).toEqual([1,6]);
  expect(gameboard.receiveAttack([1,4])).toEqual("hit");
  expect(gameboard.receiveAttack([1,5])).toEqual("hit");

});


test.skip('miss', () => {

  const gameboard = GameBoard();
  const ship = new ships(4)

  gameboard.placeShip([1, 2], ship);

  gameboard.receiveAttack([1,2])
  gameboard.receiveAttack([1,0]) //miss
  gameboard.receiveAttack([2,0]) //miss
  gameboard.receiveAttack([1,6]) //miss
  gameboard.receiveAttack([1,4])
  gameboard.receiveAttack([1,5])

  expect(gameboard.displayMiss()).toEqual(3);
   
  gameboard.receiveAttack([1,6]) //miss
  gameboard.receiveAttack([1,6]) //miss

  expect(gameboard.displayMiss()).toEqual(5);

  gameboard.receiveAttack([1,4])
  gameboard.receiveAttack([1,5])

  expect(gameboard.displayMiss()).toEqual(5);

});


test.skip('ship sunk', () => {

  const gameboard = GameBoard();
  const ship = new ships(4)

  expect(gameboard.shipsSunk()).toEqual(true);

  gameboard.placeShip([1, 2], ship);

  expect(gameboard.shipsSunk()).toEqual(false);

});

