// Select color input
let colorPicker = document.getElementById('colorPicker');

// Select size input
let sizePicker = document.getElementById('sizePicker');

// When size is submitted by the user, call makeGrid()
let table = document.getElementById('pixelCanvas');
let height = document.getElementById('inputHeight').value;
let width = document.getElementById('inputWidth').value;
makeGrid(height, width);

sizePicker.addEventListener('click', (event) => {
    event.preventDefault(); // prevents submit button from clearing
    let height = document.getElementById('inputHeight').value;
    let width = document.getElementById('inputWidth').value;
    table.firstElementChild.remove();
    makeGrid(height, width);
});

function makeGrid(height, width) {
    for (let x = 0; x < height; x++) {
        let row = table.insertRow(x);
        
    for (let y = 0; y < width; y++) { 
        let cell = row.insertCell(y);
        // add cell colour
        cell.addEventListener('click', (event) => {
            cell.style.backgroundColor = colorPicker.value;
        });
    }
}
}