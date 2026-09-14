
import "./styles.css";
import { Player } from "./player.js";

function gameFactory() {
  const player = new Player("player")
  const computer = new Player("computer")

  function onClick(location, obj) {
    obj.gameboard.placeShip(location, 4)
    obj.dom.domBoardUpdate(obj.gameboard.getBoard())
    //decide for attack or placing
  };

  function start(){
    player.dom.domBoard(game.player.gameboard.getBoard()) //display
    computer.dom.domBoard(game.computer.gameboard.getBoard())

  }

  return {onClick, player, computer, start}

}

const game = gameFactory()

export {game}

