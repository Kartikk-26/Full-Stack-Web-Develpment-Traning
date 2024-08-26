//Write a JavaScript program that checks if a number is even , odd or zero. Print 'Positive', 'Negative', or'Zero' accordingly

const prompt = require("prompt-sync")();

const firstName = parseInt(prompt("Enter the first number : "));

if(firstName%2==0){
    console.log(firstName + " is an Even Number");
}
else if(firstName%2==1){
    console.log(firstName + " is an Odd Number");
}
else{
    console.log("Zero");
}

