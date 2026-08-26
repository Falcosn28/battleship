
import { player, computer } from "./player";

const divBoard = document.querySelector(".board")

function dom() {

  function domBoard() {

    console.log("sus")

    for (let i = 0; i < player.gameboard.getBoard().length; i++) {  
      const box = document.createElement("div");
      box.classList.add("box");
      box.innerHTML = "s"
      divBoard.append(box)
    } 

    
  }

  return {domBoard}
}


export {dom}