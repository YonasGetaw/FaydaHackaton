// Game state
const gameState = {
    language: 'english',
    score: 0,
    totalScore: 0,
    currentQuestion: 0,
    timeLeft: 30,
    timer: null,
    selectedOperation: null,
    questionsAnswered: 0,
    correctAnswers: 0,
    operationStats: {
        addition: { answered: 0, correct: 0 },
        subtraction: { answered: 0, correct: 0 },
        multiplication: { answered: 0, correct: 0 },
        division: { answered: 0, correct: 0 },
        fractions: { answered: 0, correct: 0 }
    },
    questions: {
        addition: [
            {
                question: {
                    english: "If you have 5 birr and buy 2 candies for 1 birr each, how much is left?",
                    amharic: "5 ብር ካለህ እና 2 ከረሜላ እያንዳንዳቸው 1 ብር ከገዛህ ምን ያህል ቀረ?"
                },
                options: [
                    { text: { english: "2 birr", amharic: "2 ብር" }, correct: false },
                    { text: { english: "3 birr", amharic: "3 ብር" }, correct: true },
                    { text: { english: "4 birr", amharic: "4 ብር" }, correct: false }
                ]
            },
            {
                question: {
                    english: "A farmer has 12 sheep and buys 8 more. How many sheep does he have now?",
                    amharic: "አንድ ገበሬ 12 በጎች አሉት እና 8 ተጨማሪ ገዙ። አሁን ስንት በጎች አሉት?"
                },
                options: [
                    { text: { english: "18 sheep", amharic: "18 በጎች" }, correct: false },
                    { text: { english: "20 sheep", amharic: "20 በጎች" }, correct: true },
                    { text: { english: "22 sheep", amharic: "22 በጎች" }, correct: false }
                ]
            }
        ],
        subtraction: [
            {
                question: {
                    english: "If you have 15 oranges and give 7 to your friend, how many oranges do you have left?",
                    amharic: "15 ብርቱካናት ካለህ እና 7 ለጓደኛህ ከሰጥክ ስንት ብርቱካን ይቀራል?"
                },
                options: [
                    { text: { english: "6 oranges", amharic: "6 ብርቱካናት" }, correct: false },
                    { text: { english: "8 oranges", amharic: "8 ብርቱካናት" }, correct: true },
                    { text: { english: "9 oranges", amharic: "9 ብርቱካናት" }, correct: false }
                ]
            },
            {
                question: {
                    english: "There are 25 students in class. If 9 are absent today, how many are present?",
                    amharic: "በክፍል ውስጥ 25 ተማሪዎች አሉ። ዛሬ 9 ተማሪዎች በማጣቀሻ ከሆነ ስንት ተማሪዎች ተገኝተዋል?"
                },
                options: [
                    { text: { english: "14 students", amharic: "14 ተማሪዎች" }, correct: false },
                    { text: { english: "16 students", amharic: "16 ተማሪዎች" }, correct: true },
                    { text: { english: "18 students", amharic: "18 ተማሪዎች" }, correct: false }
                ]
            }
        ],
        multiplication: [
            {
                question: {
                    english: "If one book costs 8 birr, how much do 5 books cost?",
                    amharic: "አንድ መጽሐፍ 8 ብር ከሚሸጥ ከሆነ 5 መጽሐፎች ስንት ያስከፍላሉ?"
                },
                options: [
                    { text: { english: "35 birr", amharic: "35 ብር" }, correct: false },
                    { text: { english: "40 birr", amharic: "40 ብር" }, correct: true },
                    { text: { english: "45 birr", amharic: "45 ብር" }, correct: false }
                ]
            },
            {
                question: {
                    english: "There are 4 rows of chairs with 6 chairs in each row. How many chairs are there in total?",
                    amharic: "4 ረድፎች ያሉት ወንበሮች እያንዳንዱ ረድፍ 6 ወንበሮች ካሉት በጠቅላላው ስንት ወንበሮች አሉ?"
                },
                options: [
                    { text: { english: "20 chairs", amharic: "20 ወንበሮች" }, correct: false },
                    { text: { english: "24 chairs", amharic: "24 ወንበሮች" }, correct: true },
                    { text: { english: "28 chairs", amharic: "28 ወንበሮች" }, correct: false }
                ]
            }
        ],
        division: [
            {
                question: {
                    english: "If you divide 15 oranges equally among 3 friends, how many oranges does each get?",
                    amharic: "15 ብርቱካናትን በ3 ጓደኞች መካከል እኩል ከከፋፈልክ እያንዳንዱ ስንት ይገኛል?"
                },
                options: [
                    { text: { english: "3 oranges", amharic: "3 ብርቱካናት" }, correct: false },
                    { text: { english: "5 oranges", amharic: "5 ብርቱካናት" }, correct: true },
                    { text: { english: "7 oranges", amharic: "7 ብርቱካናት" }, correct: false }
                ]
            },
            {
                question: {
                    english: "A farmer has 18 eggs and wants to put them equally in 6 baskets. How many eggs go in each basket?",
                    amharic: "አንድ ገበሬ 18 እንቁላሎች አሉት እና በ6 መከለያዎች እኩል መከፋፈል ይፈልጋል። በእያንዳንዱ መከለያ ስንት እንቁላሎች ይገባሉ?"
                },
                options: [
                    { text: { english: "2 eggs", amharic: "2 እንቁላሎች" }, correct: false },
                    { text: { english: "3 eggs", amharic: "3 እንቁላሎች" }, correct: true },
                    { text: { english: "4 eggs", amharic: "4 እንቁላሎች" }, correct: false }
                ]
            }
        ],
        fractions: [
            {
                question: {
                    english: "What fraction of the pizza is left if you ate 3 slices out of 8?",
                    amharic: "8 ቁራጭ ፒዛ ካለ እና 3 ቁራጮችን ከበላህ ምን ያህል ክፍል ይቀራል?"
                },
                options: [
                    { 
                        text: { 
                            english: '<div class="fraction"><div class="numerator">3</div><div class="denominator">8</div></div>', 
                            amharic: '<div class="fraction"><div class="numerator">3</div><div class="denominator">8</div></div>' 
                        }, 
                        correct: false 
                    },
                    { 
                        text: { 
                            english: '<div class="fraction"><div class="numerator">5</div><div class="denominator">8</div></div>', 
                            amharic: '<div class="fraction"><div class="numerator">5</div><div class="denominator">8</div></div>' 
                        }, 
                        correct: true 
                    },
                    { 
                        text: { 
                            english: '<div class="fraction"><div class="numerator">1</div><div class="denominator">2</div></div>', 
                            amharic: '<div class="fraction"><div class="numerator">1</div><div class="denominator">2</div></div>' 
                        }, 
                        correct: false 
                    }
                ]
            },
            {
                question: {
                    english: "If you have 1/4 of a cake and get another 1/4, how much cake do you have in total?",
                    amharic: "1/4 ኬክ ካለህ እና ሌላ 1/4 ከወሰድክ በጠቅላላው ስንት ኬክ አለህ?"
                },
                options: [
                    { 
                        text: { 
                            english: '<div class="fraction"><div class="numerator">1</div><div class="denominator">4</div></div>', 
                            amharic: '<div class="fraction"><div class="numerator">1</div><div class="denominator">4</div></div>' 
                        }, 
                        correct: false 
                    },
                    { 
                        text: { 
                            english: '<div class="fraction"><div class="numerator">1</div><div class="denominator">2</div></div>', 
                            amharic: '<div class="fraction"><div class="numerator">1</div><div class="denominator">2</div></div>' 
                        }, 
                        correct: true 
                    },
                    { 
                        text: { 
                            english: '<div class="fraction"><div class="numerator">2</div><div class="denominator">4</div></div>', 
                            amharic: '<div class="fraction"><div class="numerator">2</div><div class="denominator">4</div></div>' 
                        }, 
                        correct: true 
                    }
                ]
            }
        ]
    }
};

