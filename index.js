console.clear();
let rock = document.querySelector(".rock-btn");
let paper = document.querySelector(".paper-btn");
let scissors = document.querySelector(".scissors-btn");
let playerInput = document.querySelector(".player-input");
let aiInput = document.querySelector(".ai-input");
let text = document.querySelector(".description");
let hasChoose = false;
let choises = ["🪨", "📄", "✂️"];
let player = "";
let comp = "";
let timeWait = 2200;
let stats = {
  winLine: document.querySelector(".win"),
  lostLine: document.querySelector(".lost"),
  tieLine: document.querySelector(".tie"),
  win: 0,
  lost: 0,
  tie: 0
}

let RPS = {
  rock: function addRock() {
    console.log("rock");
    playerInput.textContent = choises[0];
    player = "🪨";
    aiPicking();
    winCondition();
  },
  paper: function addPaper() {
    console.log("paper");
    playerInput.textContent = choises[1];
    player = "📄";
    aiPicking();
    winCondition();
  },
  scissors: function addScissors() {
    console.log("scissors");
    playerInput.textContent = choises[2];
    player = "✂️";
    aiPicking();
    winCondition();
  },
};

rock.addEventListener("click", RPS.rock);
paper.addEventListener("click", RPS.paper);
scissors.addEventListener("click", RPS.scissors);

function aiPicking() {
  hasChoose = true;
  ai();
  spinning();
  text.textContent = "AI IS CHOOSING";
}

function winCondition() {
  setTimeout(() => {
    if (player === comp) {
      text.textContent = "TIE";
      stats.tie += 1
      stats.tieLine.textContent = "TIE: " + stats.tie
    } else if (
      (player === "🪨" && comp === "✂️") ||
      (player === "📄" && comp === "🪨") ||
      (player === "✂️" && comp === "📄")
    ) {
      text.textContent = "YOU WIN";
      stats.win += 1
      stats.winLine.textContent = "WINS: " + stats.win
    } else {
      text.textContent = "YOU LOST";
      stats.lost += 1
      stats.lostLine.textContent = "LOST: " + stats.lost
    }
  }, timeWait);
}

function ai() {
  let choise = Math.floor(Math.random() * 3);
  aiInput.textContent = choises[choise];
  comp = choises[choise];
  console.log(comp);
}

function spinning() {
  let timer = setInterval(ai, 0);
  let timeOut = setTimeout(() => {
    clearInterval(timer);
    clearTimeout(timeOut);
  }, timeWait);
}
