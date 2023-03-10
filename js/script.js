
// hemos creado un objeto que contiene 3 variables con valores numericos
let categories={
  "history": 23,
  "ciencia": 17,
  "arte": 25
}

let questions =[]; // es un array donde metemos las preguntas de la funcion getquestion 
let questionNumber =0;
let correctAnswer ="";
let correctAnswerNumber =0;
let category = 0;
let score = 0;
const numCategories = 3;
const numQuestions = 5;

function getQuestions(category){ // se refiere la category a la category que se coge de la api.Dentro del bloque de la promesa, se realiza la petición fetch a la API de Trivia, especificando el número de preguntas (amount), la categoría (category), la dificultad (difficulty) y el tipo de respuesta (type). 
  return new Promise((resolve,reject) =>{
    fetch("https://opentdb.com/api.php?amount=5&category="+ category +"&difficulty=easy&type=multiple")
    .then(response => response.json())
    .then(data => {
      questions.push(data.results); // metemos las preguntas en question con el push
        resolve();
  });
  } )
}

async function initiale(){ // La función initiale() es una función asíncrona que llama a la función getQuestions() tres veces, pasando como parámetro las categorías "history", "ciencia" y "arte".
      await getQuestions(categories.history);
      await getQuestions(categories.ciencia); // El uso de await asegura que cada llamada a getQuestions() se complete antes de continuar con la siguiente. 
      await getQuestions(categories.arte);
      console.log(questions); // la función imprime las preguntas (almacenadas en el array questions) en la consola
      document.getElementById("loading").innerHTML="";  
      createQuestion(); //  llama a la función createQuestion().
}

function loading(){

  let animation = '<section id="loadingAnimation">\
  \
<lottie-player src="https://assets5.lottiefiles.com/private_files/lf30_DGRf6G.json"  background="transparent"  speed="1"  style="width: 600px; height: 600px;"  loop autoplay></lottie-player>\
</section>'
document.getElementById("loading").innerHTML=animation;


}



function createQuestion(){ //encargada de mostrar la pregunta y las opciones de respuesta en la interfaz gráfica del usuario
    let question = questions[category][questionNumber]; // Obtiene la pregunta actual basada en la variable questionNumber y la categoría actual basada en la variable category.
    correctAnswer = question.correct_answer;      // Obtiene la respuesta correcta de la pregunta y la almacena en la variable correctAnswer.
    console.log(question);
    document.getElementById("question").innerText = question.question; //Muestra la pregunta en la interfaz gráfica del usuario, estableciendo el contenido del elemento HTML con el id "question" como el texto de la pregunta. Cada objeto question contiene varias propiedades, incluyendo la pregunta en sí (question.question) y las opciones de respuesta (question.incorrect_answers y question.correct_answer).
    let answers = question.incorrect_answers; // Obtiene las respuestas incorrectas de la pregunta y las almacena en la variable answers
    answers.unshift(question.correct_answer); // Luego agrega la respuesta correcta a la matriz answers en la primera posición mediante el método unshift().
    createAnswerButtons(answers);
    AddListenerToAnswer ();
}


// seleccionar todas las respuestas

function AddListenerToAnswer (){
  
  let answerButtons= document.getElementsByClassName("answer");
  answerButtons = [...answerButtons];
  answerButtons.forEach((answer) => {
    console.log(answer);
    answer.addEventListener("click", (event) => { //un "escuchador de eventos" (event listener) al elemento del DOM con el id "choices". Cuando un usuario hace clic en cualquier elemento dentro del elemento "choices", se activa el evento "click" y se ejecuta la función especificada dentro del segundo parámetro del método addEventListener(). En este caso, se usa una función anónima con el parámetro "event" que representa el evento click.
      clickAnswer(event);
    });
  })
}

function clickAnswer(event){
  let selectedAnswer = event.target.innerText; //En este contexto, event.target se refiere al elemento HTML que desencadenó el evento "click" en la página web. En otras palabras, se refiere al elemento HTML que fue clickeado. El método innerText se utiliza para obtener el contenido de texto del elemento HTML. En este caso, selectedAnswer es una variable que contiene el texto del elemento HTML que fue clickeado por el usuario, es decir, la respuesta seleccionada por el usuario.
  if (selectedAnswer === correctAnswer){
    score +=12;
    console.log(score);
    document.getElementById("score").innerText = score; // pongo en pantalla el score
    console.log("¡Respuesta correcta! suma puntos");
  } else {
    score -=3;
    document.getElementById("score").innerText = score;
    console.log("fallaste te resta puntos");
  }
  nextTurn();
  

}
function nextTurn (){
  category ++;
  if(category === numCategories){
    category= 0;
    questionNumber ++;
  }
    if(questionNumber === numQuestions){
         window.location.href="gameover.html";
        return;
    }
  createQuestion();
}

                                                    // obtiene el elemento del DOM con el id "choices" y lo asigna a la variable "opction". Esto se hace para poder agregar un "escuchador de eventos" (event listener) a este elemento más tarde, y para poder agregar opciones de respuesta dentro de este elemento mediante código JavaScript.
  
  



// Desordenar aleatoriamente las respuestas
function createAnswerButtons (answers){
  shuffle(answers); // reordena aleatoriamente las opciones de respuesta.
  document.getElementById("choices").innerHTML ="";
    answers.forEach(answer => { //para recorrer cada una de las respuestas 
        let h2 = document.createElement("h2"); // se crea un elemento h2 para cada una de ellas
        h2.innerText = answer; // Luego se establece el texto de cada elemento h2 con la respuesta correspondiente 
        h2.classList.add("answer");
        document.getElementById("choices").appendChild(h2); //se añade el elemento h2 al contenedor con id choices, que es donde se muestran las opciones de respuesta al usuario.
    });
  }

function shuffle(array) { // La función shuffle toma un array como argumento y reordena sus elementos de forma aleatoria.
    for (let i = array.length -1; i > 0; i--) { //  recorre el array de atrás hacia adelante.
      const j = Math.floor(Math.random() * (i + 1)); // genera un número aleatorio entre 0 (inclusive) y (i+1) (exclusivo) y lo almacena en la variable j. La función Math.floor() redondea hacia abajo al entero más cercano. Por lo tanto, el resultado de Math.floor(Math.random() * (i+1)) es un número entero aleatorio entre 0 y i (ambos incluidos).
      [array[i], array[j]] = [array[j], array[i]]; // intercambia los valores de los elementos en las posiciones i y j de un array. Esto asigna un nuevo array a la izquierda de la igualdad, y el contenido de ese array se desestructura (es decir, se asigna a) los elementos correspondientes del array a la derecha de la igualdad.
    }
    return array;
  }

initiale(); //inicia la ejecución del juego.
loading();





    
