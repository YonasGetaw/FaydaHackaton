document.addEventListener('DOMContentLoaded', function() {
    const playButtons = document.querySelectorAll('.play-btn');
    const stopButtons = document.querySelectorAll('.stop-btn');
    let currentAudio = null;
    
    // Play rhyme
    function playRhyme(event) {
        const rhymeName = event.target.getAttribute('data-rhyme');
        const audioElement = document.getElementById(`${rhymeName}-audio`);
        
        // Stop any currently playing audio
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }
        
        // Play the selected rhyme
        audioElement.play();
        currentAudio = audioElement;
    }

    // Stop all rhymes
    function stopAllRhymes() {
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
            currentAudio = null;
        }
    }

    // Event listeners
    playButtons.forEach(button => {
        button.addEventListener('click', playRhyme);
    });

    stopButtons.forEach(button => {
        button.addEventListener('click', stopAllRhymes);
    });
});