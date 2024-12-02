//check form fields are filled or empty

const inputFname = document.getElementById('fname');
const inputLname = document.getElementById('lname');
const dob = document.getElementById('dob');
const email = document.getElementById('email');
const contact = document.getElementById('contact');
const street = document.getElementById('street');
const city = document.getElementById('city');

const inputFnameError = document.getElementById('fname-error');
const inputLnameError = document.getElementById('lname-error');
const dobError = document.getElementById('dob-error');
const emailError = document.getElementById('email-error');
const contactError = document.getElementById('contact-error');
const streetError = document.getElementById('street-error');
const cityError = document.getElementById('city-error');


const submitButton = document.getElementById('reg-btn');

submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  let isValid = true;

  if (inputFname.value.trim() === '') {
    inputFnameError.textContent = 'fname is required';
    inputFnameError.style.color = 'red';
    isValid = false;
  } else {
    inputFnameError.textContent = '';
  }

  if (inputLname.value.trim() === '') {
    inputLnameError.textContent = 'lname is required';
    inputLnameError.style.color = 'red';
    isValid = false;
  } else {
    inputLnameError.textContent = '';
  }

  if (dob.value.trim() === '') {
    dobError.textContent = 'dob is required';
    dobError.style.color = 'red';
    isValid = false;
  } else {
    dobError.textContent = '';
  }

  if (email.value.trim() === '') {
    emailError.textContent = 'email is required';
    emailError.style.color = 'red';
    isValid = false;
  } else {
    emailError.textContent = '';
  }

  if (contact.value.trim() === '') {
    contactError.textContent = 'contact is required';
    contactError.style.color = 'red';
    isValid = false;
  } else {
    contactError.textContent = '';
  }

  if (street.value.trim() === '') {
    streetError.textContent = 'street is required';
    streetError.style.color = 'red';
    isValid = false;
  } else {
    streetError.textContent = '';
  }

  if (city.value.trim() === '') {
    cityError.textContent = 'city is required';
    cityError.style.color = 'red';
    isValid = false;
  } else {
    cityError.textContent = '';
  }

  if (isValid) {
    goLogin();
  }
});

//when field is filled then remove red msg
inputFname.addEventListener('input', () => {
  if (inputFname.value.trim() !== '') {
    inputFnameError.textContent = '';
  }
});

inputLname.addEventListener('input', () => {
  if (inputLname.value.trim() !== '') {
    inputLnameError.textContent = '';
  }
});

dob.addEventListener('input', () => {
  if (dob.value.trim() !== '') {
    dobError.textContent = '';
  }
});

email.addEventListener('input', () => {
  if (email.value.trim() !== '') {
    emailError.textContent = '';
  }
});

contact.addEventListener('input', () => {
  if (contact.value.trim() !== '') {
    contactError.textContent = '';
  }
});

street.addEventListener('input', () => {
  if (street.value.trim() !== '') {
    streetError.textContent = '';
  }
});

city.addEventListener('input', () => {
  if (city.value.trim() !== '') {
    cityError.textContent = '';
  }
});

function goLogin() {
  window.location.href = 'login.html';
}






//Type only letters fname

const fname = document.getElementById("fname");
//Get the form field element.

fname.onfocus = function() {
  fname.addEventListener("keydown", checkFirstName);
};

function checkFirstName(e) {
  const asciiCode = e.keyCode;

// Allow only letters ASCII codes :
// Letters (a-z): 97-122
//Letters (A-Z): 65-90)
  if ((asciiCode >= 65 && asciiCode <= 90) || asciiCode >= 97 && asciiCode <= 122 || asciiCode == 8) {
    return true;
  } else {
    e.preventDefault();
    return false;
  }
}




//Type only letters lname

const lname = document.getElementById("lname");
//Get the form field element.

lname.onfocus = function() {
  lname.addEventListener("keydown", checkLastName);
};

function checkLastName(e) {
  const asciiCode = e.keyCode;

// Allow only letters ASCII codes :
// Letters (a-z): 97-122
//Letters (A-Z): 65-90)
  if ((asciiCode >= 65 && asciiCode <= 90) || asciiCode >= 97 && asciiCode <= 122  || asciiCode == 8) {
    return true;
  } else {
    e.preventDefault();
    return false;
  }
}

