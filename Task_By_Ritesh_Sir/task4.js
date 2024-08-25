//INLINE VENT IN HTML TAG 

const h1 = document.getElementById('text');

const hideElement = () =>{
    h1.classList.add('hidden');
}

const showElement = () =>{
    h1.classList.remove('hidden');
}

const replaceElement = () =>{
    h1.textContent = 'Hello, World!';
}

const toggleHighlight = () =>{
    h1.classList.toggle('highlight');
}


//events addEventListner

