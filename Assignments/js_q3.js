function addTwoNumbers(a, b) {
    return a + b;
}

let firstNumber = Number(prompt("Enter the first number:"));
const secondNumber = Number(prompt("Enter the second number:"));

const sum = addTwoNumbers(firstNumber, secondNumber);

console.log("The sum of the two numbers is: " + sum);
