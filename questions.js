const qanda = [
  {
    id: 0,
    question: "What is the correct way to get a button to invoke a function?",
    answers: [
      {
        id: 1,
        answer: `In html file, add 'onClick = "function()"`,
        type: "correct",
      },
      {
        id: 2,
        answer: "In js file, add 'onclick=function()",
        type: "incorrect",
      },
      {
        id: 3,
        answer:
          "The only way to do it is in a function that calls to the button",
        type: "incorrect",
      },
      {
        id: 4,
        answer:
          "In js file, use 'addEventListener' along with 2 or 3 arguments",
        type: "incorrect",
      },
    ],
  },
  {
    id: 1,
    question:
      "CSS: How do you move text under one element on the left, but not under the element on the right?",
    answers: [
      { id: 1, answer: "float: left;", type: "incorrect" },
      { id: 2, answer: "float: right;", type: "incorrect" },
      { id: 3, answer: "clear: left;", type: "correct" },
      { id: 4, answer: "float: right:", type: "incorrect" },
    ],
  },
  {
    id: 2,
    question: "CSS: What is a 'normal' font weight?",
    answers: [
      { id: 1, answer: "100", type: "incorrect" },
      { id: 2, answer: "200", type: "incorrect" },
      { id: 3, answer: "400", type: "correct" },
      { id: 4, answer: "600", type: "incorrect" },
    ],
  },
  {
    id: 3,
    question: "How does html know how to use the javascript file?",
    answers: [
      {
        id: 1,
        answer: "It wil automatically use the index.js file.",
        type: "incorrect",
      },
      {
        id: 2,
        answer: "You need to tell it what to use in the package.json files.",
        type: "incorrect",
      },
      {
        id: 3,
        answer:
          "You need to tell it what to use in the head of the html file using the script tag.",
        type: "correct",
      },
      {
        id: 4,
        answer: "You need to tell it what to usse in the javascript file.",
        type: "incorrect",
      },
    ],
  },
  {
    id: 4,
    question: "CSS: What is a 'normal' font weight?",
    answers: [
      { id: 1, answer: "100", type: "incorrect" },
      { id: 2, answer: "200", type: "incorrect" },
      { id: 3, answer: "400", type: "correct" },
      { id: 4, answer: "600", type: "incorrect" },
    ],
  },
  {
    id: 5,
    question: "CSS: What is a 'normal' font weight?",
    answers: [
      { id: 1, answer: "100", type: "incorrect" },
      { id: 2, answer: "200", type: "incorrect" },
      { id: 3, answer: "400", type: "correct" },
      { id: 4, answer: "600", type: "incorrect" },
    ],
  },
  {
    id: 6,
    question: "CSS: What is a 'normal' font weight?",
    answers: [
      { id: 1, answer: "100", type: "incorrect" },
      { id: 2, answer: "200", type: "incorrect" },
      { id: 3, answer: "400", type: "correct" },
      { id: 4, answer: "600", type: "incorrect" },
    ],
  },
  {
    id: 7,
    question: "CSS: What is a 'normal' font weight?",
    answers: [
      { id: 1, answer: "100", type: "incorrect" },
      { id: 2, answer: "200", type: "incorrect" },
      { id: 3, answer: "400", type: "correct" },
      { id: 4, answer: "600", type: "incorrect" },
    ],
  },
  {
    id: 8,
    question: "CSS: What is a 'normal' font weight?",
    answers: [
      { id: 1, answer: "100", type: "incorrect" },
      { id: 2, answer: "200", type: "incorrect" },
      { id: 3, answer: "400", type: "correct" },
      { id: 4, answer: "600", type: "incorrect" },
    ],
  },
  {
    id: 9,
    question: "CSS: What is a 'normal' font weight?",
    answers: [
      { id: 1, answer: "100", type: "incorrect" },
      { id: 2, answer: "200", type: "incorrect" },
      { id: 3, answer: "400", type: "correct" },
      { id: 4, answer: "600", type: "incorrect" },
    ],
  },
];

