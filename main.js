// Get DOM elements
const ageInput = document.querySelector('.num');
const calculateBtn = document.querySelector('.calc');
const clearBtn = document.querySelector('.clear');
const resultDisplay = document.querySelector('.cont2 p');

// Add click animation to input


// Calculate birth year when Calculate button is clicked
calculateBtn.addEventListener('click', () => {
    const age = parseInt(ageInput.value);
    
    if (isNaN(age) || age <= 0) {
        resultDisplay.classList.remove("hidden");
        resultDisplay.textContent = 'Please enter a valid age';
        resultDisplay.style.color = 'red';
        resultDisplay.style.width = 'fit-content';
        return;
    }
    resultDisplay.classList.remove("hidden");
    const currentYear = new Date().getFullYear();
    const birthYear = currentYear - age;
    
    resultDisplay.textContent = birthYear.toString();
    resultDisplay.style.color = 'brown'; // Reset to original color
});

// Clear the input and result when Clear button is clicked
clearBtn.addEventListener('click', () => {
    ageInput.value = '';
    resultDisplay.textContent = ''; // Reset to default value
    resultDisplay.style.color = 'brown'; // Reset to original color
    resultDisplay.classList.add("hidden");
});