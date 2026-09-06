
import { GameBoard } from "./gameboard";
import { dom } from "./dom"


class Player {
  constructor(name) {
    this.name = name;
    this.dom = dom();
    this.gameboard = GameBoard(this.dom);

  }
}

const player = new Player("player")
const computer = new Player("computer")

export {player, computer}