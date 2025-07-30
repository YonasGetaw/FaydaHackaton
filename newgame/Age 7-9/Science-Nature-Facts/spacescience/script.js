document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const languageToggle = document.getElementById('language-toggle');
    const quizModal = document.getElementById('quiz-modal');
    const closeBtn = document.querySelector('.close-btn');
    const quizQuestion = document.getElementById('quiz-question');
    const quizOptions = document.getElementById('quiz-options');
    const quizFeedback = document.getElementById('quiz-feedback');
    const nextBtn = document.getElementById('next-question');
    let isAmharic = false;
    let currentQuiz = null;
    let currentQuestionIndex = 0;
    let selectedOption = null;

    // Quiz Data
    const quizzes = {
        solar: {
            english: {
                title: "Solar System Quiz",
                questions: [
                    {
                        question: "Which planet is closest to the Sun?",
                        options: ["Venus", "Mercury", "Earth"],
                        answer: 1
                    },
                    {
                        question: "How many planets are in our solar system?",
                        options: ["7", "8", "9"],
                        answer: 1
                    },
                    {
                        question: "Which planet is known for its rings?",
                        options: ["Jupiter", "Saturn", "Uranus"],
                        answer: 1
                    }
                ]
            },
            amharic: {
                title: "የፀሐይ ስርዓት ፈተና",
                questions: [
                    {
                        question: "ለፀሐይ በጣም ቅርብ የሆነው ፕላኔት የቱ ነው?",
                        options: ["ቬኑስ", "አልዳጊ", "ምድር"],
                        answer: 1
                    },
                    {
                        question: "በፀሐይ ስርዓታችን ውስጥ ስንት ፕላኔቶች አሉ?",
                        options: ["7", "8", "9"],
                        answer: 1
                    },
                    {
                        question: "ቀለበቶች ያሉት የትኛው ፕላኔት ነው?",
                        options: ["ጁፒተር", "ሳተርን", "ዩራኑስ"],
                        answer: 1
                    }
                ]
            }
        },
        moon: {
            english: {
                title: "Moon Quiz",
                questions: [
                    {
                        question: "Does the Moon produce its own light?",
                        options: ["Yes", "No"],
                        answer: 1
                    },
                    {
                        question: "How long does it take the Moon to orbit Earth?",
                        options: ["24 hours", "27 days", "365 days"],
                        answer: 1
                    },
                    {
                        question: "What causes the Moon's phases?",
                        options: ["Earth's shadow", "Moon's position relative to Earth and Sun", "The Moon changing shape"],
                        answer: 1
                    }
                ]
            },
            amharic: {
                title: "የጨረቃ ፈተና",
                questions: [
                    {
                        question: "ጨረቃ የራሷ ብርሃን ትፈጥራለች?",
                        options: ["አዎ", "አይ"],
                        answer: 1
                    },
                    {
                        question: "ጨረቃ ምድርን ለመዞር ምን ያህል ጊዜ ይፈጅባታል?",
                        options: ["24 ሰዓት", "27 ቀናት", "365 ቀናት"],
                        answer: 1
                    },
                    {
                        question: "የጨረቃ ደረጃዎች ምን ያስከትላቸዋል?",
                        options: ["የምድር ጥላ", "ጨረቃ ከምድር እና ከፀሐይ ጋር ያለው አቀማመጥ", "ጨረቃ ቅርፅ መቀየሯ"],
                        answer: 1
                    }
                ]
            }
        },
        galaxy: {
            english: {
                title: "Galaxy Quiz",
                questions: [
                    {
                        question: "What galaxy do we live in?",
                        options: ["Andromeda", "Milky Way", "Whirlpool"],
                        answer: 1
                    },
                    {
                        question: "Our Sun is:",
                        options: ["The biggest star in the galaxy", "An average-sized star", "A small star"],
                        answer: 1
                    },
                    {
                        question: "How many stars are in our galaxy?",
                        options: ["Millions", "Billions", "Trillions"],
                        answer: 1
                    }
                ]
            },
            amharic: {
                title: "የጋላክሲ ፈተና",
                questions: [
                    {
                        question: "በየትኛው ጋላክሲ ውስጥ ነን?",
                        options: ["አንድሮሜዳ", "ሚልኪ ዌይ", "ዊርልፑል"],
                        answer: 1
                    },
                    {
                        question: "ፀሐያችን:",
                        options: ["በጋላክሲው ውስጥ ትልቁ ኮከብ ናት", "አማካይ መጠን ያለው ኮከብ ናት", "ትንሽ ኮከብ ናት"],
                        answer: 1
                    },
                    {
                        question: "በጋላክሲያችን ውስጥ ስንት ኮከቦች አሉ?",
                        options: ["ሚሊዮኖች", "ቢሊዮኖች", "ትሪሊዮኖች"],
                        answer: 1
                    }
                ]
            }
        }
    };

    // Content data
    const content = {
        english: {
            title: "Amazing Space Science",
            space1Title: "Our Solar System",
            space1Text: "There are 8 planets orbiting our Sun. Earth is the only one with life (that we know of)!",
            space2Title: "The Moon",
            space2Text: "The Moon is Earth's only natural satellite. It takes about 27 days to orbit Earth.",
            space3Title: "Stars and Galaxies",
            space3Text: "Our Sun is one of billions of stars in the Milky Way galaxy. There are billions of galaxies!",
            footer: "The universe is full of wonders waiting to be discovered!",
            quizBtn: "Quick Quiz"
        },
        amharic: {
            title: "የፀሐይ አስደናቂ ሳይንስ",
            space1Title: "የእኛ የፀሐይ ስርዓት",
            space1Text: "8 ፕላኔቶች ፀሐያችንን ይዞራሉ። ምድር ሕይወት ያለባት ብቸኛዋ ናት (እኛ እንደምናውቀው)!",
            space2Title: "ጨረቃ",
            space2Text: "ጨረቃ የምድር ብቸኛዋ ተፈጥሯዊ ሳተላይት ናት። ምድርን ለመዞር ወደ 27 ቀናት ይፈጅባታል።",
            space3Title: "ኮከቦች እና ጋላክሲዎች",
            space3Text: "ፀሐያችን በሚልኪ ዌይ ጋላክሲ ውስጥ ከቢሊዮኖች ኮከቦች አንዷ ናት። ቢሊዮኖች ጋላክሲዎች አሉ!",
            footer: "መላው ህዋ ለመግለጽ በጥበቃ የሚጠብቁ ድንቅ ነገሮች የተሞሉ ነው!",
            quizBtn: "ፈተና"
        }
    };

    // Initialize content
    updateContent();

    // Event listeners
    languageToggle.addEventListener('click', toggleLanguage);
    closeBtn.addEventListener('click', closeModal);
    nextBtn.addEventListener('click', nextQuestion);
    window.addEventListener('click', outsideClick);

    // Quiz button event listeners
    document.getElementById('quiz1-btn').addEventListener('click', () => startQuiz('solar'));
    document.getElementById('quiz2-btn').addEventListener('click', () => startQuiz('moon'));
    document.getElementById('quiz3-btn').addEventListener('click', () => startQuiz('galaxy'));

    // Functions
    function toggleLanguage() {
        isAmharic = !isAmharic;
        updateContent();
        languageToggle.textContent = isAmharic ? "English" : "አማርኛ";
    }

    function updateContent() {
        const lang = isAmharic ? 'amharic' : 'english';
        const langContent = content[lang];
        
        document.getElementById('main-title').textContent = langContent.title;
        document.getElementById('space1-title').textContent = langContent.space1Title;
        document.getElementById('space1-text').textContent = langContent.space1Text;
        document.getElementById('space2-title').textContent = langContent.space2Title;
        document.getElementById('space2-text').textContent = langContent.space2Text;
        document.getElementById('space3-title').textContent = langContent.space3Title;
        document.getElementById('space3-text').textContent = langContent.space3Text;
        document.getElementById('footer-text').textContent = langContent.footer;
        
        // Update quiz buttons
        document.querySelectorAll('.quiz-btn').forEach(btn => {
            btn.textContent = langContent.quizBtn;
        });
    }

    function startQuiz(quizType) {
        currentQuiz = quizzes[quizType][isAmharic ? 'amharic' : 'english'];
        currentQuestionIndex = 0;
        showQuestion();
        quizModal.style.display = 'block';
    }

    function showQuestion() {
        if (currentQuestionIndex >= currentQuiz.questions.length) {
            // Quiz completed
            quizModal.style.display = 'none';
            alert(isAmharic ? "ፈተናው ተጠናቋል! ግሩም ስራ!" : "Quiz completed! Great job!");
            return;
        }

        const question = currentQuiz.questions[currentQuestionIndex];
        quizQuestion.textContent = question.question;
        quizOptions.innerHTML = '';
        quizFeedback.style.display = 'none';
        selectedOption = null;
        nextBtn.style.display = 'none';

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
        checkAnswer();
    }

    function checkAnswer() {
        if (selectedOption === null) return;

        const currentQuestion = currentQuiz.questions[currentQuestionIndex];
        const isCorrect = selectedOption === currentQuestion.answer;
        
        quizFeedback.style.display = 'block';
        quizFeedback.className = isCorrect ? 'correct' : 'incorrect';
        quizFeedback.textContent = isCorrect ? 
            (isAmharic ? "ትክክል! 🎉" : "Correct! 🎉") : 
            (isAmharic ? "ይቅርታ! ትክክለኛው መልስ: " + currentQuestion.options[currentQuestion.answer] : 
             "Sorry! Correct answer: " + currentQuestion.options[currentQuestion.answer]);

        nextBtn.style.display = 'block';
    }

    function nextQuestion() {
        currentQuestionIndex++;
        showQuestion();
    }

    function closeModal() {
        quizModal.style.display = 'none';
    }

    function outsideClick(e) {
        if (e.target === quizModal) {
            closeModal();
        }
    }
});