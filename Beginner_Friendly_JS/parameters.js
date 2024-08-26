//Create a function `doubleNumber` that takes a number as an argument and returns the number multiplied by 2.

const prompt = require("prompt-sync")()

const number = parseInt(prompt("Enter the number : "));

function doubleNumber(number){
    return number*2;
}

const finalOutput = doubleNumber(number);
console.log("The double of "+number+" is : "+finalOutput);

