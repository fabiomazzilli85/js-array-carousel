const imagesArray = [
    'img/01.webp',
    'img/02.webp',
    'img/03.webp',
    'img/04.webp',
    'img/05.webp',
];
// Creo Array contente cinque elementi: si parte da 0 e si arriva a 4.


const itemDOMElement = document.querySelector(".item-container"); 
// Creo una costante e le do il nome "itemDOMElement e la collego alla classe "item-container".


for (let index = 0; index < imagesArray.length; index ++ ) {
    console.log(imagesArray[index]);
    
    const imgSrc = imagesArray [index];
    
    const slideItem = `
    <div class= "item">
    <img src= "${imgSrc}">
    </div>
    `;
    
    console.log(slideItem);
    itemDOMElement.innerHTML += slideItem;
}
// Questo è un ciclo For. Creo una variabile che chiamo "index" e la incremento di 1 affinché la condizione (index < del numero degli elementi dell'Array) è vera. Quando la condizione non è più vera, il ciclo For si interrompe.


function myFunction() {
    let element = document.getElementById("left");
    element.classList.remove("item-active");
}

function myFunctionTwo() {
    let element = document.getElementById("right");
    element.classList.remove("item-active");
    