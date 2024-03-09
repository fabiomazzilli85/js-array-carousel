const imagesArray = [
    'img/01.webp',
    'img/02.webp',
    'img/03.webp',
    'img/04.webp',
    'img/05.webp',
];

// Array


const itemDOMElement = document.querySelector(".item-container"); 

// Creo una costante e le do il nome "itemDOMElement e la collego a "item-container" all'interno della index.


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

// Questo è un ciclo For. Creo una variabile "index" e la incremento di 1 affinché la condizione che la "index" sia minore del numero degli elementi all'interno dell'Array sia vera. Quando la condizione non è più vera, il ciclo For si interrompe.


const arrowElement = document.querySelector('.arrow');

// Creo la costante e la associo alla classe "arrow" all'interno della index per richiamarla.

