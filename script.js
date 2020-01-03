
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
}


createCanvas();
fillPalette();
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




 
