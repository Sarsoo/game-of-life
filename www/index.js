import { Universe, Cell, init } from "game-of-life";
import { memory } from "game-of-life/game_of_life_bg.wasm";

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

const canvas = document.getElementById("game-of-life-canvas");
canvas.height = (CELL_SIZE + 1) * height + 1;
canvas.width = (CELL_SIZE + 1) * width + 1;

const ctx = canvas.getContext('2d');
  
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

const getIndex = (row, column) => {
    return row * width + column;
};

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

const renderSingle = () => {
    fps.render(); //new
    universe.tick();
  
    drawGrid();
    drawCells();
}

const start = () => {
    if(loop != null) clearInterval(loop);
    loop = setInterval(renderSingle, frameInterval);
}

const stop = () => {
    if(loop != null) clearInterval(loop);
    loop = null;
}

// const renderLoop = () => {
//     if(PLAY){
//         renderSingle();
//         requestAnimationFrame(renderLoop);
//     }
// };

// renderSingle();
// requestAnimationFrame(renderLoop);

var frameInterval = 50;
// var loop = setInterval(renderSingle, frameInterval);
var loop = null;

const frameSlider = document.getElementById("frameRate");
const frameSliderLabel = document.getElementById("frameRate-label");
const onFrameSlider = () => {
    stop();

    frameInterval = frameSlider.value;
    frameSliderLabel.innerHTML = `Frame Interval: ${frameSlider.value}`;

    if(playCheck.checked) start();
}
frameSlider.onchange = onFrameSlider;

const onRandSlider = () => {
    stop();

    universe = Universe.new(width, height, randSlider.value, new Date().getTime() / 1000);
    refreshCanvas();
    randSliderLabel.innerHTML = `Rand Threshold: ${randSlider.value}`;

    if(playCheck.checked) start();
}
randSlider.onchange = onRandSlider;

const refreshCanvas = () => {
    canvas.width = (CELL_SIZE + 1) * width + 1;
    canvas.height = (CELL_SIZE + 1) * height + 1;
    drawGrid();
    drawCells();
}

const widthBox = document.getElementById("width");
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
const onHeight = () => {
    // PLAY = false;
    height = heightBox.value;
    universe = Universe.new(width, height, randSlider.value, new Date().getTime() / 1000);
    refreshCanvas();
    // PLAY = true;
    // requestAnimationFrame(renderLoop);
}
heightBox.onchange = onHeight;

const playCheck = document.getElementById("play-check");
const onPlay = () => {
    console.log("play: " + playCheck.checked);
    if(playCheck.checked) {
        start();
    }else {
        stop();
    }
    // PLAY = playCheck.checked;
    // requestAnimationFrame(renderLoop);
}
playCheck.onchange = onPlay;

const onStep = () => {
    console.log("stepping");
    renderSingle();
}
document.getElementById("step").onclick = onStep;


const onReset = () => {
    universe = Universe.new(width, height, randSlider.value, new Date().getTime() / 1000);
    refreshCanvas();
}
document.getElementById("reset").onclick = onReset;

drawGrid();
drawCells();

const fps = new class {
    constructor() {
      this.fps = document.getElementById("fps");
      this.frames = [];
      this.lastFrameTimeStamp = performance.now();
    }
  
    render() {
      // Convert the delta time since the last frame render into a measure
      // of frames per second.
      const now = performance.now();
      const delta = now - this.lastFrameTimeStamp;
      this.lastFrameTimeStamp = now;
      const fps = 1 / delta * 1000;
  
      // Save only the latest 100 timings.
      this.frames.push(fps);
      if (this.frames.length > 100) {
        this.frames.shift();
      }
  
      // Find the max, min, and mean of our 100 latest timings.
      let min = Infinity;
      let max = -Infinity;
      let sum = 0;
      for (let i = 0; i < this.frames.length; i++) {
        sum += this.frames[i];
        min = Math.min(this.frames[i], min);
        max = Math.max(this.frames[i], max);
      }
      let mean = sum / this.frames.length;
  
      // Render the statistics.
      this.fps.textContent = `
  Frames per Second:
           latest = ${Math.round(fps)} // 
  avg of last 100 = ${Math.round(mean)} // 
  min of last 100 = ${Math.round(min)} // 
  max of last 100 = ${Math.round(max)}
  `.trim();
    }
  };