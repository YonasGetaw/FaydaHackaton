document.addEventListener('DOMContentLoaded', () => {
    const gameBoard = document.getElementById('gameBoard');
    const matchesDisplay = document.getElementById('matches');
    const resetBtn = document.getElementById('reset-btn');
    const correctSound = document.getElementById('correct-sound');
    
    const animals = [
        { name: 'lion', sound: 'lion-sound', emoji: '🦁' },
        { name: 'dog', sound: 'dog-sound', emoji: '🐶' },
        { name: 'cat', sound: 'cat-sound', emoji: '🐱' },
        { name: 'cow', sound: 'cow-sound', emoji: '🐮' },
        { name: 'duck', sound: 'duck-sound', emoji: '🦆' },
        { name: 'sheep', sound: 'sheep-sound', emoji: '🐑' }
    ];
    
    // Create pairs of cards
    let cards = [...animals, ...animals];
    let hasFlippedCard = false;
    let lockBoard = false;
    let firstCard, secondCard;
    let matchedCount = 0;
    
    // Initialize game
    function initGame() {
        gameBoard.innerHTML = '';
        matchedCount = 0;
        matchesDisplay.textContent = matchedCount;
        
        // Shuffle cards
        shuffleCards();
        
        // Create card elements
        cards.forEach((animal, index) => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.dataset.name = animal.name;
            card.dataset.sound = animal.sound;
            
            card.innerHTML = `
                <div class="card-face card-front">
                    <img src="https://cdn-icons-png.flaticon.com/512/616/616${getAnimalIconCode(animal.name)}.png" alt="${animal.name}">
                </div>
                <div class="card-face card-back">${animal.emoji}</div>
            `;
            
            card.addEventListener('click', flipCard);
            gameBoard.appendChild(card);
        });
    }
    
    // Get icon code for each animal
    function getAnimalIconCode(animal) {
        const codes = {
            'lion': '408',
            'dog': '430',
            'cat': '438',
            'cow': '412',
            'duck': '425',
            'sheep': '418'
        };
        return codes[animal] || '430';
    }
    
    // Shuffle cards
    function shuffleCards() {
        for (let i = cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [cards[i], cards[j]] = [cards[j], cards[i]];
        }
    }
    
    // Flip card
    function flipCard() {
        if (lockBoard || this === firstCard || this.classList.contains('matched')) return;
        
        this.classList.add('flipped');
        
        if (!hasFlippedCard) {
            // First card flipped
            hasFlippedCard = true;
            firstCard = this;
            return;
        }
        
        // Second card flipped
        secondCard = this;
        checkForMatch();
    }
    
    // Check for match
    function checkForMatch() {
        const isMatch = firstCard.dataset.name === secondCard.dataset.name;
        
        if (isMatch) {
            disableCards();
            matchedCount++;
            matchesDisplay.textContent = matchedCount;
            playAnimalSound(firstCard.dataset.sound);
            correctSound.currentTime = 0;
            correctSound.play();
            
            if (matchedCount === animals.length) {
                setTimeout(() => {
                    alert('Great job! You matched all the animals!');
                }, 500);
            }
        } else {
            unflipCards();
        }
    }
    
    // Play animal sound
    function playAnimalSound(soundId) {
        const sound = document.getElementById(soundId);
        if (sound) {
            sound.currentTime = 0;
            sound.play();
        }
    }
    
    // Disable matched cards
    function disableCards() {
        firstCard.classList.add('matched');
        secondCard.classList.add('matched');
        resetBoard();
    }
    
    // Unflip cards
    function unflipCards() {
        lockBoard = true;
        
        setTimeout(() => {
            firstCard.classList.remove('flipped');
            secondCard.classList.remove('flipped');
            resetBoard();
        }, 1000);
    }
    
    // Reset board
    function resetBoard() {
        [hasFlippedCard, lockBoard] = [false, false];
        [firstCard, secondCard] = [null, null];
    }
    
    // Reset button
    resetBtn.addEventListener('click', initGame);
    
    // Start the game
    initGame();
});