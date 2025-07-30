document.addEventListener('DOMContentLoaded', function() {
    // Amharic alphabet characters
    const amharicLetters = [
        'ሀ', 'ለ', 'ሐ', 'መ', 'ሠ', 'ረ', 'ሰ', 'ሸ', 'ቀ', 'በ', 
        'ተ', 'ቸ', 'ኀ', 'ነ', 'ኘ', 'አ', 'ከ', 'ኸ', 'ወ', 'ዐ',
        'ዘ', 'ዠ', 'የ', 'ደ', 'ጀ', 'ገ', 'ጠ', 'ጨ', 'ጰ', 'ጸ',
        'ፀ', 'ፈ', 'ፐ'
    ];
    
    // Amharic letter names in English (for pronunciation)
    const amharicLetterNames = [
        "ha", "la", "ha", "ma", "sa", "ra", "sa", "sha", "qa", "ba",
        "ta", "cha", "ha", "na", "nya", "a", "ka", "kha", "wa", "a",
        "za", "zha", "ya", "da", "ja", "ga", "ta", "cha", "pa", "tsa",
        "tsa", "fa", "pa"
    ];
    
    // DOM elements
    const amharicGrid = document.getElementById('amharic-grid');
    const container = document.querySelector('.container');
    const synth = window.speechSynthesis;

    // Initialize the app
    function init() {
        createButtons();
    }

    // Create all Amharic letter buttons
    function createButtons() {
        amharicLetters.forEach((char, index) => {
            createButton(char, index, amharicGrid);
        });
    }

    // Create a single interactive button
    function createButton(char, index, parent) {
        const button = document.createElement('button');
        button.className = 'item-btn';
        button.textContent = char;
        button.addEventListener('click', () => handleCharacterClick(char, index));
        parent.appendChild(button);
    }

    // Handle character clicks
    function handleCharacterClick(char, index) {
        speakCharacter(index);
        showCharacterPage(char, index);
    }

    // Speak the character name
    function speakCharacter(index) {
        synth.cancel(); // Cancel any ongoing speech
        
        const utterance = new SpeechSynthesisUtterance(amharicLetterNames[index]);
        utterance.rate = 0.7; // Slower for pronunciation
        utterance.pitch = 1.1; // Slightly higher pitch
        
        synth.speak(utterance);
    }

    // Show the character detail page
    function showCharacterPage(char, index) {
        container.innerHTML = `
            <div class="character-page">
                <div class="character-display">
                    <div class="character">${char}</div>
                    <p class="type">Amharic Letter</p>
                    <p class="pronunciation">Pronounced: ${amharicLetterNames[index]}</p>
                    <button class="sound-btn" id="play-sound">
                        🔊 Hear Again
                    </button>
                </div>
                <button class="back-btn" id="back-btn">Back to Main</button>
            </div>
        `;

        // Setup event listeners for the new page
        document.getElementById('play-sound').addEventListener('click', () => speakCharacter(index));
        document.getElementById('back-btn').addEventListener('click', () => location.reload());
    }

    // Initialize the application
    init();
});