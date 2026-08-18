

class ships {
  constructor(length) {
    this.length = length;
    this.hits = 0;
    this.sunk = false
  }

  hit() {
    this.hits++
  }

  isSunk() {
    if (this.length === this.hits) {
      this.sunk = true
    }
  }

}

const ship = new ships(4)

console.log(ship)

ship.hit()
ship.hit()

ship.hit()
ship.hit()
ship.isSunk()

console.log(ship)


export {ships}