// Create mixed questions array
gameState.mixedQuestions = [
    ...gameState.questions.addition,
    ...gameState.questions.subtraction,
    ...gameState.questions.multiplication,
    ...gameState.questions.division,
    ...gameState.questions.fractions
];

// DOM Elements
const elements = {
    homeScreen: document.getElementById('homeScreen'),
    operationSelectionScreen: document.getElementById('operationSelectionScreen'),
    challengeScreen: document.getElementById('challengeScreen'),
    rewardScreen: document.getElementById('rewardScreen'),
    progressScreen: document.getElementById('progressScreen'),
    playBtn: document.getElementById('playBtn'),
    progressBtn: document.getElementById('progressBtn'),
    nextChallengeBtn: document.getElementById('nextChallengeBtn'),
    backToHomeBtn: document.getElementById('backToHomeBtn'),
    backToOperationsBtn: document.getElementById('backToOperationsBtn'),
    backToHomeFromProgressBtn: document.getElementById('backToHomeFromProgressBtn'),
    languageToggle: document.getElementById('languageToggle'),
    title: document.getElementById('title'),
    operationTitle: document.getElementById('operationTitle'),
    question: document.getElementById('question'),
    options: document.getElementById('options'),
    timer: document.getElementById('timer'),
    progressBar: document.getElementById('progressBar'),
    points: document.getElementById('points'),
    rewardMessage: document.getElementById('rewardMessage'),
    badge: document.getElementById('badge'),
    totalPoints: document.getElementById('totalPoints'),
    questionsAnswered: document.getElementById('questionsAnswered'),
    correctAnswers: document.getElementById('correctAnswers'),
    operationProgress: document.getElementById('operationProgress'),
    progressTitle: document.getElementById('progressTitle'),
    confettiContainer: document.getElementById('confettiContainer')
};

