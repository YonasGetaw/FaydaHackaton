document.addEventListener('DOMContentLoaded', function() {
    // Language state
    let isAmharic = false;
    
    // Translations
    const translations = {
        en: {
            title: "Ethiopian Historical Events",
            subtitle: "Milestones of Our Past",
            event1Date: "1270",
            event1Title: "Solomonic Dynasty Begins",
            event1Desc: "Yekuno Amlak overthrows the Zagwe dynasty, claiming descent from King Solomon and Queen of Sheba.",
            event2Date: "1896",
            event2Title: "Battle of Adwa",
            event2Desc: "Ethiopia defeats Italian forces, becoming the first African nation to resist European colonialism.",
            event3Date: "1936-1941",
            event3Title: "Italian Occupation",
            event3Desc: "Brief period of Italian rule under Mussolini, ending with Ethiopian resistance and Allied support.",
            quizTitle: "Historical Knowledge Test",
            q1Text: "1. What was significant about the Battle of Adwa?",
            q1Option1: "First African victory over European colonialists",
            q1Option2: "Marked the beginning of Italian rule",
            q1Option3: "Ended the Solomonic dynasty",
            submitQuiz: "Submit Answers",
            resultsTitle: "Your Results",
            retryQuiz: "Try Again",
            moreTopics: "More topics: ",
            heritageLink: "Cultural Heritage",
            regionsLink: "Ethiopian Regions",
            footerText: "Understanding Ethiopia's historical journey",
            languageToggle: "አማርኛ / Amharic",
            correctFeedback: "Correct! Adwa was the first African victory over European colonial forces.",
            incorrectFeedback: "Incorrect. The correct answer is: First African victory over European colonialists.",
            noSelection: "Please select an answer first!"
        },
        am: {
            title: "የኢትዮጵያ ታሪካዊ ክስተቶች",
            subtitle: "የተራመድንበት መንገድ ምልክቶች",
            event1Date: "1270",
            event1Title: "የሰሎሞናዊው ሥርወ መንግሥት መጀመር",
            event1Desc: "ይኩኖ አምላክ የዛጔ ሥርወ መንግሥት አፈረሰ፣ ከንጉሥ ሰሎሞን እና ንግሥተ ሳባ የሚወርስ መሆኑን ተናገረ።",
            event2Date: "1896",
            event2Title: "የአድዋ ጦርነት",
            event2Desc: "ኢትዮጵያ የጣሊያን ሠራዊትን በማሸነፍ የአፍሪካ አገሮች የአውሮፓውያንን ቅኝ ግዛት የመጀመሪያ የተቃወመች ሀገር ሆነች።",
            event3Date: "1936-1941",
            event3Title: "የጣሊያን ግዛት",
            event3Desc: "በሙሶሊኒ አስተዳደር የነበረው የጣሊያን አገዛዝ፣ በኢትዮጵያ ተቃውሞ እና የጎረቤት አገሮች ድጋፍ አብቅቷል።",
            quizTitle: "የታሪክ እውቀት ፈተና",
            q1Text: "1. የአድዋ ጦርነት ምን ያህል አስፈላጊ ነበር?",
            q1Option1: "አፍሪካውያን የአውሮፓውያንን ቅኝ ግዛት የመጀመሪያ ጊዜ ያሸነፉበት",
            q1Option2: "የጣሊያን አገዛዝ መጀመርን ምልክት አድርጎታል",
            q1Option3: "የሰሎሞናዊው ሥርወ መንግሥት አብቋል",
            submitQuiz: "መልሶችን አስገባ",
            resultsTitle: "ውጤቶችዎ",
            retryQuiz: "እንደገና ይሞክሩ",
            moreTopics: "ተጨማሪ ርዕሶች: ",
            heritageLink: "ባህላዊ ቅርስ",
            regionsLink: "የኢትዮጵያ ክልሎች",
            footerText: "የኢትዮጵያን ታሪካዊ ጉዞ መረዳት",
            languageToggle: "English / እንግሊዝኛ",
            correctFeedback: "ትክክል! አድዋ አፍሪካውያን የአውሮፓውያንን ቅኝ ግዛት የመጀመሪያ ጊዜ ያሸነፉበት ጦርነት ነበር።",
            incorrectFeedback: "ትክክል አይደለም። ትክክለኛው መልስ፡ አፍሪካውያን የአውሮፓውያንን ቅኝ ግዛት የመጀመሪያ ጊዜ ያሸነፉበት።",
            noSelection: "እባክዎ መጀመሪያ መልስ ይምረጡ!"
        }
    };

    // DOM elements
    const languageToggle = document.getElementById('language-toggle');
    const submitBtn = document.getElementById('submit-quiz');
    const retryBtn = document.getElementById('retry-quiz');
    const resultsDiv = document.getElementById('results');
    const scoreElement = document.getElementById('score');
    const feedbackElement = document.getElementById('feedback');

    // Update language
    function updateLanguage() {
        const lang = isAmharic ? 'am' : 'en';
        const t = translations[lang];
        
        // Update all text elements
        document.getElementById('title').textContent = t.title;
        document.getElementById('subtitle').textContent = t.subtitle;
        document.getElementById('event1-date').textContent = t.event1Date;
        document.getElementById('event1-title').textContent = t.event1Title;
        document.getElementById('event1-desc').textContent = t.event1Desc;
        document.getElementById('event2-date').textContent = t.event2Date;
        document.getElementById('event2-title').textContent = t.event2Title;
        document.getElementById('event2-desc').textContent = t.event2Desc;
        document.getElementById('event3-date').textContent = t.event3Date;
        document.getElementById('event3-title').textContent = t.event3Title;
        document.getElementById('event3-desc').textContent = t.event3Desc;
        document.getElementById('quiz-title').textContent = t.quizTitle;
        document.getElementById('q1-text').textContent = t.q1Text;
        document.getElementById('q1-option1').textContent = t.q1Option1;
        document.getElementById('q1-option2').textContent = t.q1Option2;
        document.getElementById('q1-option3').textContent = t.q1Option3;
        document.getElementById('submit-quiz').textContent = t.submitQuiz;
        document.getElementById('results-title').textContent = t.resultsTitle;
        document.getElementById('retry-quiz').textContent = t.retryQuiz;
        document.getElementById('more-topics').innerHTML = t.moreTopics + 
            `<a href="#" class="footer-link">${t.heritageLink}</a> | 
            <a href="#" class="footer-link">${t.regionsLink}</a>`;
        document.getElementById('footer-text').textContent = t.footerText;
        languageToggle.textContent = t.languageToggle;
    }

    // Language toggle
    languageToggle.addEventListener('click', function() {
        isAmharic = !isAmharic;
        updateLanguage();
    });

    // Submit quiz
    submitBtn.addEventListener('click', function() {
        const selectedOption = document.querySelector('input[name="q1"]:checked');
        const t = isAmharic ? translations.am : translations.en;
        
        if (!selectedOption) {
            alert(t.noSelection);
            return;
        }
        
        let score = 0;
        let feedback = '';
        
        if (selectedOption.value === 'a') {
            score = 1;
            feedback = `<p class="correct">${t.correctFeedback}</p>`;
        } else {
            feedback = `<p class="incorrect">${t.incorrectFeedback}</p>`;
        }
        
        scoreElement.textContent = score;
        feedbackElement.innerHTML = feedback;
        resultsDiv.classList.remove('hidden');
        
        window.scrollTo({
            top: resultsDiv.offsetTop,
            behavior: 'smooth'
        });
    });

    // Retry quiz
    retryBtn.addEventListener('click', function() {
        document.querySelectorAll('input[type="radio"]').forEach(radio => {
            radio.checked = false;
        });
        resultsDiv.classList.add('hidden');
    });

    // Initialize
    updateLanguage();
});