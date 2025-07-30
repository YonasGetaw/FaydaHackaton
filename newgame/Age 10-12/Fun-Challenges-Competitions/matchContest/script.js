document.addEventListener('DOMContentLoaded', function() {
    // Language state
    let isAmharic = false;
    
    // Translations
    const translations = {
        en: {
            title: "Math Contest",
            subtitle: "Test Your Calculation Skills",
            problemTitle: "Problem #1",
            problemText: "What is 15 × (7 + 3) - 25?",
            inputPlaceholder: "Enter your answer",
            submitAnswer: "Submit Answer",
            nextProblem: "Next Problem",
            timeLabel: "Time:",
            scoreLabel: "Score:",
            correctFeedback: "Correct! Well done!",
            incorrectFeedback: "Incorrect. The answer is 125.",
            moreChallenges: "More challenges: ",
            scienceLink: "Science Quiz",
            spellingLink: "Spelling Bee",
            footerText: "Sharpen your mathematical thinking",
            languageToggle: "አማርኛ / Amharic"
        },
        am: {
            title: "የሂሳብ ውድድር",
            subtitle: "የሒሳብ ክህሎትዎን ይሞክሩ",
            problemTitle: "ችግር #1",
            problemText: "15 × (7 + 3) - 25 ምንድን ነው?",
            inputPlaceholder: "መልስዎን ያስገቡ",
            submitAnswer: "መልስ አስገባ",
            nextProblem: "ቀጣይ ችግር",
            timeLabel: "ጊዜ:",
            scoreLabel: "ውጤት:",
            correctFeedback: "ትክክል! ጥሩ አደረግክ!",
            incorrectFeedback: "ትክክል አይደለም። መልሱ 125 ነው።",
            moreChallenges: "ተጨማሪ ፈተናዎች: ",
            scienceLink: "የሳይንስ ፈተና",
            spellingLink: "የፊደል ፈተና",
            footerText: "የሂሳብ አስተሳሰብዎን ያጎለብቱ",
            languageToggle: "English / እንግሊዝኛ"
        }
    };

    // Math problems
    const problems = [
        { question: "15 × (7 + 3) - 25", answer: 125 },
        { question: "3² + 4² × 5", answer: 89 },
        { question: "120 ÷ (6 + 4) × 3", answer: 36 },
        { question: "7! ÷ (5! × 2)", answer: 21 },
        { question: "√(144) + ∛(125)", answer: 17 }
    ];

    // Game state
    let currentProblem = 0;
    let score = 0;
    let timeLeft = 60;
    let timer;

    // DOM elements
    const languageToggle = document.getElementById('language-toggle');
    const problemTitle = document.getElementById('problem-title');
    const problemText = document.getElementById('problem-text');
    const answerInput = document.getElementById('answer-input');
    const submitBtn = document.getElementById('submit-answer');
    const nextBtn = document.getElementById('next-problem');
    const feedbackDiv = document.getElementById('feedback');
    const timeDisplay = document.getElementById('time');
    const scoreDisplay = document.getElementById('score');
    const timeLabel = document.getElementById('time-label');
    const scoreLabel = document.getElementById('score-label');

    // Update language
    function updateLanguage() {
        const lang = isAmharic ? 'am' : 'en';
        const t = translations[lang];
        
        document.getElementById('title').textContent = t.title;
        document.getElementById('subtitle').textContent = t.subtitle;
        problemTitle.textContent = t.problemTitle;
        problemText.textContent = problems[currentProblem].question;
        answerInput.placeholder = t.inputPlaceholder;
        submitBtn.textContent = t.submitAnswer;
        nextBtn.textContent = t.nextProblem;
        timeLabel.textContent = t.timeLabel;
        scoreLabel.textContent = t.scoreLabel;
        document.getElementById('more-challenges').innerHTML = t.moreChallenges + 
            `<a href="#" class="footer-link">${t.scienceLink}</a> | 
            <a href="#" class="footer-link">${t.spellingLink}</a>`;
        document.getElementById('footer-text').textContent = t.footerText;
        languageToggle.textContent = t.languageToggle;
    }

    // Start timer
    function startTimer() {
        clearInterval(timer);
        timeLeft = 60;
        timeDisplay.textContent = timeLeft;
        
        timer = setInterval(function() {
            timeLeft--;
            timeDisplay.textContent = timeLeft;
            
            if (timeLeft <= 0) {
                clearInterval(timer);
                endGame();
            }
        }, 1000);
    }

    // Load problem
    function loadProblem() {
        const t = isAmharic ? translations.am : translations.en;
        problemTitle.textContent = `${t.problemTitle.slice(0, -1)}${currentProblem + 1}`;
        problemText.textContent = problems[currentProblem].question;
        answerInput.value = '';
        feedbackDiv.classList.add('hidden');
        nextBtn.classList.add('hidden');
        answerInput.focus();
    }

    // Check answer
    function checkAnswer() {
        const userAnswer = parseInt(answerInput.value);
        const correctAnswer = problems[currentProblem].answer;
        const t = isAmharic ? translations.am : translations.en;
        
        if (isNaN(userAnswer)) {
            alert(t.inputPlaceholder);
            return;
        }
        
        if (userAnswer === correctAnswer) {
            feedbackDiv.textContent = t.correctFeedback;
            feedbackDiv.className = 'feedback correct';
            score++;
            scoreDisplay.textContent = score;
        } else {
            feedbackDiv.textContent = `${t.incorrectFeedback}`;
            feedbackDiv.className = 'feedback incorrect';
        }
        
        feedbackDiv.classList.remove('hidden');
        submitBtn.classList.add('hidden');
        nextBtn.classList.remove('hidden');
    }

    // End game
    function endGame() {
        const t = isAmharic ? translations.am : translations.en;
        problemText.textContent = `${t.timeLabel} ${t.footerText}! ${t.scoreLabel} ${score}/${problems.length}`;
        answerInput.disabled = true;
        submitBtn.disabled = true;
        feedbackDiv.classList.add('hidden');
        nextBtn.classList.add('hidden');
    }

    // Next problem
    function nextProblem() {
        currentProblem++;
        
        if (currentProblem < problems.length) {
            loadProblem();
            submitBtn.classList.remove('hidden');
        } else {
            endGame();
        }
    }

    // Event listeners
    languageToggle.addEventListener('click', function() {
        isAmharic = !isAmharic;
        updateLanguage();
    });

    submitBtn.addEventListener('click', checkAnswer);
    nextBtn.addEventListener('click', nextProblem);
    answerInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            if (nextBtn.classList.contains('hidden')) {
                checkAnswer();
            } else {
                nextProblem();
            }
        }
    });

    // Initialize
    updateLanguage();
    startTimer();
    loadProblem();
});