//DOCUMENT OBJECT MODEL (DOM);

console.log(document);

//NOTE SELECT THE ELEMENT


// //NOTE document.getElementById
// const heading = document.getElementById('heading');
// console.log(heading);
// console.dir(heading);

//NOTE document.getElementsByTagName
const para = document.getElementsByTagName('p');
console.log(para);

//TODO CONVERT HTML COLLECTION 'para' in to an array 
const newpara = [...para];
console.log(newpara);

newpara.forEach((el)=>{
    console.log(el.innerText);
})


//NOTE document.getELementByClassName

const list = document.getElementsByClassName('special');
console.log(list);


//NOTE document.querySelector
const list2 = document.querySelector('.special');
console.log(list2);


//NOTE document.querySelectorAll
const list3 = document.querySelectorAll('.special')
list3.forEach((el)=>{
    console.log(el.innerText);
})
console.log(list3);

//NOTE document.getElementById
const heading = document.getElementById('heading');
console.log(heading);
console.dir(heading);

//Text Content 
heading.textContent = 'My Personal Web Page ';

console.log(document.body.textContent);
console.log(document.body.innerText);


//reading the href and src 

const a = document.querySelector('#address');
a.href = 'https://github.com/Kartikk-26';

heading.style.color = 'brown';

//Note changing attributes

const input = document.querySelector('#bear');
input.setAttribute('placeholder','Enter Your Name Sir')

console.log(input.getAttribute('placeholder'));



//events addEventListner

const btn = document.getElementById('btn');

btn.addEventListener('click', ()=>{
    const p = document.createElement('p');
    p.innerText= 'Captain Kartik Jain'
    console.log(p);
    document.body.append(p);
})



