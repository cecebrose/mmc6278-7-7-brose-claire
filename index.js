
var btn = document.getElementById('start-quiz');
console.log(btn);
btn.addEventListener('click', function() {
    console.log(clicked)
});


var quizBtn = document.querySelector('quiz');
console.log(quizBtn);

var questionsArr = [
    {
      question: 'What color is a polar bears skin?',
      answer: 'Black',
      options: [
        'Purple',
        'Black',
        'White',
        'Pink',
      ]
    },
    {
      question: 'What color is a giraffe tongue?',
      answer: 'Purple',
      options: [
        'Purple',
        'Black',
        'Red',
        'Pink',
      ]
    },
    {
      question: 'How many hearts does an octopus have?',
      answer: 'Three',
      options: [
        'One',
        'Two',
        'Three',
        'Four',
      ]
    },
      {
      question: 'How many bones does a shark have?',
      answer: 'None',
      options: [
        'Seventy',
        'One hundred',
        'Two thousand',
        'None',
      ]
    },
    {
      question: 'Which animal does not have vocal cords?',
      answer: 'Giraffe',
      options: [
        'Sloth',
        'Giraffe',
        'Elephant',
        'Whale',
      ]
    },
  ];
console.log('questionsArr');

var intervalId = setInterval(function (){
   var seconds = Number(quiz.textContent) - 1
   if (seconds === -1) {
       clearInterval(intervalId)
       quiz.textContent = 'refresh to go again'
   } else {
       quiz.textContent = seconds
   }
}, 1000);

var btns = document.querySelectorAll('.buttons > button');
var span = dosument.getElementById('clicked');
console.log(btns, span);

for (var i =0; i < btns.length; i++){
    btns[i].addEventListener('click', function() {
        span.textContent = this.textContent
    })
};

localStorage.setItem("score");
var score = localStorage.getItem("score");
console.log(score);
var newPageLoadCountValue = Number(localStorage.getItem('previous-score')) + 1;
localStorage.setItem('previous-score', newPageLoadCountValue);
console.log(previous-score);


