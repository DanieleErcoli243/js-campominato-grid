// recupero gli elementi dal DOM
const button = document.getElementById("play");
const levelChoice = document.getElementById("level");
const grid = document.querySelector(".grid");

// dichiaro la costante col numero totale di celle
const totalCells = 100;

// aggancio la creazione della griglia al click del pulsante

button.addEventListener("click", function () {
    for (let i = 0; i < totalCells; i++){
        const cell = document.createElement("div");
        cell.innerText = i + 1;
        cell.classList.add("cell");
        grid.appendChild(cell);
    }
})
