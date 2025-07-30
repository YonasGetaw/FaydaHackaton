document.addEventListener('DOMContentLoaded', function() {
    // Language state
    let isAmharic = false;
    
    // Translations
    const translations = {
        en: {
            title: "Brain Teasers",
            subtitle: "Challenge Your Mind",
            teaser1Title: "Riddle #1",
            teaser1Question: "I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?",
            teaser1Answer: "An echo",
            teaser2Title: "Riddle #2",
            teaser2Question: "The more you take, the more you leave behind. What am I?",
            teaser2Answer: "Footsteps",
            teaser3Title: "Riddle #3",
            teaser3Question: "What has keys but can't open locks, has space but no room, and you can enter but not go in?",
            teaser3Answer: "A keyboard",
            showAnswer: "Show Answer",
            newTeaser: "New Teaser",
            hintBtn: "Get Hint",
            moreChallenges: "More challenges: ",
            decisionLink: "Decision Making",
            puzzleLink: "Logical Puzzles",
            footerText: "Develop your critical thinking skills",
            languageToggle: "አማርኛ / Amharic",
            hintMessage: "Think about sound reflections for the first riddle"
        },
        am: {
            title: "የአንጎል ልምምዶች",
            subtitle: "አእምሮዎን ይፈትሹ",
            teaser1Title: "ጥያቄ #1",
            teaser1Question: "አፍ ሳልኖረኝ እናነሳለሁ፣ ጆሮ ሳልኖረኝ እሰማለሁ። አንድም አካል የለኝም፣ ነገር ግን በነፋስ እንቅስቃሴ አገኛለሁ። ማን ነኝ?",
            teaser1Answer: "ምንጣፍ (ኤኮ)",
            teaser2Title: "ጥያቄ #2",
            teaser2Question: "የበለጠ ሲወስዱት፣ የበለጠ ይተዋል። ማን ነኝ?",
            teaser2Answer: "እርምጃዎች",
            teaser3Title: "ጥያቄ #3",
            teaser3Question: "ቁልፎች አሉት ግን መቆለፊያዎችን ሊከፍት አይችልም፣ ቦታ አለው ግን ክፍል የለውም፣ ማስገባት ትችላለህ ግን መሄድ አትችልም?",
            teaser3Answer: "የቁልፍ ሰሌዳ",
            showAnswer: "መልስ አሳይ",
            newTeaser: "አዲስ ጥያቄ",
            hintBtn: "ማብራሪያ አግኝ",
            moreChallenges: "ተጨማሪ ልምምዶች: ",
            decisionLink: "ውሳኔ መስጠት",
            puzzleLink: "ሎጂካዊ እንቆቅልሾች",
            footerText: "የምርምር ክህሎትዎን ያዳብሩ",
            languageToggle: "English / እንግሊዝኛ",
            hintMessage: "ለመጀመሪያው ጥያቄ ስለ ድምፅ ነጸብራቆች አስቡ"
        }
    };

    // Teasers data
    const teasers = [
        {
            question: translations.en.teaser1Question,
            answer: translations.en.teaser1Answer,
            hint: translations.en.hintMessage
        },
        {
            question: translations.en.teaser2Question,
            answer: translations.en.teaser2Answer,
            hint: "Think about what you leave behind when walking"
        },
        {
            question: translations.en.teaser3Question,
            answer: translations.en.teaser3Answer,
            hint: "Think about something you use every day with keys"
        },
        {
            question: "What has cities but no houses, forests but no trees, and rivers but no water?",
            answer: "A map",
            hint: "It's a representation of places"
        }
    ];

    // DOM elements
    const languageToggle = document.getElementById('language-toggle');
    const showAnswerBtns = document.querySelectorAll('.show-answer');
    const newTeaserBtn = document.querySelector('.new-teaser');
    const hintBtn = document.querySelector('.hint-btn');
    const teaserCards = document.querySelectorAll('.teaser-card');
    const teaserQuestions = document.querySelectorAll('.teaser-question');
    const answers = document.querySelectorAll('.answer');

    // Initialize with first set of teasers
    function initTeasers() {
        for (let i = 0; i < 3; i++) {
            if (teasers[i]) {
                teaserQuestions[i].textContent = isAmharic ? translations.am[`teaser${i+1}Question`] : teasers[i].question;
                answers[i].textContent = isAmharic ? translations.am[`teaser${i+1}Answer`] : teasers[i].answer;
            }
        }
    }

    // Update language
    function updateLanguage() {
        const lang = isAmharic ? 'am' : 'en';
        const t = translations[lang];
        
        document.getElementById('title').textContent = t.title;
        document.getElementById('subtitle').textContent = t.subtitle;
        document.getElementById('teaser1-title').textContent = t.teaser1Title;
        document.getElementById('teaser2-title').textContent = t.teaser2Title;
        document.getElementById('teaser3-title').textContent = t.teaser3Title;
        document.getElementById('show-answer1').textContent = t.showAnswer;
        document.getElementById('show-answer2').textContent = t.showAnswer;
        document.getElementById('show-answer3').textContent = t.showAnswer;
        document.getElementById('new-teaser').textContent = t.newTeaser;
        document.getElementById('hint-btn').textContent = t.hintBtn;
        document.getElementById('more-challenges').innerHTML = t.moreChallenges + 
            `<a href="#" class="footer-link">${t.decisionLink}</a> | 
            <a href="#" class="footer-link">${t.puzzleLink}</a>`;
        document.getElementById('footer-text').textContent = t.footerText;
        languageToggle.textContent = t.languageToggle;
        
        // Update current teasers
        initTeasers();
    }

    // Language toggle
    languageToggle.addEventListener('click', function() {
        isAmharic = !isAmharic;
        updateLanguage();
    });

    // Show answer when button clicked
    showAnswerBtns.forEach((btn, index) => {
        btn.addEventListener('click', function() {
            answers[index].classList.toggle('hidden');
            this.textContent = answers[index].classList.contains('hidden') ? 
                (isAmharic ? translations.am.showAnswer : translations.en.showAnswer) : 
                (isAmharic ? 'መልስ ደብቅ' : 'Hide Answer');
        });
    });

    // Get new random teasers
    newTeaserBtn.addEventListener('click', function() {
        const shuffled = [...teasers].sort(() => 0.5 - Math.random());
        
        teaserCards.forEach((card, index) => {
            if (shuffled[index]) {
                card.querySelector('.teaser-question').textContent = shuffled[index].question;
                card.querySelector('.answer').textContent = shuffled[index].answer;
                card.querySelector('.answer').classList.add('hidden');
                card.querySelector('.show-answer').textContent = 
                    isAmharic ? translations.am.showAnswer : translations.en.showAnswer;
            }
        });
    });

    // Show hint for the first teaser
    hintBtn.addEventListener('click', function() {
        const currentTeaserIndex = Array.from(teaserQuestions).findIndex(q => 
            q.textContent === teaserQuestions[0].textContent
        );
        
        if (currentTeaserIndex !== -1 && teasers[currentTeaserIndex]) {
            alert(isAmharic ? 
                `ማብራሪያ: ${teasers[currentTeaserIndex].hint}` : 
                `Hint: ${teasers[currentTeaserIndex].hint}`);
        }
    });

    initTeasers();
});