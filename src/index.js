
import "./styles.css";
import { dom } from "./dom.js";
import { player, computer } from "./player.js";

player.dom.domBoard(player.gameboard.getBoard())
computer.dom.domBoard(computer.gameboard.getBoard())

player.gameboard.placeShip([1, 2], 4)
computer.gameboard.placeShip([5, 5], 4)

computer.gameboard.placeShip([0, 0], 2)



