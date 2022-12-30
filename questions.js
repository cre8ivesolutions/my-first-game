const qanda = [
  {
    id: 0,
    question: "In CSS, what is a 'normal' font weight?",
    answers: [
      { answer: "100", correct: false },
      { answer: "200", correct: false },
      { answer: "400", correct: true },
      { answer: "600", correct: false },
    ],
  },
  {
    id: 1,
    question:
      "Using CSS, how would you move text around one element on the left, but not under the element on the right?",
    answers: [
      { answer: "float: left;", correct: false },
      { answer: "float: right;", correct: false },
      { answer: "clear: left;", correct: true },
      { answer: "float: right:", correct: false },
    ],
  },
  {
    id: 2,
    question: "What is the correct syntax to get a button to invoke a function when it is clicked?",
    answers: [
      {
        answer: `Using HTML: \n 'addEventListener."click" = function()'`,
        correct: false,
      },
      {
        answer: "Using JavaScript: \n 'button.onClick=function()'",
        correct: false,
      },
      {
        answer:
          "The only way to do it is using a JavaScript function that calls to the button",
        correct: false,
      },
      {
        answer:
          `Using JavaScript: \n 'button.addEventListener('click', function)'`,
        correct: true,
      },
    ],
  },
  {
    id: 3,
    question: "How does the html file know which JavaScript file to use?",
    answers: [
      { answer: "It wil automatically use the server.js file.", correct: false },
      {
        answer: "You need to tell it what to use in the package.json files.",
        correct: false,
      },
      {
        answer:
          "You need to tell it what to use in the head of the html file using the script tag.",
        correct: true,
      },
      {
        answer: "You need to tell the html which file to use in the JavaScript file.",
        correct: false,
      },
    ],
  },
  {
    id: 4,
    question: "'Defining' and 'invoking' a function mean the same thing.",
    answers: [
      { answer: "True", correct: false },
      { answer: "False", correct: true },
    ],
  },
  {
    id: 5,
    question: "Which of the below concepts hides unwanted details but still shows the most important information? ",
    answers: [
      { answer: "Polymorphism", correct: false },
      { answer: "Abstraction", correct: true },
      { answer: "Inheritance", correct: false },
      { answer: "Encapsulation", correct: false },
    ],
  },
  {
    id: 6,
    question: "Which of these statements utilizes a 'default' block of code?",
    answers: [
      { answer: "If / Else Statement", correct: false },
      { answer: "Else / If Statement", correct: false },
      { answer: "Switch Statement", correct: true },
      { answer: "All of them", correct: false },
      { answer: "None of them", correct: false },
    ],
  },
  {
    id: 7,
    question: "Which of these is the correct usage of a Ternary Operator?",
    answers: [
      { answer: "authenticated ? renderLogin() : renderApp()", correct: true },
      { answer: "renderApp() ? renderLogin() ; authenticated :", correct: false },
      { answer: "renderLogin() ? renderApp(): authenticated", correct: false },
      { answer: "authenticated: renderApp() ? renderLogin()", correct: false },
    ],
  },
  {
    id: 8,
    question: "Which of these definitions of the different kinds of loops is NOT correct?",
    answers: [
      { answer: "'for' = loops through a block of code a number of times", correct: false },
      { answer: "'for/in' = loops through the properties of an object", correct: false },
      { answer: "'for/of' = loops through the values of an iterable object", correct: false },
      { answer: "'while' = loops through a block of code while the json is taking a nap", correct: true },
    ],
  },
  {
    id: 9,
    question: "Do you love JavaScript? ",
    answers: [
      { answer: "Yes!!!", correct: true },
      { answer: "Kinda", correct: true },
      { answer: "I'm not sure", correct: true },
      { answer: "No way!", correct: false },
    ],
  },
];

//global variables
const answer = document.getElementById("answer");
const answerButtons = document.getElementById("answers"); 
const answerContainer = document.getElementById("answerContainer");
const backButton = document.getElementById("backButton");
const buttonsContainer = document.getElementById("buttonsContainer");
const footer = document.querySelector("footer");
const h3Answers = document.getElementById("h3Answers");
const nextButton = document.getElementById("nextButton");
const numCorrectContainer = document.getElementById("score");
const question = document.getElementById("question");
const questionContainer = document.getElementById("questionContainer");
const quizContainer = document.getElementById("quizContainer");
const scoreContainer = document.getElementById("scoreContainer");
const startButton = document.getElementById("startButton");
const startScreen = document.getElementById("startScreen");
const totalNumberofQuestions = qanda.length;
const totalNumQ = document.getElementById("totalScore");

