
// Check if user is logged in
const user = JSON.parse(localStorage.getItem('userData'));

if (!user) {
  // Redirect to login page if not logged in
  window.location.href = 'login.html';
}




// Task Selection
const taskSelection = document.getElementById('task-selection');
const taskForm = document.getElementById('task-form');
const taskSelect = document.getElementById('task-select');
const taskBtn = document.getElementById('task-btn');

// Event listener for task button
taskBtn.addEventListener('click', (e) => {
  e.preventDefault();

  // Get selected task
  const selectedTask = taskSelect.value;
  // console.log(selectedTask);


  // Validate task selection
  if (selectedTask === '') {
    alert('Please select a task');
  } else {
    // Store selected task in local storage
    localStorage.setItem('task-select', selectedTask);

    // Hide task selection section
    taskSelection.style.display = 'none';

    // Display questions 
    document.getElementById('question-container').style.display = 'block';

    // Load quiz questions based on selected task
    loadQuizQuestions(selectedTask);
  }
});

// Question Array
const questions = {
  
    'Web Designing': [
      {
        question: 'What does HTML stand for?',
        answer: ''
      },
      {
        question: 'What is the purpose of the div tag?',
        answer: ''
      },
      {
        question: 'Which HTML tag is used for headings?',
        answer: ''
      },
      {
        question: 'Which CSS property is used for spacing between elements ?',
        answer: ''
      },
      {
        question: 'Which HTML tag is used for unordered lists?',
        answer: ''
      }
    ],
    'Web Development': [
      {
        question: 'What is the purpose of the script tag?',
        answer: ''
      },
      {
        question: 'What is the purpose of the style tag?',
        answer: ''
      },
      {
        question: 'What does API stand for?',
        answer: ''
      },
      {
        question: 'Which programming language is used for client-side scripting?',
        answer: ''
      },
      {
        question: 'What is the primary function of the DOM?',
        answer: ''
      }
    ],
    'Mern Stack': [
      {
        question: 'What does MERN stand for?',
        answer: ''
      },
      {
        question: 'What is the purpose of React?',
        answer: ''
      },
      {
        question: 'Which JavaScript library is used for front-end development in MERN?',
        answer: ''
      },
      {
        question: 'Which database management system is used in MERN?',
        answer: ''
      },
      {
        question: ' What is the primary function of Express.js in MERN?',
        answer: ''
      }
    ],
    'Mean Stack': [
      {
        question: 'What does MEAN stand for?',
        answer: ''
      },
      {
        question: 'What is the purpose of MongoDB?',
        answer: ''
      },
      {
        question: 'What is Express.js?',
        answer: ''
      },
      {
        question: 'Which JavaScript framework is used for front-end development in MEAN?',
        answer: ''
      },
      {
        question: 'What is the purpose of Node.js in MEAN?',
        answer: ''
      }
    ],
    'Digital Marketing': [
      {
        question: 'What is SEO?',
        answer: ''
      },
      {
        question: 'What is PPC?',
        answer: ''
      },
      {
        question: 'What is SMM?',
        answer: ''
      },
      {
        question: ' What is the purpose of Influencer Marketing?',
        answer: ''
      },
      {
        question: 'What is Email Marketing?',
        answer: ''
      }
    ]
  
  };

  // Initialize score globally
let score = 0;
let selectedQuestions = [];
let userAnswers = [];
let timeLeft = 10;
let currentQuestion = 0;

 
 // Function to display question
 function displayQuestion(){
    const questionElement = document.getElementById("question");
  const answerInput = document.getElementById("answer");
  questionElement.innerHTML = selectedQuestions[currentQuestion].question;
  answerInput.value = "";

  // Start timer
  startTimer();

 }

//  timerInterval is declared globally.
let timerInterval;

// Function to start Timer
function startTimer() {
  timerInterval = setInterval(() => {
    timeLeft--;
    document.getElementById('timer').innerHTML = `<span>Time left: ${timeLeft} seconds</span>`;
    if (timeLeft === 0) {
      clearInterval(timerInterval);
      checkAnswer();
    }
  }, 1000);
}



// Function to check Answer
function checkAnswer() {
  const userAnswer = document.getElementById("answer").value;
  userAnswers.push(userAnswer);
  
  // Clear existing timer
  clearInterval(timerInterval);
timerInterval = null;
  
  // Reset timeLeft
  timeLeft = 10;
  
  // Move to next question
  currentQuestion++;
  
  if (currentQuestion >= selectedQuestions.length) {
    // Display results
    displayResults();
  } else {
    displayQuestion();
    // // Start new timer for next question
    // timerInterval = startTimer();
  }
}



// Function to display question
function displayQuestion(){
  const questionElement = document.getElementById("question");
  const answerInput = document.getElementById("answer");
  questionElement.innerHTML = selectedQuestions[currentQuestion].question;
  answerInput.value = "";
  timeLeft = 10; // Reset timeLeft

  //start time
  startTimer();
}


//Function to display results
function displayResults() {
  const resultContainer = document.getElementById("result-container");
  resultContainer.style.display = "block";

  const questionContainer = document.getElementById("question-container");
  questionContainer.style.display = "none";

  const result= document.getElementById("result");
  result.innerHTML = "<h1>Result</h1>";


  const answerList = document.getElementById("answer-list");
  answerList.innerHTML = "";

  selectedQuestions.forEach((question, index) => {
      const li = document.createElement("li");
      li.innerHTML = `<h2><b>Question ${index + 1}: ${question.question}<b></h2> <br> <h4><b> Answer:<b> ${userAnswers[index]}</h4>`;
      answerList.appendChild(li);
  });
}


// Function to load quiz questions
function loadQuizQuestions(selectedTask) {
  selectedQuestions = questions[selectedTask];

  // Display first question
  displayQuestion();

  // Get next button element
  const nextBtn = document.getElementById('next-btn');

  // Add event listener to next button
  nextBtn.addEventListener('click', () => {
    clearInterval(timerInterval);
    checkAnswer();
  });

  
}



document.addEventListener('DOMContentLoaded', () => {
  const loginStatus = localStorage.getItem('loginStatus');
  
  if(loginStatus)
  {
    alert(loginStatus);
    // localStorage.removeItem('loginStatus');
  }
})

function logout(){
  window.location.href = 'login.html';
  localStorage.setItem('loginStatus', false);
  // localStorage.setItem('userData',false)

  localStorage.removeItem('userData');

}

