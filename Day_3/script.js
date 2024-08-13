console.log('js')
console.log(console)

//value and variables
//data types 

//NOTE dataTypes
//NOTE PRIMITIVE

//STRING
//Number
//Boolean
//Null
//Undefined
//Symbol

//NOTE NON PRIMITIVE
//Array = []
//Object = {}

let firstName = 'Kartik';
console.log(firstName)

console.log(typeof firstName);

//Number Type

let age = 20;
console.log(age);

//boolean value

let isJsfun = false;
console.log(isJsfun);

let department = null;
console.log(typeof department)

//TODO KEYWORD USED TO DECLARE THE VARIBALE 
//VAR < LET < CONST

//1 : VAR👍👍
//IN THIS CASE WE CAN REDECLARE AND REASSIGN THE VALUE 

//REASSIGN
var lastName = 'Jain';
lastName ='sharma';
console.log(lastName);

//REDECLARE
var fruit = 'Mango';
console.log(fruit)
var fruit = 'Grapes';
console.log(fruit)


//2 : LET👍👍
//IN THIS CASE WE CANNOT REDECLARE BUT REASSIGN THE VALUE
let name = 'Kartik';
name='Angha';
console.log(name);


//3 : CONST👍👍
//IN THIS CASE WE CANNOT REDECLARE NOR REASSIGN THE VALUE



let x=5;
x+=5;    // x=x+5;
console.log(x);

console.log(5!=='5');


//prompt , alert

//constfirstName = prompt("Enter Your Name");
//console.log(firstName);

//username = 'admin'
//password = 'admin123';
 
// const username = prompt("Enter the username");
// const password = prompt("Enter the password");
// if(username ==='admin' && password ==='admin123'){
//     console.log("Authentication Sucesss")
// }
// else{
//     console.log("Authentication Fail");
//     alert("Authenticator Error");
// }


//NOTE TYPE CONVERSION

const num =5;
console.log(typeof String(name))

const str = 'true';
console.log(typeof Boolean(str));