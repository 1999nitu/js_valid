// Login
const loginForm = document.querySelector('#login-form');
const loginBtn = document.getElementById('login-btn');

// define Hashing function
function hashPassword(password) {
    let hash = 0;
    for (let i = 0; i < password.length; i++) {
      hash = (hash * 31 + password.charCodeAt(i)) % 2147483647;
    }
    return hash.toString(16);
  }
  

loginBtn.addEventListener('click', (e) => {
  e.preventDefault();

  const loginEmail = document.getElementById('login-email').value.trim();
  const loginErrorEmail = document.getElementById('login-email-error');

  const loginPassword = document.getElementById('login-password').value.trim();
  const loginErrorPassword = document.getElementById('login-password-error');

  const storedEmail = localStorage.getItem('email');
  const storedPassword = localStorage.getItem('password');


  let isValid = true;
  
  // Check if email is empty
  if (loginEmail === '') {
    loginErrorEmail.innerText = 'Please enter email';
    loginErrorEmail.style.color = 'red';
    loginErrorEmail.style.display = 'block';
    isValid = false;
  }
  else {
    loginErrorEmail.style.display = 'none';
  }

  // loginEmail.addEventListener('input', () => {
  //   if (loginEmail.value.trim() !== '') {
  //     loginErrorEmail.textContent = '';
  //   }
  // });

  // loginPassword.addEventListener('input', () => {
  //   if (loginPassword.value.trim() !== '') {
  //     loginErrorPassword.textContent = '';
  //   }
  // });

  // Check if password is empty
  if (loginPassword === '') {
    loginErrorPassword.innerText = 'Please enter password';
    loginErrorPassword.style.color = 'red';
    loginErrorPassword.style.display = 'block';
    isValid = false;
  }
  else {
    loginErrorPassword.style.display = 'none';
  }

  // Check if form is valid
  if (!isValid) {
    return; // Stop execution if form is not valid
  }
  
  // Check if email and password match
  if (storedEmail === null || storedPassword === null) {
    alert('Email and password not found. Please register first.');
  } else if (loginEmail === storedEmail && hashPassword(loginPassword) === storedPassword) {
    localStorage.setItem('loginStatus', true);
    document.getElementById('login').style.display = 'none';
    window.location.href = 'task.html';
  } else {
    localStorage.setItem('loginStatus', false);
    alert('User not Found');
  }
});
