document.addEventListener('DOMContentLoaded', function() {
    // Language state
    let isAmharic = false;
    
    // Translations
    const translations = {
        en: {
            title: "Ethiopian Cultural Heritage",
            subtitle: "Treasures of Our Ancestors",
            heritage1Title: "Rock-Hewn Churches of Lalibela",
            heritage1Desc: "11 medieval monolithic churches carved out of rock in the 12th century under King Lalibela.",
            heritage1Details: [
                "Recognized as a UNESCO World Heritage Site, these churches represent one of Christianity's most important sites.",
                "Annual pilgrimage site during Ethiopian Christmas (Genna) on January 7."
            ],
            heritage2Title: "Axum Obelisks",
            heritage2Desc: "Giant stone monuments dating back to 4th century AD, marking royal tombs.",
            heritage2Details: [
                "The tallest standing obelisk reaches 24 meters and weighs 160 tons.",
                "Symbols of the ancient Axumite civilization's architectural prowess."
            ],
            heritage3Title: "Historic Harar Jugol",
            heritage3Desc: "Walled city with 82 mosques and 102 shrines, center of Islamic culture.",
            heritage3Details: [
                "Known for its unique house designs and hyena feeding tradition.",
                "UNESCO World Heritage Site since 2006."
            ],
            learnMore: "Learn More",
            quizTitle: "Cultural Knowledge Test",
            q1Text: "1. What is unique about Lalibela's churches?",
            q1Option1: "They're made of gold",
            q1Option2: "Carved from single rock blocks",
            q1Option3: "Built underwater",
            submitQuiz: "Submit Answers",
            resultsTitle: "Your Results",
            retryQuiz: "Try Again",
            moreTopics: "More topics: ",
            regionsLink: "Ethiopian Regions",
            historyLink: "Historical Events",
            footerText: "Preserving Ethiopia's rich cultural legacy",
            languageToggle: "አማርኛ / Amharic",
            correctFeedback: "Correct! The churches were carved from single rock blocks.",
            incorrectFeedback: "Incorrect. The correct answer is: Carved from single rock blocks."
        },
        am: {
            title: "የኢትዮጵያ ባህላዊ ቅርስ",
            subtitle: "የአያቶቻችን ገንዘቦች",
            heritage1Title: "የላሊበላ ከውጭ የተጎራበቱ ቤተክርስቲያናት",
            heritage1Desc: "በ12ኛው ክፍለ ዘመን በንጉሥ �ላሊበላ የተሠሩ 11 ከዓለት የተጎራበቱ የመካከለኛ ዘመን ቤተክርስቲያናት።",
            heritage1Details: [
                "ዩኔስኮ ዓለም አቀፍ ቅርስ በመሆን ከክርስትና በጣም አስፈላጊ የሆኑ ቦታዎች አንዱን ይወክላሉ።",
                "በየካቲት 7 (ገና) የኢትዮጵያ የገና በዓል የሚከበርበት የጎብኝዎች ቦታ።"
            ],
            heritage2Title: "የአክሱም ሐውልቶች",
            heritage2Desc: "በ4ኛው ክፍለ ዘመን የተሠሩ የነገሥታት መቃብሮችን የሚገልጹ ግዙፍ የድንጋይ ሐውልቶች።",
            heritage2Details: [
                "ከፍተኛው ሐውልት 24 ሜትር ቁመት እና 160 ቶን ክብደት አለው።",
                "የጥንታዊው የአክሱም ሥልጣኔ የሥነ ሕንፃ ክእልትን የሚያሳዩ ምልክቶች።"
            ],
            heritage3Title: "ታሪካዊ የሐረር ጁጎል",
            heritage3Desc: "82 መስጊዶች እና 102 መታሰቢያ ቦታዎች ያሉት የተጠለለ ከተማ፣ የእስልምና ባህል ማዕከል።",
            heritage3Details: [
                "በተለየ የቤት ዲዛይኖች እና በዝብ ምግብ ማቅረብ ልምድ ይታወቃል።",
                "ከ2006 ጀምሮ ዩኔስኮ ዓለም አቀፍ ቅርስ ተደርጎ የተመዘገበ።"
            ],
            learnMore: "ተጨማሪ ይወቁ",
            quizTitle: "የባህል እውቀት ፈተና",
            q1Text: "1. የላሊበላ ቤተክርስቲያናት ምን ያህል ልዩ ናቸው?",
            q1Option1: "ከወርቅ የተሠሩ",
            q1Option2: "ከአንድ የድንጋይ ክፍል የተጎራበቱ",
            q1Option3: "በውሃ ውስጥ የተሠሩ",
            submitQuiz: "መልሶችን አስገባ",
            resultsTitle: "ውጤቶችዎ",
            retryQuiz: "እንደገና ይሞክሩ",
            moreTopics: "ተጨማሪ ርዕሶች: ",
            regionsLink: "የኢትዮጵያ ክልሎች",
            historyLink: "ታሪካዊ ክስተቶች",
            footerText: "የኢትዮጵያን ሀብታም ባህላዊ ቅርስ መያዝ",
            languageToggle: "English / እንግሊዝኛ",
            correctFeedback: "ትክክል! ቤተክርስቲያናቱ ከአንድ የድንጋይ ክፍል ተጎርብመው የተሠሩ ናቸው።",
            incorrectFeedback: "ትክክል አይደለም። ትክክለኛው መልስ፡ ከአንድ የድንጋይ ክፍል የተጎራበቱ።"
        }
    };

    // DOM elements
    const languageToggle = document.getElementById('language-toggle');
    const learnMoreBtns = document.querySelectorAll('.learn-more');
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitBtn = document.getElementById('submit-quiz');
    const retryBtn = document.getElementById('retry-quiz');
    const scoreElement = document.getElementById('score');
    const feedbackElement = document.getElementById('feedback');

    // Update language
    function updateLanguage() {
        const lang = isAmharic ? 'am' : 'en';
        const t = translations[lang];
        
        // Update all text elements
        document.getElementById('title').textContent = t.title;
        document.getElementById('subtitle').textContent = t.subtitle;
        document.getElementById('heritage1-title').textContent = t.heritage1Title;
        document.getElementById('heritage1-desc').textContent = t.heritage1Desc;
        document.getElementById('heritage2-title').textContent = t.heritage2Title;
        document.getElementById('heritage2-desc').textContent = t.heritage2Desc;
        document.getElementById('heritage3-title').textContent = t.heritage3Title;
        document.getElementById('heritage3-desc').textContent = t.heritage3Desc;
        document.querySelectorAll('.learn-more').forEach(btn => {
            btn.textContent = t.learnMore;
        });
        document.getElementById('quiz-title').textContent = t.quizTitle;
        document.getElementById('q1-text').textContent = t.q1Text;
        document.getElementById('q1-option1').textContent = t.q1Option1;
        document.getElementById('q1-option2').textContent = t.q1Option2;
        document.getElementById('q1-option3').textContent = t.q1Option3;
        document.getElementById('submit-quiz').textContent = t.submitQuiz;
        document.getElementById('results-title').textContent = t.resultsTitle;
        document.getElementById('retry-quiz').textContent = t.retryQuiz;
        document.getElementById('more-topics').innerHTML = t.moreTopics + 
            `<a href="#" class="footer-link">${t.regionsLink}</a> | 
            <a href="#" class="footer-link">${t.historyLink}</a>`;
        document.getElementById('footer-text').textContent = t.footerText;
        languageToggle.textContent = t.languageToggle;
        
        // Update details
        const details1 = document.getElementById('heritage1-details');
        details1.innerHTML = t.heritage1Details.map(detail => `<p>${detail}</p>`).join('');
        
        const details2 = document.getElementById('heritage2-details');
        details2.innerHTML = t.heritage2Details.map(detail => `<p>${detail}</p>`).join('');
        
        const details3 = document.getElementById('heritage3-details');
        details3.innerHTML = t.heritage3Details.map(detail => `<p>${detail}</p>`).join('');
    }

    // Language toggle
    languageToggle.addEventListener('click', function() {
        isAmharic = !isAmharic;
        updateLanguage();
    });

    // Show details when Learn More is clicked
    learnMoreBtns.forEach((btn, index) => {
        btn.addEventListener('click', function() {
            const detailsId = `heritage${index+1}-details`;
            const details = document.getElementById(detailsId);
            details.classList.toggle('hidden');
            this.textContent = details.classList.contains('hidden') ? 
                (isAmharic ? translations.am.learnMore : translations.en.learnMore) : 
                (isAmharic ? 'ያነሰ አሳይ' : 'Show Less');
            
            // Show quiz after viewing details
            if (!details.classList.contains('hidden')) {
                quizContainer.classList.remove('hidden');
                window.scrollTo({
                    top: quizContainer.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Submit quiz
    submitBtn.addEventListener('click', function() {
        const selectedOption = document.querySelector('input[name="q1"]:checked');
        const t = isAmharic ? translations.am : translations.en;
        
        if (!selectedOption) {
            alert(isAmharic ? "እባክዎ መልስ ይምረጡ!" : "Please select an answer!");
            return;
        }
        
        let score = 0;
        let feedback = '';
        
        if (selectedOption.value === 'b') {
            score = 1;
            feedback = `<p class="correct">${t.correctFeedback}</p>`;
        } else {
            feedback = `<p class="incorrect">${t.incorrectFeedback}</p>`;
        }
        
        scoreElement.textContent = score;
        feedbackElement.innerHTML = feedback;
        quizContainer.classList.add('hidden');
        resultsContainer.classList.remove('hidden');
        
        window.scrollTo({
            top: resultsContainer.offsetTop,
            behavior: 'smooth'
        });
    });

    // Retry quiz
    retryBtn.addEventListener('click', function() {
        document.querySelectorAll('input[type="radio"]').forEach(radio => {
            radio.checked = false;
        });
        resultsContainer.classList.add('hidden');
        quizContainer.classList.remove('hidden');
    });

    // Initialize
    updateLanguage();
});