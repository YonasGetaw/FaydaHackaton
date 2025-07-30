// Canvas setup
const canvas = document.getElementById('writingCanvas');
const ctx = canvas.getContext('2d');
const currentWordDisplay = document.getElementById('currentWord');
let isDrawing = false;
let currentWordIndex = 0;
let lastX = 0;
let lastY = 0;

// Word list for spelling practice
const wordList = [
    "CAT", "DOG", "SUN", "TREE", "HAT",
    "BUG", "CAR", "FISH", "CAKE", "STAR",
    "BALL", "BOOK", "RAIN", "SNOW", "BEAR"
];

// Set initial styles
ctx.lineWidth = 4;
ctx.lineCap = 'round';
ctx.strokeStyle = '#2ECC71'; // Green color

// Draw the guide word in the center of canvas
function drawGuideWord() {
    ctx.font = '80px "Comic Sans MS", cursive';
    ctx.fillStyle = 'rgba(46, 204, 113, 0.1)'; // Light green
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(wordList[currentWordIndex], canvas.width/2, canvas.height/2);
    currentWordDisplay.textContent = wordList[currentWordIndex];
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

// Helper function to get position (works for both mouse and touch)
function getPosition(e) {
    const rect = canvas.getBoundingClientRect();
    return [
        (e.clientX || e.touches[0].clientX) - rect.left,
        (e.clientY || e.touches[0].clientY) - rect.top
    ];
}

// Clear the canvas and redraw guide word
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawGuideWord();
}

// Change to next word in list
function changeWord() {
    currentWordIndex = (currentWordIndex + 1) % wordList.length;
    clearCanvas();
    createSparkles(currentWordDisplay);
    canvas.style.transform = "scale(1.05)";
    setTimeout(() => canvas.style.transform = "scale(1)", 200);
}

// Create sparkle animation effect
function createSparkles(element) {
    const rect = element.getBoundingClientRect();
    for(let i = 0; i < 5; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = (rect.left + rect.width/2 - 5) + 'px';
        sparkle.style.top = (rect.top + rect.height/2 - 5) + 'px';
        document.body.appendChild(sparkle);
        setTimeout(() => sparkle.remove(), 1000);
    }
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
drawGuideWord();