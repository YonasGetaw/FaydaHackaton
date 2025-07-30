document.addEventListener('DOMContentLoaded', () => {
    const gameBoard = document.getElementById('gameBoard');
    const scoreDisplay = document.getElementById('score');
    const attemptsDisplay = document.getElementById('attempts');
    const resetBtn = document.getElementById('resetBtn');

    let score = 0;
    let attempts = 0;
    let hasFlippedCard = false;
    let lockBoard = false;
    let firstCard, secondCard;

    // Shape emojis for the game
    const shapes = ['★', '▲', '●', '■', '◆', '♥', '▼', '🟦'];
    const cardPairs = [...shapes, ...shapes]; // Duplicate for matching

    // Initialize the game
    function initGame() {
        score = 0;
        attempts = 0;
        scoreDisplay.textContent = score;
        attemptsDisplay.textContent = attempts;
        gameBoard.innerHTML = '';
        shuffleCards();
    }

    // Shuffle cards randomly
    function shuffleCards() {
        const shuffledCards = [...cardPairs].sort(() => Math.random() - 0.5);
        
        shuffledCards.forEach((shape, index) => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.dataset.shape = shape;
            
            card.innerHTML = `
                <div class="shape">${shape}</div>
            `;
            
            card.addEventListener('click', flipCard);
            gameBoard.appendChild(card);
        });
    }

    // Flip a card
    function flipCard() {
        if (lockBoard || this === firstCard || this.classList.contains('matched')) return;

        this.classList.add('flipped');

        if (!hasFlippedCard) {
            hasFlippedCard = true;
            firstCard = this;
            return;
        }

        secondCard = this;
        attempts++;
        attemptsDisplay.textContent = attempts;
        checkForMatch();
    }

    // Check if two cards match
    function checkForMatch() {
        const isMatch = firstCard.dataset.shape === secondCard.dataset.shape;

        if (isMatch) {
            disableCards();
            score++;
            scoreDisplay.textContent = score;
            speakShape(firstCard.dataset.shape);
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

    // Flip unmatched cards back
    function unflipCards() {
        lockBoard = true;
        
        setTimeout(() => {
            firstCard.classList.remove('flipped');
            secondCard.classList.remove('flipped');
            resetBoard();
        }, 1000);
    }

    // Reset the board state
    function resetBoard() {
        [hasFlippedCard, lockBoard] = [false, false];
        [firstCard, secondCard] = [null, null];
    }

    // Speak the shape name (optional)
    function speakShape(shape) {
        const synth = window.speechSynthesis;
        const shapeNames = {
            '★': 'star',
            '▲': 'triangle',
            '●': 'circle',
            '■': 'square',
            '◆': 'diamond',
            '♥': 'heart',
            '▼': 'down triangle',
            '🟦': 'blue square'
        };
        
        const utterance = new SpeechSynthesisUtterance(shapeNames[shape] || 'shape');
        utterance.lang = 'en-US';
        synth.speak(utterance);
    }

    // Reset button
    resetBtn.addEventListener('click', initGame);

    // Start the game
    initGame();
});