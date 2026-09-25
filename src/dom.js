import { game } from "./game";

function dom(obj) {
  const divContent = document.querySelector(".content");

  function domBoard(board) {
    const divBoard = document.createElement("div");

    divBoard.classList.add("board");
    divBoard.classList.add(obj.name);

    divContent.append(divBoard);

    divBoard.append(domBoardAlphabet());
    divBoard.append(domBoardNumbers());

    board.forEach((row, rowIndex) => {
      row.forEach((cell, index) => {
        const box = document.createElement("div");

        box.classList.add("box");

        if (cell !== 0 && obj.name !== "computer") {
          box.classList.add("ship");
        }

        box.addEventListener("click", () => {
          const location = [rowIndex, index];
          game.playerTurn(location, divBoard);
        });

        divBoard.append(box);
      });
    });
  }

  function domBoardNumbers() {
    const numbersArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
    const numbers = document.createElement("div");
    numbers.classList.add("numbers-on-board");

    for (let i = 0; i < numbersArray.length; i++) {
      const element = numbersArray[i];
      const number = document.createElement("div");
      number.innerHTML = element;
      numbers.append(number);
    }

    return numbers;
  }

  function domBoardAlphabet() {
    const alphabetArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    const alphabet = document.createElement("div");
    const empthy = document.createElement("div");

    alphabet.classList.add("letters-on-board");
    alphabet.append(empthy);

    for (let i = 0; i < alphabetArray.length; i++) {
      const element = alphabetArray[i];
      const letter = document.createElement("div");
      letter.innerHTML = element;
      alphabet.append(letter);
    }

    return alphabet;
  }

  function domBoardUpdate(board) {
    const boardDOM = document.querySelectorAll(`.${obj.name} .box`);

    for (let y = 0; y < board.length; y++) {
      for (let x = 0; x < board[y].length; x++) {
        const domIndex = y * 10 + x;
        const cell = board[y][x];

        if (typeof cell === "object" && cell.sunk === true) {
          boardDOM[domIndex].classList.add("sunk");
        } else if (cell === 1) {
          boardDOM[domIndex].classList.add("ship");
        } else if (cell === 2) {
          boardDOM[domIndex].classList.add("miss");
        } else if (
          typeof cell === "object" &&
          obj.gameboard
            .getAttacked()
            .some((value) => value[0] === y && value[1] === x)
        ) {
          boardDOM[domIndex].classList.remove("ship");
          boardDOM[domIndex].classList.add("attack");
        }
      }
    }
  }

  return { domBoard, domBoardUpdate };
}

export { dom };
