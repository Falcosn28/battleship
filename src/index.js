
import "./styles.css";
import { player, computer } from "./player.js";

//could improt dom and not use computer and player object

player.dom.domBoard(player.gameboard.getBoard()) // empthy
computer.dom.domBoard(computer.gameboard.getBoard())

player.gameboard.placeShip([1, 2], 4)

computer.gameboard.placeShip([5, 5], 4) //sett ships in code

computer.gameboard.placeShip([0, 0], 2)

player.dom.domBoard(player.gameboard.getBoard()) //display
computer.dom.domBoard(computer.gameboard.getBoard())
