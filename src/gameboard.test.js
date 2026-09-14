
import { GameBoard } from "./gameboard.js";
import { ships } from "./ship";

test('ship class', () => {
  const gameboard = GameBoard();
  const ship = gameboard.placeShip([1, 2], 2);
  
  ship.hit()
  ship.isSunk()
  expect(ship.sunk).toEqual(false);
  ship.hit()
  ship.isSunk()
  expect(ship.sunk).toEqual(true);
});

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
  const ship = gameboard.placeShip([0, 0], 5);

  expect(board[0][0]).toEqual(ship);
  expect(board[0][1]).toEqual(ship);
  expect(board[0][2]).toEqual(ship);
  expect(board[0][3]).toEqual(ship);
  expect(board[0][4]).toEqual(ship);
  expect(board[0][5]).toEqual(0);
  expect(board[0][6]).toEqual(0);

});

test('place ship 01', () => {
  const gameboard = GameBoard();
  const board = gameboard.getBoard()
  const ship = gameboard.placeShip([1, 2], 4);

  expect(board[1][0]).toEqual(0);
  expect(board[1][1]).toEqual(0);
  expect(board[1][2]).toEqual(ship);
  expect(board[1][3]).toEqual(ship);
  expect(board[1][4]).toEqual(ship);
  expect(board[1][5]).toEqual(ship);
  expect(board[1][6]).toEqual(0);

});

test('attack', () => {

  const gameboard = GameBoard();
  const ship = gameboard.placeShip([1, 2], 4);

  gameboard.receiveAttack([1,2]);

  expect(ship.hits).toEqual(1)

  gameboard.receiveAttack([1,3]);
  gameboard.receiveAttack([2,0]);
  gameboard.receiveAttack([1,4]);
  expect(ship.hits).toEqual(3);

});

test('miss', () => {

  const gameboard = GameBoard();
  const ship = gameboard.placeShip([1, 2], 4);

  expect(gameboard.displayMiss()).toEqual([]);

  gameboard.receiveAttack([1,2])
  gameboard.receiveAttack([1,0]) //miss
  gameboard.receiveAttack([2,0]) //miss
  gameboard.receiveAttack([1,6]) //miss
  gameboard.receiveAttack([1,4])
  gameboard.receiveAttack([1,5])

  expect(gameboard.displayMiss()).toEqual([[1,0],[2,0],[1,6]]);
   
  gameboard.receiveAttack([1,6]) //miss
  gameboard.receiveAttack([1,6]) //miss

  expect(gameboard.displayMiss()).toEqual([[1,0],[2,0],[1,6],[1,6],[1,6]]);

  gameboard.receiveAttack([1,4])
  gameboard.receiveAttack([1,5])

  expect(gameboard.displayMiss()).toEqual([[1,0],[2,0],[1,6],[1,6],[1,6]]);

});

test('board ship free', () => {

  const gameboard = GameBoard();
  const ship = new ships(4)

  expect(gameboard.shipsSunk()).toEqual(true);

  gameboard.placeShip([1, 2], ship.length);

  expect(gameboard.shipsSunk()).toEqual(false);

});

