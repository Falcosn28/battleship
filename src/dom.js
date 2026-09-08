
function dom(gameboard, name) {

  const divContent = document.querySelector(".content")

  const divBoard = document.createElement("div");
  divBoard.classList.add("board");

  divContent.append(divBoard)

  function domBoard(board) {
    divBoard.innerHTML = "";

    divBoard.append(domBoardAlphabet())
    divBoard.append(domBoardNumbers())

    board.forEach((row) => {
      row.forEach((cell) => {
        const box = document.createElement("div");

        box.classList.add("box");

        if (cell === 1) {
          domShip(box)
        }

        box.addEventListener("click", () => {
          gameboard.onClick(name)
          //check turn
            //function that takes board and player
            //return true if board dosn't match player
            
          //run function attact
        });

        divBoard.append(box);
      });
    });


  }

  function domBoardNumbers(){
    const numbersArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
    const numbers = document.createElement("div");
    numbers.classList.add("numbers-on-board");

    for (let i = 0; i < numbersArray.length; i++) {
      const element = numbersArray[i];
      const number = document.createElement("div");
      number.innerHTML = element
      numbers.append(number)
    }

    return numbers
  }

  function domBoardAlphabet(){
    const alphabetArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]
    const alphabet = document.createElement("div");
    const empthy = document.createElement("div");

    alphabet.classList.add("letters-on-board");
    alphabet.append(empthy)

    for (let i = 0; i < alphabetArray.length; i++) {
      const element = alphabetArray[i];
      const letter = document.createElement("div");
      letter.innerHTML = element
      alphabet.append(letter)
    }

    return alphabet

  }

  function domShip(cell) {
    cell.classList.add("ship");
  }

  return {domBoard, domShip}
}


export {dom}