// Audio elements
const correctSound = document.getElementById('correctSound');
const wrongSound = document.getElementById('wrongSound');
const winSound = document.getElementById('winSound');

// Operation buttons
const operationButtons = document.querySelectorAll('.btn-operation');

// Initialize the app
function init() {
    // Set up event listeners
    elements.playBtn.addEventListener('click', showOperationSelection);
    elements.progressBtn.addEventListener('click', showProgress);
    elements.nextChallengeBtn.addEventListener('click', nextChallenge);
    elements.backToHomeBtn.addEventListener('click', backToHome);
    elements.backToOperationsBtn.addEventListener('click', backToOperations);
    elements.backToHomeFromProgressBtn.addEventListener('click', backToHome);
    elements.languageToggle.addEventListener('click', toggleLanguage);

    operationButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            gameState.selectedOperation = btn.dataset.operation;
            startGame();
        });
    });

    // Show home screen initially
    showScreen('homeScreen');
}

// Show a specific screen
function showScreen(screenId) {
    // Hide all screens
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    
    // Show the requested screen
    document.getElementById(screenId).classList.add('active');
}

// Toggle between English and Amharic
function toggleLanguage() {
    gameState.language = gameState.language === 'english' ? 'amharic' : 'english';
    elements.languageToggle.textContent = gameState.language === 'english' ? '🌍 English' : '🌍 አማርኛ';
    updateUIForLanguage();
}

// Update UI elements based on current language
function updateUIForLanguage() {
    const lang = gameState.language;
    const translations = {
        title: {
            english: 'Math Adventure for Ethiopian Kids',
            amharic: 'ለኢትዮጵያ ልጆች የሂሳብ ላይላ'
        },
        operationTitle: {
            english: 'Choose a Math Operation',
            amharic: 'የሂሳብ ስራን ይምረጡ'
        },
        progressTitle: {
            english: 'My Progress',
            amharic: 'የእኔ እድገት'
        },
        timer: {
            english: '⏱️ Time: ',
            amharic: '⏱️ ጊዜ: '
        }
    };

    // Update text elements
    elements.title.textContent = translations.title[lang];
    elements.operationTitle.textContent = translations.operationTitle[lang];
    elements.progressTitle.textContent = translations.progressTitle[lang];
    
    // Update timer if it's visible
    if (elements.challengeScreen.classList.contains('active')) {
        elements.timer.textContent = translations.timer[lang] + gameState.timeLeft + 's';
    }

    // Update current question if challenge screen is active
    if (elements.challengeScreen.classList.contains('active')) {
        loadQuestion();
    }

    // Update reward screen if active
    if (elements.rewardScreen.classList.contains('active')) {
        updateRewardMessage();
    }

    // Update progress screen if active
    if (elements.progressScreen.classList.contains('active')) {
        updateProgressScreen();
    }
}

// Show operation selection screen
function showOperationSelection() {
    showScreen('operationSelectionScreen');
}

