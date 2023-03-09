

// un fetch por cada categoria historia
/* fetch("https://opentdb.com/api.php?amount=5&category=23&difficulty=easy&type=multiple")
  .then(response => response.json())
  .then(data => {
    questionsHistoria = data.results;
    createQuestion();
})

// fecth de ciencia
fetch("https://opentdb.com/api.php?amount=5&category=17&difficulty=easy&type=multiple")
  .then(response => response.json())
  .then(data => {
    questionsCiencia = data.results;
    createQuestion();
})

//fetch de arte
fetch("https://opentdb.com/api.php?amount=5&category=25&difficulty=easy&type=multiple")
  .then(response => response.json())
  .then(data => {
    questionsArt = data.results;
    createQuestion();
})


function (array){
let type =[0,2]
let position=[0,5]
questionsHistory=[];
questionsHistory.push([type],[position]);

console.log(questionsHistory)
}
 */

fetch("https://opentdb.com/api.php?amount=5&category=23&difficulty=easy&type=multiple")
  .then(response => response.json())
  .then(data => {
    let questionsHistoria = data.results;
    for (let i = 0; i < questionsHistoria.length; i++) {
      questionsHistoria[i].type = [0, 2];
      questionsHistoria[i].position = [0, 5];
    }
    console.log(questionsHistoria);
});



/* 



 */





let categories={
    "history": 23,
    "ciencia": 17,
    "arte": 25
}

function getQuestions(){
for (let i = 0; i < categories.length; i++) {
    const element = array[i];
}
}
let category = categories["history"];

// 5 preguntas de historia de la API
let questions =[];
let questionNumber =0;
let correctAnswer =[];
let correctAnswerNumber =0;


fetch("https://opentdb.com/api.php?amount=5&category=" + category + "&difficulty=easy&type=multiple")
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
    answers.unshift(question.correct_answer);

// Desordenar aleatoriamente las respuestas
shuffle(answers);

    answers.forEach(answer => {
        let h2 = document.createElement("h2");
        h2.innerText = answer;
        document.getElementById("choices").appendChild(h2);
    });
}

function shuffle(array) {
    for (let i = array.length -1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }















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


    
