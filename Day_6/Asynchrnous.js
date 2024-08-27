// Asynchronous JS
// console.log(window);
console.log('hello');

setTimeout(() => {
    console.log('This is Asynchronous'); // Corrected typo
}, 1000); // Executes after 1 second

console.log("helooo");

// CallBack

function test(callback) {
    const data = 'hello callback function here';
    callback(data);
}

function greet(data) {
    console.log(data);
}

test(greet); // Test is a higher-order function
// Higher-order function is a function that takes another function as an argument or returns a function as an output.

function test1(callback) {
    setTimeout(() => {
        const data = 'hello Asynchronous';
        callback(data);
    }, 1000);
}

test1((data) => {
    console.log(data);
});

function step1(callback) {
    setTimeout(() => {
        const data = 'hello step1 is completed';
        console.log(data); // Log step1 completion
        callback(); // Ensure callback is called after data is logged
    }, 1000);
}

function step2() {
    setTimeout(() => {
        const data = 'hello step2 is completed';
        console.log(data); // Log step2 completion
    }, 1000);
}

step1(() => {
    step2(); // Ensure step2 runs after step1
});


// PROMISES (They are always returned by a function)

const willYouPassInExam = new Promise((resolve, reject) => {
    resolve('pass');
});

console.log(willYouPassInExam);

function fetchData() {
    return new Promise((resolve, reject) => {
        const data = 'Hello, we are learning promises';
        if (Math.random() > 0.5) {  // Fixed Math.random invocation
            resolve(data);
        } else {
            reject('This is rejected');
        }
    });
}

// Properly invoking fetchData and handling the promise
fetchData()
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });

//

// calling an apis using fetch() function
// NOTE fetch function always returns promise

fetch('https://restcountries.com/v3.1/all').then((res)=>{
    return res.json()
 }).then((data)=>{
    
     data.forEach(element => {
         console.log(element)
         const h1 = document.createElement('h1')
         const img = document.createElement("img");
         img.style.width = '200px'
         img.src = element.flags.svg
         h1.innerText = element.name.common;
         document.body.appendChild(h1)
         document.body.appendChild(img)
     });
 })

async function fetchCountry(){
    try{
        const res = await fetch('https://restcountries.com/v3.1/all');

        const data = await res.json();
        console.log(data);
    }

    catch(error){
        console.log(error);
    }  
}
fetchCountry();

    


