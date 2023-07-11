"using strict";
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
    if (computer === "rock ") {
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

console.log(
  "Hello human, u will be playing against the computer for a game of rock-papers-scissors, first to 3 is the winner, just write your choice when instructed to, goodluck!"
);

let human = 0;
let computer = 0;

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
