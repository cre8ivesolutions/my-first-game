const qanda = [
  {
    id: 0,
    // questionNumber: 1,
    question: "What is the correct way to get a button to invoke a function?",
    answers: [
      { id: 1, answer: `In html file, add 'onClick = "function()"`, type: "correct" },
      { id: 2, answer: "In js file, add 'onclick=function()" },
      { id: 3, answer: "The only way to do it is in a function that calls to the button" },
      { id: 4, answer: "In js file, use 'addEventListener' along with 2 or 3 arguments", type: "correct"},
    ],
  },
  {
    id: 1,
    // questionNumber: 2,
    question: "CSS: How do you move text under one element on the left, but not under the element on the right?",
    answers: [
      { id: 1, answer: "float: left;" },
      { id: 2, answer: "float: right;" },
      { id: 3, answer: "clear: left;" , type: "correct"},
      { id: 4, answer: "float: right:" },
    ],
  },
  {
    id: 2,
    // questionNumber: 3,
    question: "CSS: What is a 'normal' font weight?",
    answers: [
      { id: 1, answer: "100" },
      { id: 2, answer: "200" },
      { id: 3, answer: "400", type: "correct" },
      { id: 4, answer: "600" },
    ],
  },
  {
    id: 3,
    // questionNumber: 3,
    question: "How does html know how to use the javascript file?",
    answers: [
      { id: 1, answer: "It wil automatically use the index.js file." },
      { id: 2, answer: "You need to tell it what to use in the package.json files." },
      { id: 3, answer: "You need to tell it what to use in the head of the html file using the script tag.", type: "correct" },
      { id: 4, answer: "You need to tell it what to usse in the javascript file." },
    ],
  },
  {
    id: 4,
    // questionNumber: 3,
    question: "CSS: What is a 'normal' font weight?",
    answers: [
      { id: 1, answer: "100" },
      { id: 2, answer: "200" },
      { id: 3, answer: "400", type: "correct" },
      { id: 4, answer: "600" },
    ],
  },
  {
    id: 5,
    // questionNumber: 3,
    question: "CSS: What is a 'normal' font weight?",
    answers: [
      { id: 1, answer: "100" },
      { id: 2, answer: "200" },
      { id: 3, answer: "400", type: "correct" },
      { id: 4, answer: "600" },
    ],
  },
  {
    id: 6,
    // questionNumber: 3,
    question: "CSS: What is a 'normal' font weight?",
    answers: [
      { id: 1, answer: "100" },
      { id: 2, answer: "200" },
      { id: 3, answer: "400", type: "correct" },
      { id: 4, answer: "600" },
    ],
  },
  {
    id: 7,
    // questionNumber: 3,
    question: "CSS: What is a 'normal' font weight?",
    answers: [
      { id: 1, answer: "100" },
      { id: 2, answer: "200" },
      { id: 3, answer: "400", type: "correct" },
      { id: 4, answer: "600" },
    ],
  },
  {
    id: 8,
    // questionNumber: 3,
    question: "CSS: What is a 'normal' font weight?",
    answers: [
      { id: 1, answer: "100" },
      { id: 2, answer: "200" },
      { id: 3, answer: "400", type: "correct" },
      { id: 4, answer: "600" },
    ],
  },
  {
    id: 9,
    // questionNumber: 3,
    question: "CSS: What is a 'normal' font weight?",
    answers: [
      { id: 1, answer: "100" },
      { id: 2, answer: "200" },
      { id: 3, answer: "400", type: "correct" },
      { id: 4, answer: "600" },
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

//this is not working
function clickAnswer() {
  let answerButton = document.getElementsByClassName("answer");
  for (let i = 0; i < qanda.length; i++) {
    var qid = qanda[i].id;
  }
  currentQuestionArray = qid;
  console.log(`qid = ${qid}`);
  answerButton.addEventListener("click", clickAnswer);
}

//populate q and a's
function displayQandA() {
  // for (let i=0; i < qanda.length; i++){}
  let i = 0; //this is a place holder. need to iterate through  qanda with an event listener
  let currentQuestionArray = qanda[i];
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