//Display the total # of points possible to the correct score div
totalNumQ.innerHTML = totalNumberofQuestions;

//start the game and populate the questions with the start button
startButton.addEventListener("click", startGame);

let i = 0;
function startGame() {
  quizContainer.classList.remove("hide");
  startScreen.classList.add("hide");
  footer.classList.remove("hide");
  displayQandA(i);
}

//populate q and a's
function displayQandA(b) {
  nextButton.classList.add("hide");

  let currentQuestionArray = qanda[b];
  const currentQuestion = currentQuestionArray.question;
  const currentAnswersArray = currentQuestionArray.answers;

  // populate questions
  const questionElement = document.createElement("h3");
  const questionText = currentQuestion;
  document.getElementById("question").appendChild(questionElement);
  questionElement.innerHTML = questionText;

  //populate answers
  currentAnswersArray.forEach((oneAnswer) => {
    const answerButton = document.createElement("button");
    answerButton.classList.add("answer");
    answerButton.innerText = oneAnswer.answer;
    if (oneAnswer.correct) {
      answerButton.dataset.correct = oneAnswer.correct;
    }
    document.getElementById("answers").appendChild(answerButton);
    answerButton.addEventListener("click", checkAnswer);
  });
}

let numCorrect = 0;
function checkAnswer(e) {
  nextButton.classList.remove("hide");
  const chosenAnswer = e.target;
  const correct = chosenAnswer.dataset.correct;
  if (correct) {
    numCorrect++;
  }
  setCorrectClass(document.body, correct);
  Array.from(answerButtons.children).forEach((aButton) => {
    setCorrectClass(aButton, aButton.dataset.correct);
    chosenAnswer.classList.remove("answer");
    if (correct) {
      chosenAnswer.classList.add("answerCorrect");
    } else {
      chosenAnswer.classList.add("answerIncorrect");
    }
  });
  numCorrectContainer.innerHTML = numCorrect;
}

function setCorrectClass(element, correct) {
  //this is used for the answerButton when it is clicked to set the class
  clearCorrectClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("incorrect");
  }
}

function clearCorrectClass(element) {
  element.classList.remove("correct");
  element.classList.remove("incorrect");
}

function clearOldAnswers() {
  nextButton.classList.remove("hide");
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
  while (question.firstChild) {
    question.removeChild(question.firstChild);
  }
}

//next button
nextButton.addEventListener("click", nextButtonFunction);

let d = 0;
function nextButtonFunction() {
  clearOldAnswers();
  clearCorrectClass(answerButtons);
  if (d === qanda.length - 1) {
    displayFinalPage();
  } else {
    d++;
    displayQandA(d);
  }
  return d;
}

function displayFinalPage() {
  questionContainer.classList.add("hide");
  h3Answers.classList.add("hide");
  scoreContainer.classList.add("hide");
  nextButton.classList.add("hide");

  //Create a message for the final page
  let finalPageMessage = document.createElement("h2");
  finalPageMessage.innerText =
    "You've reached the end of the quizzle. \n How did you do?";
  document.getElementById("answerContainer").appendChild(finalPageMessage);
  //create a button to play again
  let playAgainButton = document.createElement("button");
  playAgainButton.innerHTML = "PLAY AGAIN?";
  playAgainButton.classList.add("greenButton");
  document.getElementById("buttonContainer").appendChild(playAgainButton);
  playAgainButton.addEventListener("click", playAgain);
  function playAgain() {
    scoreContainer.classList.add("hide");
    playAgainButton.classList.add("hide");
    finalPageMessage.classList.add("hide");
    answerContainer.classList.add("hide");
    
    questionContainer.classList.remove("hide");
    
    let startAgainMessage = document.createElement("h2");
    let startAgainText =
    "404 error. \n This button is not working right now. \n Click the refresh button... \n Just kidding... ";
    startAgainMessage.innerText = startAgainText;
    document.getElementById("questionContainer").appendChild(startAgainMessage);
    
  }
  setTimeout(()=> {location.reload()}, 5000)
}



//the below code isnt working. it is supposed to make it so that the i++ only happens once
// setTimeout(() => {
  //   parent.removeEventListener("click", checkAnswer)
  // }, 100);
  // Another way to try this is with the below code
  // {once=true}
