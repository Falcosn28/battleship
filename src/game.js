import "./styles.css";
import { Player } from "./player.js";

function gameFactory() {
  const player = new Player("player");
  const computer = new Player("computer");
  let playerTurnBoolean = true;

  function start() {
    player.gameboard.placeShip([3, 4], 6);
    computer.gameboard.placeShip([1, 2], 4);

    player.dom.domBoard(game.player.gameboard.getBoard()); //display
    computer.dom.domBoard(game.computer.gameboard.getBoard());
  }

  function end(name) {
    console.log("yuu");

    console.log(name + " won");
    playerTurnBoolean = false;
  }

  function playerTurn(location, board) {
    const missedAttacks = computer.gameboard.displayMiss();

    if (
      playerTurnBoolean === false ||
      board.classList.contains("player") ||
      missedAttacks.some(([a, b]) => a === location[0] && b === location[1])
    ) {
      return;
    }

    if (computer.gameboard.receiveAttack(location) === false) {
      playerTurnBoolean = false;
      computerTurn();
    }

    console.log(computer.gameboard.shipsSunk());

    if (computer.gameboard.shipsSunk()) {
      end("player");
    }

    computer.dom.domBoardUpdate(computer.gameboard.getBoard(), location); //display
  }

  function computerTurn() {
    const missedAttacks = player.gameboard.displayMiss();
    const attacks = player.gameboard.getAttacked();

    let y = Math.floor(Math.random() * 10);
    let x = Math.floor(Math.random() * 10);

    if (
      missedAttacks.some(([a, b]) => a === y && b === x) ||
      attacks.some(([a, b]) => a === y && b === x)
    ) {
      return computerTurn();
    }
    setTimeout(() => {
      if (player.gameboard.receiveAttack([y, x]) === true) {
        player.dom.domBoardUpdate(player.gameboard.getBoard(), [y, x]); //display

        if (player.gameboard.shipsSunk()) {
          end("computer");
        }
        return computerTurn();
      }

      player.dom.domBoardUpdate(player.gameboard.getBoard(), [y, x]); //display
      playerTurnBoolean = true;
    }, 500);
  }

  return { playerTurn, player, computer, start, end };
}

const game = gameFactory();

export { game };
