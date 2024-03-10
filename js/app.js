    const imagesArray = [
        'img/01.webp',
        'img/02.webp',
        'img/03.webp',
        'img/04.webp',
        'img/05.webp',
    ];
    console.log(imagesArray)
    // Ho creato un Array contente 5 elementi (iniziano da 0 e finiscono a 4). In console.log gli emenenti sono mostrati correttamente.
    
    
    const itemContainer = document.querySelector(".item-container");
    const items = document.querySelectorAll(".item");
    let currentIndex = 0;
    // Ho creato due costanti: la prima è collegata alla classe "item-container", la seconda, invece, a "item". Ho creato una variabile "currentIndex" e le ho dato valore 0 (ovvero il primo elemento di partenza).
    
    
    for (let index = 0; index < imagesArray.length; index++) {
        const imgSrc = imagesArray[index];
        
        const slideItem = `
        <div class="item ${index === 0 ? 'active' : ''}">
        <img src="${imgSrc}" class="image-resize image-position">
        </div>
        `;
        
        itemContainer.innerHTML += slideItem; //Questa sintassi l'abbiamo vista a lezione.
    }
    // Ciclo For. Ho creato una variabile. L'ho chiamata "index". "index" è uguale a 0 e aumenta di 1 fino a che è vera la condizione (cioè "index" < del numero di elementi dell'Array).
    
    
    // Funzione per mostrare l'elemento corrente
    function showItem(index) {
        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            item.classList.toggle("active", i === index);
        }
    }
    // La funzione "showItem" si occupa di gestire la "visibilità" degli elementi, assicurandosi che solo uno alla volta abbia la classe "active".
    
    
    document.getElementById("left").addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + imagesArray.length) % imagesArray.length;
        showItem(currentIndex);
    });
    
    // Listener per il pulsante "right"
    document.getElementById("right").addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % imagesArray.length;
        showItem(currentIndex);
    });
    // Ho creato due eventi "listener" distnti che fanno riferimento ai relativi id ("right" e "left", ovvero le freccine laterali). II "currentIndex" viene decrementato in "left" (per poi tornare al numero degli elementi presenti nell'Array) e aumentato in "right". 
    // Con showItem (fonte ChatGPT) aggiorno la visibilità degli elementi".
    
    // Il codice JS pare avere senso ma, purtroppo, non funziona correttamente. La console del browser non mostra segnali di errore, e questo è un bene, ma l'imagine non cambia quando clicco sulla freccina. 
    const element = document.getElementById("functionBg");
    element.addEventListener("click", functionBgColor);
    
    function functionBgColor() {
        // Cambia il background della pagina
        document.body.classList.toggle("changeAspect");

           element.textContent = "Adesso clicca sulle frecce laterali...";
        
    }
    
    const leftElement = document.getElementById("left");
    const rightElement = document.getElementById("right");
    
    leftElement.addEventListener("click", functionArrowChange);
    rightElement.addEventListener("click", functionArrowChange);
    
    function functionArrowChange() {
        // Cambia il background della pagina
        this.classList.toggle("arrowChange");
    }