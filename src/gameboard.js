
import { ships } from "./ship";

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

  function placeShip () {

    let ship = new ships(5) 
    

  }

  function receiveAttack () {

  }

 return {createBoard}
}


export {GameBoard}