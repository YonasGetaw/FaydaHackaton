document.addEventListener('DOMContentLoaded', function() {
    // Numbers 1-20
    const numbers = Array.from({length: 20}, (_, i) => i + 1);
    
    // DOM elements
    const numberGrid = document.getElementById('number-grid');
    const container = document.querySelector('.container');
    const synth = window.speechSynthesis;

    // Initialize the app
    function init() {
        createButtons();
    }

    // Create all number buttons
    function createButtons() {
        numbers.forEach(num => {
            createButton(num, numberGrid);
        });
    }

    // Create a single interactive button
    function createButton(num, parent) {
        const button = document.createElement('button');
        button.className = 'item-btn';
        button.textContent = num;
        button.addEventListener('click', () => handleNumberClick(num));
        parent.appendChild(button);
    }

    // Handle number clicks
    function handleNumberClick(num) {
        speakNumber(num);
        showNumberPage(num);
    }

    // Speak the number
    function speakNumber(num) {
        synth.cancel(); // Cancel any ongoing speech
        
        const utterance = new SpeechSynthesisUtterance(num.toString());
        utterance.rate = 0.8; // Slightly slower for children
        utterance.pitch = 1.1; // Slightly higher pitch
        
        synth.speak(utterance);
    }

    // Show the number detail page
    function showNumberPage(num) {
        // Create visual representation with dots
        const dots = [];
        const rows = Math.min(5, Math.ceil(num / 5));
        
        for (let i = 0; i < rows; i++) {
            const dotsInRow = Math.min(5, num - (i * 5));
            dots.push('• '.repeat(dotsInRow));
        }

        container.innerHTML = `
            <div class="character-page">
                <div class="character-display">
                    <div class="character">${num}</div>
                    <div class="dots">
                        ${dots.map(row => `<div>${row}</div>`).join('')}
                    </div>
                    <button class="sound-btn" id="play-sound">
                        🔊 Hear Again
                    </button>
                </div>
                <button class="back-btn" id="back-btn">Back to Main</button>
            </div>
        `;

        // Setup event listeners for the new page
        document.getElementById('play-sound').addEventListener('click', () => speakNumber(num));
        document.getElementById('back-btn').addEventListener('click', () => location.reload());
    }

    // Initialize the application
    init();
});