(function() {
  function buildQuiz() {

    const output = [];


    myQuestions.forEach((currentQuestion, questionNumber) => {

      const answers = [];


      for (letter in currentQuestion.answers) {

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
        <div class="answers"> ${answers.join("")} </div>`
      );
    });


    quizContainer.innerHTML = output.join("");
  }

  function showResults() {

    const answerContainers = quizContainer.querySelectorAll(".answers");


    let numCorrect = 0;


    myQuestions.forEach((currentQuestion, questionNumber) => {

      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      if (userAnswer === currentQuestion.correctAnswer) {

        numCorrect++;


        answerContainers[questionNumber].style.color = "lightgreen";
      } else {

        answerContainers[questionNumber].style.color = "red";
      }
    });


    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
  const myQuestions = [
    {
      question: "How do you make text bold with HTML?",
      answers: {
        a: "<i>",
        b: "<br>",
        c: "<b>"
      },
      correctAnswer: "c"
    },
    {
      question: "What room are we currently in?",
      answers: {
        a: "SE 224",
        b: "NW 209",
        c: "SE 226"
      },
      correctAnswer: "a"
    },
    {
      question: "2+2?",
      answers: {
        a: "22",
        b: "4",
      },
      correctAnswer: "b"
    }
  ];


  buildQuiz();

  submitButton.addEventListener("click", showResults);
})();
