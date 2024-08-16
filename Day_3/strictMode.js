//

// NOTE USE STRICT MODE;

age = 5;
console.log(age); // Output: 5

function sum(a,a,b){
    return a+a+b;
}

console.log(sum(1,1,1));

console.error("This is an error");
console.warn("This is a warning");
console.time('TImeStamp');
console.log('Hello');
console.timeEnd('TImeStamp');

console.table("2,4,6");

const fruits = [`Mango` , `54` , `True`];

console.log(fruits)
console.log(fruits[fruits.length-1]);


//PUSH METHOD ( IT MUTATES THE ORGINAL ARRAY)

const pushOutput = fruits.push('blueberry');

console.log(pushOutput);
console.log(fruits);


//POP method 

const popOutput = fruits.pop();

console.log(popOutput); // Output: 'blueberry' (the popped element)
console.log(fruits); 


//NOTE INCLUDE METHOD to check if element is there in array

const includesOutput = fruits.includes(`Mango`);
console.log(includesOutput);

//key:value

const myDetails = {
    firstName : `Kartik`,
    age : 20,

}

console.log(myDetails);

//UPDATE THE DETAILS 

myDetails.firstName =`Kartikk-26`;
myDetails.age = `21`;
console.log(myDetails);

//DOT NOTATION

console.log(myDetails.firstName);
console.log(myDetails.age);

//BRACKET NOTATION ( we can dynamically pass the key by bracket notation)
let a =`age`;
console.log(myDetails['firstName']);
console.log(myDetails[a]);


