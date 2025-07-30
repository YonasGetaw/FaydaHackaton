document.addEventListener('DOMContentLoaded', function() {
    // Language toggle state
    let isAmharic = false;
    
    // Translations
    const translations = {
        en: {
            title: "Internet Safety",
            subtitle: "Stay Safe Online",
            passwordsTitle: "Strong Passwords",
            passwordsDesc: "Create passwords with at least 12 characters, mixing letters, numbers, and symbols.",
            phishingTitle: "Phishing Scams",
            phishingDesc: "Never click suspicious links or share personal info in unexpected messages.",
            privacyTitle: "Privacy Settings",
            privacyDesc: "Adjust social media privacy settings to control who sees your information.",
            learnMore: "Learn More",
            quizTitle: "Test Your Knowledge",
            q1Text: "1. What makes a strong password?",
            q1Option1: "Your pet's name",
            q1Option2: "Random letters, numbers, and symbols",
            q1Option3: "Your birthday",
            q2Text: "2. What is a common sign of a phishing email?",
            q2Option1: "It comes from a known contact",
            q2Option2: "It asks for personal information urgently",
            q2Option3: "It has perfect spelling and grammar",
            q3Text: "3. Why should you review privacy settings?",
            q3Option1: "To make your account less secure",
            q3Option2: "To control who can see your information",
            q3Option3: "To increase the number of ads you see",
            submitQuiz: "Submit Answers",
            resultsTitle: "Your Results",
            resourcesText: "More resources: ",
            privacyLink: "Online Privacy Guide",
            securityLink: "Security Tips",
            footerText: "Made with ❤️ for digital safety",
            languageToggle: "አማርኛ / Amharic",
            correctFeedback: "Correct! Strong passwords use random combinations.",
            incorrectFeedback: "Incorrect. The right answer is: Random letters, numbers, and symbols.",
            correctPhishingFeedback: "Correct! Phishing often creates urgency to get your information.",
            incorrectPhishingFeedback: "Incorrect. Phishing often asks for personal information urgently.",
            correctPrivacyFeedback: "Correct! Privacy settings help control your information visibility.",
            incorrectPrivacyFeedback: "Incorrect. Privacy settings help control who sees your information."
        },
        am: {
            title: "የኢንተርኔት ደህንነት",
            subtitle: "በመስመር ላይ ደህንነትዎን ይጠብቁ",
            passwordsTitle: "ጠንካራ የይለፍ ቃላት",
            passwordsDesc: "ቢያንስ 12 ፊደላት፣ ቁጥሮች እና ምልክቶችን በማያያዝ የይለፍ ቃላትን ይፍጠሩ።",
            phishingTitle: "የፊሺንግ ማጭበርበር",
            phishingDesc: "የማያውቁትን አገናኞች አትጫኑ ወይም የግል መረጃዎን በማያስበው መልእክት አትስጡ።",
            privacyTitle: "የግላዊነት ቅንብሮች",
            privacyDesc: "ማን መረጃዎን እንደሚያይ ለመቆጣጠር የማህበራዊ ሚዲያ የግላዊነት ቅንብሮችን ያስተካክሉ።",
            learnMore: "ተጨማሪ ይወቁ",
            quizTitle: "እውቀትዎን ይፈትሹ",
            q1Text: "1. ጠንካራ የይለፍ ቃል ምንድን ነው?",
            q1Option1: "የቤት እንስሳዎ ስም",
            q1Option2: "የዘፈቀደ ፊደላት፣ ቁጥሮች እና ምልክቶች",
            q1Option3: "የልደት ቀንዎ",
            q2Text: "2. የፊሺንግ ኢሜል የተለመደ ምልክት ምንድን ነው?",
            q2Option1: "ከሚታወቅ እውቂያ ይመጣል",
            q2Option2: "የግል መረጃዎን በአስቸኳይ ይጠይቃል",
            q2Option3: "ፍጹም የፊደል እና �ና ዋና ህጎች አሉት",
            q3Text: "3. የግላዊነት ቅንብሮችን ለምን ማረም አለብዎት?",
            q3Option1: "መለያዎን ያነሰ ደህንነቱ የተጠበቀ ለማድረግ",
            q3Option2: "ማን መረጃዎን እንደሚያይ ለመቆጣጠር",
            q3Option3: "የሚታዩትን ማስታወቂያዎች ቁጥር ለመጨመር",
            submitQuiz: "መልሶችን አስገባ",
            resultsTitle: "ውጤቶችዎ",
            resourcesText: "ተጨማሪ ምንጮች: ",
            privacyLink: "የመስመር ላይ ግላዊነት መመሪያ",
            securityLink: "የደህንነት ምክሮች",
            footerText: "ለዲጂታል ደህንነት በ❤️ የተሰራ",
            languageToggle: "English / እንግሊዝኛ",
            correctFeedback: "ትክክል! ጠንካራ የይለፍ ቃላት �ዘፈቀደ ጥምረቶችን ይጠቀማሉ።",
            incorrectFeedback: "ትክክል አይደለም። ትክክለኛው መልስ፡ የዘፈቀደ ፊደላት፣ ቁጥሮች እና ምልክቶች።",
            correctPhishingFeedback: "ትክክል! ፊሺንግ ብዙውን ጊዜ መረጃዎን ለማግኘት አስቸኳይነት ይፈጥራል።",
            incorrectPhishingFeedback: "ትክክል አይደለም። ፊሺንግ ብዙውን ጊዜ የግል መረጃዎን በአስቸኳይ ይጠይቃል።",
            correctPrivacyFeedback: "ትክክል! የግላዊነት ቅንብሮች የመረጃዎን ታይነት ለመቆጣጠር ይረዳሉ።",
            incorrectPrivacyFeedback: "ትክክል አይደለም። የግላዊነት ቅንብሮች ማን መረጃዎን እንደሚያይ ለመቆጣጠር ይረዳሉ።"
        }
    };

    // DOM elements
    const languageToggle = document.getElementById('language-toggle');
    const learnMoreBtns = document.querySelectorAll('.learn-more');
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitBtn = document.querySelector('.submit-quiz');
    const retryBtn = document.querySelector('.retry-quiz');
    const scoreElement = document.getElementById('score');
    const feedbackElement = document.getElementById('feedback');
    const allQuestions = document.querySelectorAll('.question');
    
    // Current quiz type
    let currentQuizType = '';
    
    // Language toggle
    languageToggle.addEventListener('click', function() {
        isAmharic = !isAmharic;
        updateLanguage();
    });
    
    function updateLanguage() {
        const lang = isAmharic ? 'am' : 'en';
        const t = translations[lang];
        
        // Update all text elements
        document.getElementById('title').textContent = t.title;
        document.getElementById('subtitle').textContent = t.subtitle;
        document.getElementById('passwords-title').textContent = t.passwordsTitle;
        document.getElementById('passwords-desc').textContent = t.passwordsDesc;
        document.getElementById('phishing-title').textContent = t.phishingTitle;
        document.getElementById('phishing-desc').textContent = t.phishingDesc;
        document.getElementById('privacy-title').textContent = t.privacyTitle;
        document.getElementById('privacy-desc').textContent = t.privacyDesc;
        document.querySelectorAll('.learn-more').forEach(btn => {
            btn.textContent = t.learnMore;
        });
        document.getElementById('quiz-title').textContent = t.quizTitle;
        document.getElementById('q1-text').textContent = t.q1Text;
        document.getElementById('q1-option1').textContent = t.q1Option1;
        document.getElementById('q1-option2').textContent = t.q1Option2;
        document.getElementById('q1-option3').textContent = t.q1Option3;
        document.getElementById('q2-text').textContent = t.q2Text;
        document.getElementById('q2-option1').textContent = t.q2Option1;
        document.getElementById('q2-option2').textContent = t.q2Option2;
        document.getElementById('q2-option3').textContent = t.q2Option3;
        document.getElementById('q3-text').textContent = t.q3Text;
        document.getElementById('q3-option1').textContent = t.q3Option1;
        document.getElementById('q3-option2').textContent = t.q3Option2;
        document.getElementById('q3-option3').textContent = t.q3Option3;
        document.querySelector('.submit-quiz').textContent = t.submitQuiz;
        document.getElementById('results-title').textContent = t.resultsTitle;
        document.getElementById('resources-text').innerHTML = t.resourcesText + 
            `<a href="#" class="footer-link">${t.privacyLink}</a> | 
            <a href="#" class="footer-link">${t.securityLink}</a>`;
        document.getElementById('footer-text').textContent = t.footerText;
        languageToggle.textContent = t.languageToggle;
    }
    
    // Show quiz when Learn More is clicked
    learnMoreBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            currentQuizType = this.dataset.quiz;
            allQuestions.forEach(q => q.classList.add('hidden'));
            
            // Show only the relevant question
            if (currentQuizType === 'passwords') {
                document.getElementById('question1').classList.remove('hidden');
            } else if (currentQuizType === 'phishing') {
                document.getElementById('question2').classList.remove('hidden');
            } else if (currentQuizType === 'privacy') {
                document.getElementById('question3').classList.remove('hidden');
            }
            
            quizContainer.classList.remove('hidden');
            resultsContainer.classList.add('hidden');
            
            // Scroll to quiz section smoothly
            window.scrollTo({
                top: quizContainer.offsetTop - 20,
                behavior: 'smooth'
            });
        });
    });
    
    // Submit quiz
    submitBtn.addEventListener('click', function() {
        let selectedOption;
        let correctAnswer;
        let correctFeedback;
        let incorrectFeedback;
        
        if (currentQuizType === 'passwords') {
            selectedOption = document.querySelector('input[name="q1"]:checked');
            correctAnswer = 'b';
            correctFeedback = isAmharic ? translations.am.correctFeedback : translations.en.correctFeedback;
            incorrectFeedback = isAmharic ? translations.am.incorrectFeedback : translations.en.incorrectFeedback;
        } else if (currentQuizType === 'phishing') {
            selectedOption = document.querySelector('input[name="q2"]:checked');
            correctAnswer = 'b';
            correctFeedback = isAmharic ? translations.am.correctPhishingFeedback : translations.en.correctPhishingFeedback;
            incorrectFeedback = isAmharic ? translations.am.incorrectPhishingFeedback : translations.en.incorrectPhishingFeedback;
        } else if (currentQuizType === 'privacy') {
            selectedOption = document.querySelector('input[name="q3"]:checked');
            correctAnswer = 'b';
            correctFeedback = isAmharic ? translations.am.correctPrivacyFeedback : translations.en.correctPrivacyFeedback;
            incorrectFeedback = isAmharic ? translations.am.incorrectPrivacyFeedback : translations.en.incorrectPrivacyFeedback;
        }
        
        if (!selectedOption) {
            alert(isAmharic ? "እባክዎ መልስ ይምረጡ!" : "Please select an answer!");
            return;
        }
        
        let score = 0;
        let feedback = '';
        
        if (selectedOption.value === correctAnswer) {
            score = 1;
            feedback = `<p class="correct">${correctFeedback}</p>`;
        } else {
            feedback = `<p class="incorrect">${incorrectFeedback}</p>`;
        }
        
        scoreElement.textContent = score;
        feedbackElement.innerHTML = feedback;
        quizContainer.classList.add('hidden');
        resultsContainer.classList.remove('hidden');
        
        window.scrollTo({
            top: resultsContainer.offsetTop - 20,
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
        
        window.scrollTo({
            top: quizContainer.offsetTop - 20,
            behavior: 'smooth'
        });
    });
});