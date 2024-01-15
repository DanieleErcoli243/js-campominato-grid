// recupero gli elementi dal DOM
const button = document.getElementById("play");
const levelChoice = document.getElementById("level");
const grid = document.querySelector(".grid");
const form = document.querySelector("form");
// dichiaro le costanti per determinare il numero totale di celle

let rows = 10;
let cols = 10;
const totalCells = rows * cols;

// funzioni
const createCell = (cellNumber, levelclass) => {
    // creo una cella con dentro il numero corrispondente
    const cell = document.createElement("div");
    // metto nella cella il numero che le corrisponde
    cell.innerText = cellNumber +1;
    // aggiungo la classe cel per stilizzare le celle
    cell.classList.add("cell", levelclass);
    // restituisco la cella
    return cell;
}

// aggancio la creazione della griglia al click del pulsante

form.addEventListener("submit", function (e) {
    // funzioni interne al gioco
    e.preventDefault();
    // cambio il testo al bottone
    button.innerText = "Rigioca";
    // svuoto la griglia
    grid.innerHTML = "";
    console.log("cliccato");
    // recupero la scelta di livello dell'utente
    const level = levelChoice.value;
    // determino il livello aggiungendo una classe alla griglia
    grid.classList.add(level);
    switch (level) {
        case "medium" : 
            rows = 9;
            cols = 9;  
            break;

        case "small" :
            rows = 7;
            cols = 7;
            break;
    }

    // creo un elemento colla classe cell per il prodotto di righe e colonne
    for (let i = 0; i < totalCells; i++){
        // invoco la funzione per generare le celle dinamicamente
        const cell = createCell (i);
        // appendo le celle alla griglia
        grid.appendChild(cell);
        // aggancio al click sulle celle il toggle della classe clicked per colorare le suddette
        cell.addEventListener("click", (event) => {
            if (this.classList.contains("clicked")) return;
            cell.classList.add("clicked");
            console.log(i + 1);
        })
    }
    
})



levelChoice.addEventListener ("change", function () {
    const levelValue = levelChoice.value;
    console.log(levelValue);
})

