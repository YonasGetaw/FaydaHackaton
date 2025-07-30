document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const languageToggle = document.getElementById('language-toggle');
    const quizModal = document.getElementById('quiz-modal');
    const closeBtn = document.querySelector('.close-btn');
    const quizQuestion = document.getElementById('quiz-question');
    const quizOptions = document.getElementById('quiz-options');
    const submitBtn = document.getElementById('submit-answer');
    const quizFeedback = document.getElementById('quiz-feedback');
    let isAmharic = false;
    let currentQuiz = null;
    let currentQuestionIndex = 0;
    let selectedOption = null;

    // Quiz Data
    const quizzes = {
        animals: {
            english: {
                title: "Animals Quiz",
                questions: [
                    {
                        question: "What is the Amharic word for 'lion'?",
                        options: ["ውሻ", "ድመት", "አንበሳ"],
                        answer: 2
                    },
                    {
                        question: "What is the English word for 'ድመት'?",
                        options: ["Dog", "Cat", "Lion"],
                        answer: 1
                    },
                    {
                        question: "Which animal says 'woof woof'?",
                        options: ["ውሻ", "ድመት", "አንበሳ"],
                        answer: 0
                    }
                ]
            },
            amharic: {
                title: "የእንስሳት ፈተና",
                questions: [
                    {
                        question: "የእንግሊዝኛ 'lion' በአማርኛ ምንድን ነው?",
                        options: ["ውሻ", "ድመት", "አንበሳ"],
                        answer: 2
                    },
                    {
                        question: "የእንግሊዝኛ ቃል ለ'ድመት' ምንድን ነው?",
                        options: ["Dog", "Cat", "Lion"],
                        answer: 1
                    },
                    {
                        question: "የትኛው እንስሳ 'woof woof' ይላል?",
                        options: ["ውሻ", "ድመት", "አንበሳ"],
                        answer: 0
                    }
                ]
            }
        },
        food: {
            english: {
                title: "Food Quiz",
                questions: [
                    {
                        question: "What is the Amharic word for 'bread'?",
                        options: ["ፖም", "ዳቦ", "ወተት"],
                        answer: 1
                    },
                    {
                        question: "What is the English word for 'ወተት'?",
                        options: ["Apple", "Bread", "Milk"],
                        answer: 2
                    },
                    {
                        question: "Which food is red and round?",
                        options: ["ፖም", "ዳቦ", "ወተት"],
                        answer: 0
                    }
                ]
            },
            amharic: {
                title: "የምግብ ፈተና",
                questions: [
                    {
                        question: "የእንግሊዝኛ 'bread' በአማርኛ ምንድን ነው?",
                        options: ["ፖም", "ዳቦ", "ወተት"],
                        answer: 1
                    },
                    {
                        question: "የእንግሊዝኛ ቃል ለ'ወተት' ምንድን ነው?",
                        options: ["Apple", "Bread", "Milk"],
                        answer: 2
                    },
                    {
                        question: "የትኛው ምግብ ቀይ እና ክብ ነው?",
                        options: ["ፖም", "ዳቦ", "ወተት"],
                        answer: 0
                    }
                ]
            }
        },
        family: {
            english: {
                title: "Family Quiz",
                questions: [
                    {
                        question: "What is the Amharic word for 'mother'?",
                        options: ["አባት", "እማ", "እህት"],
                        answer: 1
                    },
                    {
                        question: "What is the English word for 'እህት'?",
                        options: ["Father", "Mother", "Sister"],
                        answer: 2
                    },
                    {
                        question: "Who is the male parent?",
                        options: ["አባት", "እማ", "እህት"],
                        answer: 0
                    }
                ]
            },
            amharic: {
                title: "የቤተሰብ ፈተና",
                questions: [
                    {
                        question: "የእንግሊዝኛ 'mother' በአማርኛ ምንድን ነው?",
                        options: ["አባት", "እማ", "እህት"],
                        answer: 1
                    },
                    {
                        question: "የእንግሊዝኛ ቃል ለ'እህት' ምንድን ነው?",
                        options: ["Father", "Mother", "Sister"],
                        answer: 2
                    },
                    {
                        question: "የትኛው የቤተሰብ አባል ወንድ ወላጅ ነው?",
                        options: ["አባት", "እማ", "እህት"],
                        answer: 0
                    }
                ]
            }
        }
    };

    // Content data
    const content = {
        english: {
            title: "Vocabulary Builder",
            category1Title: "Animals",
            category2Title: "Food",
            category3Title: "Family",
            footer: "Learn 3 new words every day to build your vocabulary!",
            quizBtn: "Take Quiz"
        },
        amharic: {
            title: "የቃላት ክምችት ገንቢ",
            category1Title: "እንስሳት",
            category2Title: "ምግብ",
            category3Title: "ቤተሰብ",
            footer: "ቃላትን በየቀኑ ለመማር ዕለታዊ 3 አዳዲስ ቃላት ይማሩ!",
            quizBtn: "ፈተና ይውሰዱ"
        }
    };

    // Initialize content
    updateContent();

    // Event listeners
    languageToggle.addEventListener('click', toggleLanguage);
    closeBtn.addEventListener('click', closeModal);
    submitBtn.addEventListener('click', checkAnswer);
    window.addEventListener('click', outsideClick);

    // Quiz button event listeners
    document.getElementById('quiz1-btn').addEventListener('click', () => startQuiz('animals'));
    document.getElementById('quiz2-btn').addEventListener('click', () => startQuiz('food'));
    document.getElementById('quiz3-btn').addEventListener('click', () => startQuiz('family'));

    // Functions
    function toggleLanguage() {
        isAmharic = !isAmharic;
        updateContent();
        languageToggle.textContent = isAmharic ? "English" : "አማርኛ";
        resetQuizState(); // Reset quiz when language changes
    }

    function updateContent() {
        const lang = isAmharic ? 'amharic' : 'english';
        const langContent = content[lang];

        document.getElementById('main-title').textContent = langContent.title;
        document.getElementById('category1-title').textContent = langContent.category1Title;
        document.getElementById('category2-title').textContent = langContent.category2Title;
        document.getElementById('category3-title').textContent = langContent.category3Title;
        document.getElementById('footer-text').textContent = langContent.footer;
        document.getElementById('quiz1-btn').textContent = langContent.quizBtn;
        document.getElementById('quiz2-btn').textContent = langContent.quizBtn;
        document.getElementById('quiz3-btn').textContent = langContent.quizBtn;
    }

    function startQuiz(category) {
        currentQuiz = quizzes[category][isAmharic ? 'amharic' : 'english'];
        currentQuestionIndex = 0;
        showQuestion();
        quizModal.style.display = 'block';
    }

    function showQuestion() {
        if (!currentQuiz || currentQuestionIndex >= currentQuiz.questions.length) {
            // Quiz completed
            quizModal.style.display = 'none';
            alert(isAmharic ? "ፈተናው ተጠናቋል! ግሩም ስራ!" : "Quiz completed! Great job!");
            resetQuizState();
            return;
        }

        const question = currentQuiz.questions[currentQuestionIndex];
        quizQuestion.textContent = question.question;
        quizOptions.innerHTML = '';
        quizFeedback.style.display = 'none';
        selectedOption = null;
        submitBtn.disabled = true;

        question.options.forEach((option, i) => {
            const optionBtn = document.createElement('button');
            optionBtn.className = 'option-btn';
            optionBtn.textContent = option;
            optionBtn.addEventListener('click', () => selectOption(i, optionBtn));
            quizOptions.appendChild(optionBtn);
        });
    }

    function selectOption(index, button) {
        // Remove selected class from all options
        document.querySelectorAll('.option-btn').forEach(btn => {
            btn.classList.remove('selected');
        });

        // Add selected class to clicked option
        button.classList.add('selected');
        selectedOption = index;
        submitBtn.disabled = false;
    }

    function checkAnswer() {
        if (selectedOption === null) return;

        if (!currentQuiz || currentQuestionIndex >= currentQuiz.questions.length) return;

        const currentQuestion = currentQuiz.questions[currentQuestionIndex];
        const isCorrect = selectedOption === currentQuestion.answer;

        quizFeedback.style.display = 'block';
        quizFeedback.className = isCorrect ? 'correct' : 'incorrect';
        quizFeedback.textContent = isCorrect ?
            (isAmharic ? "ትክክል! ግሩም ስራ!" : "Correct! Great job!") :
            (isAmharic ? "ይቅርታ፣ ትክክለኛው መልስ: " + currentQuestion.options[currentQuestion.answer] :
             "Sorry, the correct answer is: " + currentQuestion.options[currentQuestion.answer]);

        // Move to next question after delay
        setTimeout(() => {
            currentQuestionIndex++;
            showQuestion();
        }, 1500); // Slightly shorter delay for better flow
    }

    function closeModal() {
        quizModal.style.display = 'none';
        resetQuizState();
    }

    function outsideClick(e) {
        if (e.target === quizModal) {
            closeModal();
        }
    }

    function resetQuizState() {
        currentQuiz = null;
        currentQuestionIndex = 0;
        selectedOption = null;
        quizFeedback.style.display = 'none';
        if (quizOptions) {
            document.querySelectorAll('.option-btn').forEach(btn => {
                btn.classList.remove('selected');
            });
        }
        if (submitBtn) {
            submitBtn.disabled = true;
        }
    }
});