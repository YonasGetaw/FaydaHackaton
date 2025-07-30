document.addEventListener('DOMContentLoaded', function() {
    const recordBtn = document.querySelector('.record-btn');
    const playbackBtn = document.querySelector('.playback-btn');
    const timer = document.querySelector('.timer');
    let seconds = 0;
    let timerInterval;
    let mediaRecorder;
    let audioChunks = [];
    
    // Timer functionality
    function startTimer() {
        seconds = 0;
        updateTimer();
        timerInterval = setInterval(updateTimer, 1000);
    }
    
    function updateTimer() {
        seconds++;
        const mins = Math.floor(seconds / 60).toString().padStart(2, '0');
        const secs = (seconds % 60).toString().padStart(2, '0');
        timer.textContent = `${mins}:${secs}`;
    }
    
    function stopTimer() {
        clearInterval(timerInterval);
    }
    
    // Recording functionality (simulated)
    recordBtn.addEventListener('click', function() {
        if (recordBtn.textContent === 'Start Recording') {
            recordBtn.textContent = 'Stop Recording';
            playbackBtn.disabled = true;
            startTimer();
            
            // Simulate recording
            console.log('Recording started...');
        } else {
            recordBtn.textContent = 'Start Recording';
            playbackBtn.disabled = false;
            stopTimer();
            
            // Simulate recording stopped
            console.log('Recording stopped. Ready for playback.');
        }
    });
    
    // Playback functionality (simulated)
    playbackBtn.addEventListener('click', function() {
        alert('In a real application, this would play back your recording.');
    });
});