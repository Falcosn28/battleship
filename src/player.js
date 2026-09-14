
import { GameBoard } from "./gameboard";
import { dom } from "./dom"

class Player {
  constructor(name) {
    this.name = name;
    this.gameboard = GameBoard();
    this.obj = this
    this.dom = dom(this.obj);
  }
}


export {Player}