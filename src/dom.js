
import { player, computer } from "./player";

function dom() {

  const divContent = document.querySelector(".content")

  function domBoard() {

    const numbersArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
    const alphaberArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]

    const divBoard = document.createElement("div");
    divBoard.classList.add("board");

    const alphabet = document.createElement("div");
    alphabet.classList.add("letters-on-board");

    const numbers = document.createElement("div");
    numbers.classList.add("numbers-on-board");

    divBoard.append(alphabet)
    divBoard.append(numbers)

    for (let i = 0; i < 100; i++) {  
      const box = document.createElement("div");
      box.classList.add("box");
      divBoard.append(box)
    } 

    const empthy = document.createElement("div");
    alphabet.append(empthy)

    for (let i = 0; i < alphaberArray.length; i++) {
      const element = alphaberArray[i];
      const letter = document.createElement("div");
      letter.innerHTML = element
      alphabet.append(letter)
    }


    for (let i = 0; i < numbersArray.length; i++) {
      const element = numbersArray[i];
      const number = document.createElement("div");
      number.innerHTML = element
      numbers.append(number)
    }

    divContent.append(divBoard)
  }

  function domShip (locationY, locationX) {
    const tt = player.gameboard.getBoard()
    tt[locationY][locationX].classList.add("ship");
  }

  return {domBoard, domShip}
}


export {dom}