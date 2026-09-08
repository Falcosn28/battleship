
import { GameBoard } from "./gameboard";
import { dom } from "./dom"

class Player {
  constructor(name) {
    this.name = name;
    this.gameboard = GameBoard();
    this.dom = dom(this.gameboard, this.name);
  }
}

const player = new Player("player")
const computer = new Player("computer")

export {player, computer}