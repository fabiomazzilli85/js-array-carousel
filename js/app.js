const imagesArray = [
    'img/01.webp',
    'img/02.webp',
    'img/03.webp',
    'img/04.webp',
    'img/05.webp',
];

// Array


let ciao
const itemDOMElement = document.querySelector(".item-container"); 

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

// Ciclo For


const arrowElement = document.querySelector('.arrow');

document.getElementById("left").addEventListener("click", function (){
let precedente =  document.getElementsByClassName("item");
});

document.getElementById("right").addEventListener("click", function (){
let successiva = document.getElementsByClassName("item-active");
});


arrowElement.classList.add("nuovaClasse");
// Ho aggiunto una classe con alcune prorietà CSS con JS.