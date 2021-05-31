const COLS=16;
const ROWS=16;
let mousedown=false;
;let color = '#bbbbbb'
makeGrid(ROWS,COLS);

document.addEventListener('mousedown',function (){
    mousedown=true;
    console.log("down");
});
document.addEventListener('mouseup',function (){
    mousedown=false;
    console.log("up");
});
function makeGrid(rows,cols){
    let container = document.querySelector(".container");

    for (var i=0; i< rows; i++) {
        let row = document.createElement('div');
        row.setAttribute("class","row");
        row.setAttribute('id',"row"+i);
        container.appendChild(row);
    }
    let grid_rows = document.getElementsByClassName('row');
    for (var i =0; i<rows; i++){
        for (var j=0; j<cols;j++){
            let cell = document.createElement('div');
            cell.setAttribute('class','cell');
            cell.addEventListener("mouseover",function(e){
                console.log("CALLBACK");
                if (mousedown) e.target.setAttribute("style",'background-color: '+color)
            })
            grid_rows[i].appendChild(cell);
        }
    }
}

function clearGrid(){
    let grid = document.querySelector('.container');
    while(grid.firstChild){
        grid.removeChild(grid.firstChild);
    }
}

let btn = document.getElementById("rst_btn");
btn.addEventListener("click", function(e){
    let allCells = document.getElementsByClassName('cell')
    for(var i = 0; i< allCells.length; i++){
        allCells[i].setAttribute('style','background-color: white;');
    }
});

btn = document.getElementById('new_btn');
btn.addEventListener("click",function(e){
    clearGrid();
    let newGridSize = parseInt(prompt("Enter a grid size between 1 and 100:"));
    makeGrid(newGridSize,newGridSize);
});