// Start the game with selected operation
function startGame() {
    gameState.currentQuestion = 0;
    gameState.score = 0;
    showScreen('challengeScreen');
    loadQuestion();
}

// Load the current question
function loadQuestion() {
    const operation = gameState.selectedOperation === 'mixed' 
        ? 'mixedQuestions' 
        : gameState.selectedOperation;
    
    const questions = gameState.questions[operation] || gameState.mixedQuestions;
    
    // If we've gone through all questions, start over
    if (gameState.currentQuestion >= questions.length) {
        gameState.currentQuestion = 0;
    }

    const question = questions[gameState.currentQuestion];
    const lang = gameState.language;
    
    // Set question text
    elements.question.innerHTML = question.question[lang];
    
    // Clear previous options
    elements.options.innerHTML = '';
    
    // Add new options
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.innerHTML = option.text[lang];
        optionElement.dataset.correct = option.correct;
        optionElement.addEventListener('click', selectAnswer);
        elements.options.appendChild(optionElement);
    });
    
    // Start timer
    startTimer();
}

// Start the question timer
function startTimer() {
    // Clear any existing timer
    clearInterval(gameState.timer);
    
    gameState.timeLeft = 30;
    updateTimerDisplay();
    
    gameState.timer = setInterval(() => {
        gameState.timeLeft--;
        updateTimerDisplay();
        
        if (gameState.timeLeft <= 0) {
            clearInterval(gameState.timer);
            timeUp();
        }
    }, 1000);
}

// Update the timer display
function updateTimerDisplay() {
    const lang = gameState.language;
    const timeText = lang === 'english' ? '⏱️ Time: ' : '⏱️ ጊዜ: ';
    elements.timer.textContent = timeText + gameState.timeLeft + 's';
    
    // Update progress bar
    const progressPercent = (gameState.timeLeft / 30) * 100;
    elements.progressBar.style.width = `${progressPercent}%`;
    
    // Change color when time is running out
    if (gameState.timeLeft <= 10) {
        elements.timer.style.color = '#ef233c';
        elements.progressBar.style.background = '#ef233c';
    } else {
        elements.timer.style.color = '#4361ee';
        elements.progressBar.style.background = '#4361ee';
    }
}

// Handle answer selection
function selectAnswer(e) {
    clearInterval(gameState.timer);
    
    const selectedOption = e.target;
    const isCorrect = selectedOption.dataset.correct === 'true';
    
    // Update stats
    gameState.questionsAnswered++;
    
    if (gameState.selectedOperation !== 'mixed') {
        gameState.operationStats[gameState.selectedOperation].answered++;
    }
    
    // Highlight correct/incorrect answers
    const options = elements.options.querySelectorAll('.option');
    options.forEach(option => {
        if (option.dataset.correct === 'true') {
            option.classList.add('correct');
        } else if (option === selectedOption && !isCorrect) {
            option.classList.add('incorrect');
        }
        option.style.pointerEvents = 'none';
    });
    
    // Play sound
    if (isCorrect) {
        correctSound.play();
    } else {
        wrongSound.play();
    }
    
    // Update score and stats if correct
    if (isCorrect) {
        gameState.score += 10;
        gameState.totalScore += 10;
        gameState.correctAnswers++;
        
        if (gameState.selectedOperation !== 'mixed') {
            gameState.operationStats[gameState.selectedOperation].correct++;
        }
        
        // Show confetti for correct answer
        createConfetti();
        
        setTimeout(showReward, 1500);
    } else {
        setTimeout(() => {
            gameState.currentQuestion++;
            loadQuestion();
        }, 1500);
    }
}

// Time's up handler
function timeUp() {
    const options = elements.options.querySelectorAll('.option');
    options.forEach(option => {
        if (option.dataset.correct === 'true') {
            option.classList.add('correct');
        }
        option.style.pointerEvents = 'none';
    });
    
    // Update stats (count as answered but not correct)
    gameState.questionsAnswered++;
    if (gameState.selectedOperation !== 'mixed') {
        gameState.operationStats[gameState.selectedOperation].answered++;
    }
    
    // Play wrong sound
    wrongSound.play();
    
    setTimeout(() => {
        gameState.currentQuestion++;
        loadQuestion();
    }, 1500);
}

