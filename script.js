

// 30 preguntas de historia de la API
fetch('https://opentdb.com/api.php?amount=30&category=23&difficulty=easy&type=multiple')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error))

 // 30 preguntas de arte de la API
fetch('https://opentdb.com/api.php?amount=30&category=25&difficulty=easy&type=multiple')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error))
        
 // 30 preguntas de ciencia naturaleza de la API
 fetch('https://opentdb.com/api.php?amount=30&category=17&difficulty=easy&type=multiple')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error))
    

