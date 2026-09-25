
// import { ships } from "./ship.js";
import { ships } from "./ship"

function GameBoard () {

  let board = createBoard()
  let missed = []
  let attacked = []
  let onBoardShips = []

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

  function getShips() {
    return onBoardShips
  }

  function getAttacked() {
    return attacked 
  }

  function displayMiss() {
    return missed
  }

  function placeShip (location, shipLength) {

    const ship = new ships(shipLength)

    onBoardShips.push(ship)

    const [y, x] = location

    for (let i = 0; i < ship.length; i++) {
      board[y][x + i] = ship
    }
    
    return ship

  }

  function receiveAttack (location) { //recod attacks

    const [y, x] = location

    if (missed.some(value => value[0] === y && value[1] === x) &&
        attacked.some(value => value[0] === y && value[1] === x)
    ) {
      return
    }


    if (typeof board[y][x] === "object"){
      attacked.push([y, x])
      board[y][x].hit()
      board[y][x].isSunk()
      return true
    }

    missed.push([y, x])

    board[y][x] = 2 //miss

    return false

  }

  function shipsSunk () { //needs rework
    for (let row = 0; row < board.length; row++) {
      for (let col = 0; col < board[row].length; col++) {
        if (typeof board[row][col] === "object") {
          return false
          //check if every ship is sunk
        };
      }
    }
    return true
  }


 return {createBoard, placeShip, receiveAttack, getBoard, shipsSunk, displayMiss, getShips, getAttacked}
}

export {GameBoard}




