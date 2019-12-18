
let selectedColor = document.querySelector('.colors');
let current = document.querySelector('#color');
let mousedownFlag = 0;
selectedColor.addEventListener('click', function(event){
    let selectedColorStyle = getComputedStyle(event.target);
    current.style.background = selectedColorStyle.background;
});

function updateDivColor(event) {
    if(event.type === 'mousedown') {
        event.target.style.background = current.style.background;
    } 
    if(event.type === 'mouseover' && mousedownFlag === 1) {
        event.target.style.background = current.style.background;
    }    
  
}


let canvas = document.querySelector('.canvas');
canvas.addEventListener('mousedown', function(event){
    mousedownFlag = 1;
    updateDivColor(event);
} );
canvas.addEventListener('mouseover', updateDivColor);
canvas.addEventListener('mouseup', function(event) {
    mousedownFlag = 0;
});




 
