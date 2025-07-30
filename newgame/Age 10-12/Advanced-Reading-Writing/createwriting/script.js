document.addEventListener('DOMContentLoaded', function() {
    const storyText = document.getElementById('story-text');
    const saveBtn = document.getElementById('save-story');
    const clearBtn = document.getElementById('clear-story');
    const readAloudBtn = document.getElementById('read-aloud');
    const wordCount = document.getElementById('count');
    const wordTags = document.querySelectorAll('.word-tag');
    const synth = window.speechSynthesis;
    
    // Word count functionality
    storyText.addEventListener('input', function() {
        const text = storyText.value.trim();
        const words = text ? text.split(/\s+/).length : 0;
        wordCount.textContent = words;
    });
    
    // Save story to localStorage
    saveBtn.addEventListener('click', function() {
        if (storyText.value.trim()) {
            localStorage.setItem('savedStory', storyText.value);
            alert('Your story has been saved!');
        } else {
            alert('Please write something before saving.');
        }
    });
    
    // Clear story
    clearBtn.addEventListener('click', function() {
        if (confirm('Are you sure you want to clear your story?')) {
            storyText.value = '';
            wordCount.textContent = '0';
        }
    });
    
    // Read aloud functionality
    readAloudBtn.addEventListener('click', function() {
        if (storyText.value.trim()) {
            const utterance = new SpeechSynthesisUtterance(storyText.value);
            utterance.rate = 0.9;
            synth.speak(utterance);
        } else {
            alert('Please write something to read aloud.');
        }
    });
    
    // Word tag click - insert word at cursor position
    wordTags.forEach(tag => {
        tag.addEventListener('click', function() {
            const word = this.textContent;
            const cursorPos = storyText.selectionStart;
            const textBefore = storyText.value.substring(0, cursorPos);
            const textAfter = storyText.value.substring(cursorPos);
            
            storyText.value = textBefore + word + textAfter;
            storyText.focus();
            storyText.selectionStart = storyText.selectionEnd = cursorPos + word.length;
            
            // Update word count
            const event = new Event('input');
            storyText.dispatchEvent(event);
        });
    });
    
    // Load saved story if exists
    const savedStory = localStorage.getItem('savedStory');
    if (savedStory) {
        if (confirm('Would you like to continue your saved story?')) {
            storyText.value = savedStory;
            const event = new Event('input');
            storyText.dispatchEvent(event);
        }
    }
});