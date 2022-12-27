let startButton = document.getElementById("startButton");
let startScreen = document.getElementById("startScreen");
let quizConstainer = document.getElementById("quizContainer");
// let submitButton = document.getElementById("submitButton");
let nextButton = document.getElementById("nextButton");
let backButton = document.getElementById("backButton");
let answerButton = document.getElementsByClassName("answer");


function startGame() {
  quizContainer.classList.remove("hide");
  startScreen.classList.add("hide");
  displayQandA(qanda);
  // test()
}