//Type Only Digits

const number = document.getElementById("contact");
//Get the form field element.

number.onfocus = function() {
  number.addEventListener("keydown", checkNum);
};

function checkNum(e) {
  const asciiCode = e.keyCode;

  // Allow only digits (ASCII codes 48-57)
  if ((asciiCode >= 48 && asciiCode <= 57) || asciiCode == 8) {
    return true;
  } else {
    e.preventDefault();
    return false;
  }
}





//pattern for street

const myAddress= document.getElementById("street");
myAddress.onfocus = function() {
  myAddress.addEventListener("keydown", checkstreet);
};
function checkstreet(e) {
  const asciiCode = e.keyCode;
  
if(
  (asciiCode >= 65 && asciiCode <= 90)||
    (asciiCode >= 97 && asciiCode <= 122)||
    // digits
    (asciiCode >= 48 && asciiCode <= 57)||
    // Special characters
    asciiCode == 35|| // Hash (#)
    asciiCode == 44|| // Comma (,)
    asciiCode == 45|| // Hyphen (-)
    asciiCode == 46|| // Dot (.)
    asciiCode == 32|| // Space
    
    // Navigation keys
    asciiCode == 8|| // Backspace
    asciiCode == 37|| // Left arrow
    asciiCode == 38|| // Up arrow
    asciiCode == 39|| // Right arrow
    asciiCode == 40 // Down arrow
) {
    return true;
  } else {
    e.preventDefault();
    return false;
  }
}




//pattern for city

const myCity= document.getElementById("city");
myCity.onfocus = function() {
  myCity.addEventListener("keydown", checkCity);
};
function checkCity(e) {
  const asciiCode = e.keyCode;
  
if(
  (asciiCode >= 65 && asciiCode <= 90) || // small letters/UPPERCASE
  (asciiCode >= 96 && asciiCode <= 105) || // digits
  asciiCode == 51 || // Hash (#)
  asciiCode == 188||  // Comma (,)
  asciiCode == 8 ||  //backspace
  asciiCode == 32    //space
) {
    return true;
  } else {
    e.preventDefault();
    return false;
  }
}


// pattern for email

const Email= document.getElementById("email");

Email.onfocus = function(){
  Email.addEventListener("keydown",checkEmail);
};
function checkEmail(e){
  const asciiCode=e.keyCode;
  if(
    (asciiCode >= 65 && asciiCode <= 90) || // small /UPPERCASE letters
    (asciiCode >= 96 && asciiCode <= 105) || // digits
    asciiCode == 50  // at (@)
    || asciiCode == 8 ||
    asciiCode == 190  //dot
  )

  {
    return true;

  } else {
    e.preventDefault();
    return false;
  }
}



//validate password
function validatePassword() {
    const password = document.getElementById('password').value;
    const passwordError = document.getElementById('password-error');
  
  
    // Password requirements
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/;
  
    // Check password length
    if (password.length < 8) {
      passwordError.innerHTML = 'Password must be at least 8 characters';
      return false;
    }
    else{
      passwordError.innerHTML = '';
    }
  
    // Check password pattern
    if (!passwordRegex.test(password)) {
      passwordError.innerHTML = 'Password must contain at least one alphabet and one number';
      return false;
    }
    else{
      passwordError.innerHTML = '';
    }
  
  }
  // // Call validation function on form submission
  // document.getElementById('form').addEventListener('submit', function(event) {
  //   if (!validatePassword()) {
  //     event.preventDefault();
  //   }})
  





  //validate confirm password
function checkCpass(){
    // Check password and confirm password match
    const confirmPassword = document.getElementById('cpassword').value;
  const cpasswordError = document.getElementById('cpassword-error');
  const password = document.getElementById('password').value;



    if (confirmPassword == password) {
    cpasswordError.innerHTML = '';
      return true;
    }
  else{
    cpasswordError.innerHTML = 'Password and Confirm Password do not match';
    return true;
  }
    
  }




 // Registration
