// Write a JavaScript program that creates an array of n numbers, calculates the sum of all the numbers in the array,
// and prints the result

const prompt = require("prompt-sync")();

// Prompt the user to enter the size of the array
const arraySize = parseInt(prompt("Enter the size of the array: "));
let numberArray = [];

// Prompt the user to input the numbers and add them to the array
for (let i = 0; i < arraySize; i++) {
    let number = parseInt(prompt("Enter number " + (i + 1) + " : "));
    numberArray.push(number);
}

// Function to calculate the sum of the numbers in the array
function calculateSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

// Calculate the total sum of the array
let totalSum = calculateSum(numberArray);

// Print the result
console.log("The sum of the numbers is : " + totalSum);
