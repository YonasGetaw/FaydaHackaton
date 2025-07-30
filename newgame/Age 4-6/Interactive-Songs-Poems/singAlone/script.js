document.addEventListener('DOMContentLoaded', function() {
    const playBtn = document.getElementById('play-btn');
    const pauseBtn = document.getElementById('pause-btn');
    const stopBtn = document.getElementById('stop-btn');
    const volumeControl = document.getElementById('volume');
    const songSelect = document.getElementById('song-select');
    const songTitle = document.getElementById('song-title');
    const songLyrics = document.getElementById('song-lyrics');
    const audioElement = document.getElementById('song-audio');
    
    // Song data with placeholder audio URLs
    const songs = {
        fiker: {
            title: "Fiker Eske Mekabir",
            lyrics: [
                "Fiker eske mekabir, fiker eske mekabir,",
                "Yene konjo lijé, yene konjo lijé,",
                "Ene new yene fikir, ene new yene fikir,",
                "Fiker eske mekabir, fiker eske mekabir!"
            ],
            audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
        },
        tezeta: {
            title: "Tezeta",
            lyrics: [
                "Tezeta, tezeta, yene fikir,",
                "Ene new yene mari, ene new yene mari,",
                "Tezeta, tezeta, yene fikir,",
                "Ene new yene mari, ene new yene mari!"
            ],
            audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
        },
        bati: {
            title: "Bati",
            lyrics: [
                "Bati, bati, lijé yene,",
                "Ene new yene fikir, ene new yene fikir,",
                "Bati, bati, lijé yene,",
                "Ene new yene fikir, ene new yene fikir!"
            ],
            audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
        },
        ambassel: {
            title: "Ambassel",
            lyrics: [
                "Ambassel, Ambassel,",
                "Lijé new yihonal,",
                "Ene alchalkum, ene alchalkum,",
                "Ambassel, Ambassel!"
            ],
            audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3"
        }
    };

    // Update song display
    function updateSong() {
        const songId = songSelect.value;
        const song = songs[songId];
        
        songTitle.textContent = song.title;
        songLyrics.innerHTML = song.lyrics.map(line => `<p>${line}</p>`).join('');
        
        // Load the audio
        audioElement.src = song.audioUrl;
        audioElement.load();
    }

    // Play song
    function playSong() {
        audioElement.play();
    }

    // Pause song
    function pauseSong() {
        audioElement.pause();
    }

    // Stop song
    function stopSong() {
        audioElement.pause();
        audioElement.currentTime = 0;
    }

    // Change volume
    function changeVolume() {
        audioElement.volume = volumeControl.value;
    }

    // Event listeners
    songSelect.addEventListener('change', updateSong);
    playBtn.addEventListener('click', playSong);
    pauseBtn.addEventListener('click', pauseSong);
    stopBtn.addEventListener('click', stopSong);
    volumeControl.addEventListener('input', changeVolume);

    // Initialize
    updateSong();
});