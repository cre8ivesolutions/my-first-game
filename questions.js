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
    question: "Q6",
    answers: [
      { answer: "A6", correct: false},
      { answer: "A6 = correct", correct: true},
      { answer: "A6", correct: false},
      { answer: "A6", correct: false}
    ],
  },
  {
    id: 6,
    question: "Q7",
    answers: [
      { answer: "A7", correct: false},
      { answer: "A7", correct: false},
      { answer: "A7", correct: false},
      { answer: "A7 = correct", correct: true}
    ],
  },
  {
    id: 7,
    question: "Q8",
    answers: [
      { answer: "A8 = correct", correct: true},
      { answer: "A8", correct: false},
      { answer: "A8", correct: false},
      { answer: "A8", correct: false}
    ],
  },
  {
    id: 8,
    question: "CSS: What is a 'normal' font weight?",
    question: "Q9",
    answers: [
      { answer: "A9", correct: false},
      { answer: "A9", correct: false},
      { answer: "A9 = correct", correct: true},
      { answer: "A9", correct: false}
    ],
  },
  {
    id: 9,
    question: "CSS: What is a 'normal' font weight?",
    question: "Last question",
    answers: [
      { answer: "last a", correct: false},
      { answer: "a10", correct: false},
      { answer: "a10 = correct", correct: true},
      { answer: "a10", correct: false}
    ],
  },
];

//global variables
const startButton = document.getElementById("startButton");
const startScreen = document.getElementById("startScreen");
const quizContainer = document.getElementById("quizContainer");
const questionContainer = document.getElementById("question")
const backButton = document.getElementById("backButton");
const answerContainer = document.getElementById("answers")
const answerButtons = document.getElementById
("answers");
const nextButton = document.getElementById("nextButton");
const numCorrectContainer = document.getElementById("score");
const footer = document.querySelector("footer");
const totalNumQ = document.getElementById("totalScore");
const totalNumberofQuestions = qanda.length;
const buttonsContainer = document.getElementById("buttonsContainer")
// //Display the total # of questions to the correct score div
totalNumQ.innerHTML = totalNumberofQuestions;

// //start the game and populate the questions with the start button
startButton.addEventListener("click", startGame);
let i =0;
function startGame() {
  quizContainer.classList.remove("hide");
  startScreen.classList.add("hide");
  footer.classList.remove("hide");
  clearOldAnswers()
  displayQandA(i);
}

//function to populate q and a's
function displayQandA(b) {
  let currentQuestionArray = qanda[b];
  const currentQuestion = currentQuestionArray.question;
  const currentAnswersArray = currentQuestionArray.answers;
  nextButton.classList.add("hide")
  // populate questions
  const questionElement = document.createElement("h3");
  const questionText = currentQuestion;
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
    answerButton.addEventListener("click", checkAnswer)
  })
}


// function setNextQuestion(){
  //   // checkAnswer();
  //   // clearOldAnswers();
  //   // checkAnswer()
  // //  console.log(`after setNextQuestion, numCorrect = ${numCorrect}`)
  // }
  
  function clearOldAnswers(){
    nextButton.classList.remove("hide")
    while (answerButtons.firstChild){
      answerButtons.removeChild(answerButtons.firstChild)
    }
    while (questionContainer.firstChild){
      question.removeChild(questionContainer.firstChild)
    }
  }
  
let numCorrect = 0;
  
function clickAnswer(){
  // {once=true}//need a way to only let it click only one time
  nextButton.classList.remove("hide")
  numCorrect++ //remove this once the checkAnswer function is working
  //display current score
  numCorrectContainer.innerHTML = numCorrect;
  console.log(`numCorrect=${numCorrect}`)
}

function checkAnswer(e) { //this is not working yet
  const chosenAnswer = e.target;
  const correct = chosenAnswer.dataset.correct;
  // const incorrect = document.body.dataset.undefined;
  console.log(`checkAnswer() correct = ${chosenAnswer.dataset.correct}`)
  setCorrectClass(document.body, correct)
  Array.from(answerButtons.children).forEach(aButton => {
    setCorrectClass(aButton, aButton.dataset.correct)
    chosenAnswer.classList.remove("answer")
    if (correct){
      chosenAnswer.classList.add("answerCorrect")
      numCorrect++
      // incorrect.classList.add("red-background")
    } else{
      // chosenAnswer.classList.remove("answer")
      chosenAnswer.classList.add("answerIncorrect")
      console.log("incorrect answer was chosen")
    }  
  })
  nextButton.classList.remove("hide")

  // numCorrect++ //remove this once the checkAnswer function is working
  //display current score
  // numCorrectContainer.innerHTML = numCorrect;


  // if (qanda.length > d + 1 ) {
    // numCorrect++;
    //Add the total # correct to the correct div
    // } else {
    console.log(`numCorrect from checkAnswer = ${numCorrect}`);
  // }
  // console.log("The answer is incorrect");
}
function setCorrectClass(element, correct){ //this is used for the answerButton when it is clicked to set the class 
  clearCorrectClass(element)
  if (correct){
    element.classList.add('correct')
  } else {
    element.classList.add('incorrect')
  }
}
function clearCorrectClass(element){
  element.classList.remove('correct')
  element.classList.remove('incorrect')
}
//the below code is used to iterate over the answers
function incrementValue() {
  i++;
  // setNextQuestion(i);
  console.log(`after incrementValue i = ${i}`);
  return i
}

//next button
nextButton.addEventListener("click", nextButtonFunction);

let d = 0;
function nextButtonFunction() {
  clearOldAnswers()
  clearCorrectClass(answerButtons)
  if (d===(qanda.length-1)) {
    displayFinalPage()
    console.log(`this is the final page`);
  } else {
    d++;
    displayQandA(d)
    console.log(`nextQuestionButton d= ${d}`);
  }
  console.log(`the return value of d from nextButton= ${d}`);
  return d;
}
console.log(`qanda.length=${qanda.length}`)

function displayFinalPage(){
  nextButton.classList.add("hide")
  questionContainer.classList.add("hide")
  let playAgainButton = document.createElement("button")
  playAgainButton.innerHTML = "Play Again!"
  document.getElementById('buttonContainer').appendChild(playAgainButton)
  playAgainButton.addEventListener("click", startGame)

  console.log('This is the final Page')
}
//the below code isnt working. it is supposed to make it so that the i++ only happens once
// setTimeout(() => {
//   parent.removeEventListener("click", checkAnswer)
// }, 100);
// Another way to try this is with the below code
// {once=true}