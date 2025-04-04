// Function to append a value to the display
function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value; // Append the value to the display
}

// Function to clear the display
function clearDisplay() {
    const display = document.getElementById('display');
    display.value = ''; // Clear the display
}

// Function to calculate the result
function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value); // Evaluate the expression
    } catch (error) {
        display.value = 'Error'; // Show error if the expression is invalid
    }
}