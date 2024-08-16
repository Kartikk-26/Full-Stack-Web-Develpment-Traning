function doubleNumber(number) {
    return number * 2;
}

const userInput = prompt("Enter a number:");
const number = Number(userInput);
const result = doubleNumber(number);
console.log("The double of your number is: " + result);