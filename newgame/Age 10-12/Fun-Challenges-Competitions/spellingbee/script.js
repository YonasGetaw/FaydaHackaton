// Language toggle functionality
const languageToggle = document.getElementById('languageToggle');
let currentLanguage = 'english';

// Spelling Bee words by level
const spellingWords = [
    // Level 1
    ["cat", "dog", "sun", "hat", "pen", "run", "big", "red", "box", "leg"],
    // Level 2
    ["apple", "house", "water", "happy", "music", "green", "table", "chair", "smile", "cloud"],
    // Level 3
    ["elephant", "beautiful", "mountain", "adventure", "celebrate", "important", "friendly", "discover", "butterfly", "hospital"],
    // Level 4
    ["extravaganza", "perseverance", "quintessential", "magnificent", "extraordinary", "incredible", "knowledge", "xylophone", "wonderful", "vegetable"],
    // Level 5
    ["onomatopoeia", "conscientious", "acquiesce", "serendipity", "ephemeral", "idiosyncrasy", "mnemonic", "pharaoh", "quinoa", "synecdoche"]
];

// Game variables
let spellingScore = 0;
let spellingLevel = 1;
let spellingLives = 3;
let currentSpellingWord = '';

// DOM elements
const introSection = document.getElementById('introSection');
const spellingGame = document.getElementById('spellingGame');
const startButton = document.getElementById('startButton');
const spellingSubmit = document.getElementById('spellingSubmit');

// Initialize the game
startButton.addEventListener('click', startSpellingBee);
spellingSubmit.addEventListener('click', checkSpellingAnswer);
document.getElementById('spellingAnswer').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        checkSpellingAnswer();
    }
});

// Language toggle
languageToggle.addEventListener('click', () => {
    if (currentLanguage === 'english') {
        currentLanguage = 'amharic';
        languageToggle.textContent = 'English';
        translateToAmharic();
    } else {
        currentLanguage = 'english';
        languageToggle.textContent = 'አማርኛ';
        translateToEnglish();
    }
});

function translateToAmharic() {
    // Main page translations
    document.getElementById('mainTitle').textContent = 'የፊደል ስፔሊንግ ፈተና';
    document.getElementById('introText').textContent = 'በቀስ በቀስ ከባድ የሚሆኑትን ቃላት በመጠቀም የፊደል ችሎታዎን ይፈትሹ። ለመጀመር ከታች ያለውን ቁልፍ ይጫኑ!';
    document.getElementById('startButton').textContent = 'ፈተናውን ጀምር';
    
    // Game translations
    document.getElementById('levelLabel').textContent = 'ደረጃ';
    document.getElementById('scoreLabel').textContent = 'ውጤት';
    document.getElementById('livesLabel').textContent = 'ሕይወት';
    
    // Footer translations
    document.getElementById('footerText').textContent = '© 2023 የፊደል ስፔሊንግ ፈተና';
    document.getElementById('aboutLink').textContent = 'ስለ እኛ';
    document.getElementById('contactLink').textContent = 'አግኙን';
    document.getElementById('privacyLink').textContent = 'የግላዊነት ፖሊሲ';
    
    // Update game prompt if game is active
    if (spellingGame.style.display === 'block') {
        document.getElementById('spellingWordPrompt').textContent = `የሚሰማዎትን ቃል ይጻፉ (ደረጃ ${spellingLevel}):`;
        document.getElementById('spellingAnswer').placeholder = "ቃሉን ይጻፉ...";
        document.getElementById('spellingSubmit').textContent = "አስገባ";
    }
}

function translateToEnglish() {
    // Restore English text
    document.getElementById('mainTitle').textContent = 'Spelling Bee Challenge';
    document.getElementById('introText').textContent = 'Challenge your spelling abilities with progressively difficult words. Click the button below to begin!';
    document.getElementById('startButton').textContent = 'Start Spelling Bee';
    
    // Game translations
    document.getElementById('levelLabel').textContent = 'Level';
    document.getElementById('scoreLabel').textContent = 'Score';
    document.getElementById('livesLabel').textContent = 'Lives';
    
    // Footer translations
    document.getElementById('footerText').textContent = '© 2023 Spelling Bee Challenge';
    document.getElementById('aboutLink').textContent = 'About';
    document.getElementById('contactLink').textContent = 'Contact';
    document.getElementById('privacyLink').textContent = 'Privacy Policy';
    
    // Update game prompt if game is active
    if (spellingGame.style.display === 'block') {
        document.getElementById('spellingWordPrompt').textContent = `Spell the word you hear (Level ${spellingLevel}):`;
        document.getElementById('spellingAnswer').placeholder = "Spell the word...";
        document.getElementById('spellingSubmit').textContent = "Submit";
    }
}

