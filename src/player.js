
import { GameBoard } from "./gameboard";

class Player {
  constructor() {
    this.gameboard = GameBoard();

  }
}

const player = new Player ()
const computer = new Player ()

export {player, computer}