// Show reward screen
function showReward() {
    // Play win sound
    winSound.play();
    
    // Update points display
    elements.points.textContent = gameState.score;
    
    // Update reward message
    updateRewardMessage();
    
    // Update badge based on total score
    updateBadge();
    
    showScreen('rewardScreen');
}

// Update reward message based on language
function updateRewardMessage() {
    const lang = gameState.language;
    const messages = {
        english: `Great Job! 🎉 You earned ${gameState.score} points!`,
        amharic: `በጣም ጥሩ! 🎉 ${gameState.score} ነጥቦችን አገኘህ!`
    };
    elements.rewardMessage.textContent = messages[lang];
}

// Update badge based on total score
function updateBadge() {
    const badges = [
        { threshold: 0, name: { english: "Math Explorer", amharic: "የሂሳብ አስማተኛ" } },
        { threshold: 20, name: { english: "Number Ninja", amharic: "ቁጥር ነጂ" } },
        { threshold: 50, name: { english: "Math Wizard", amharic: "የሂሳብ ጠንቋይ" } },
        { threshold: 100, name: { english: "Math Champion", amharic: "የሂሳብ ቻምፒዮን" } }
    ];
    
    let currentBadge = badges[0];
    for (const badge of badges) {
        if (gameState.totalScore >= badge.threshold) {
            currentBadge = badge;
        }
    }
    
    const badgeTitle = document.querySelector('.badge-title');
    badgeTitle.textContent = currentBadge.name[gameState.language];
}

// Create confetti effect
function createConfetti() {
    // Clear any existing confetti
    elements.confettiContainer.innerHTML = '';
    
    // Create 50 confetti pieces
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        
        // Random properties
        const colors = ['#f72585', '#4361ee', '#4cc9f0', '#f8961e', '#4ad66d'];
        const left = Math.random() * 100;
        const animationDuration = Math.random() * 3 + 2;
        const delay = Math.random() * 2;
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        // Apply styles
        confetti.style.left = `${left}%`;
        confetti.style.backgroundColor = color;
        confetti.style.animationDuration = `${animationDuration}s`;
        confetti.style.animationDelay = `${delay}s`;
        
        // Random shape
        if (Math.random() > 0.5) {
            confetti.style.borderRadius = '50%';
        }
        
        elements.confettiContainer.appendChild(confetti);
    }
}

// Move to next challenge
function nextChallenge() {
    gameState.currentQuestion++;
    showScreen('challengeScreen');
    loadQuestion();
}

// Back to operations selection
function backToOperations() {
    showScreen('operationSelectionScreen');
}

// Back to home screen
function backToHome() {
    showScreen('homeScreen');
}

// Show progress screen
function showProgress() {
    updateProgressScreen();
    showScreen('progressScreen');
}

// Update progress screen
function updateProgressScreen() {
    const lang = gameState.language;
    
    // Update general stats
    elements.totalPoints.textContent = gameState.totalScore;
    elements.questionsAnswered.textContent = gameState.questionsAnswered;
    elements.correctAnswers.textContent = gameState.correctAnswers;
    
    // Update operation progress
    elements.operationProgress.innerHTML = '';
    
    for (const op in gameState.operationStats) {
        const stat = gameState.operationStats[op];
        const percentage = stat.answered > 0 
            ? Math.round((stat.correct / stat.answered) * 100) 
            : 0;
        
        // Get operation name in current language
        const opNames = {
            addition: { english: "Addition", amharic: "መደመር" },
            subtraction: { english: "Subtraction", amharic: "መቀነስ" },
            multiplication: { english: "Multiplication", amharic: "መባዛት" },
            division: { english: "Division", amharic: "መከፋፈል" },
            fractions: { english: "Fractions", amharic: "ክፍልፋዮች" }
        };
        
        const opName = opNames[op][lang];
        
        // Create progress item
        const progressItem = document.createElement('div');
        progressItem.className = 'skill-item';
        
        progressItem.innerHTML = `
            <div class="skill-name">
                <span>${opName}</span>
                <span>${percentage}%</span>
            </div>
            <div class="skill-bar">
                <div class="skill-progress" style="width: ${percentage}%"></div>
            </div>
        `;
        
        elements.operationProgress.appendChild(progressItem);
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', init);