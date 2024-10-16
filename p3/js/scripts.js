// Function to validate user inputs
function validateInputs() {
    // Get input elements
    let inputs = [document.getElementById('num1'), document.getElementById('num2'), document.getElementById('num3')];
    
    // Loop through each input element
    for (let input of inputs) {
        // Check if the input is not a number or is empty
        if (isNaN(input.value) || input.value === "") {
            // Alert the user to enter valid numbers
            alert("Please enter valid numbers in all fields.");
            return false; // Return false if validation fails
        }
    }
    return true; // Return true if all inputs are valid
}


// JavaScript functions to calculate the statistics
function calculateStats() {
    // Get user inputs
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let num3 = parseFloat(document.getElementById('num3').value);

    // Put numbers into an array
    let numbers = [num1, num2, num3];
    
    // Calculate max and min
    let max = Math.max(...numbers);
    let min = Math.min(...numbers);

    // Calculate mean (average)
    let mean = (num1 + num2 + num3) / numbers.length;

    // Calculate median
    numbers.sort((a, b) => a - b);
    let median = numbers[1]; // for 3 numbers, the second in sorted array is the median

    // Calculate range
    let range = max - min;

    // Display results
    document.getElementById('max').textContent = max;
    document.getElementById('min').textContent = min;
    document.getElementById('mean').textContent = mean.toFixed(2);
    document.getElementById('median').textContent = median;
    document.getElementById('range').textContent = range;
}
