// Write a JavaScript function called `greet` that takes a name as an argument and prints 'Hello, [name]!' to the console.
//Then, call the function with a sample name

const prompt = require("prompt-sync")();

const firstName = prompt("Enter the first name : ");

greet(firstName);

function greet(firstName){
    console.log(`Hello, ${firstName}!`);
}

