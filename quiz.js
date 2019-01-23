 function buildQuiz(){}

function showResults(){}
buildQuiz();
submitButton.addEventListener('click', showResults);

const myQuestions = [
  {
    question: "How to make text bold with HTML?",
    answers: {
      a: "<i>",
      b: "<br>",
      c: "<b>"
    },
    correctAnswer: "c"
  },
  {
    question: "0011?",
    answers: {
      a: "3",
      b: "2",
      c: "79"
    },
    correctAnswer: "b"
  },
  {
    question: "2+2?",
    answers: {
      a: "22",
      b: "4",
      c: "None of the Above",
    },
    correctAnswer: "b"
  }
];


function buildQuiz(){
  const output = [];

  myQuestions.forEach(
    (currentQuestion, questionNumber) => {

      const answers = [];

      for(letter in currentQuestion.answers){

        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join('')} </div>`
      );
    }
  );

  quizContainer.innerHTML = output.join('');
}

myQuestions.forEach( (currentQuestion, questionNumber) => {
});


const answers = [];

for(letter in currentQuestion.answers){

  answers.push(
    `<label>
      <input type="radio" name="question${questionNumber}" value="${letter}">
      ${letter} :
      ${currentQuestion.answers[letter]}
    </label>`
  );
}

output.push(
  `<div class="question"> ${currentQuestion.question} </div>
  <div class="answers"> ${answers.join('')} </div>`
);

quizContainer.innerHTML = output.join('');

function showResults(){


  const answerContainers = quizContainer.querySelectorAll('.answers');

  let numCorrect = 0;


  myQuestions.forEach( (currentQuestion, questionNumber) => {

    const answerContainer = answerContainers[questionNumber];
    const selector = 'input[name=question'+questionNumber+']:checked';
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;


    if(userAnswer===currentQuestion.correctAnswer){

      numCorrect++;

      answerContainers[questionNumber].style.color = 'lightgreen';
    }

    else{
      answerContainers[questionNumber].style.color = 'red';
    }
  });
  resultsContainer.innerHTML = numCorrect + ' out of ' + myQuestions.length;
}

const answerContainers = quizContainer.querySelectorAll('.answers'); 

let numCorrect = 0;


myQuestions.forEach( (currentQuestion, questionNumber) => {


  const answerContainer = answerContainers[questionNumber];
  const selector = `input[name=question${questionNumber}]:checked`;
  const userAnswer = (answerContainer.querySelector(selector) || {}).value;


  if(userAnswer===currentQuestion.correctAnswer){

    numCorrect++;


    answerContainers[questionNumber].style.color = 'lightgreen';
  }

  else{

    answerContainers[questionNumber].style.color = 'red';
  }
});

const answerContainer = answerContainers[questionNumber];
const selector = `input[name=question${questionNumber}]:checked`;
const userAnswer = (answerContainer.querySelector(selector) || {}).value;


if(userAnswer===currentQuestion.correctAnswer){

  numCorrect++;


  answerContainers[questionNumber].style.color = 'lightgreen';
}
// if answer is wrong or blank
else{

  answerContainers[questionNumber].style.color = 'red';
}

resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
(function(){
})();
