


// 5 preguntas de historia de la API
let questions =[];
let questionNumber =0;
let correctAnswer =[];
let correctAnswerNumber =0;
fetch('https://opentdb.com/api.php?amount=5&category=23&difficulty=easy&type=multiple')
  .then(response => response.json())
  .then(data => {
    questions = data.results;
    createQuestion();
   
})
  .catch(error => {
  console.error(error)
});

function createQuestion(){
    let question = questions[questionNumber];
    console.log(question);
    document.getElementById("question").innerText = question.question;
    let answers = question.incorrect_answers;
    answers.push(question.correct_answer);

    answers.forEach(answer => {
        let h2 = document.createElement("h2");
        h2.innerText = answer;
        document.getElementById("choices").appendChild(h2);

    });


}










/* 

// 5 preguntas de historia de la API
let questions =[];
let questionNumber =0;
fetch('https://opentdb.com/api.php?amount=5&category=23&difficulty=easy&type=multiple')
  .then(response => response.json())
  .then(data => {
    questions = data.results;
    createQuestion();
})
  .catch(error => {
  console.error(error)
});

function createQuestion(){
    let question = questions[questionNumber];
    console.log(question);
    document.getElementById("question").innerText = question.question;
}


let correctAnswer =[];
let correctAnswerNumber =0;
fetch('https://opentdb.com/api.php?amount=5&category=23&difficulty=easy&type=multiple')
  .then(response => response.json())
  .then(data => {
    correctAnswer = data.results;
    createCorrectAnswer();
})
  .catch(error => {
  console.error(error)
});

function createCorrectAnswer(){
    let correct = correctAnswer[correctAnswerNumber];
    console.log(correct);
    document.getElementById("answer1").innerText = correct.correct_answer;
} */









/* 

 // 5 preguntas de arte de la API
fetch('https://opentdb.com/api.php?amount=5&category=25&difficulty=easy&type=multiple')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error))
        
 // 5 preguntas de ciencia naturaleza de la API
 fetch('https://opentdb.com/api.php?amount=5&category=17&difficulty=easy&type=multiple')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error))
     */


    
