//Q1 : Write a JavaScript program that takes a first name and a last name as input, concatenates them to form a full name, and then prints the full name.


const prompt = require("prompt-sync")();

const firstName = prompt("Enter the first name : ");
const lastName = prompt("Enter the last name : ");

// Concatenating the strings
const fullName = firstName + " " + lastName;

console.log("Full Name: " + fullName);
