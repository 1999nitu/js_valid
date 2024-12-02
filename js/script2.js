// Type only letters fname
const fname = document.getElementById("fname");
fname.addEventListener("keydown", checkFirstName);

function checkFirstName(e) {
  const asciiCode = e.keyCode;
  const fnameValue = fname.value;
  const fnameLength = fnameValue.length;

  // Allow only letters
  // ASCII codes:
  // Letters (a-z): 97-122
  // Letters (A-Z): 65-90
  if ((asciiCode >= 65 && asciiCode <= 90) || (asciiCode >= 97 && asciiCode <= 122) || asciiCode == 8 || asciiCode == 32 || asciiCode == 46) {
    // Check length limit
    if (fnameLength >= 10 && asciiCode != 8 && asciiCode != 46) {
      e.preventDefault();
      document.getElementById("fname-error").innerHTML = "First name max length is 10";
      return false;
    } else if (fnameLength >= 10) {
      return true;
    }
    document.getElementById("fname-error").innerHTML = "";
    return true;
  } else {
    e.preventDefault();
    document.getElementById("fname-error").innerHTML = "First name can only contain letters.";
    return false;
  }
}

// Check length on blur (loss of focus)
fname.addEventListener("blur", function() {
  const fnameValue = fname.value;
  const fnameLength = fnameValue.length;
  if (fnameLength < 3) {
    document.getElementById("fname-error").innerHTML = "First name must be at least 3 characters";
  } else {
    document.getElementById("fname-error").innerHTML = "";
  }
});








// Type only letters lname
const lname = document.getElementById("lname");
lname.addEventListener("keydown", checkLastName);

function checkLastName(e) {
  const asciiCode = e.keyCode;
  const lnameValue =lname.value;
  const lnameLength =lnameValue.length;

  // Allow only letters
  // ASCII codes:
  // Letters (a-z): 97-122
  // Letters (A-Z): 65-90
  if((asciiCode >= 65 && asciiCode <= 90) || asciiCode >= 97 && asciiCode <= 122  || asciiCode == 8) {
    // Check length limit
    if (lnameLength >= 10 && asciiCode != 8 && asciiCode != 46) {
      e.preventDefault();
      document.getElementById("lname-error").innerHTML = "last name max length is 10";
      return false;
    } else if (lnameLength >= 10) {
      return true;
    }
    document.getElementById("lname-error").innerHTML = "";
    return true;
  } else {
    e.preventDefault();
    document.getElementById("lname-error").innerHTML = "Last name can only contain letters.";
    return false;
  }
}

// Check length on blur (loss of focus)
lname.addEventListener("blur", function() {
  const lnameValue = lname.value;
  const lnameLength = lnameValue.length;
  if (lnameLength < 3) {
    document.getElementById("lname-error").innerHTML = "Last name must be at least 3 characters";
  } else {
    document.getElementById("lname-error").innerHTML = "";
  }
});








//pattern for contact

const number = document.getElementById("contact");
number.addEventListener("keydown", checkNum);

function checkNum(e) {
  const asciiCode = e.keyCode;
  const numberValue = number.value;
  const numberLength = numberValue.length;

   // Allow only digits (ASCII codes 48-57)
  if ((asciiCode >= 48 && asciiCode <= 57) || asciiCode == 8) {

    // Check length limit
    if (numberLength >= 10 && asciiCode != 8 && asciiCode != 46) {
      e.preventDefault();
      document.getElementById("contact-error").innerHTML = "contact max length is 10";
      return false;
    } else if (numberLength >= 10) {
      return true;
    }
    document.getElementById("contact-error").innerHTML = "";
    return true;
  } else {
    e.preventDefault();
    return false;
  }
}

// Check length on blur (loss of focus)
number.addEventListener("blur", function() {
  const numberValue = number.value;
  const numberLength = numberValue.length;
  if (numberLength < 10) {
    document.getElementById("contact-error").innerHTML = "contact must be at least 10 characters";
  } else {
    document.getElementById("contact-error").innerHTML = "";
  }
});







//pattern for street

const myAddress = document.getElementById("street");
myAddress.addEventListener("keydown", checkstreet);

function checkstreet(e) {
  const asciiCode = e.keyCode;
  const myAddressValue = myAddress.value;
  const myAddressLength = myAddressValue.length;

  // Allow only letters
  // ASCII codes:
  // Letters (a-z): 97-122
  // Letters (A-Z): 65-90
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
    // Check length limit
    if (myAddressLength >= 10 && asciiCode != 8 && asciiCode != 46) {
      e.preventDefault();
      document.getElementById("street-error").innerHTML = "Address max length is 10";
      return false;
    } else if (myAddressLength >= 10) {
      return true;
    }
    document.getElementById("street-error").innerHTML = "";
    return true;
  } else {
    e.preventDefault();
    // document.getElementById("street-error").innerHTML = "Address can only contain letters.";
    return false;
  }
}

// Check length on blur (loss of focus)
myAddress.addEventListener("blur", function() {
  const myAddressValue = myAddress.value;
  const myAddressLength = myAddressValue.length;
  if (myAddressLength < 3) {
    document.getElementById("street-error").innerHTML = "Address must be at least 3 characters";
  } else {
    document.getElementById("street-error").innerHTML = "";
  }
});






