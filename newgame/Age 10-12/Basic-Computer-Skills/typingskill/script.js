document.addEventListener('DOMContentLoaded', function() {
    const typingArea = document.querySelector('.typing-area');
    const sampleText = document.querySelector('.sample-text').textContent;
    const wpmElement = document.getElementById('wpm');
    const accuracyElement = document.getElementById('accuracy');
    const timeElement = document.getElementById('time');
    const startBtn = document.querySelector('.start-btn');
    const resetBtn = document.querySelector('.reset-btn');
    
    let startTime;
    let timerInterval;
    let timeLeft = 60;
    let testActive = false;
    
    // Start typing test
    startBtn.addEventListener('click', function() {
        if (testActive) return;
        
        testActive = true;
        timeLeft = 60;
        typingArea.value = '';
        typingArea.focus();
        
        // Start timer
        timerInterval = setInterval(updateTimer, 1000);
        startTime = new Date();
    });
    
    // Update timer countdown
    function updateTimer() {
        timeLeft--;
        timeElement.textContent = timeLeft;
        
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            testActive = false;
            calculateResults();
        }
    }
    
    // Calculate WPM and accuracy
    function calculateResults() {
        const typedText = typingArea.value;
        const typedWords = typedText.trim().split(/\s+/).length;
        const elapsedMinutes = (60 - timeLeft) / 60;
        const wpm = Math.round(typedWords / elapsedMinutes);
        
        // Calculate accuracy
        let correctChars = 0;
        const minLength = Math.min(typedText.length, sampleText.length);
        
        for (let i = 0; i < minLength; i++) {
            if (typedText[i] === sampleText[i]) {
                correctChars++;
            }
        }
        
        const accuracy = Math.round((correctChars / typedText.length) * 100);
        
        wpmElement.textContent = wpm;
        accuracyElement.textContent = accuracy + '%';
    }
    
    // Reset test
    resetBtn.addEventListener('click', function() {
        clearInterval(timerInterval);
        testActive = false;
        timeLeft = 60;
        timeElement.textContent = timeLeft;
        typingArea.value = '';
        wpmElement.textContent = '0';
        accuracyElement.textContent = '0';
    });
    
    // Allow manual calculation if user finishes early
    typingArea.addEventListener('keyup', function() {
        if (testActive && typingArea.value.length >= sampleText.length) {
            clearInterval(timerInterval);
            testActive = false;
            calculateResults();
        }
    });
});