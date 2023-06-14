const inputs = document.querySelectorAll('input')
const submitButton = document.querySelector('#btn')
const continueButton = document.querySelector('#continue')
const error_1 = document.querySelectorAll('.error_1')
const error_2 = document.querySelectorAll('.error_2')


// Check If Any Input Is Empty
submitButton.addEventListener('click', () => {
    for(let i = 0; i < inputs.length; i++){
        if(inputs[i].value == ""){
            error_1[i].style.display = 'block'
        }else{
            error_1[i].style.display = 'none'
        }
    }
})
// Check If Name Input Has Numbers Insıde
submitButton.addEventListener('click', () => {
    const inputValue = inputs[0].value;
    const hasNumber = /\d/.test(inputValue);
  
    if (typeof inputValue !== 'string' || hasNumber) {
      error_2[0].style.display = 'block';
    } else {
      error_2[0].style.display = 'none';
    }
  });

// Check Number Inputs Has Letters Insıde
  submitButton.addEventListener('click', () => {
    for (let i = 1; i < inputs.length; i++) {
        const inputValue = inputs[i].value;
        const hasNumbers = /[^0-9]/.test(inputValue);
        const hasSpecialChars = /^[0-9]+$/.test(inputValue);
      if (!hasSpecialChars && hasNumbers) {
        error_2[i].style.display = 'block';
      } else {
        error_2[i].style.display = 'none';
      }
    }
  });

const submitScreen = document.querySelector('.submit')
const formScreen = document.querySelector('.form')
// Go Next Page If No Error
submitButton.addEventListener('click', () => {
    let hasErrors = false;
  
    for (let i = 0; i < inputs.length; i++) {
      if (error_1[i].style.display === 'block' || error_2[i].style.display === 'block') {
        hasErrors = true;
        break;
      }
    }
  
    if (hasErrors) {
      submitScreen.style.display = 'none';
      formScreen.style.display = 'flex';
    } else {
      formScreen.style.display = 'none';
      submitScreen.style.display = 'flex';
    }
  });

// Go Form Page
continueButton.addEventListener('click', () => {
    submitScreen.style.display = 'none'
    formScreen.style.display = 'flex'
})

// spacing after each 4 number on cardNumber
const cardNumberInput = inputs[1]; 

cardNumberInput.addEventListener('input', () => {
  let inputValue = cardNumberInput.value;
  inputValue = inputValue.replace(/\s/g, ''); // Remove existing spaces

  const maxLength = 16;
  const formattedValue = inputValue.substr(0, maxLength).replace(/(\d{4})(?=\d)/g, '$1 '); // Add space after every four digits

  cardNumberInput.value = formattedValue;
});

// Live Update Inputs

const cardNumber = document.querySelector('.cardNumber h1')
const cardName = document.querySelector('.cardName')
const cardDate = document.querySelector('.cardDate')
const CVC = document.querySelector('.cvc')
const monthInput = document.querySelector('.month')
const yearInput = document.querySelector('.year')

// Card Name
inputs[0].addEventListener('input', () => {
    cardName.innerHTML = inputs[0].value
})

// Card Number
inputs[1].addEventListener('input', () => {
    cardNumber.innerHTML = inputs[1].value
})

// Card Month
inputs[2].addEventListener('input', () => {
    const inputValue = inputs[2].value;
    const formattedValue = inputValue.replace(/\D/g, '');
  
    const month = formattedValue.slice(0, 2);
    monthInput.value = month;
    cardDate.innerHTML = `${month}/${yearInput.value}`;
  });

//   Card Year
  inputs[3].addEventListener('input', () => {
    const inputValue = inputs[3].value;
    const formattedValue = inputValue.replace(/\D/g, '');
  
    const year = formattedValue.slice(0, 2);
    yearInput.value = year;
    cardDate.innerHTML = `${monthInput.value}/${year}`;
  });

// Card CVC
inputs[4].addEventListener('input', () => {
    CVC.innerHTML = inputs[4].value
})