//pattern for city

const myCity = document.getElementById("city");
myCity.addEventListener("keydown", checkCity);

function checkCity(e) {
  const asciiCode = e.keyCode;
  const myCityValue = myCity.value;
  const myCityLength = myCityValue.length;

  // Allow only letters
  // ASCII codes:
  // Letters (a-z): 97-122
  // Letters (A-Z): 65-90
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
    // Check length limit
    if (myCityLength >= 10 && asciiCode != 8 && asciiCode != 46) {
      e.preventDefault();
      document.getElementById("city-error").innerHTML = "Address max length is 10";
      return false;
    } else if (myCityLength >= 10) {
      return true;
    }
    document.getElementById("city-error").innerHTML = "";
    return true;
  } else {
    e.preventDefault();
    // document.getElementById("city-error").innerHTML = "Address can only contain letters.";
    return false;
  }
}

// Check length on blur (loss of focus)
myCity.addEventListener("blur", function() {
  const myCityValue = myCity.value;
  const myCityLength = myCityValue.length;
  if (myCityLength < 3) {
    document.getElementById("city-error").innerHTML = "Address must be at least 3 characters";
  } else {
    document.getElementById("city-error").innerHTML = "";
  }
});





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
  ){
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
 
  //check form fields are filled or empty
  const fname1 = document.getElementById('fname');
  const lname1 = document.getElementById('lname');
  const dob = document.getElementById('dob');
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const cpassword = document.getElementById('cpassword');
  const contact = document.getElementById('contact');
  const street = document.getElementById('street');
  const city = document.getElementById('city');
  const course = document.getElementById('course');


const inputFnameError = document.getElementById('fname-error');
const inputLnameError = document.getElementById('lname-error');
const dobError = document.getElementById('dob-error');
const emailError = document.getElementById('email-error');
const contactError = document.getElementById('contact-error');
const streetError = document.getElementById('street-error');
const cityError = document.getElementById('city-error');
const courseError = document.getElementById('course-error');

fname1.addEventListener('input', () => {
    if (fname1.value.trim() !== '') {
      inputFnameError.textContent = '';
    }
  });
  
  lname1.addEventListener('input', () => {
    if (lname1.value.trim() !== '') {
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

  course.addEventListener('select', () => {
    if (course.value.trim() !== '') {
      courseError.textContent = '';
    }
  });
  
  regBtn.addEventListener('click', (e) => {
    e.preventDefault();
  
    let isValid = true;
  
    if (fname1.value.trim() === '') {
      inputFnameError.textContent = 'fname is required';
      inputFnameError.style.color = 'red';
      isValid = false;
    }
  
    if (lname1.value.trim() === '') {
      inputLnameError.textContent = 'lname is required';
      inputLnameError.style.color = 'red';
      isValid = false;
    }
  
    if (dob.value.trim() === '') {
      dobError.textContent = 'dob is required';
      dobError.style.color = 'red';
      isValid = false;
    }
  
    if (email.value.trim() === '') {
      emailError.textContent = 'email is required';
      emailError.style.color = 'red';
      isValid = false;
    }
  
    if (contact.value.trim() === '') {
      contactError.textContent = 'contact is required';
      contactError.style.color = 'red';
      isValid = false;
    }
  
    if (street.value.trim() === '') {
      streetError.textContent = 'street is required';
      streetError.style.color = 'red';
      isValid = false;
    }
  
    if (city.value.trim() === '') {
      cityError.textContent = 'city is required';
      cityError.style.color = 'red';
      isValid = false;
    }

    
    if (course.value.trim() === '') {
      courseError.textContent = 'course is required';
      courseError.style.color = 'red';
      isValid = false;
    }
  
    if (isValid) {
      // Simple hashing function
      function hashPassword(password) {
        let hash = 0;
        for (let i = 0; i < password.length; i++) {
          hash = (hash * 31 + password.charCodeAt(i)) % 2147483647;
        }
        return hash.toString(16);
      }
  
      // Hash password and confirm password
      const hashedPassword = hashPassword(password.value);
      const hashedCPassword = hashPassword(cpassword.value);

  // Store values in local storage
  localStorage.setItem('fname1', fname.value);
  localStorage.setItem('lname1', lname.value);
  localStorage.setItem('dob', dob.value);
  localStorage.setItem('gender', selectedGender);
  localStorage.setItem('email', email.value);
  localStorage.setItem('password', hashedPassword);
  localStorage.setItem('cpassword', hashedCPassword);
  localStorage.setItem('contact', contact.value);
  localStorage.setItem('street', street.value);
  localStorage.setItem('city', city.value);
  localStorage.setItem('course', course.value);

  // Store data in JSON format
  const userData = {
    fname1: fname.value,
      lname1: lname.value,
      dob: dob.value,
      email: email.value,
      password: hashedPassword,
      cpassword: hashedCPassword,
      contact: contact.value,
      street: street.value,
      city: city.value,
      course: course.value,
      gender: selectedGender
  };

  localStorage.setItem('userData', JSON.stringify(userData));



  // Redirect to login page
  window.location.href = 'login.html';
}

  
 })

