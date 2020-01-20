
let selectedColor = document.querySelector('.itemsWraper');
let current = document.querySelector('#color');
let mousedownFlag = 0;
let canvas = document.querySelector('.canvas');


function updateDivColor(event) {
    if(event.type === 'mousedown') {
        event.target.style.background = current.style.background;
        event.target.style.borderColor = current.style.background;
    } 
    if(event.type === 'mouseover' && mousedownFlag === 1) {
        event.target.style.background = current.style.background;
        event.target.style.borderColor = current.style.background;
    }    
}
function createCanvas() {
    let numberOfBlocks = 2501
    for(let i = 2; i <= numberOfBlocks; i++) {
        let pixel = document.createElement('div');
        pixel.className = 'pixel';
        canvas.append(pixel);
    }
}
function fillPalette() {
    let colors = ['black', 'gray', 'silver', 'white', 
                  'fuchsia', 'purple', 'red', 'maroon', 
                  'yellow', 'olive', 'lime','green', 
                  'aqua', 'teal', 'blue', 'navy'];
    let itemsWraper = document.querySelector('.itemsWraper');
    for(let i = 0; i < colors.length; i++) {
        let item = document.createElement('div');
        item.className = 'item';
        item.style.background = colors[i];
        itemsWraper.append(item);
    }
    let colorPicker = document.createElement('div');
    colorPicker.className = 'colorPicker';
    colorPicker.textContent = 'select any color ';
    let input = document.createElement('input');
    input.type = 'color';
    colorPicker.append(input)
    itemsWraper.append(colorPicker);
    input.addEventListener('change', function() {
        current.style.background = input.value;
    });
}
function clearCanvas() {
    let pixels = canvas.querySelectorAll('.pixel');
    let style = getComputedStyle(canvas);
    for(let pixel of pixels) {
        pixel.style.background = style.getPropertyValue('background');
        pixel.style.borderColor = style.getPropertyValue('borderColor');
    }
}
function save() {
    localStorage.setItem(JSON.stringify(canvas));
}
function load(){

}
function createMenu() {
    let windowOfMaker = document.querySelector('#windowOfMaker');
    let menu = document.createElement('div');
    menu.className = 'menu';
    windowOfMaker.append(menu);
    
    let clearCanvasBtn = document.createElement('button');
    clearCanvasBtn.name = 'Clear canvas';
    clearCanvasBtn.innerText = 'Clear';
    menu.append(clearCanvasBtn);
    clearCanvasBtn.addEventListener('click', clearCanvas);
    
    let saveBtn = document.createElement('button');
    saveBtn.name = 'Save';
    saveBtn.innerText = 'Save';
    saveBtn.addEventListener('click', save);
    menu.append(saveBtn);
    
    let loadBtn = document.createElement('button');
    loadBtn.name = 'Load';
    loadBtn.innerText = 'Load';
    loadBtn.addEventListener('click', load);
    menu.append(loadBtn);
}
createCanvas();
fillPalette();
createMenu();
selectedColor.addEventListener("click", function(event){
    let selectedColorStyle =  getComputedStyle(event.target).getPropertyValue('background-color');
    current.style.background = selectedColorStyle;
});
canvas.addEventListener('mousedown', function(event){
    mousedownFlag = 1;
    updateDivColor(event);
});
canvas.addEventListener('mouseover', updateDivColor);
canvas.addEventListener('mouseup', function(event) {
    mousedownFlag = 0;
});




 
