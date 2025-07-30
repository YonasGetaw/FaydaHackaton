document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const languageToggle = document.getElementById('language-toggle');
    let isAmharic = false;

    // Content data
    const content = {
        english: {
            title: "English Reading Practice",
            lesson1Title: "Lesson 1: Alphabet Sounds",
            lesson1Text: "Let's practice the first five letters of the English alphabet. What sounds do they make?",
            lesson2Title: "Lesson 2: Simple Words",
            word1Text: "🐱",
            word2Text: "🐶",
            word3Text: "☀️",
            lesson3Title: "Lesson 3: Short Sentences",
            sentence1Text: "A simple sentence with 3 words.",
            sentence2Text: "A 4-word sentence.",
            footer: "Reading every day helps you become a better reader!",
            practice1Btn: "Hear Sounds",
            practice2Btn: "Read Words",
            practice3Btn: "Read Aloud",
            toggleText: "አማርኛ"
        },
        amharic: {
            title: "የእንግሊዝኛ ንባብ ልምምድ",
            lesson1Title: "ትምህርት 1: ፊደላት ድምፅ",
            lesson1Text: "የእንግሊዝኛ ፊደላትን የመጀመሪያዎቹን አምስት እንለማመድ። ምን ዓይነት ድምፆች አላቸው?",
            lesson2Title: "ትምህርት 2: ቀላል ቃላት",
            word1Text: "🐱",
            word2Text: "🐶",
            word3Text: "☀️",
            lesson3Title: "ትምህርት 3: አጭር ሀረጎች",
            sentence1Text: "3 ቃላት ያሉት ቀላል ሀረግ።",
            sentence2Text: "4 ቃላት ያሉት ሀረግ።",
            footer: "በየቀኑ መንባብ የተሻለ አንባቢ እንዲሆኑ ይረዳችኋል!",
            practice1Btn: "ድምፆችን ይስማ",
            practice2Btn: "ቃላትን ያንብቡ",
            practice3Btn: "በተናጥል ያንብቡ",
            toggleText: "English"
        }
    };

    // Initialize content
    updateContent();

    // Event listeners
    languageToggle.addEventListener('click', toggleLanguage);
    document.getElementById('practice1-btn').addEventListener('click', practiceSounds);
    document.getElementById('practice2-btn').addEventListener('click', practiceWords);
    document.getElementById('practice3-btn').addEventListener('click', practiceSentences);
    
    // Add click events for word cards and sentences
    document.querySelectorAll('.word-card').forEach(card => {
        card.addEventListener('click', () => {
            const word = card.getAttribute('data-word');
            speak(word);
        });
    });
    
    document.querySelectorAll('.sentence-example').forEach(sentence => {
        sentence.addEventListener('click', () => {
            const sentenceText = sentence.getAttribute('data-sentence');
            speak(sentenceText);
        });
    });

    // Functions
    function toggleLanguage() {
        isAmharic = !isAmharic;
        updateContent();
    }

    function updateContent() {
        const lang = isAmharic ? 'amharic' : 'english';
        const langContent = content[lang];
        
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
    }

    function speak(text) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        speechSynthesis.speak(utterance);
    }

    function practiceSounds() {
        const sounds = isAmharic ? 
            "ድምፆች: ኤ (አፕል), ቢ (boል), ሲ (ካት), ዲ (ዶግ), ኢ (ኤግ)" :
            "Sounds: A (apple), B (ball), C (cat), D (dog), E (egg)";
        
        alert(sounds);
        
        // Speak each letter with example word
        const letters = ['A', 'B', 'C', 'D', 'E'];
        const examples = ['apple', 'ball', 'cat', 'dog', 'egg'];
        
        letters.forEach((letter, index) => {
            setTimeout(() => {
                speak(letter);
                setTimeout(() => {
                    speak(examples[index]);
                }, 800);
            }, index * 1800);
        });
    }

    function practiceWords() {
        const words = isAmharic ?
            "ቃላትን ያንብቡ: ድመት, ውሻ, ፀሐይ" :
            "Read the words: cat, dog, sun";
        alert(words);
        
        const wordList = ['cat', 'dog', 'sun'];
        wordList.forEach((word, index) => {
            setTimeout(() => {
                speak(word);
            }, index * 1500);
        });
    }

    function practiceSentences() {
        const sentences = isAmharic ?
            "ሀረጎችን ያንብቡ: 'The cat sat.' እና 'I see the sun.'" :
            "Read the sentences: 'The cat sat.' and 'I see the sun.'";
        alert(sentences);
        
        const sentenceList = ['The cat sat.', 'I see the sun.'];
        sentenceList.forEach((sentence, index) => {
            setTimeout(() => {
                speak(sentence);
            }, index * 3000);
        });
    }
});