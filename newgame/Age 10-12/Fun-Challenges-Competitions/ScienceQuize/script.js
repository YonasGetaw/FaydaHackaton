document.addEventListener('DOMContentLoaded', function() {
    // Language state
    let isAmharic = false;
    
    // Translations
    const translations = {
        en: {
            title: "Science Quiz",
            subtitle: "Explore Scientific Knowledge",
            questionText: "Question {current} of {total}",
            questions: [
                {
                    question: "Which planet is known as the Red Planet?",
                    options: ["Venus", "Mars", "Jupiter", "Saturn"],
                    answer: 1
                },
                {
                    question: "What is the chemical symbol for gold?",
                    options: ["Go", "Gd", "Au", "Ag"],
                    answer: 2
                },
                {
                    question: "Which gas do plants absorb from the atmosphere?",
                    options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
                    answer: 2
                },
                {
                    question: "What is the hardest natural substance on Earth?",
                    options: ["Gold", "Iron", "Diamond", "Quartz"],
                    answer: 2
                },
                {
                    question: "Which scientist developed the theory of relativity?",
                    options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Stephen Hawking"],
                    answer: 1
                }
            ],
            submitAnswer: "Submit Answer",
            correctFeedback: "Correct! Well done!",
            incorrectFeedback: "Incorrect. The correct answer is: {answer}",
            moreChallenges: "More challenges: ",
            mathLink: "Math Contest",
            spellingLink: "Spelling Bee",
            footerText: "Discover the wonders of science",
            languageToggle: "አማርኛ / Amharic",
            scoreLabel: "Score:"
        },
        am: {
            title: "የሳይንስ ፈተና",
            subtitle: "የሳይንሳዊ እውቀት ያስሱ",
            questionText: "ጥያቄ {current} ከ {total}",
            questions: [
                {
                    question: "የቀይ ፕላኔት በመባል የሚታወቀው ፕላኔት የቱ ነው?",
                    options: ["ቬኑስ", "ማርስ", "ጁፒተር", "ሳተርን"],
                    answer: 1
                },
                {
                    question: "ወርቅን የሚያመለክት የኬሚካላዊ ምልክት የቱ ነው?",
                    options: ["Go", "Gd", "Au", "Ag"],
                    answer: 2
                },
                {
                    question: "ተክሎች ከከባቢ አየር የሚወስዱት ጋዝ የቱ ነው?",
                    options: ["ኦክስጅን", "ናይትሮጅን", "ካርቦን ዳይኦክሳይድ", "ሃይድሮጅን"],
                    answer: 2
                },
                {
                    question: "በምድር ላይ የሚገኘው ከፍተኛ ጠንካራ የተፈጥሮ ንጥረ ነገር የቱ ነው?",
                    options: ["ወርቅ", "ብረት", "አልማዝ", "ኳርትዝ"],
                    answer: 2
                },
                {
                    question: "የሚዛንነት ፅንሰ-ሀሳብን የፈጠረው ሳይንቲስት የቱ ነው?",
                    options: ["አይዛክ ኒውተን", "አልበርት አይንስታይን", "ጋሊልዮ ጋሊሊ", "ስቴፈን ሆኪንግ"],
                    answer: 1
                }
            ],
            submitAnswer: "መልስ አስገባ",
            correctFeedback: "ትክክል! ጥሩ አደረግክ!",
            incorrectFeedback: "ትክክል አይደለም። ትክክለኛው መልስ፡ {answer}",
            moreChallenges: "ተጨማሪ ፈተናዎች: ",
            mathLink: "የሂሳብ ውድድር",
            spellingLink: "የፊደል ፈተና",
            footerText: "የሳይንስ ድንቅ ነገሮችን ያውቁ",
            languageToggle: "English / እንግሊዝኛ",
            scoreLabel: "ውጤት:"
        }
    };

    // Quiz state
    let currentQuestion = 0;
    let score = 0;
    let selectedOption = null;

    // DOM elements
    const languageToggle = document.getElementById('language-toggle');
    const questionNumber = document.getElementById('question-number');
    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    const submitBtn = document.getElementById('submit-answer');
    const feedbackDiv = document.getElementById('feedback');
    const progressBar = document.getElementById('progress-bar');
    const scoreDisplay = document.getElementById('score');
    const scoreLabel = document.getElementById('score-label');

    // Update language
    function updateLanguage() {
        const lang = isAmharic ? 'am' : 'en';
        const t = translations[lang];
        
        document.getElementById('title').textContent = t.title;
        document.getElementById('subtitle').textContent = t.subtitle;
        scoreLabel.textContent = t.scoreLabel;
        document.getElementById('more-challenges').innerHTML = t.moreChallenges + 
            `<a href="#" class="footer-link">${t.mathLink}</a> | 
            <a href="#" class="footer-link">${t.spellingLink}</a>`;
        document.getElementById('footer-text').textContent = t.footerText;
        languageToggle.textContent = t.languageToggle;
        
        loadQuestion();
    }

    // Load question
    function loadQuestion() {
        const t = isAmharic ? translations.am : translations.en;
        const question = t.questions[currentQuestion];
        
        questionNumber.textContent = t.questionText
            .replace('{current}', currentQuestion + 1)
            .replace('{total}', t.questions.length);
        
        questionText.textContent = question.question;
        
        optionsContainer.innerHTML = '';
        question.options.forEach((option, index) => {
            const optionElement = document.createElement('div');
            optionElement.className = 'option';
            optionElement.textContent = option;
            optionElement.addEventListener('click', function() {
                selectOption(this, index);
            });
            optionsContainer.appendChild(optionElement);
        });
        
        submitBtn.textContent = t.submitAnswer;
        submitBtn.disabled = true;
        feedbackDiv.classList.add('hidden');
        selectedOption = null;
        
        // Update progress
        progressBar.style.width = `${(currentQuestion / t.questions.length) * 100}%`;
        scoreDisplay.textContent = score;
    }

    // Select option
    function selectOption(element, index) {
        const options = document.querySelectorAll('.option');
        options.forEach(opt => opt.classList.remove('selected'));
        element.classList.add('selected');
        selectedOption = index;
        submitBtn.disabled = false;
    }

    // Check answer
    function checkAnswer() {
        const t = isAmharic ? translations.am : translations.en;
        const question = t.questions[currentQuestion];
        
        if (selectedOption === question.answer) {
            feedbackDiv.textContent = t.correctFeedback;
            feedbackDiv.className = 'feedback correct';
            score++;
            scoreDisplay.textContent = score;
        } else {
            const correctAnswer = question.options[question.answer];
            feedbackDiv.textContent = t.incorrectFeedback.replace('{answer}', correctAnswer);
            feedbackDiv.className = 'feedback incorrect';
        }
        
        feedbackDiv.classList.remove('hidden');
        submitBtn.disabled = true;
        
        // Move to next question after delay
        setTimeout(() => {
            currentQuestion++;
            if (currentQuestion < t.questions.length) {
                loadQuestion();
            } else {
                endQuiz();
            }
        }, 1500);
    }

    // End quiz
    function endQuiz() {
        const t = isAmharic ? translations.am : translations.en;
        questionText.textContent = `Quiz completed! Your score: ${score}/${t.questions.length}`;
        optionsContainer.innerHTML = '';
        submitBtn.classList.add('hidden');
        feedbackDiv.classList.add('hidden');
        progressBar.style.width = '100%';
    }

    // Event listeners
    languageToggle.addEventListener('click', function() {
        isAmharic = !isAmharic;
        currentQuestion = 0;
        score = 0;
        updateLanguage();
    });

    submitBtn.addEventListener('click', checkAnswer);

    // Initialize
    updateLanguage();
});