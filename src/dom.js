
import { player, computer } from "./player";

const divBoard = document.querySelector(".board")

function dom() {

  function domBoard() {

    for (let i = 0; i < 100; i++) {  
      const box = document.createElement("div");
      box.classList.add("box");
      divBoard.append(box)
    } 

    
  }

  return {domBoard}
}


export {dom}