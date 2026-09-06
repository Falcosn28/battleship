
// import { ships } from "./ship.js";
import { dom } from "./dom"

function GameBoard (display) {

  let board = createBoard()
  let missed = 0

  function createBoard () {

    let newBoard = []

    for (let x = 0; x < 10; x++) {
      newBoard.push([])
      for (let y = 0; y < 10; y++) {
        newBoard[x].push(0)
      }
    }

    return newBoard

  }

  function getBoard() {
    return board
  }

  function placeShip (location, ship) {

    const [y, x] = location

    for (let i = 0; i < ship; i++) {
      board[y][x + i] = 1
    }

    display.domBoard(board)
    
  }

  function receiveAttack (location) {

    const [y, x] = location

    if (board[y][x] === 1){
      return "hit"
    }
    missed++

    return [y, x]

  }

  function displayMiss () {
    return missed
  }

  function shipsSunk () {
    for (let row = 0; row < board.length; row++) {
      for (let col = 0; col < board[row].length; col++) {
        if (board[row][col] == 1) {
          return false
        };
      }
    }
    return true
  }

 return {createBoard, placeShip, receiveAttack, displayMiss, getBoard, shipsSunk}
}

export {GameBoard}




