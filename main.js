let startButton = document.getElementById("startButton");
let startScreen = document.getElementById("startScreen");
let quizConstainer = document.getElementById("quizContainer");



function startGame() {
  quizContainer.classList.remove("hide");
  startScreen.classList.add("hide");
  questionIterator(qanda);
//   hideElement();
//   addQuestionText();
}