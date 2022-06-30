(function() {
    function buildQuiz() {
      
      document.getElementById("quiz").style.visibility = "hidden"
      const output = [];
    
      myQuestions.forEach((currentQuestion, questionNumber) => {
        const answers = [];
    
        for (letter in currentQuestion.answers) {
          answers.push(
            `<label>
            <input name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
          );
        };
    
      quizContainer.innerHTML = output.join("");
    
    window.onload = function () {
        const quizContainer = document.getElementById("quiz");
                var questionsArr = [
                    {
                      question: "What color is a polar bear's skin?",
                      answers: {
                        a: "Pink",
                        b: "Black",
                        c: "White"
                      },
                      correctAnswer: "b"
                    },
                    {
                      question: "What was the first toy to be advertised on television?",
                      answers: {
                        a: "Mr. Potato Head",
                        b: "Slinky",
                        c: "Barbie"
                      },
                      correctAnswer: "a"
                    },
                    {
                      question: "What was the first feature-length animated movie ever released?",
                      answers: {
                        a: "The Little Mermaid",
                        b: "Cinderella",
                        c: "Toy Story",
                        d: "Snow White & The Seven Dwarfs"
                      },
                      correctAnswer: "d"
                    },
                    {
                        question: "Area 51 is located in which US state?",
                        answers: {
                          a: "Nevada",
                          b: "New Mexico",
                          c: "Arizona"
                        },
                        correctAnswer: "a"
                      },
                      {
                        question: "How many hearts does an octopus have?",
                        answers: {
                          a: "3",
                          b: "1",
                          c: "8"
                        },
                        correctAnswer: "a"
                      },
                      {
                        question: "What is the largest organ of the human body?",
                        answers: {
                          a: "Intestine",
                          b: "Bladder",
                          c: "Skin",
                          d: "Heart"
                        },
                        correctAnswer: "c"
                    }
                ];
            };
        var correctAnswer = 0;

        for (var i = 0; i < questions.length; i++) {
            var answer = prompt(questions[i][0]);
            if (answer.toUpperCase() == questions[i][1]) {
                alert("Correct! " + questions[i][2]);
                correctAnswers++;
            }
            else {
                alert("incorrect, the correct answer was " + questions[i][1]);
            }
        };