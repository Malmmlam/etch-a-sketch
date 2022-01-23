const container = document.querySelector('#container');
//const cell = document.createElement('div');

// for(let i = 1; i <= 16; i++) {
//     let cell = document.createElement('div');
//     cell.classList.add('cell');
//     container.appendChild(cell);
// }

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
