const container = document.querySelector('#container');

function shadeCell (cell) {
    this.classList.add('shaded');
}

for(let i = 1; i <= 16; i++) {
    let row = document.createElement('div');
    row.classList.add('row');
    container.appendChild(row);

    for(let y = 1; y <= 16; y++) {
        let cell = document.createElement('div');
        cell.classList.add('cell');
        row.appendChild(cell);
    }
}

const cells = document.querySelectorAll('.cell');
cells.forEach(cell => cell.addEventListener('mouseover', shadeCell));