//global variables
const startButton = document.getElementById("startButton");
const startScreen = document.getElementById("startScreen");
const quizContainer = document.getElementById("quizContainer");
const backButton = document.getElementById("backButton");
const answerElement1 = document.getElementById("a0");
const answerElement2 = document.getElementById("a1");
const answerElement3 = document.getElementById("a2");
const answerElement4 = document.getElementById("a3");
const answerButtons = [
  answerElement1,
  answerElement2,
  answerElement3,
  answerElement4
];

//global variables to populate q and a's
let i = 0; //this is for the 1st questions array
const currentQuestionArray = qanda[i];
const currentQuestion = currentQuestionArray.question;
const currentAnswersArray = currentQuestionArray.answers;

// //Display the total # of questions to the correct score div
let totalNumQ = document.getElementById("totalScore");
let totalNumberofQuestions = qanda.length;
totalNumQ.innerHTML = totalNumberofQuestions;

// //start the game and populate the questions with the start button
startButton.addEventListener("click", startGame);

// click on an answer button. this should be set up to use the answerButton element = document.getElementByClassName("answer") but that doesnt work because the buttons are not accessible in the dom since they are not created until later
answerElement1.addEventListener("click", testFunction);
answerElement2.addEventListener("click", testFunction);
answerElement3.addEventListener("click", testFunction);
answerElement4.addEventListener("click", testFunction);

//the answerButtons will call a function that will check if (answer.type ===("correct")){ numCorrect++, setNextQuestion(i)}

//inside of setNextQuestion there will be a setting that says if (i+1===undefined){document.getElementById("quizContatiner") and className.add("hide") and getElementById("finalPageContainer") and className.remover("hide")}

function testFunction() {
  console.log(currentAnswersArray);
}
//the testFunction currently displays the currentAnswersArray so that I can evaluate the properties of the array so I can target the value of the innerHTML to find the answer.type which will indicate if the answer is correct or incorrect. this will decide what will happen on the button click

function startGame() {
  quizContainer.classList.remove("hide");
  startScreen.classList.add("hide");
  console.log(`i= ${i}`);
  // console.log(`numCorrect=${numCorrect}`)
  displayQandA(qanda);

  // test()
}

//populate q and a's
function displayQandA() {
  //grab the first item in the qanda array and display the first question
  let questionElement = document.createElement("h3");
  let questionText = currentQuestion;
  //grab the existing question div
  document.getElementById("questions").appendChild(questionElement);
  //add the text to the question element
  questionElement.innerHTML = questionText;

  //separate the array into separate answers
  let answerText1 = currentAnswersArray[0].answer;
  let answerText2 = currentAnswersArray[1].answer;
  let answerText3 = currentAnswersArray[2].answer;
  let answerText4 = currentAnswersArray[3].answer;

  // add the text to the element
  answerElement1.innerHTML = answerText1;
  answerElement2.innerHTML = answerText2;
  answerElement3.innerHTML = answerText3;
  answerElement4.innerHTML = answerText4;

  console.log(answerText1);
}

// function checkAnswer(target) {
//   // for (currentAnswersArray of currentQuestionArray.answers) {
//     // let currentAnswersArray = currentQuestionArray.answers;
//     let type = currentAnswersArray[target].type;
//     let numCorrect = 0;
//     if (type === "correct") {
//       numCorrect++;
//       //Add the total # correct to the correct div
//       let numCorrectContainer = document.getElementById("score");
//       numCorrectContainer.innerHTML = numCorrect;
//       console.log(`numCorrect = ${numCorrect}`);
//     } else {
//       console.log("The answer is incorrect");
//     }
//     numCorrect;
//   // }
// }

//this function grabs the next questions array, use it after the first question
// let button = document.getElementsByClassName("answer")
// let parentElement = document.getElementById("answers")
// parentElement.removeChild(innerHTML);

// function setNextQuestion(i){

//   let currentQuestionArray = (qanda[i]);

//   displayQandA(qanda)

//   console.log(`setNextQuestion value of a is ${a}`)
// }

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
