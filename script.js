const container = document.querySelector("#container");

let gridSize = 256;

function createGrid (size) {
    container.innerHTML = '';
    gridDimension = Math.sqrt(size);

    // Set the container's CSS properties 
    // VERY IMPORTANT
    const containerSize = 1600; // Constant container size in pixels
    container.style.width = `${containerSize}px`;
    container.style.height = `${containerSize}px`;

    const itemSize = gridDimension;
    const adaptiveSize = containerSize/itemSize;

    for (let i = 0; i < size; i++) {
        const divBox = document.createElement("div");
        divBox.classList.add("squareDivBox");
        divBox.style.width = `${adaptiveSize}px`;
        divBox.style.height = `${adaptiveSize}px`;
        container.appendChild(divBox);
        divBox.addEventListener("mouseover", function () {
            divBox.style.backgroundColor = "orange";
        });
    }
}



const btn = document.querySelector("#btn");

btn.style.padding = "10px 20px";
btn.style.margin = "5px";
btn.style.border = "none";
btn.style.borderRadius = "5px";
btn.style.backgroundColor = "red";
btn.style.color = "white";
btn.style.fontSize = "150px";
btn.style.cursor = "pointer";

function promptFunction () {
    let gridNum;
    do {
        gridNum = prompt("Grid Dimension Value: ");
        gridNum = Number(gridNum);
    } while (isNaN(gridNum) || gridNum % 1 !== 0);

    return gridNum;
}

btn.addEventListener("click", function () {
    gridSize = promptFunction();
    createGrid(gridSize);
});

createGrid(gridSize);

