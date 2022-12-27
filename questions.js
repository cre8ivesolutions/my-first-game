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
        answer: "In js file, add 'onclick=function()",type: "incorrect",
      },
      {
        id: 3, 
        answer: "The only way to do it is in a function that calls to the button", 
        type: "incorrect",
      },
      {
        id: 4, 
        answer:"In js file, use 'addEventListener' along with 2 or 3 arguments", 
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
      { id: 1, answer: "100" },
      { id: 2, answer: "200" },
      { id: 3, answer: "400", type: "correct" },
      { id: 4, answer: "600" },
    ],
  },
  {
    id: 3,
    question: "How does html know how to use the javascript file?",
    answers: [
      { id: 1, answer: "It wil automatically use the index.js file." },
      {
        id: 2,
        answer: "You need to tell it what to use in the package.json files.",
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
      },
    ],
  },
  {
    id: 4,
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
    question: "CSS: What is a 'normal' font weight?",
    answers: [
      { id: 1, answer: "100" },
      { id: 2, answer: "200" },
      { id: 3, answer: "400", type: "correct" },
      { id: 4, answer: "600" },
    ],
  },
];

const qandaArray = qanda;
// //Display the total # of questions to the correct score div
let totalNumQ = document.getElementById("totalScore");
let totalNumberofQuestions = qanda.length;
totalNumQ.innerHTML = totalNumberofQuestions;

// //start the game and populate the questions with the start button
startButton.addEventListener("click", startGame);

// iterate
let i = 0; //this is used for the first questions array
let currentQuestionArray = qanda[i];

//variables to populate q and a's

//populate q and a's
function displayQandA() {
  let currentQuestion = currentQuestionArray.question;
  let questionElement = document.createElement("h3");
  let questionText = currentQuestion;
  
  document.getElementById("questions").appendChild(questionElement);
  questionElement.innerHTML = questionText;
  // console.log(`${currentQuestion}'s answers: `);
  
  for (const currrentAnswersArray of currentQuestionArray.answers) {
    let answerArray = currrentAnswersArray.answer;
    let answerElement = document.createElement("button");

    answerElement.classList.add("answer");
    document.getElementById("answers").appendChild(answerElement);
    answerElement.innerHTML = answerArray;
  }
}
//moved this entire function to main.js
function checkAnswer() { //this function is used in html onClick
  for (currrentAnswersArray of currentQuestionArray.answers) {
    let type = currrentAnswersArray.type; //this is wrong.
    let numCorrect = 0;
    if (type === "correct") {
      numCorrect++;
      //Add the total # correct to the correct div
      let numCorrectContainer = document.getElementById("score");
      numCorrectContainer.innerHTML = numCorrect;
      console.log(`numCorrect = ${numCorrect}`);
    } else {
      // console.log("The answer is incorrect");
    }
    numCorrect;
  }
}
// console.log(i);

//the below code is used to iterate over the answers
function incrementValue(){
  i++;
  setNextQuestion(i);
}
console.log(`after incrementValue i = ${i}`)

//this function grabs the next questions array, use it after the first question
function setNextQuestion(a){
  // let button = document.getElementsByClassName("answer")
  // let parentElement = document.getElementById("answers")
  // parentElement.removeChild(innerHTML);

  let newCurrentQuestionArray = qanda[a];
  // displayQandA(qanda)

  // console.log(`qanda[i] is ${nextQ}`)
}

nextButton.addEventListener("click", nextButtonFunction)


function nextButtonFunction() {
  if (i<qanda.length){
    incrementValue()
    setNextQuestion(i)
    console.log(`setNextQuestion argument is ${i}`)
    // displayNextQ(qanda)
  } else {
    console.log (`i is greater than qanda.length`)
  }
  console.log(`the return value of i from nextButton= ${i}`)
  return i
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

  
  // answerArray.forEach((createAnswer)=>{
  //   // for (let i=0; i<answerArray.length; i++){
  //     let j = 0;
  //     let answerElement = document.createElement("button");
  
  //       answerElement.firstElementChil.add("a" + j)
  //       document.getElementById("answers").appendChild(answerElement);
  //       answerElement.innerHTML = createAnswer;
  //       console.log(`${answerArray}`);
  //       // }
  //   })
    // console.log(createAnswer)
  
  
  
