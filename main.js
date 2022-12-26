// const { totalNumberofQuestions } = require('./src/questions')

// let score = 0;
// let totalScore = totalNumberofQuestions;
// console.log(totalNumberofQuestions)
let startButton = document.getElementById("startButton");


function showId(id){
    let element = document.getElementById(id);
    console.log(element)
    if (element.classList = hide){
        element.classList.remove("hide")
    } else {
        element.classList.add("show")
    }
    console.log (`showId is working = ${id}`)
}
showId(startButton)

// function hide(){
//     let element = document.qeurySelector();
//     let id = document.getElementById();
//     if (item.classList = show){
//         element.classList.remove("show")
//     } else {
//         element.classList.add("show")
//     }
//     console.log (item)
// }

console.log(totalNumberofQuestions);