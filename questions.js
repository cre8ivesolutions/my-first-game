const qanda = [
  {
    id: 0,
    question: "What is the correct way to get a button to invoke a function?",
    answers: [
      {
        answer: "In html file, add 'onClick = 'function()'",
        correct: true 
      },
      {
        answer: "In js file, add 'onclick=function()'",
        correct: false
      },
      {
        answer:
          "The only way to do it is in a function that calls to the button",
        correct: false
      },
      {
        answer:
          "In js file, use 'addEventListener' along with 2 or 3 arguments",
        correct: false
      },
    ],
  },
  {
    id: 1,
    question:
      "CSS: How do you move text under one element on the left, but not under the element on the right?",
    answers: [
      { answer: "float: left;", correct: false},
      { answer: "float: right;", correct: false},
      { answer: "clear: left;", correct: true},
      { answer: "float: right:", correct: false}
    ],
  },
  {
    id: 2,
    question: "CSS: What is a 'normal' font weight?",
    answers: [
      {answer: "100", correct: false},
      {answer: "200", correct: false},
      {answer: "400", correct: true},
      {answer: "600", correct: false}
    ],
  },
  {
    id: 3,
    question: "How does html know how to use the javascript file?",
    answers: [
      {answer: "It wil automatically use the index.js file.",
        correct: false
      },
      {answer: "You need to tell it what to use in the package.json files.",
        correct: false
      },
      {answer:
          "You need to tell it what to use in the head of the html file using the script tag.",
        correct: true},
      {answer: "You need to tell it what to usse in the javascript file.",
        correct: false
      },
    ],
  },
  {
    id: 4,
    question: "CSS: What is a 'normal' font weight?",
    answers: [
      {answer: "100", correct: false},
      {answer: "200", correct: false},
      {answer: "400", correct: true},
      {answer: "600", correct: false}
    ],
  },
  {
    id: 5,
    question: "CSS: What is a 'normal' font weight?",
    answers: [
      { answer: "100", correct: false},
      { answer: "200", correct: false},
      { answer: "400", correct: true},
      { answer: "600", correct: false}
    ],
  },
  {
    id: 6,
    question: "CSS: What is a 'normal' font weight?",
    answers: [
      { answer: "100", correct: false},
      { answer: "200", correct: false},
      { answer: "400", correct: true},
      { answer: "600", correct: false}
    ],
  },
  {
    id: 7,
    question: "CSS: What is a 'normal' font weight?",
    answers: [
      { answer: "100", correct: false},
      { answer: "200", correct: false},
      { answer: "400", correct: true},
      { answer: "600", correct: false}
    ],
  },
  {
    id: 8,
    question: "CSS: What is a 'normal' font weight?",
    answers: [
      { answer: "100", correct: false},
      { answer: "200", correct: false},
      { answer: "400", correct: true},
      { answer: "600", correct: false}
    ],
  },
  {
    id: 9,
    question: "CSS: What is a 'normal' font weight?",
    answers: [
      { answer: "100", correct: false},
      { answer: "200", correct: false},
      { answer: "400", correct: true},
      { answer: "600", correct: false}
    ],
  },
];

//global variables
const startButton = document.getElementById("startButton");
const startScreen = document.getElementById("startScreen");
const quizContainer = document.getElementById("quizContainer");
const questionContainer = document.getElementById("question")
const backButton = document.getElementById("backButton");
const answerButtons = document.getElementById
("answers");
const nextButton = document.getElementById("nextButton");
const footer = document.querySelector("footer");
const totalNumQ = document.getElementById("totalScore");
const totalNumberofQuestions = qanda.length;

// //Display the total # of questions to the correct score div
totalNumQ.innerHTML = totalNumberofQuestions;

// //start the game and populate the questions with the start button
startButton.addEventListener("click", startGame);

function startGame() {
  quizContainer.classList.remove("hide");
  startScreen.classList.add("hide");
  footer.classList.remove("hide");
  clearOldAnswers()
  displayQandA();
  console.log(`i= ${i}`);
  console.log(`numCorrect=${numCorrect}`)
}

//global variables to populate q and a's
// This is where my problem with iterating happens
//I need to use a callback function and return the updated currentQuestionArray

// for(let i = 0; i <qanda.length; i++){}
let i = 0;
//populate q and a's
function displayQandA() {
  const currentQuestionArray = qanda[i];
  const currentQuestion = currentQuestionArray.question;
  const currentAnswersArray = currentQuestionArray.answers;
  nextButton.classList.add("hide")
  // populate questions
  let questionElement = document.createElement("h3");
  let questionText = currentQuestion;
  document.getElementById("question").appendChild(questionElement);
  questionElement.innerHTML = questionText;
  //populate answers
  currentAnswersArray.forEach(oneAnswer=>{
    const answerButton = document.createElement('button')
    answerButton.classList.add('answer')
    answerButton.innerText = oneAnswer.answer;
    // console.log(`oneAnswer.correct = ${oneAnswer.correct}`)
    if (oneAnswer.correct){
      answerButton.dataset.correct = oneAnswer.correct
    }
    document.getElementById('answers').appendChild(answerButton)
    answerButton.addEventListener("click", setNextQuestion)
  })
}

function setNextQuestion(a){
  clearOldAnswers()
  checkAnswer()
  console.log(`after setNextQuestion, numCorrect = ${numCorrect}`)
}

function clearOldAnswers(){
  nextButton.classList.remove("hide")
  while (answerButtons.firstChild){
    answerButtons.removeChild(answerButtons.firstChild)
  }
  while (questionContainer.firstChild){
    question.removeChild(questionContainer.firstChild)
  }
}

const numCorrectContainer = document.getElementById("score");
let numCorrect = 0;
numCorrectContainer.innerHTML = numCorrect;

function checkAnswer(e) {
  const chosenAnswer = e;
  const correct = chosenAnswer.dataset.correct;
  if (correct) {
    numCorrect++;
    //Add the total # correct to the correct div
    console.log(`numCorrect = ${numCorrect}`);
  } else {
    console.log("The answer is incorrect");
  }
  numCorrect;
}

//this function grabs the next questions array, use it after the first question
// let button = document.getElementsByClassName("answer")
// let parentElement = document.getElementById("answers")
// parentElement.removeChild(innerHTML);

//the below code is used to iterate over the answers
function incrementValue() {
  i++;
  // setNextQuestion(i);
  console.log(`after incrementValue i = ${i}`);
}

//next button

nextButton.addEventListener("click", nextButtonFunction);

function nextButtonFunction() {
  if (i < qanda.length) {
    incrementValue();
    // setNextQuestion(i)
    console.log(`setNextQuestion argument is ${i}`);
    // displayNextQ(qanda)
    // checkAnswer()
  } else {
    console.log(`i is greater than qanda.length`);
  }
  console.log(`the return value of i from nextButton= ${i}`);
  return i;
}

// function displayNextQ(qanda){
//   let nextQ = currentQuestionArray;
//   displayQandA(qanda);
//   console.log(nextQ)
// }

//the below code isnt working. it is supposed to make it so that the i++ only happens once
// setTimeout(() => {
//   parent.removeEventListener("click", checkAnswer)
// }, 100);
// Another way to try this is with the below code
// {once=true}

// answerText.forEach((createAnswer)=>{
//   // for (let i=0; i<answerText.length; i++){
//     let j = 0;
//     let answerElement = document.createElement("button");

//       answerElement.firstElementChil.add("a" + j)
//       document.getElementById("answers").appendChild(answerElement);
//       answerElement.innerHTML = createAnswer;
//       console.log(`${answerText}`);
//       // }
//   })
// console.log(createAnswer)
