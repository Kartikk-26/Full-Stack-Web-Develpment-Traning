// Switch Statement:
// Create a function `getDayType` that takes a number (1-7) as an argument and returns:
// - "Weekend" if the number is 6 (Saturday) or 7 (Sunday),
// - "Weekday" if the number is between 1 and 5.
// Use a `switch` statement to implement this logic.

const prompt = require("prompt-sync")();

const number = parseInt(prompt("Enter the number (1-7): "));

function getDayType(num) {
    switch (num) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            return "Today is Weekday";
        case 6:
        case 7:
            return "Today is Weekend";
        default:
            return "Invalid number. Please enter a number between 1 and 7.";
    }
}

console.log(getDayType(number));