const regForm = document.getElementById('reg-form');
const regBtn = document.getElementById('reg-btn');
let selectedGender = null;
let selectedTask = document.getElementById('task-select').value;

 // Get selected radio button value
 const genderRadios = document.getElementsByName('gender');
    
 // Update selectedGender on radio button change
 genderRadios.forEach(radio => {
   radio.addEventListener('change', () => {
     if (radio.checked) {
       selectedGender = radio.value;
     }
   });
 });
 

regBtn.addEventListener('click', (e) => {
  e.preventDefault();

  const fname = document.getElementById('fname').value;
  const lname = document.getElementById('lname').value;
  const dob = document.getElementById('dob').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const cpassword = document.getElementById('cpassword').value;
  const contact = document.getElementById('contact').value;
  const street = document.getElementById('street').value;
  const city = document.getElementById('city').value;
  const course = document.getElementById('course').value;


  // Simple hashing function
  function hashPassword(password) {
    let hash = 0;
    for (let i = 0; i < password.length; i++) {
      hash = (hash * 31 + password.charCodeAt(i)) % 2147483647;
    }
    return hash.toString(16);
  }

  // Hash password and confirm password
  const hashedPassword = hashPassword(password);
  const hashedCPassword = hashPassword(cpassword);

  // Store values in local storage
  localStorage.setItem('fname', fname);
  localStorage.setItem('lname', lname);
  localStorage.setItem('dob', dob);
  localStorage.setItem('gender', selectedGender);
  localStorage.setItem('email', email);
  localStorage.setItem('password', hashedPassword);
  localStorage.setItem('cpassword', hashedCPassword);
  localStorage.setItem('contact', contact);
  localStorage.setItem('street', street);
  localStorage.setItem('city', city);
  localStorage.setItem('course', course);

  // document.getElementById('registeration').style.display = 'none';
  // document.getElementById('login').style.display = 'block';

  // Store data in JSON format
  const userData = {
    fname,
    lname,
    dob,
    email,
    password: hashedPassword,
    contact,
    street,
    city,
    course,
    gender: selectedGender
  };

  localStorage.setItem('userData', JSON.stringify(userData));

  // Redirect to login page
  window.location.href = 'login.html';

});

// // Login
const loginForm = document.getElementById('login-form');
const loginBtn = document.getElementById('login-btn');

loginBtn.addEventListener('click', (e) => {
  e.preventDefault();

  const loginEmail = document.getElementById('login-email').value;
  const loginErrorEmail = document.getElementById('login-email-error');
  const loginPassword = document.getElementById('login-password').value;
  const loginErrorPassword = document.getElementById('login-password-error');

  const storedEmail = localStorage.getItem('email');
  const storedPassword = localStorage.getItem('password');

  if (loginEmail === '' || loginPassword === '') {
    if (loginEmail === '') {
      loginErrorEmail.innerText = 'Please enter email';
      loginErrorEmail.style.color = 'red';
    } else {
      loginErrorEmail.innerText = '';
    }
    if (loginPassword === '') {
      loginErrorPassword.innerText = 'Please enter password';
      loginErrorPassword.style.color = 'red';
    } else {
      loginErrorPassword.innerText = '';
    }
  } else if (loginEmail === storedEmail && loginPassword === storedPassword) {
    document.getElementById('login').style.display = 'none';
    document.getElementById('task-selection').style.display = 'block';
  } else {
    loginErrorEmail.innerText = 'Invalid email';
    loginErrorPassword.innerText = 'Incorrect password';
  }
});

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


 //function to start Timer
 function startTimer() {
  const timerInterval = setInterval(() => {
    timeLeft--;
    document.getElementById('timer').innerHTML = `<h1>Time left: ${timeLeft} seconds</h1>`;
    
    if (timeLeft === 0) {
      clearInterval(timerInterval);
      checkAnswer();
    }
  }, 1000);
}




//function to check Answer
function checkAnswer() {
    const userAnswer = document.getElementById("answer").value;
    userAnswers.push(userAnswer);

    // Move to next question
    currentQuestion++;
    timeLeft = 10;
    if (currentQuestion >= selectedQuestions.length) {
        // Display results
        displayResults();
    } else {
        displayQuestion();
    }
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
    checkAnswer();
  });
}


function goRegister(){
  window.location.href = 'register.html';
}

function task(){
  window.location.href = 'task.html';
}
function quiz(){
  window.location.href = 'question.html';
}