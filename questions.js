const qanda = [
  {
    id: 0,
    questionNumber: 1,
    question: "This is the first question?",
    answers: [
      { id: 1, answer: "1 first answer", type: "correct" },
      { id: 2, answer: "1 second answer" },
      { id: 3, answer: "1 third answer" },
      { id: 4, answer: "1 fourth answer" },
    ],
  },
  {
    id: 1,
    questionNumber: 2,
    question: "This is the second question?",
    answers: [
      { id: 1, answer: "2 first answer" },
      { id: 2, answer: "2 second answer" },
      { id: 3, answer: "2 third answer" },
      { id: 4, answer: "2 fourth answer" },
    ],
  },
  {
    id: 2,
    questionNumber: 3,
    question: "This is the third question?",
    answers: [
      { id: 1, answer: "3 1st answer" },
      { id: 2, answer: "3 2nd answer" },
      { id: 3, answer: "3 3rd answer" },
      { is: 4, answer: "3 4th answer" },
    ],
  },
];

//Display the total # of questions to the correct div
let totalNumQ = document.getElementById("totalScore");
let totalNumberofQuestions = qanda.length;
totalNumQ.innerHTML = totalNumberofQuestions;

//Add the total # corret to the correct div
let startNumCorrect = document.getElementById("score");
let numCorrect = (startNumCorrect.innerHTML = 0);

//start the game and populate the questions with the start button
startButton.addEventListener("click", startGame);

//Iterate over the q and a's to populate
function questionIterator() {
  for (let i = 0; i < qanda.length; i++) {
    currentQuestionArray = qanda[i];
  }
}
//the below code works to display the first question
// let i = 0;
// let currentQuestionArray = qanda[i];

//populate q and a's
function displayQandA() {
  questionIterator();
  let currentQuestion = currentQuestionArray.question;
  let questionElement = document.createElement("h3");
  let questionText = currentQuestion;
  document.getElementById("questions").appendChild(questionElement);
  questionElement.innerHTML = questionText;
  // console.log(`${currentQuestion}'s answers: `);

  for (const currrentAnswersArray of currentQuestionArray.answers) {
    let answerText = currrentAnswersArray.answer;
    let answerElement = document.createElement("button");
    answerElement.classList.add("answer");

    document.getElementById("answers").appendChild(answerElement);
    answerElement.innerHTML = answerText;

    // function addQandAText() {}
    // addQandAText();
  }
}

// nextButton.addEventListener("click", nextButtonFunction)
// function nextButtonFunction(qNum) {
//   qNum + 1;
//   console.log(qNum);
// }
