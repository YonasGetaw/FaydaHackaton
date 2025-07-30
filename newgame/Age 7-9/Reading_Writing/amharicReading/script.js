document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const languageToggle = document.getElementById('language-toggle');
    const voiceToggle = document.getElementById('voice-toggle');
    let isAmharic = false;
    let voiceEnabled = true;
    let speechSynth = window.speechSynthesis;

    // Content data
    const content = {
        english: {
            title: "Amharic Reading Practice",
            lesson1Title: "Lesson 1: Basic Letters",
            lesson1Text: "Let's learn the first five letters of the Amharic alphabet. Try to say each sound!",
            lesson2Title: "Lesson 2: Simple Words",
            word1Text: "Honey",
            word2Text: "House",
            word3Text: "Father",
            lesson3Title: "Lesson 3: Short Sentences",
            sentence1Text: "Father is inside the house.",
            sentence2Text: "Honey is sweet.",
            footer: "Practice reading Amharic every day to get better!",
            practice1Btn: "Practice Sounds",
            practice2Btn: "Read Words",
            practice3Btn: "Read Sentences",
            toggleText: "አማርኛ",
            voiceOn: "🔊 Voice On",
            voiceOff: "🔇 Voice Off"
        },
        amharic: {
            title: "የአማርኛ ንባብ ልምምድ",
            lesson1Title: "ትምህርት 1: መሠረታዊ ፊደላት",
            lesson1Text: "የአማርኛ ፊደላትን የመጀመሪያዎቹን አምስት እንማር። እያንዳንዱን ድምፅ ለመናገር ይሞክሩ!",
            lesson2Title: "ትምህርት 2: ቀላል ቃላት",
            word1Text: "ማር",
            word2Text: "ቤት",
            word3Text: "አባት",
            lesson3Title: "ትምህርት 3: አጭር ሀረጎች",
            sentence1Text: "አባት ቤት ውስጥ ነው።",
            sentence2Text: "ማር ጣፋጭ ነው።",
            footer: "የአማርኛ ንባብን በየቀኑ ለማሻሻል ይለማመዱ!",
            practice1Btn: "ድምፆችን ይለማመዱ",
            practice2Btn: "ቃላትን ያንብቡ",
            practice3Btn: "ሀረጎችን ያንብቡ",
            toggleText: "English",
            voiceOn: "🔊 ድምፅ በርቷል",
            voiceOff: "🔇 ድምፅ ተጠፍቷል"
        }
    };

    // Initialize content
    updateContent();

    // Event listeners
    languageToggle.addEventListener('click', toggleLanguage);
    voiceToggle.addEventListener('click', toggleVoice);
    document.getElementById('practice1-btn').addEventListener('click', practiceSounds);
    document.getElementById('practice2-btn').addEventListener('click', practiceWords);
    document.getElementById('practice3-btn').addEventListener('click', practiceSentences);
    
    // Add click events for word cards and sentences
    document.querySelectorAll('.word-card').forEach(card => {
        card.addEventListener('click', () => {
            const amharicWord = card.getAttribute('data-amharic');
            speak(amharicWord);
        });
    });
    
    document.querySelectorAll('.sentence-example').forEach(sentence => {
        sentence.addEventListener('click', () => {
            const amharicSentence = sentence.getAttribute('data-amharic');
            speak(amharicSentence);
        });
    });

    // Functions
    function toggleLanguage() {
        isAmharic = !isAmharic;
        updateContent();
    }

    function toggleVoice() {
        voiceEnabled = !voiceEnabled;
        updateVoiceButton();
    }

    function updateVoiceButton() {
        const lang = isAmharic ? 'amharic' : 'english';
        voiceToggle.textContent = voiceEnabled ? content[lang].voiceOn : content[lang].voiceOff;
    }

    function updateContent() {
        const lang = isAmharic ? 'amharic' : 'english';
        const langContent = content[lang];
        
        // Update all text content
        document.getElementById('main-title').textContent = langContent.title;
        document.getElementById('lesson1-title').textContent = langContent.lesson1Title;
        document.getElementById('lesson1-text').textContent = langContent.lesson1Text;
        document.getElementById('lesson2-title').textContent = langContent.lesson2Title;
        document.getElementById('word1-text').textContent = langContent.word1Text;
        document.getElementById('word2-text').textContent = langContent.word2Text;
        document.getElementById('word3-text').textContent = langContent.word3Text;
        document.getElementById('lesson3-title').textContent = langContent.lesson3Title;
        document.getElementById('sentence1-text').textContent = langContent.sentence1Text;
        document.getElementById('sentence2-text').textContent = langContent.sentence2Text;
        document.getElementById('footer-text').textContent = langContent.footer;
        document.getElementById('practice1-btn').textContent = langContent.practice1Btn;
        document.getElementById('practice2-btn').textContent = langContent.practice2Btn;
        document.getElementById('practice3-btn').textContent = langContent.practice3Btn;
        languageToggle.textContent = langContent.toggleText;
        updateVoiceButton();
    }

    function speak(text) {
        if (!voiceEnabled) return;
        
        // Cancel any current speech
        speechSynth.cancel();
        
        // Create speech utterance
        const utterance = new SpeechSynthesisUtterance(text);
        
        // Try to set Amharic voice if available
        const amharicVoice = speechSynth.getVoices().find(voice => 
            voice.lang === 'am-ET' || voice.lang.startsWith('am-'));
        
        if (amharicVoice) {
            utterance.voice = amharicVoice;
            utterance.lang = 'am-ET';
        } else {
            // Fallback to default voice
            console.log("Amharic voice not found, using default voice");
        }
        
        // Speak the text
        speechSynth.speak(utterance);
    }

    function practiceSounds() {
        const sounds = isAmharic ? 
            "ድምፆች: ሀ (ha), ለ (lə), ሐ (ħä), መ (mä), ሠ (sä)" :
            "Sounds: ሀ (ha), ለ (lə), ሐ (ħä), መ (mä), ሠ (sä)";
        
        alert(sounds);
        
        if (voiceEnabled) {
            // Speak each letter with pause
            const letters = ['ሀ', 'ለ', 'ሐ', 'መ', 'ሠ'];
            const pronunciations = ['ha', 'lə', 'ħä', 'mä', 'sä'];
            
            letters.forEach((letter, index) => {
                setTimeout(() => {
                    speak(letter);
                    // Speak pronunciation after a delay
                    setTimeout(() => {
                        speak(pronunciations[index]);
                    }, 800);
                }, index * 1800);
            });
        }
    }

    function practiceWords() {
        const words = isAmharic ?
            "ቃላትን ያንብቡ: ማር (mar), ቤት (bet), አባት (abat)" :
            "Read the words: ማር (mar), ቤት (bet), አባት (abat)";
        alert(words);
        
        if (voiceEnabled) {
            const wordList = ['ማር', 'ቤት', 'አባት'];
            wordList.forEach((word, index) => {
                setTimeout(() => {
                    speak(word);
                }, index * 1500);
            });
        }
    }

    function practiceSentences() {
        const sentences = isAmharic ?
            "ሀረጎችን ያንብቡ:\n1. 'አባት ቤት ውስጥ ነው።'\n2. 'ማር ጣፋጭ ነው።'" :
            "Read the sentences:\n1. 'Father is in the house'\n2. 'Honey is sweet'";
        alert(sentences);
        
        if (voiceEnabled) {
            const sentenceList = ['አባት ቤት ውስጥ ነው።', 'ማር ጣፋጭ ነው።'];
            sentenceList.forEach((sentence, index) => {
                setTimeout(() => {
                    speak(sentence);
                }, index * 3000);
            });
        }
    }

    // Load voices when they become available
    speechSynth.onvoiceschanged = function() {
        console.log("Voices loaded:", speechSynth.getVoices());
    };
    
    // Initial voices load
    if (speechSynth.getVoices().length === 0) {
        speechSynth.addEventListener('voiceschanged', function() {
            console.log("Voices loaded after event:", speechSynth.getVoices());
        });
    }
});