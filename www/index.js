import { Universe, Cell, init } from "gameoflife";
import { memory } from "gameoflife/gameoflife_bg.wasm";

// let PLAY = true;
// let PLAY = false;
init();
const randSlider = document.getElementById("randThreshold");
const randSliderLabel = document.getElementById("randThreshold-label");

const CELL_SIZE = 5; // px
const GRID_COLOR = "#BBBBBB";
const DEAD_COLOR = "#FFFFFF";
const ALIVE_COLOR = "#FF55AA";

let universe = Universe.new(100, 100, randSlider.value, new Date().getTime() / 1000);
let width = universe.width();
let height = universe.height();
let play = false;

const canvas = document.getElementById("game-of-life-canvas");
canvas.height = (CELL_SIZE + 1) * height + 1;
canvas.width = (CELL_SIZE + 1) * width + 1;

const ctx = canvas.getContext('2d');
  
/**
 * Draw grid onto canvas prior to painting cells
 */
const drawGrid = () => {
    ctx.beginPath();
    ctx.strokeStyle = GRID_COLOR;

    // Vertical lines.
    for (let i = 0; i <= width; i++) {
        ctx.moveTo(i * (CELL_SIZE + 1) + 1, 0);
        ctx.lineTo(i * (CELL_SIZE + 1) + 1, (CELL_SIZE + 1) * height + 1);
    }

    // Horizontal lines.
    for (let j = 0; j <= height; j++) {
        ctx.moveTo(0,                           j * (CELL_SIZE + 1) + 1);
        ctx.lineTo((CELL_SIZE + 1) * width + 1, j * (CELL_SIZE + 1) + 1);
    }

    ctx.stroke();
};

/**
 * Get linear index from row and column indices
 * @param {*} row Row index
 * @param {*} column Column index
 * @returns Linear index
 */
const getIndex = (row, column) => {
    return row * width + column;
};

/**
 * Paint alive cells onto grid
 */
const drawCells = () => {
    const cellsPtr = universe.cells();
    const cells = new Uint8Array(memory.buffer, cellsPtr, width * height);

    ctx.beginPath();

    for (let row = 0; row < height; row++) {
        for (let col = 0; col < width; col++) {
        const idx = getIndex(row, col);

        ctx.fillStyle = cells[idx] === Cell.Dead
            ? DEAD_COLOR
            : ALIVE_COLOR;

        ctx.fillRect(
            col * (CELL_SIZE + 1) + 1,
            row * (CELL_SIZE + 1) + 1,
            CELL_SIZE,
            CELL_SIZE
        );
        }
    }

    ctx.stroke();
};

/**
 * Single frame/step of game, tick universe, refresh UI
 */
const renderSingle = () => {
    // fps.render(); //new
    universe.tick();
  
    drawGrid();
    drawCells();
}

/**
 * Start interval timer to periodically iterate frames
 */
const start = () => {
    if(loop != null) clearInterval(loop);
    loop = setInterval(renderSingle, frameInterval);
}

/**
 * Clear interval timer to stop animation loop
 */
const stop = () => {
    if(loop != null) clearInterval(loop);
    loop = null;
}

var frameInterval = 50;
// var loop = setInterval(renderSingle, frameInterval);
var loop = null;

// SLIDERS

const frameSlider = document.getElementById("frameRate");
const frameSliderLabel = document.getElementById("frameRate-label");
/**
 * Handler for frame interval slider change, stop, change interval, start
 */
const onFrameSlider = () => {
    stop();

    frameInterval = frameSlider.value;
    frameSliderLabel.innerHTML = `Frame Interval: ${frameSlider.value}ms`;

    if(play) start();
}
frameSlider.onchange = onFrameSlider;
frameSlider.value = 100;

/**
 * Handler for random threshold slider change, get a new universe with new threshold
 */
const onRandSlider = () => {
    stop();

    universe = Universe.new(width, height, randSlider.value, new Date().getTime() / 1000);
    refreshCanvas();
    randSliderLabel.innerHTML = `Random Threshold: ${randSlider.value}%`;

    if(play) start();
}
randSlider.onchange = onRandSlider;
randSlider.value = 50;

/**
 * Refresh existing canvas, calculate dimensions and draw
 */
const refreshCanvas = () => {
    canvas.width = (CELL_SIZE + 1) * width + 1;
    canvas.height = (CELL_SIZE + 1) * height + 1;
    drawGrid();
    drawCells();
}

// INPUT BOXES

const widthBox = document.getElementById("width");
/**
 * Handler for width input box change, get a new universe of given size
 */
const onWidth = () => {
    // PLAY = false;
    width = widthBox.value;
    universe = Universe.new(width, height, randSlider.value, new Date().getTime() / 1000);
    refreshCanvas();
    // PLAY = true;
    // requestAnimationFrame(renderLoop);
}
widthBox.onchange = onWidth;

const heightBox = document.getElementById("height");
/**
 * Handler for height input box change, get a new universe of given size
 */
const onHeight = () => {
    // PLAY = false;
    height = heightBox.value;
    universe = Universe.new(width, height, randSlider.value, new Date().getTime() / 1000);
    refreshCanvas();
    // PLAY = true;
    // requestAnimationFrame(renderLoop);
}
heightBox.onchange = onHeight;

// BUTTONS

/**
 * Click handler for step button, make single move
 */
const onPlay = () => {
    play = !play;

    // console.log("play: " + play);
    if(play) {
        playButton.classList.remove("btn-success");
        playButton.classList.add("btn-danger");
        playButton.innerText = "Stop";
        start();
    }else {
        playButton.classList.add("btn-success");
        playButton.classList.remove("btn-danger");
        playButton.innerText = "Play";
        stop();
    }
}
const playButton = document.getElementById("play");
playButton.onclick = onPlay;

/**
 * Click handler for step button, make single move
 */
const onStep = () => {
    console.log("stepping");
    renderSingle();
}
document.getElementById("step").onclick = onStep;

/**
 * Click handler for reset button, generate a new universe and refresh the canvas
 */
const onReset = () => {
    universe = Universe.new(width, height, randSlider.value, new Date().getTime() / 1000);
    refreshCanvas();
}
document.getElementById("reset").onclick = onReset;

drawGrid();
drawCells();
