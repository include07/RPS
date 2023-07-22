"use strict";

function getComputerChoice() {
  let x = window.Math.random();
  if (x < 0.3) {
    return "rock";
  } else if (x >= 0.3 && x <= 0.6) {
    return "scissors";
  } else {
    return "paper";
  }
}

function decide(computer, human) {
  if (human === "rock") {
    if (computer === "rock") {
      return "tie";
    } else if (computer === "scissors") {
      return "human";
    } else {
      return "loss";
    }
  } else if (human === "paper") {
    if (computer === "rock") {
      return "human";
    } else if (computer === "scissors") {
      return "computer";
    } else {
      return "tie";
    }
  } else if (human === "scissors") {
    if (computer === "rock") {
      return "computer";
    } else if (computer === "paper") {
      return "human";
    } else {
      return "tie";
    }
  }
}

const paper = document.querySelector("#paperButton");
const rock = document.querySelector("#rockButton");
const scissors = document.querySelector("#scissorsButton");

const paperRobot = document.querySelector("#paperRobot");
const rockRobot = document.querySelector("#rockRobot");
const scissorsRobot = document.querySelector("#scissorsRobot");

const score = document.querySelector("#scoreTag");
const comment = document.querySelector("#messageTag");

let human = 0;
let computer = 0;

paper.addEventListener('click', function(e){
  playRound("paper");
})

paper.addEventListener('mouseover', function(e){
  paper.style.backgroundColor = 'green';
})

paper.addEventListener('mouseout', function(e){
  paper.style.backgroundColor = '';
})

rock.addEventListener('click', function(e){
  playRound("rock");
})

rock.addEventListener('mouseover', function(e){
  rock.style.backgroundColor = 'green';
})

rock.addEventListener('mouseout', function(e){
  rock.style.backgroundColor = '';
})

scissors.addEventListener('click', function(e){
  playRound("scissors");
})

scissors.addEventListener('mouseover', function(e){
  scissors.style.backgroundColor = 'green';
})

scissors.addEventListener('mouseout', function(e){
  scissors.style.backgroundColor = '';
})


function playRound(humanChoice) {
  // reset all robot choices
  document.querySelectorAll('.robotChoice').forEach(choice => choice.classList.remove('animate'));

  let computerChoice = getComputerChoice();
  let result = decide(computerChoice, humanChoice);

  // animate computer's choice
  document.querySelector(`#${computerChoice}Robot`).classList.add('animate');

  // display computer's choice
  comment.textContent = `Computer chose ${computerChoice}`;

  if (result === "human") {
    human++;
  } else if (result === "computer") {
    computer++;
  }

  score.textContent = `${human} - ${computer}`;

  // check for game end
  if (human === 3 || computer === 3) {
    let message = human === 3 ? 'Human Wins!' : 'Computer Wins!';
    comment.textContent = message;
    // reset game
    human = 0;
    computer = 0;
    score.textContent = `${human} - ${computer}`;
  }
}



/*



while (human < 3 && computer < 3) {
  let x = window.prompt("its your turn, type your choice");
  let y = window.getComputerChoice();
  let result = window.decide(x.toLowerCase(), y);
  if (result === "computer") {
    console.log("the computer chose " + y + ", you've lost!");
    computer++;
  } else if (result === "human") {
    console.log("the computer chose " + y + ", you've won!");
    human++;
  } else {
    console.log("its a tie!");
  }
  console.log("Human: " + human + "| Computer: " + computer);
}
*/