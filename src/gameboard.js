
// import { ships } from "./ship.js";
import { ships } from "./ship"

function GameBoard () {

  let board = createBoard()
  let missed = []

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

  function placeShip (location, shipLength) {

    const ship = new ships(shipLength)

    const [y, x] = location

    for (let i = 0; i < ship.length; i++) {
      board[y][x + i] = ship
    }
    
    return ship

  }

  function receiveAttack (location) { //recod attacks

    const [y, x] = location

    if (missed.some(value => value[0] === y && value[1] === x)){
      return
    }

    missed.push([y, x])

    if (board[y][x] !== 0){
      board[y][x].hit()
      board[y][x].isSunk()
      if (board[y][x].sunk){

      }
      return true
    }

    board[y][x] = 3 //miss

    return false

  }

  function displayMiss() {
    return missed
  }

  function shipsSunk () { //needs rework
    for (let row = 0; row < board.length; row++) {
      for (let col = 0; col < board[row].length; col++) {
        if (typeof board[row][col] === "object") {
          return false
        };
      }
    }
    return true
  }


 return {createBoard, placeShip, receiveAttack, getBoard, shipsSunk, displayMiss}
}

export {GameBoard}




