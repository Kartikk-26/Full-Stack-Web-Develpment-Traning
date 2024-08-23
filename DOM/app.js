//DOCUMENT OBJECT MODEL (DOM);

console.log(document);

//NOTE SELECT THE ELEMENT


//NOTE document.getElementById
const heading = document.getElementById('heading');
console.log(heading);
console.dir(heading);

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
//NOTE document.querySelectorAll

