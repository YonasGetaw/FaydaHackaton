// Canvas setup
const canvas = document.getElementById('tracingCanvas');
const ctx = canvas.getContext('2d');
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let currentLetter = 'A';

// Alphabet letters for tracing
const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 
                 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// Set initial styles
ctx.lineWidth = 4;
ctx.lineCap = 'round';
ctx.strokeStyle = '#4CAF50';

// Draw the guide letter
function drawGuideLetter(letter) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = '200px "Comic Sans MS", cursive';
    ctx.fillStyle = 'rgba(46, 204, 113, 0.1)';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(letter, canvas.width/2, canvas.height/2);
}

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

// Helper function to get position
function getPosition(e) {
    const rect = canvas.getBoundingClientRect();
    return [
        (e.clientX || e.touches[0].clientX) - rect.left,
        (e.clientY || e.touches[0].clientY) - rect.top
    ];
}

// Clear the canvas and redraw guide letter
function clearCanvas() {
    drawGuideLetter(currentLetter);
}

// Change to a new letter
function changeLetter(letter) {
    if (letter) {
        currentLetter = letter;
    } else {
        // Get a random letter
        currentLetter = letters[Math.floor(Math.random() * letters.length)];
    }
    clearCanvas();
    speakLetter(currentLetter);
}

// Speak the letter
function speakLetter(letter) {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(letter);
    utterance.lang = 'en-US';
    synth.speak(utterance);
}

// Event listeners for drawing
canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', endDrawing);
canvas.addEventListener('mouseout', endDrawing);
canvas.addEventListener('touchstart', startDrawing);
canvas.addEventListener('touchmove', draw);
canvas.addEventListener('touchend', endDrawing);

// Initialize the app
drawGuideLetter(currentLetter);