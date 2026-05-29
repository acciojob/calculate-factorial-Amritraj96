//your JS code here. If required.
// 1. Get input from the user using prompt() and convert it to an integer
const input = prompt("Enter a positive integer between 1 and 10:");
const num = parseInt(input);

// 2. Validate the input to ensure it meets the constraints
if (isNaN(num) || num < 1 || num > 10) {
    alert("Please enter a valid integer between 1 and 10.");
} else {
    let factorial = 1;

    // 3. Calculate the factorial using a loop
    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }

    // 4. Display the result in the requested format
    alert(`The factorial of ${num} is ${factorial}`);
}