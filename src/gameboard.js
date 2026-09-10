
// import { ships } from "./ship.js";
import { dom } from "./dom"

import { ships } from "./ship"

function GameBoard () {

  let board = createBoard()
  let missed = []
  let playerTurn = true

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

  function receiveAttack (location) { //recod missed attacks

    const [y, x] = location

    if (board[y][x] !== 0){
      board[y][x].hit()
      return
    }

    missed.push([y, x])
    return [y, x]

  }

  function displayMiss() {
    return missed
  }

  function shipsSunk () {
    for (let row = 0; row < board.length; row++) {
      for (let col = 0; col < board[row].length; col++) {
        if (board[row][col] !== 0) {
          return false
        };
      }
    }
    return true
  }



 return {createBoard, placeShip, receiveAttack, getBoard, shipsSunk, displayMiss}
}

export {GameBoard}