function startSpellingBee() {
    introSection.style.display = 'none';
    spellingGame.style.display = 'block';
    
    spellingScore = 0;
    spellingLevel = 1;
    spellingLives = 3;
    
    document.getElementById('spellingScore').textContent = spellingScore;
    document.getElementById('spellingLevel').textContent = spellingLevel;
    document.getElementById('spellingLives').textContent = spellingLives;
    document.getElementById('spellingResult').textContent = '';
    document.getElementById('spellingResult').className = '';
    
    showSpellingWord();
}

function showSpellingWord() {
    if (spellingLives <= 0) {
        const resultElement = document.getElementById('spellingResult');
        resultElement.textContent = currentLanguage === 'english' 
            ? `Game over! Your final score: ${spellingScore}` 
            : `ጨዋታው አልቋል! የመጨረሻ ውጤትዎ: ${spellingScore}`;
        resultElement.className = 'incorrect';
        
        // Show restart button
        const restartBtn = document.createElement('button');
        restartBtn.textContent = currentLanguage === 'english' ? 'Play Again' : 'እንደገና ይጫወቱ';
        restartBtn.className = 'start-btn';
        restartBtn.style.margin = '1rem auto';
        restartBtn.onclick = () => {
            spellingGame.style.display = 'none';
            introSection.style.display = 'block';
        };
        
        const statsDiv = document.getElementById('spellingStats');
        statsDiv.parentNode.insertBefore(restartBtn, statsDiv.nextSibling);
        return;
    }
    
    const levelIndex = Math.min(spellingLevel - 1, spellingWords.length - 1);
    const levelWords = spellingWords[levelIndex];
    const word = levelWords[Math.floor(Math.random() * levelWords.length)];
    
    document.getElementById('spellingWordPrompt').textContent = currentLanguage === 'english' 
        ? `Spell the word you hear (Level ${spellingLevel}):` 
        : `የሚሰማዎትን ቃል ይጻፉ (ደረጃ ${spellingLevel}):`;
    
    // Use speech synthesis to say the word
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(word);
        utterance.rate = 0.8;
        speechSynthesis.speak(utterance);
    } else {
        // Fallback for browsers without speech synthesis
        const audioElement = document.getElementById('wordAudio');
        audioElement.style.display = 'block';
        // In a real app, you would have pre-recorded audio files here
        // For this demo, we'll just show the audio controls without sound
    }
    
    document.getElementById('spellingAnswer').value = '';
    document.getElementById('spellingAnswer').focus();
    
    currentSpellingWord = word;
}

function checkSpellingAnswer() {
    const userAnswer = document.getElementById('spellingAnswer').value.toLowerCase();
    const resultElement = document.getElementById('spellingResult');
    
    if (!userAnswer) {
        resultElement.textContent = currentLanguage === 'english' 
            ? 'Please enter a word!' 
            : 'እባክዎ ቃል ያስገቡ!';
        resultElement.className = 'incorrect';
        return;
    }
    
    if (userAnswer === currentSpellingWord) {
        spellingScore += spellingLevel * 10;
        spellingLevel++;
        document.getElementById('spellingScore').textContent = spellingScore;
        document.getElementById('spellingLevel').textContent = spellingLevel;
        resultElement.textContent = currentLanguage === 'english' ? 'Correct! 🎉' : 'ትክክል! 🎉';
        resultElement.className = 'correct';
    } else {
        spellingLives--;
        document.getElementById('spellingLives').textContent = spellingLives;
        resultElement.textContent = currentLanguage === 'english' 
            ? `Incorrect. The correct spelling is "${currentSpellingWord}".` 
            : `ትክክል አይደለም። ትክክለኛው አጻጻፍ "${currentSpellingWord}" ነው።`;
        resultElement.className = 'incorrect';
    }
    
    setTimeout(() => {
        showSpellingWord();
        resultElement.textContent = '';
        resultElement.className = '';
    }, 2000);
}