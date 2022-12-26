const qanda = [
  {
    questionNumber: 1,
    question: "This is the first question?",
    answers: [
      { id: 1, answer: "1 first answer" },
      { id: 2, answer: "1 second answer" },
      { id: 3, answer: "1 third answer" },
      { id: 4, answer: "1 fourth answer" },
    ],
  },
  {
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

let totalNumQ = document.getElementById("totalScore");
let totalNumberofQuestions = qanda.length;
totalNumQ.innerHTML = totalNumberofQuestions;



function setQuestion(currentQuestionArray){
    }

function questionIterator() {
  // this grabs the qanda questionNumber
  for (let i = 0; i < qanda.length; i++) {
    let currentQuestionArray = qanda[i];
    let thisQuestionArray = currentQuestionArray.question;
    console.log(`${thisQuestionArray}'s answers: `);

    for (const currrentAnswersArray of currentQuestionArray.answers) {
      let oneAnswer = currrentAnswersArray.answer;
      console.log(`oneAnswer = ${oneAnswer}`); //this is the variable for one of the answers from the current questions
    }
  }
}

questionIterator(qanda); //use this to invoke the iteration of questions


// function setAnswers(){
//   let tID = 1;
//   const currentQ = qAndA.find((t) => t.id === tID);
//   let answerElement = document.createElement("h3");
//   let answerText = currentQ.answers;
//   // currentQ.answers.forEach(){
//   //     return answerArray
//   //     } 
//   answerElement.innerHTML = answerText;
//   document.getElementById("answerContainer").appendChild(answerElement)

// }






// const startButton = document.getElementById("startButton")
// startButton.addEventListener("click", 
//   questionIterator(qanda)
// ) 

   // function setQuestion(thisQuestionNumber) {
    //   if ((thisQuestionNumber = 0)) {
    //     console.log(`thisQuestionNumber is equal to 0`);
    //   } else if ((thisQuestionNumber = i)) {
    //     console.log(
    //       `thisQuestionNumber is a value for the array equal to qanda[${thisQuestionNumber}]`
    //     );
    //   } else {
    //     console.log("setQuestion() error");
    //   }
    //   setQuestion(thisQuestionNumber); //put the iteration in here to grab the array
    // }