// let { qanda } =require('./questions')

// let startButton = document.getElementById("startButton");
// let startScreen = document.getElementById("startScreen");
// let quizContainer = document.getElementById("quizContainer");
// let backButton = document.getElementById("backButton");
// let nextButton = document.getElementById("nextButton");
// let answerButton = document.getElementsByClassName("answer");


// function startGame() {
//   quizContainer.classList.remove("hide");
//   startScreen.classList.add("hide");
//   // console.log(`i= ${i}`)
//   // console.log(`numCorrect=${numCorrect}`)
//   displayQandA(qanda);

//   // test()
// }


//Display the total # of questions to the correct score div
// let totalNumQ = document.getElementById("totalScore");
// let totalNumberofQuestions = qanda.length;
// totalNumQ.innerHTML = totalNumberofQuestions;

//start the game and populate the questions with the start button
// startButton.addEventListener("click", startGame);
//populate q and a's
// let i = 0; //this is a placeholder used on the next line
// let currentQuestionArray = qanda[i]; 

// function displayQandA() {
//   let currentQuestion = currentQuestionArray.question;
//   let questionElement = document.createElement("h3");
//   let questionText = currentQuestion;

//   document.getElementById("questions").appendChild(questionElement);
//   questionElement.innerHTML = questionText;
//   console.log(`${currentQuestion}'s answers: `);

//   for (const currrentAnswersArray of currentQuestionArray.answers) {
//     let answerArray = currrentAnswersArray.answer;
//     let answerElement = document.createElement("button");

//     answerElement.classList.add("answer");
//     document.getElementById("answers").appendChild(answerElement);
//     answerElement.innerHTML = answerArray;
//   }
// }

// function checkAnswer() { //this function is used in html onClick
//   for (currrentAnswersArray of currentQuestionArray.answers) {
//     let type = currrentAnswersArray.type; //this is wrong.
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
//   }
// };