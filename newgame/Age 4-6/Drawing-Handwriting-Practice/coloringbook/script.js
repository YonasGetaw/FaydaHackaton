// Canvas setup
const canvas = document.getElementById('coloringCanvas');
const ctx = canvas.getContext('2d');
let currentColor = '#FF5252'; // Start with red
let currentPicture = 'animals';
let isDrawing = false;
let lastX = 0;
let lastY = 0;

// Initialize canvas
function initCanvas() {
    // Set drawing styles
    ctx.lineWidth = 20;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.strokeStyle = currentColor;
    
    // Draw the initial picture
    drawColoringPage();
}

// Draw the current coloring page outline
function drawColoringPage() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 2;
    ctx.fillStyle = 'transparent';
    
    switch(currentPicture) {
        case 'animals':
            drawAnimal();
            break;
        case 'vehicles':
            drawVehicle();
            break;
        case 'shapes':
            drawShapes();
            break;
        case 'fruits':
            drawFruits();
            break;
    }
    
    // Reset to coloring settings
    ctx.strokeStyle = currentColor;
    ctx.lineWidth = 20;
}

// Drawing functions for different pages
function drawAnimal() {
    // Dog outline
    ctx.beginPath();
    ctx.arc(250, 150, 50, 0, Math.PI * 2); // Head
    ctx.stroke();
    
    // Body
    ctx.beginPath();
    ctx.ellipse(250, 250, 80, 100, 0, 0, Math.PI * 2);
    ctx.stroke();
    
    // Ears
    ctx.beginPath();
    ctx.moveTo(210, 120);
    ctx.lineTo(230, 100);
    ctx.lineTo(250, 120);
    ctx.stroke();
}

function drawVehicle() {
    // Car outline
    ctx.beginPath();
    ctx.rect(150, 200, 200, 80); // Body
    ctx.stroke();
    
    // Windows
    ctx.beginPath();
    ctx.rect(170, 210, 60, 30);
    ctx.rect(270, 210, 60, 30);
    ctx.stroke();
    
    // Wheels
    ctx.beginPath();
    ctx.arc(200, 280, 30, 0, Math.PI * 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(300, 280, 30, 0, Math.PI * 2);
    ctx.stroke();
}

function drawShapes() {
    // Various shapes
    ctx.beginPath();
    ctx.rect(150, 150, 100, 100); // Square
    ctx.stroke();
    
    ctx.beginPath();
    ctx.arc(350, 200, 50, 0, Math.PI * 2); // Circle
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(250, 300);
    ctx.lineTo(350, 300);
    ctx.lineTo(300, 200); // Triangle
    ctx.closePath();
    ctx.stroke();
}

function drawFruits() {
    // Apple
    ctx.beginPath();
    ctx.arc(200, 200, 50, 0, Math.PI * 2);
    ctx.stroke();
    
    // Stem
    ctx.beginPath();
    ctx.moveTo(200, 150);
    ctx.lineTo(210, 130);
    ctx.stroke();
    
    // Banana
    ctx.beginPath();
    ctx.ellipse(350, 200, 60, 30, Math.PI/4, 0, Math.PI * 2);
    ctx.stroke();
}

// Change the coloring picture
function changePicture(picture) {
    currentPicture = picture;
    drawColoringPage();
}

// Change the current color
function changeColor(color) {
    currentColor = color;
    ctx.strokeStyle = color;
}

// Clear the coloring
function clearCanvas() {
    drawColoringPage();
}

// Go to home page (replace with your actual home page URL)
function goHome() {
    window.location.href = "index.html"; // Change to your home page
}

// Drawing event handlers
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

function stopDrawing() {
    isDrawing = false;
}

// Helper function to get position
function getPosition(e) {
    const rect = canvas.getBoundingClientRect();
    return [
        (e.clientX || e.touches[0].clientX) - rect.left,
        (e.clientY || e.touches[0].clientY) - rect.top
    ];
}

// Event listeners
canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mouseout', stopDrawing);
canvas.addEventListener('touchstart', startDrawing);
canvas.addEventListener('touchmove', draw);
canvas.addEventListener('touchend', stopDrawing);

// Initialize the app
initCanvas();