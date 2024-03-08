const imagesArray = [
    'img/01.webp',
    'img/02.webp',
    'img/03.webp',
    'img/04.webp',
    'img/05.webp',
];

// Array

const itemDOMElement = document.querySelector(".item-container"); 

// Creo una costante e le do un nome "parlante" per collegarla alla classe "item-container" della pagina HTML.

for (let index = 0; index < imagesArray.length; index ++ ) {
    console.log(imagesArray[index]);

    // Con questo ciclo "for" sto creando una variabile, "index", e la incremento di uno finché il suo contenuto sia inferiore all'Array contenente le immagini. Subito dopo eseguo un "console.log" per verificare che la console del browser mi restiuisca, come poi avviene, la index delle immagini dell'Array. 
    
    const imgSrc = imagesArray [index];
    // Creo una costante e le do nome "imgSrc": coincide con "imagesArray [index]"". 

    const slideItem = `
    <div class= "item">
        <img src= "${imgSrc}">
    </div>
    `;

    console.log(slideItem);
    itemDOMElement.innerHTML += slideItem;

}

const arrowElement = document.querySelector('.arrow');

arrowElement.addEventListener('click', function() {
    // La funzione da eseguire quando l'elemento con classe "arrow" viene cliccato.
    
    console.log('Ciao!');
    // Puoi aggiungere altre azioni qui in risposta al clic
});