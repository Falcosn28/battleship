
import "./styles.css";
import { Player } from "./player.js";

function gameFactory() {
  const player = new Player("player")
  const computer = new Player("computer")
  let playerTurnBoolean = true

  function start(){

    player.gameboard.placeShip([3,4], 6)
    computer.gameboard.placeShip([1,2], 4)

    player.gameboard.placeShip([1,1], 6)

    player.gameboard.placeShip([5,1], 8)
    computer.gameboard.placeShip([6,3], 3)

    player.gameboard.placeShip([9,8], 2)
    computer.gameboard.placeShip([5,1], 2)

    player.dom.domBoard(game.player.gameboard.getBoard()) //display
    computer.dom.domBoard(game.computer.gameboard.getBoard())

  }

  function end(name) {
    console.log(name + " won")
    //check if all ships are gone
    playerTurnBoolean = false

  }

  function playerTurn(location, board) {
    const missedAttacks = computer.gameboard.displayMiss()

    if (playerTurnBoolean === false || board.classList.contains("player") || missedAttacks.some(([a, b]) => a === location[0] && b === location[1])){
      return
    }

    console.log(playerTurnBoolean)

    if (computer.gameboard.receiveAttack(location) === false){
      playerTurnBoolean = false
      computerTurn()
    }

    computer.dom.domBoardUpdate(computer.gameboard.getBoard(), location) //display
    
  };

  function computerTurn() {
    setTimeout(() => {

      const missedAttacks = player.gameboard.displayMiss()

      let y = Math.floor(Math.random() * 10);
      let x = Math.floor(Math.random() * 10);

      if (missedAttacks.some(([a, b]) => a === y && b === x)) {
        return computerTurn()
      }
  
      if (player.gameboard.receiveAttack([y,x]) === true){
        player.dom.domBoardUpdate(player.gameboard.getBoard(), [y,x]) //display
        return computerTurn()
      }

      player.dom.domBoardUpdate(player.gameboard.getBoard(), [y,x]) //display
      playerTurnBoolean = true

    }, 500);
  }

  return {playerTurn, player, computer, start, end}

}

const game = gameFactory()

export {game}

