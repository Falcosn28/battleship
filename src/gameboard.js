
// import { ships } from "./ship.js";

function GameBoard () {

  let board = []

  function createBoard () {

    board = []

    for (let x = 0; x < 10; x++) {
      board.push([])
      for (let y = 0; y < 10; y++) {
        board[x].push(0)
      }
    }

    return board

  }

  function placeShip (location, ship) {

    const [y, x] = location

    for (let i = 0; i >= ship.length; i++) {
      board[y][x + i] = 1
    }
    


  }

  function receiveAttack () {

  }

 return {createBoard, placeShip}
}

export {GameBoard}