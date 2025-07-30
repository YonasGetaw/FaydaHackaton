document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const langBtns = document.querySelectorAll('.lang-btn');
    const levelBtns = document.querySelectorAll('.level-btn');
    const headerTitle = document.getElementById('header-title');
    const headerSubtitle = document.getElementById('header-subtitle');
    const levelTitle = document.getElementById('level-title');
    const passageTitle = document.getElementById('passage-title');
    const passageContent = document.getElementById('passage-content');
    const hearPassageBtn = document.querySelector('.hear-passage');
    const questionsTitle = document.getElementById('questions-title');
    const checkAnswersBtn = document.getElementById('check-answers');
    const resetAnswersBtn = document.getElementById('reset-answers');
    const newPassageBtn = document.getElementById('new-passage');
    const resultsTitle = document.getElementById('results-title');
    const tipsTitle = document.getElementById('tips-title');
    const tip1 = document.getElementById('tip1');
    const tip2 = document.getElementById('tip2');
    const tip3 = document.getElementById('tip3');
    const footerText = document.getElementById('footer-text');
    const footerCopyright = document.getElementById('footer-copyright');
    const footerLinks = document.querySelectorAll('.footer-link');
    const resultsDiv = document.getElementById('results');
    const scoreDiv = document.getElementById('score');
    const feedbackDiv = document.getElementById('feedback');
    
    // Current settings
    let currentLang = 'en';
    let currentLevel = 'beginner';
    
    // UI text translations
    const translations = {
        en: {
            headerTitle: "Reading Comprehension",
            headerSubtitle: "Improve Your Understanding Skills",
            levelTitle: "Choose Your Level",
            hearPassage: "Hear Passage",
            questionsTitle: "Comprehension Questions",
            checkAnswers: "Check Answers",
            resetAnswers: "Reset",
            newPassage: "New Passage",
            resultsTitle: "Your Results",
            tipsTitle: "Tips to Improve",
            tip1: "Read the passage carefully before answering",
            tip2: "Look back at the text to find evidence",
            tip3: "Eliminate obviously wrong answers first",
            footerText: "More reading practice: ",
            footerCopyright: "Made with ❤️ for young readers"
        },
        am: {
            headerTitle: "የንባብ ግንዛቤ",
            headerSubtitle: "የግንዛቤ ክህሎትዎን ያሻሽሉ",
            levelTitle: "ደረጃዎን ይምረጡ",
            hearPassage: "ግጥሙን ያድምጡ",
            questionsTitle: "የግንዛቤ ጥያቄዎች",
            checkAnswers: "መልሶችን ይፈትሹ",
            resetAnswers: "እንደገና ያስጀምሩ",
            newPassage: "አዲስ ግጥም",
            resultsTitle: "ውጤቶችዎ",
            tipsTitle: "ለማሻሻል ምክሮች",
            tip1: "መልስ ከመስጠትዎ በፊት ግጥሙን በጥንቃቄ ያንብቡ",
            tip2: "ማስረጃ ለማግኘት ወደ ግጥሙ ይመለሱ",
            tip3: "በግልጽ የተሳሳቱ መልሶችን በመጀመሪያ ያስወግዱ",
            footerText: "ተጨማሪ የንባብ ልምምድ: ",
            footerCopyright: "ለወጣቶች አንባቢዎች በ❤️ ተሰራ"
        }
    };

    // Passage data by level and language
    const passages = {
        beginner: {
            en: {
                title: "The Amazing Octopus",
                content: [
                    "Octopuses are fascinating sea creatures known for their intelligence and unique abilities. They have eight arms, three hearts, and blue blood. Unlike most creatures, they can change their skin color and texture to blend into their surroundings.",
                    "These clever animals can solve puzzles, open jars, and even use tools. In laboratory tests, octopuses have shown remarkable problem-solving skills. They have short lifespans, typically living only 1-2 years, but during this time they learn quickly and adapt to their environment.",
                    "Octopuses are also masters of escape. They can squeeze through tiny spaces, as their bodies have no bones. Some have been known to leave their tanks in aquariums to catch prey in nearby tanks before returning!"
                ],
                questions: [
                    {
                        question: "How many hearts does an octopus have?",
                        options: ["1", "2", "3"],
                        correct: "c"
                    },
                    {
                        question: "What special ability helps octopuses hide from predators?",
                        options: ["Changing color and texture", "Swimming very fast", "Making loud noises"],
                        correct: "a"
                    },
                    {
                        question: "What evidence shows that octopuses are intelligent?",
                        options: ["They can solve puzzles and use tools", "They have large eyes", "They live in the ocean"],
                        correct: "a"
                    }
                ]
            },
            am: {
                title: "የሚያስደንቅ ኦክቶፓስ",
                content: [
                    "ኦክቶፓስ በአስተሳሰባቸው እና በልዩ ችሎታቸው የሚታወቁ አስደናቂ የባህር ፍጡሮች ናቸው። ስምንት ክንዶች፣ ሶስት ልቦች እና ሰማያዊ ደም አላቸው። ከሌሎች ፍጡሮች በተለየ መልኩ የቆዳቸውን ቀለም እና አቀማመጥ ለውጠው ከአካባቢያቸው ጋር ሊቀላቀሉ ይችላሉ።",
                    "እነዚህ ብልህ እንስሳት እንቆቅልሾችን መፍታት፣ የጠርሙስ መክፈቻ እና መሳሪያዎችን መጠቀም ይችላሉ። በላብራቶሪ ሙከራዎች ኦክቶፓስ አስደናቂ የችግር መፍትሄ ክህሎቶች እንዳላቸው ተረጋግጧል። አጭር የሕይወት ዘመን አላቸው፣ በተለምዶ 1-2 ዓመታት ብቻ ይኖራሉ፣ ነገር ግን በዚህ ጊዜ በፍጥነት ይማራሉ እና ከአካባቢያቸው ጋር ይላማሉ።",
                    "ኦክቶፓስ ከመሸሽም ጋር የሚያውቁ ናቸው። አካላቸው አጥንት ስለሌላቸው በትንሽ ቦታዎች ውስጥ ሊገቡ ይችላሉ። አንዳንዶች ከአካባቢያቸው ገንዳዎች ወጥተው በአጠገባቸው ባሉ ገንዳዎች ውስጥ የሚገኘውን ረሃብ እንዲይዙ ከዚያም እንዲመለሱ ይታወቃል!"
                ],
                questions: [
                    {
                        question: "ኦክቶፓስ ስንት ልብ አለው?",
                        options: ["1", "2", "3"],
                        correct: "c"
                    },
                    {
                        question: "ኦክቶፓስ ከጠላቶች ለመደበቅ የሚረዳው ልዩ ችሎታ ምንድን ነው?",
                        options: ["ቀለም እና አቀማመጥ መቀየር", "በፍጥነት መዋኘት", "ትልቅ ድምፅ ማውጣት"],
                        correct: "a"
                    },
                    {
                        question: "ኦክቶፓስ ብልህ እንስሳ መሆኑን የሚያሳይ ምስክር ምንድን ነው?",
                        options: ["እንቆቅልሾችን መፍታት እና መሳሪያዎችን መጠቀም ይችላል", "ትላልቅ ዓይኖች አሉት", "በባህር ውስጥ ይኖራል"],
                        correct: "a"
                    }
                ]
            }
        },
        intermediate: {
            en: {
                title: "The Water Cycle",
                content: [
                    "The water cycle describes how water moves continuously above and below the Earth's surface. It has four main stages: evaporation, condensation, precipitation, and collection.",
                    "Evaporation occurs when the sun heats water in rivers, lakes, or oceans and turns it into vapor. This vapor rises into the air. When the water vapor cools, it condenses into tiny droplets that form clouds through condensation.",
                    "When these droplets become too heavy, they fall as precipitation - rain, snow, sleet or hail. The water then collects in oceans, lakes and rivers, and the cycle begins again."
                ],
                questions: [
                    {
                        question: "What is the first stage of the water cycle?",
                        options: ["Condensation", "Evaporation", "Precipitation"],
                        correct: "b"
                    },
                    {
                        question: "What causes water to evaporate?",
                        options: ["The moon's gravity", "Heat from the sun", "Wind currents"],
                        correct: "b"
                    },
                    {
                        question: "What happens during condensation?",
                        options: ["Water falls to the ground", "Water vapor forms clouds", "Plants absorb water"],
                        correct: "b"
                    }
                ]
            },
            am: {
                title: "የውሃ ዑደት",
                content: [
                    "የውሃ ዑደት ውሃ ከምድር በላይ እና በታች በቀጣይነት እንዴት እንደሚንቀሳቀስ ይገልጻል። አራት ዋና ደረጃዎች አሉት፡ አየር ማውጣት፣ ማጠናከሪያ፣ ዝናብ እና ስብሰባ።",
                    "አየር ማውጣት ፀሐይ ውሃን በወንዞች፣ ሀይቆች ወይም ውቅያኖሶች ውስጥ ሲሞቅ እና ወደ ትኩሳት ሲቀየር ይከሰታል። ይህ ትኩሳት ወደ አየር ይወጣል። የውሃ ትኩሳቱ ሲቀዘቅዝ ወደ ትናንሽ ጠብታዎች ይቀየራል እነሱም ደመናዎችን ይፈጥራሉ።",
                    "እነዚህ ጠብታዎች በጣም ከባድ ሲሆኑ እንደ ዝናብ፣ በረዶ፣ ዝናብ በረዶ ወይም በረዶ ይወድቃሉ። ውሃው ከዚያ በውቅያኖሶች፣ ሀይቆች እና ወንዞች ውስጥ ይሰበሰባል እና ዑደቱ እንደገና ይጀምራል።"
                ],
                questions: [
                    {
                        question: "የውሃ ዑደት የመጀመሪያ ደረጃ ምንድን ነው?",
                        options: ["ማጠናከሪያ", "አየር ማውጣት", "ዝናብ"],
                        correct: "b"
                    },
                    {
                        question: "ውሃ እንዲያጠራ የሚያደርገው ምንድን ነው?",
                        options: ["የጨረቃ ስበት", "ከፀሐይ ሙቀት", "የነፋስ ፍሰቶች"],
                        correct: "b"
                    },
                    {
                        question: "በማጠናከሪያ ጊዜ ምን ይከሰታል?",
                        options: ["ውሃ ወደ ምድር ይወድቃል", "የውሃ ትኩሳት ደመናዎችን ይፈጥራል", "ተክሎች ውሃን ይጠጣሉ"],
                        correct: "b"
                    }
                ]
            }
        },
        advanced: {
            en: {
                title: "Ancient Egyptian Pyramids",
                content: [
                    "The ancient Egyptian pyramids are among the most impressive structures ever built. The Great Pyramid of Giza, constructed around 2560 BCE, was the tallest man-made structure for over 3,800 years.",
                    "Pyramids were built as tombs for pharaohs and their consorts. Egyptians believed in an afterlife and filled the pyramids with items the pharaoh might need, including food, furniture, and gold.",
                    "Construction methods remain somewhat mysterious. Workers likely used ramps, sledges, and levers to move the massive stone blocks. Recent discoveries suggest workers were well-fed and organized, not slaves as once thought."
                ],
                questions: [
                    {
                        question: "How long was the Great Pyramid the tallest structure?",
                        options: ["100 years", "1,000 years", "Over 3,800 years"],
                        correct: "c"
                    },
                    {
                        question: "Why were items placed in pyramids?",
                        options: ["For the pharaoh's afterlife", "To show wealth to visitors", "As offerings to gods"],
                        correct: "a"
                    },
                    {
                        question: "What recent discovery changed views about workers?",
                        options: ["They were slaves", "They were well-fed", "They used magic"],
                        correct: "b"
                    }
                ]
            },
            am: {
                title: "የጥንታዊ ግብጽ ፒራሚዶች",
                content: [
                    "የጥንታዊ ግብጽ ፒራሚዶች ከተገነቡት በጣም አስደናቂ መዋቅሮች ናቸው። የጊዛ ታላቁ ፒራሚድ በ 2560 ዓክልበ. የተገነባ ሲሆን ከ3,800 ዓመታት በላይ ከፍተኛው ሰው ሠራሽ መዋቅር ነበር።",
                    "ፒራሚዶች ለፈርዖኖች እና ለባልደረቦቻቸው መቃብር ተገንብተው ነበር። ግብጻውያን በሞት በኋላ ሕይወት ያምኑ ነበር እና ፒራሚዶችን ፈርዖኑ ሊያስፈልገው የሚችል ነገር ሁሉ ከምግብ እስከ ወርቅ ድረስ ይሞላሉ።",
                    "የግንባታ ዘዴዎች በተወሰነ ደረጃ ምስጢራዊ ናቸው። ሠራተኞች ትላልቅ የድንጋይ ክፍሎችን ለመንቀሳቀስ ራምፖችን፣ ስሌዶችን እና ማንሸራተቻዎችን ይጠቀሙ ነበር። የቅርብ ጊዜ ግኝቶች ሠራተኞች በደንብ የተመገቡ እና በደንብ የተደራጁ እንደነበሩ ያሳያሉ፣ እንደበፊቱ የሚታሰብባቸው ባሮች አልነበሩም።"
                ],
                questions: [
                    {
                        question: "ታላቁ ፒራሚድ ለምን ያህል ጊዜ ከፍተኛው መዋቅር ነበር?",
                        options: ["100 ዓመታት", "1,000 ዓመታት", "ከ3,800 ዓመታት በላይ"],
                        correct: "c"
                    },
                    {
                        question: "ፒራሚዶች ውስጥ ነገሮች ለምን ይቀመጡ ነበር?",
                        options: ["ለፈርዖኑ የሞት በኋላ ሕይወት", "ለጎብኝዎች ሀብት ለማሳየት", "ለአማልክት መስዋዕት ለመሆን"],
                        correct: "a"
                    },
                    {
                        question: "ስለ ሠራተኞች አስተሳሰብ የቀየረው የቅርብ ጊዜ ግኝት ምንድን ነው?",
                        options: ["ባሮች ነበሩ", "በደንብ ይመገቡ ነበር", "ጠንካራ ኃይል ይጠቀሙ ነበር"],
                        correct: "b"
                    }
                ]
            }
        }
    };

    // Set language
    function setLanguage(lang) {
        currentLang = lang;
        
        // Update UI elements
        headerTitle.textContent = translations[lang].headerTitle;
        headerSubtitle.textContent = translations[lang].headerSubtitle;
        levelTitle.textContent = translations[lang].levelTitle;
        hearPassageBtn.textContent = translations[lang].hearPassage;
        questionsTitle.textContent = translations[lang].questionsTitle;
        checkAnswersBtn.textContent = translations[lang].checkAnswers;
        resetAnswersBtn.textContent = translations[lang].resetAnswers;
        newPassageBtn.textContent = translations[lang].newPassage;
        resultsTitle.textContent = translations[lang].resultsTitle;
        tipsTitle.textContent = translations[lang].tipsTitle;
        tip1.textContent = translations[lang].tip1;
        tip2.textContent = translations[lang].tip2;
        tip3.textContent = translations[lang].tip3;
        footerText.innerHTML = translations[lang].footerText;
        footerCopyright.textContent = translations[lang].footerCopyright;
        
        // Update footer links
        footerLinks.forEach(link => {
            link.textContent = link.getAttribute(`data-${lang}`);
        });
        
        // Update level buttons
        levelBtns.forEach(btn => {
            btn.textContent = btn.getAttribute(`data-${lang}`);
        });
        
        // Load passage for current language and level
        loadPassage(passages[currentLevel][currentLang]);
    }
    
    // Load passage content
    function loadPassage(passage) {
        passageTitle.textContent = passage.title;
        passageContent.innerHTML = passage.content.map(p => `<p>${p}</p>`).join('');
        
        // Update questions
        const questionElements = document.querySelectorAll('.question');
        passage.questions.forEach((q, i) => {
            if (questionElements[i]) {
                // Update question text
                const questionText = questionElements[i].querySelector('p');
                if (questionText) {
                    questionText.textContent = `${i+1}. ${q.question}`;
                }
                
                // Update options
                const options = questionElements[i].querySelectorAll('label span');
                q.options.forEach((opt, j) => {
                    if (options[j]) {
                        options[j].textContent = opt;
                    }
                });
            }
        });
    }
    
    // Language switcher
    langBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Update active button
            langBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Set new language
            const lang = this.dataset.lang;
            setLanguage(lang);
            
            // Reset results
            resultsDiv.classList.add('hidden');
            resetAnswers();
        });
    });
    
    // Level switcher
    levelBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Update active button
            levelBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Load new passage
            currentLevel = this.dataset.level;
            loadPassage(passages[currentLevel][currentLang]);
            
            // Reset results
            resultsDiv.classList.add('hidden');
            resetAnswers();
        });
    });
    
    // Hear passage read aloud
    hearPassageBtn.addEventListener('click', function() {
        const passageText = passageContent.textContent;
        const utterance = new SpeechSynthesisUtterance(passageText);
        
        // Try to set Amharic voice if available
        if (currentLang === 'am') {
            const voices = speechSynthesis.getVoices();
            const amharicVoice = voices.find(voice => 
                voice.lang.includes('am-ET') || voice.lang.includes('am'));
            if (amharicVoice) {
                utterance.voice = amharicVoice;
            }
        }
        
        utterance.rate = 0.9;
        speechSynthesis.speak(utterance);
    });
    
    // Check answers
    checkAnswersBtn.addEventListener('click', function() {
        let score = 0;
        let feedbackHTML = "";
        
        const currentPassage = passages[currentLevel][currentLang];
        
        currentPassage.questions.forEach((q, i) => {
            const selectedOption = document.querySelector(`input[name="q${i+1}"]:checked`);
            const questionElement = document.querySelectorAll('.question')[i];
            
            if (selectedOption) {
                if (selectedOption.value === q.correct) {
                    score++;
                    feedbackHTML += `<p class="correct">${i+1}. ${currentLang === 'en' ? 'Correct!' : 'ትክክል!'}</p>`;
                    questionElement.style.borderLeft = "4px solid var(--dark-green)";
                } else {
                    feedbackHTML += `<p class="incorrect">${i+1}. ${currentLang === 'en' ? 
                        `Incorrect. The correct answer was "${q.options[q.correct.charCodeAt(0) - 97]}"` : 
                        `ትክክል አይደለም። ትክክለኛው መልስ "${q.options[q.correct.charCodeAt(0) - 97]}" ነበር`}</p>`;
                    questionElement.style.borderLeft = "4px solid var(--red)";
                }
            } else {
                feedbackHTML += `<p class="incorrect">${i+1}. ${currentLang === 'en' ? 
                    `Not answered. The correct answer was "${q.options[q.correct.charCodeAt(0) - 97]}"` : 
                    `አልተመለሰም። ትክክለኛው መልስ "${q.options[q.correct.charCodeAt(0) - 97]}" ነበር`}</p>`;
                questionElement.style.borderLeft = "4px solid var(--red)";
            }
        });
        
        // Display results
        scoreDiv.textContent = `${currentLang === 'en' ? 'Score' : 'ውጤት'}: ${score}/${currentPassage.questions.length}`;
        feedbackDiv.innerHTML = feedbackHTML;
        resultsDiv.classList.remove('hidden');
        
        // Scroll to results
        resultsDiv.scrollIntoView({ behavior: 'smooth' });
    });
    
    // Reset answers
    resetAnswersBtn.addEventListener('click', resetAnswers);
    
    function resetAnswers() {
        document.querySelectorAll('input[type="radio"]').forEach(radio => {
            radio.checked = false;
        });
        
        document.querySelectorAll('.question').forEach(q => {
            q.style.borderLeft = "1px solid #ddd";
        });
        
        resultsDiv.classList.add('hidden');
    }
    
    // New passage (same level)
    newPassageBtn.addEventListener('click', function() {
        if (confirm(currentLang === 'en' ? 
            "This will reset your current progress. Load a new passage?" : 
            "ይህ የአሁኑን ሂደትዎን ዳግም ያስጀምራል። አዲስ ግጥም መጫን ይፈልጋሉ?")) {
            loadPassage(passages[currentLevel][currentLang]);
            resetAnswers();
        }
    });
    
    // Initialize with English language and beginner level
    setLanguage('en');
    
    // Load voices when they become available
    speechSynthesis.onvoiceschanged = function() {
        console.log("Voices loaded");
    };
});