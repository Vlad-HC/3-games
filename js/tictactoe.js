let td = [...document.getElementsByTagName("td")];
const resetBtn = document.querySelector(".reset");
const scoreEl = document.querySelector(".score");
const restartBtn = document.querySelector(".restart");
let score = {
  player: 0,
  player2: 0,
};
let xpos = null;
let ypos = null;
const winCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

restartBtn.onclick = function () {
  for (i = 0; i < td.length; i++) {
    td[i].innerHTML = "";
  }
};

resetBtn.onclick = function () {
  for (i = 0; i < td.length; i++) {
    td[i].innerHTML = "";
  }
  score.player = 0;
  score.player2 = 0;
  scoreEl.innerHTML = `${score.player} : ${score.player2}`;
};

function checkWin() {}

for (let i = 0; i < td.length; i++) {
  td[i].onclick = function () {
    this.innerHTML = "x";
    let index = td.indexOf(this);
    ///xpos
    ///ypos
  };
}
