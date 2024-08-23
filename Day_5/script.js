const prompt = require("prompt-sync")()

//Copy array 

const array1 =[1,2,3,4,5];
const array2 = array1;

console.log(array1.push(6));
console.log(array1,array2);


//ADD TWO ARRAY 

const clothing = ['shirt', 'jeans'];
const electronics = ['tv', 'ac']

const shoopingCart = ['tshirt',...clothing,...electronics];
console.log(shoopingCart);


//Object 

const obj1={
    a:1,
    b:2
}

const obj2={
    c:3,
    d:4
}


const obj3 = {...obj1};
console.log(obj3);

//In case of duplicate 

const obj4 = {...obj1,...obj2}
console.log(obj4);

//NOTE RESTET PARAMETER(...)

const numbersArray = [1,2,3,4,5];
const [one,two,...others] = numbersArray;
console.log(one,two,others);

//Destructing in fucntion parameter(for so many integer)

function sum([a,b,c]){
    return a+b+c;
}

console.log(sum([1,2,3]));


//String 
const str = 'helloworld';
console.log(str);
console.log(str.indexOf('h'));
console.log(str.lastIndexOf('w'));
console.log(str.startsWith('h'));
console.log(str.endsWith('h'));

const str1 = "Kartik";
console.log(str1.split('').reverse().join(''));


//Maths object

console.log(Math.abs(-3));


//trunc
console.log(Math.trunc(3.4));

//Floor
console.log(Math.floor(3.4));

//MIN AND MAX 
console.log(Math.max(3,4,5,6,7));
console.log(Math.min(3,4,5,6,7));

//random number generate
const randomNumber = Math.trunc(Math.random()*10);
console.log(randomNumber);


const date = new Date();

const hours = date.getHours();  // Correctly calling the method
const minutes = date.getMinutes();  // Correctly calling the method
const seconds = date.getSeconds();  // Correctly calling the method

console.log(`${hours}:${minutes}:${seconds}`);  // Using template literals

