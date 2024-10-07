let td = [...document.getElementsByTagName("td")];
const resetBtn = document.querySelector(".reset");
const scoreEl = document.querySelector(".score");
const restartBtn = document.querySelector(".restart");
const dialogContainer = document.querySelector(".dialog-container");
let xturn = true;
let xPos = [];
let oPos = [];
let gameEnded = false;
let score = {
  player: 0,
  player2: 0,
};
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
function checkDraw() {
  let j = 0;
  for (i = 0; i < td.length; i++) {
    if (td[i].innerHTML != "") {
      j++;
      if (j == 9) {
        gameEnded = true;
        dialogContainer.innerHTML = "Draw";
      }
    }
  }
}
function restartGame() {
  for (i = 0; i < td.length; i++) {
    td[i].innerHTML = "";
    if (td[i].classList.length == 2) {
      td[i].classList.remove("clicked");
      td[i].classList.remove("combination");
    }
    if (td[i].classList.length == 1) {
      td[i].classList.remove("clicked");
    }
  }
  xPos = [];
  oPos = [];
  gameEnded = false;
  dialogContainer.innerHTML = "";
  scoreEl.classList.remove("changed");
}

function isSubset(subset, set) {
  return subset.every((element) => set.includes(element));
}

function updateGameScore() {
  scoreEl.innerHTML = `${score.player} : ${score.player2}`;
}

function checkWin() {
  for (i = 0; i < winCombinations.length; i++) {
    if (xPos.length >= 3 && isSubset(winCombinations[i], xPos)) {
      dialogContainer.innerHTML = "X WIN";
      score.player = score.player + 1;
      scoreEl.classList.add("changed");
      gameEnded = true;
      updateGameScore();
      return winCombinations[i];
    }
    if (oPos.length >= 3 && isSubset(winCombinations[i], oPos)) {
      dialogContainer.innerHTML = "O WIN";
      score.player2 = score.player2 + 1;
      scoreEl.classList.add("changed");
      gameEnded = true;
      updateGameScore();
      return winCombinations[i];
    }
  }
}

restartBtn.onclick = function () {
  restartGame();
};
resetBtn.onclick = function () {
  restartGame();
  score.player = 0;
  score.player2 = 0;
  scoreEl.innerHTML = `${score.player} : ${score.player2}`;
};
//onclick function for all <td> elements
for (let i = 0; i < td.length; i++) {
  td[i].onclick = function () {
    if (gameEnded) {
      dialogContainer.innerHTML = "Press restart button";
      return;
    }
    let index = td.indexOf(this);
    td[index].classList.add("clicked");
    if (this.innerHTML == "") {
      if (xturn) {
        this.innerHTML = "x";
        xPos.push(index);
        xturn = false;
      } else if (!xturn) {
        this.innerHTML = "o";
        oPos.push(index);
        xturn = true;
      }
    }
    winCombination = checkWin();
    if (winCombination != undefined) {
      for (i = 0; i < 3; i++) {
        ind = winCombination[i];
        td[ind].classList.add("combination");
      }
    } else {
      checkDraw();
    }
  };
}
