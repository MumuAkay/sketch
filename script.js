const container = document.querySelector('.container');
let cell;
let target;


//make cells
function makeCell(numCell) {
    for (let c= 0; c < numCell; c++){
        cell = document.createElement('div');
        cell.classList.add('cell');
        container.appendChild(cell);
    }
}

function makeGrid(numRow, numCol) {
    container.style.setProperty('--numRows', numRow);
    container.style.setProperty('--numCols', numCol);
    for (let r=0; r < numRow; r++){
        makeCell(numCol);
    }
}

makeGrid (16,16);

function changeColor(target) {
    target.style.backgroundColor = 'black'; 
}


container.addEventListener("mouseover", function (e){
    target = e.target;

    if (target.matches("div.cell")) {
        changeColor(target);
    }
});

const reset = document.querySelector('#resetBtn');
reset.addEventListener('click', function(){
    window.location.reload();
})



promptGrid();