document.addEventListener('DOMContentLoaded', () => {
    const memoryBoard = document.getElementById('memoryBoard');
    const movesDisplay = document.getElementById('moves');
    const pairsDisplay = document.getElementById('pairs');
    const resetBtn = document.getElementById('reset-btn');
    const matchSound = document.getElementById('match-sound');
    const flipSound = document.getElementById('flip-sound');
    
    const emojis = ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼'];
    const cards = [...emojis, ...emojis];
    let hasFlippedCard = false;
    let lockBoard = false;
    let firstCard, secondCard;
    let moves = 0;
    let matchedPairs = 0;
    
    // Initialize game
    function initGame() {
        memoryBoard.innerHTML = '';
        moves = 0;
        matchedPairs = 0;
        movesDisplay.textContent = moves;
        pairsDisplay.textContent = `${matchedPairs}/8`;
        
        shuffleCards();
        
        cards.forEach((emoji, index) => {
            const card = document.createElement('div');
            card.classList.add('memory-card');
            card.dataset.emoji = emoji;
            card.dataset.index = index;
            
            card.innerHTML = `
                <div class="card-face card-front">${emoji}</div>
                <div class="card-face card-back"></div>
            `;
            
            card.addEventListener('click', flipCard);
            memoryBoard.appendChild(card);
        });
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
        
        flipSound.currentTime = 0;
        flipSound.play();
        
        this.classList.add('flipped');
        
        if (!hasFlippedCard) {
            hasFlippedCard = true;
            firstCard = this;
            return;
        }
        
        secondCard = this;
        moves++;
        movesDisplay.textContent = moves;
        checkForMatch();
    }
    
    // Check for match
    function checkForMatch() {
        const isMatch = firstCard.dataset.emoji === secondCard.dataset.emoji;
        
        if (isMatch) {
            disableCards();
            matchedPairs++;
            pairsDisplay.textContent = `${matchedPairs}/8`;
            matchSound.currentTime = 0;
            matchSound.play();
            
            if (matchedPairs === 8) {
                setTimeout(() => {
                    alert(`Congratulations! You won in ${moves} moves!`);
                }, 500);
            }
        } else {
            unflipCards();
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