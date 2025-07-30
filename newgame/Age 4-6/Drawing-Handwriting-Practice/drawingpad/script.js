// Canvas setup
const canvas = document.getElementById('drawingCanvas');
const ctx = canvas.getContext('2d');
let isDrawing = false;
let lastX = 0;
let lastY = 0;

// Set initial styles
ctx.lineWidth = 4;
ctx.lineCap = 'round';
ctx.strokeStyle = '#000000';

// Drawing functions
function startDrawing(e) {
    isDrawing = true;
    [lastX, lastY] = getPosition(e);
}

function draw(e) {
    if (!isDrawing) return;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(...getPosition(e));
    ctx.stroke();
    [lastX, lastY] = getPosition(e);
}

function endDrawing() {
    isDrawing = false;
}

// Helper function to get position (works for both mouse and touch)
function getPosition(e) {
    const rect = canvas.getBoundingClientRect();
    return [
        (e.clientX || e.touches[0].clientX) - rect.left,
        (e.clientY || e.touches[0].clientY) - rect.top
    ];
}

// Clear the canvas
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Change drawing color
function changeColor(color) {
    ctx.strokeStyle = color;
}

// Event listeners for drawing
canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', endDrawing);
canvas.addEventListener('mouseout', endDrawing);
canvas.addEventListener('touchstart', startDrawing);
canvas.addEventListener('touchmove', draw);
canvas.addEventListener('touchend', endDrawing);