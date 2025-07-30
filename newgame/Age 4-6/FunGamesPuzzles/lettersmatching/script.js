document.addEventListener('DOMContentLoaded', () => {
    const uppercaseLetters = document.querySelector('.uppercase-letters');
    const lowercaseLetters = document.querySelector('.lowercase-letters');
    const matchesDisplay = document.getElementById('matches');
    const resetBtn = document.getElementById('reset-btn');
    const correctSound = document.getElementById('correct-sound');
    const wrongSound = document.getElementById('wrong-sound');
    
    let selectedCard = null;
    let matchedCount = 0;
    
    // Initialize game
    function initGame() {
        uppercaseLetters.innerHTML = '';
        lowercaseLetters.innerHTML = '';
        selectedCard = null;
        matchedCount = 0;
        matchesDisplay.textContent = '0';
        
        // Create uppercase letters A-Z
        for (let i = 65; i <= 90; i++) {
            const letter = String.fromCharCode(i);
            createLetterCard(letter, uppercaseLetters);
        }
        
        // Create lowercase letters a-z (shuffled)
        const lowercase = [];
        for (let i = 97; i <= 122; i++) {
            lowercase.push(String.fromCharCode(i));
        }
        
        // Shuffle lowercase letters
        for (let i = lowercase.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [lowercase[i], lowercase[j]] = [lowercase[j], lowercase[i]];
        }
        
        lowercase.forEach(letter => {
            createLetterCard(letter, lowercaseLetters);
        });
    }
    
    // Create letter card
    function createLetterCard(letter, container) {
        const card = document.createElement('div');
        card.classList.add('letter-card');
        card.textContent = letter;
        card.dataset.letter = letter.toLowerCase();
        
        card.addEventListener('click', () => selectCard(card));
        container.appendChild(card);
    }
    
    // Select a card
    function selectCard(card) {
        if (card.classList.contains('matched') || card.classList.contains('selected')) return;
        
        // If no card is selected
        if (!selectedCard) {
            selectedCard = card;
            card.classList.add('selected');
            return;
        }
        
        // If same card is clicked twice
        if (selectedCard === card) {
            selectedCard.classList.remove('selected');
            selectedCard = null;
            return;
        }
        
        // Check for match
        const isMatch = selectedCard.textContent.toLowerCase() === card.textContent.toLowerCase() || 
                       selectedCard.textContent.toUpperCase() === card.textContent.toUpperCase();
        
        card.classList.add('selected');
        
        if (isMatch) {
            setTimeout(() => {
                selectedCard.classList.remove('selected');
                card.classList.remove('selected');
                selectedCard.classList.add('matched');
                card.classList.add('matched');
                selectedCard = null;
                
                matchedCount++;
                matchesDisplay.textContent = matchedCount;
                correctSound.currentTime = 0;
                correctSound.play();
                
                if (matchedCount === 26) {
                    setTimeout(() => {
                        alert('Congratulations! You matched all the letters!');
                    }, 500);
                }
            }, 500);
        } else {
            setTimeout(() => {
                selectedCard.classList.remove('selected');
                card.classList.remove('selected');
                selectedCard = null;
                wrongSound.currentTime = 0;
                wrongSound.play();
            }, 1000);
        }
    }
    
    // Reset button
    resetBtn.addEventListener('click', initGame);
    
    // Start the game
    initGame();
});