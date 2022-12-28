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
("answers")
const footer = document.querySelector("footer")

//global variables to populate q and a's
// This is where my problem with iterating happens
//I need to use a callback function and return the updated currentQuestionArray
let i = 0; //this is for the 1st questions array
const currentQuestionArray = qanda[i];
const currentQuestion = currentQuestionArray.question;
const currentAnswersArray = currentQuestionArray.answers;

// //Display the total # of questions to the correct score div
const totalNumQ = document.getElementById("totalScore");
const totalNumberofQuestions = qanda.length;
totalNumQ.innerHTML = totalNumberofQuestions;

// //start the game and populate the questions with the start button
startButton.addEventListener("click", startGame);

function startGame() {
  quizContainer.classList.remove("hide");
  startScreen.classList.add("hide");
  footer.classList.remove("hide");
  clearOldAnswers()
  console.log(`i= ${i}`);
  console.log(`numCorrect=${numCorrect}`)
  displayQandA();
}

//populate q and a's
function displayQandA() {
  nextButton.classList.add("hide")
  let questionElement = document.createElement("h3");
  let questionText = currentQuestion;
  //grab the existing question div
  document.getElementById("question").appendChild(questionElement);
  //add the text to the question element
  questionElement.innerHTML = questionText;
  //answers
  currentAnswersArray.forEach(oneAnswer=>{
    const answerButton = document.createElement('button')
    answerButton.classList.add('answer')
    answerButton.innerText = oneAnswer.answer;
    console.log(oneAnswer.answer)
    document.getElementById('answers').appendChild(answerButton)
    if (oneAnswer.answer.correct){
      oneAnswer.answer.dataset.correct = oneAnswer.answer.correct
    }
    answerButton.addEventListener("click", setNextQuestion)
  })
}

function setNextQuestion(){
  clearOldAnswers()
  // checkAnswer()
  // i++
  // let currentQuestionArray = (qanda[i]);
  // displayQandA()

  // console.log(`setNextQuestion value of a is ${a}`)
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

function checkAnswer() {
  const chosenAnswer = e.target;
  const correct = chosenAnswer.dataset.correct;
  // for (currentAnswersArray of currentQuestionArray.answers) {
    // let currentAnswersArray = currentQuestionArray.answers;
    // let correct: true,ersArray[target].correct: true,umCorrect = 0;
    if (correct) {
      numCorrect++;
      //Add the total # correct to the correct div
      console.log(`numCorrect = ${numCorrect}`);
    } else {
      console.log("The answer is incorrect");
    }
    numCorrect;
  // }
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
let nextButton = document.getElementById("nextButton");

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
