document.addEventListener('DOMContentLoaded', function() {
    const storyContent = document.querySelector('.story-content');
    const readAloudBtn = document.getElementById('read-aloud');
    const pauseReadingBtn = document.getElementById('pause-reading');
    const restartStoryBtn = document.getElementById('restart-story');
    const translateAmharicBtn = document.getElementById('translate-amharic');
    const synth = window.speechSynthesis;
    
    const englishStory = [
        "Once upon a time in the highlands of Ethiopia, there lived a clever farmer named Abebe.",
        "One day, a lion started terrorizing his village, stealing goats and scaring children.",
        "Abebe came up with a plan. He made a large, delicious-looking honeycomb and placed it near the lion's cave.",
        "When the lion came to eat it, his jaws got stuck in the sticky honey!",
        "The villagers then safely captured the lion and took him far away to a wildlife sanctuary.",
        "From that day on, Abebe was known as the cleverest farmer in all of Ethiopia."
    ];

    const amharicStory = [
        "በኢትዮጵያ ከፍተኛ �ለማዎች �ይኖር የነበረ ብልህ ገበሬ አበበ የሚባል ነበር።",
        "በአንድ ቀን አንድ አንበሳ መንደሩን ማስፈራራት ጀመረ፣ ፍየሎችን ሲሰርቅ እና ህፃናትን ሲያስፈራራ።",
        "አበበ አንድ ዕቅድ አወጣ። ትልቅ ጣፋጭ የሚመስል ማር ማለፊያ አዘጋጀ እና በአንበሳው ዋሻ አጠገብ አኖረው።",
        "አንበሳው ሊበላው በመጣ ጊዜ ጡረታው በቅጠሉ ማር ተጣብቋል!",
        "ወገኖቹ ከዚያም አንበሳውን በሰላም ያዙት እና ወደ የተራራ እንስሳት መጠበቂያ ቦታ ወሰዱት።",
        "ከዛን ቀን ጀምሮ አበበ በመላው ኢትዮጵያ ውስጥ በጣም ብልህ የሆነ ገበሬ ተብሎ ይጠራ ነበር።"
    ];

    let currentStory = englishStory;
    let currentParagraph = 0;
    let isReading = false;
    let utterance = null;

    // Read the story aloud
    function readStory() {
        if (currentParagraph >= currentStory.length) {
            currentParagraph = 0;
            isReading = false;
            return;
        }

        const text = currentStory[currentParagraph];
        utterance = new SpeechSynthesisUtterance(text);
        
        // Set voice to Amharic if available
        const amharicVoice = synth.getVoices().find(voice => 
            voice.lang.includes('am-ET') || voice.lang.includes('am'));
        
        if (amharicVoice && currentStory === amharicStory) {
            utterance.voice = amharicVoice;
        }
        
        utterance.rate = 0.9;
        utterance.pitch = 1.1;
        
        utterance.onend = function() {
            currentParagraph++;
            if (isReading) {
                readStory();
            }
        };
        
        synth.speak(utterance);
        isReading = true;
    }

    // Pause reading
    function pauseReading() {
        if (synth.speaking) {
            synth.cancel();
            isReading = false;
        }
    }

    // Restart story
    function restartStory() {
        pauseReading();
        currentParagraph = 0;
        readStory();
    }

    // Translate to Amharic
    function translateToAmharic() {
        pauseReading();
        currentStory = amharicStory;
        currentParagraph = 0;
        
        // Update the displayed story
        storyContent.innerHTML = currentStory.map(para => `<p>${para}</p>`).join('');
        
        // Update moral
        document.querySelector('.moral p').textContent = "ጥበብ ችግሮችን ከኃይል ብቻ የበለጠ መፍታት ይችላል።";
    }

    // Event listeners
    readAloudBtn.addEventListener('click', readStory);
    pauseReadingBtn.addEventListener('click', pauseReading);
    restartStoryBtn.addEventListener('click', restartStory);
    translateAmharicBtn.addEventListener('click', translateToAmharic);

    // Load voices when they become available
    synth.onvoiceschanged = function() {
        console.log("Voices loaded");
    };
});