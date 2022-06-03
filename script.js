const listener = document.querySelectorAll(".card");
const computerCard = document.querySelector(".computerCard");
const textForWinner = document.getElementById("textArea");
const imgTag = document.createElement("img");

let computerCount = 0,
  playerCount = 0;

//NOTE DOM creation of computer side image in the website
const images = {
  rock: "./img/rock.svg",
  paper: "./img/paper.svg",
  scissors: "./img/scissors-svgrepo-com.svg",
};

//NOTE computer side play and return a rondom arr value.
function computerPlay() {
  let arr = ["rock", "paper", "scissors"];
  return arr[Math.floor(Math.random() * 2) + 1];
}

//NOTE this function is return string (i.e) who won and loses the game.
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) return "your draw!";
  if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  )
    return ` you lose! ${computerSelection} beats ${playerSelection}`;
  if (
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "rock" && computerSelection === "scissors")
  )
    return ` you win! ${playerSelection} beats ${computerSelection}`;
}

//NOTE This function goes throw the every instance of the event and make changes

listener.forEach((e) => {
  e.addEventListener("click", () => {
    const computerSidePlay = computerPlay();

    imgTag.setAttribute("class", "after choice");
    imgTag.setAttribute("src", images[`${computerSidePlay}`]);
    // textAns.innerText = textAnswer;
    computerCard.appendChild(imgTag);

    const textFile = playRound(e.getAttribute("data-option"), computerSidePlay);
    if (textFile.includes("you win!")) {
      playerCount += 1;
      const playerIds = document.getElementById(`p${playerCount}`);
      playerIds.classList.add("fa-solid");
    }

    if (textFile.includes("you lose!")) {
      computerCount += 1;
      const computerIds = document.getElementById(`c${computerCount}`);
      computerIds.classList.add("fa-solid");
    }

    if (computerCount == 3) textForWinner.textContent = "You lose!";
    if (playerCount == 3) textForWinner.textContent = "You win!";
  });
});
