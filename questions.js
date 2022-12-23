let correct = "correct";
let incorrect = "incorrect";
const iteratorButton = require('./iteration')

const qanda = [
  {
    questionNumber: 1,
    question: "This is the first question?",
    answers:[{a: "1 first answer"}, 
    {b: '1 second answer'}, 
    {c: '1 third answer'}, 
    {d: '1 fourth answer'}]
    // answer: "1 second answer", type:  "incorrect",
    // answer: "1 third answer", type:  "incorrect",
    // answer: "1 fourth answer", type:  "correct"
  },
  {
    questionNumber: 2,
    question: "This is the second question?",
    // answers: ['2 first answer', '2 second answer', '2 third answer', '2 fourth answer']
    answers:[{a: "2 first answer"},
    {b:"2 second answer", type: correct},
    {c:"2 third answer"},
    {d:"2 fourth answer"}]
  },
  {
    questionNumber: 3,
    question: "This is the third question?",
    // answers: ['3 first answer', '3 second answer', '3 third answer', '3 fourth answer']
    answers:[{a: "3 first answer"},
    {b: "3 first answer"},
    {c: "3 first answer"},
    {d: "3 first answer", type: true}]
  },
  // id: 3,
  // id: 5,
  // id: 6,
  // id: 7,
  // id: 8,
  // id: 9,
  // id: 10
];
let totalNumberofQuestions = JSON.stringify(qanda.length);

//the below code works to grab the qanda questionNumber 
// let i = 0
function questionIterator(qanda){
  for (let i=0; i<qanda.length; i++){
    
    let thisQuestionNumber = qanda[i].questionNumber
    let thisQuestionQuestion = qanda[i].question
    let thisQuestionAnswers = JSON.stringify(qanda[i].answers) 
    
    thisQuestionNumber
    thisQuestionQuestion
    thisQuestionAnswers
    
    // console.log(`thisQuestionQuestion = ${thisQuestionQuestion}`)
    // console.log(`thisQuestionAnswers = ${thisQuestionAnswers}`)
    
    // const stringOfAnswers = JSON.stringify
    // ([(thisQuestionAnswers.a),
    // (thisQuestionAnswers.b),
    // (thisQuestionAnswers.c),
    // (thisQuestionAnswers.d)])

    console.log(`Question number ${thisQuestionNumber}. The questionIterator() produced thisQuestionQuestion = ${thisQuestionQuestion}, thisQuestionAnswers = ${thisQuestionAnswers}`)
    // stringOfAnswers = ${stringOfAnswers} //this doesnt work
    
    // console.log(`Running the function questioniterator(qanda) returns thisQuestionNumber = #${thisQuestionNumber}`)
    
    function setQuestion(thisQuestionNumber){ 
      // console.log(`thisQuestionNumber=${thisQuestionNumber}`)
      if (thisQuestionNumber=0){
        
        console.log( `thisQuestionNumber is a value for the array equal to qanda[0].questionNumber 1, which can be used to produce the question = '${thisQuestionQuestion} and answers = '${thisQuestionAnswers}'`)
      }
      else if (thisQuestionNumber=i){
        console.log( `thisQuestionNumber is a value for the array equal to qanda[${thisQuestionNumber}].questionNumber, which can be used to produce equal to '${thisQuestionQuestion} and '${thisQuestionAnswers}'` )
      } else {
        console.log("setQuestion() error")
      }
      // console.log(`Question number ${thisQuestionNumber}`)
    }
    setQuestion(thisQuestionNumber) //put the iteration in here to grab the array
  }
}

// questionIterator(qanda) //use this to invoke the iteration of questions



// console.log(qanda[0].id[1])  //returns undefined

// console.log(qanda[1].id); //returns the id

// console.log(qanda[0].question); //returns the question

// console.log(qanda[1].answers); //returns the answers array..= 'a;'answer', type:'correct'

// console.log(qanda[1].answers.a); //returns undefined

//the below code has mot worked for me yet

// function setQuestion() {
//   for (let i = 0; i < qanda.length; i++)
//     // {
//     //     text += "The qanda is " + i + qanda[i]
//     // }
//     return qanda[i].question;
//   console.log("this # is from the iteration in the setQuestion function " + i);
// }

// setQuestion();
