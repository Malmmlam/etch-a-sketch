const container = document.querySelector('#container');
const button = document.querySelector('button');
button.addEventListener('click', reset);
let gridSize = 16;
play(gridSize);

function play (gridSize) {
    drawGrid(gridSize);
    getUserShading();
}

function randomColor() {
    let maxVal = 0xFFFFFF;
    let randomNumber = Math.floor(Math.random() * maxVal);
    randomNumber = randomNumber.toString(16);
    let randomColor = randomNumber.padStart(6,0);  
    return `#${randomColor.toUpperCase()}`;
}

function shadeCell (cell) {
    this.classList.add('shaded');
    this.style.background = randomColor();

    //this makes all cells change color everytime the mouse moves. 
    // let shadedCells = document.querySelectorAll('.shaded');
    // shadedCells.forEach(shadedCell => 
    //     shadedCell.style.background = randomColor());
}

function reset () {
    gridSize = getGridSize(gridSize);
    clearGrid();
    play(gridSize);
}

function getGridSize (gridSize){
    gridSize = parseInt(prompt('Please enter a grid size', 16));
    if(gridSize > 100 || gridSize < 1) {
        alert('Grid must be bigger than 0 and smaller than 100!');
        getGridSize(gridSize);
    }
    return gridSize;
}

function clearGrid () {
    let rows = document.querySelectorAll('.row');
    rows.forEach(row => container.removeChild(row));
}

function drawGrid (gridSize) {
    for(let i = 1; i <= gridSize; i++) {
        let row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);
    
        for(let y = 1; y <= gridSize; y++) {
            let cell = document.createElement('div');
            cell.classList.add('cell');
            row.appendChild(cell);
        }
    }
}

function getUserShading () {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => cell.addEventListener('mouseover', shadeCell));
}




