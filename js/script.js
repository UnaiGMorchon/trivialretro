

// un fetch por cada categoria historia
let categories={
  "history": 23,
  "ciencia": 17,
  "arte": 25
}

// let category = categories["history"];

// 5 preguntas de historia de la API
let questions =[];
let questionNumber =0;
let correctAnswer =[];
let correctAnswerNumber =0;
let category = 0;



function getQuestions(category){
  return new Promise((resolve,reject) =>{
    fetch("https://opentdb.com/api.php?amount=5&category="+ category +"&difficulty=easy&type=multiple")
    .then(response => response.json())
    .then(data => {
      questions.push(data.results);
        resolve();
  });

  } )
}

async function initiale(){
      await getQuestions(categories.history);
      await getQuestions(categories.ciencia);
      await getQuestions(categories.arte);
console.log(questions);
  createQuestion();

}



function createQuestion(){
    let question = questions[category][questionNumber];
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



initiale();


    
