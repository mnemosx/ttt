let board = ["-", "-", "-", "-", "-", "-", "-", "-", "-"];
let currentTurn = "X";

export function getWinner() {
  return "-";
}

export function isTie() {
  return false;
}

export function onClick(i) {
  console.log(i);
}

export function restart() {
  // do smth n here
}

// No need to edit this
export function getCells() {
  return board;
}

// No need to edit this
export function getTurn() {
  return currentTurn;
}
