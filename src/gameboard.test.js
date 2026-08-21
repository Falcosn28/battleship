
import { GameBoard } from "./gameboard";

const gameboard = GameBoard();

test('create board row works', () => {
  expect(gameboard.createBoard().length).toBe(10);
});

test('create board columes works', () => {

  for (let x = 0; x < 10; x++) {
    expect(gameboard.createBoard().length).toBe(10);
  }

});

