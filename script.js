let resetButton = document.querySelector(".button-85");
let winnerMessage = document.querySelector("#Winner");
let boxes = document.querySelectorAll(".box");

const winPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let turn0 = true;

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("Box was clicked");
    box.innerText = turn0 ? "X" : "0";
    turn0 = !turn0;
    box.disabled = true;

    if (checkWinner()) {
      console.log("Game Over. We have a winner!");
      boxes.forEach((b) => b.disabled = true);
    }
  });
});

resetButton.addEventListener("click", () => {
  boxes.forEach((box) => {
    box.innerText = "";
    box.disabled = false;
  });
  resetButton.innerText = "Reset Button";
  winnerMessage.innerText = ""; // Clear the winner message
  turn0 = true;
});

const checkWinner = () => {
  for (let pattern of winPattern) {
    let [a, b, c] = pattern;
    let PosVar1 = boxes[a].innerText;
    let PosVar2 = boxes[b].innerText;
    let PosVar3 = boxes[c].innerText;

    if (PosVar1 !== "" && PosVar1 === PosVar2 && PosVar2 === PosVar3) {
      console.log(PosVar1 + " is the Winner");
      winnerMessage.innerText = PosVar1 + " is the Winner";
      resetButton.innerText= "New Match";
      return true;
    }
  }
  return false;
};
