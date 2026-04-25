const newGridBtn = document.querySelector('.btn');
let container = document.querySelector('.container')


newGridBtn.addEventListener('click',function(){
    let size = prompt("Enter a grid size from 1 to 100:");
    generateGrid(parseInt(size))
})

function generateGrid(gridSize = 16){
container.innerHTML = ''; // Clear old grid first
    
    // Calculate the percentage width
    const widthPercentage = 100 / gridSize;

    for (let i = 0; i < gridSize * gridSize; i++) {
        const cell = document.createElement("div");
        cell.classList.add("grid-sqr");
        
        // Use percentage for width to eliminate the right-side gap
        cell.style.width = `${widthPercentage}%`;
        
        // Height still uses pixels to fill the 500px tall container
        cell.style.height = `${500 / gridSize}px`;
        
        container.append(cell);
}}

generateGrid()