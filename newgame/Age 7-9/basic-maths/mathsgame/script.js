document.addEventListener('DOMContentLoaded', function() {
    const translations = {
        en: {
            title: "Math Adventure",
            checkBtn: "Check",
            newBtn: "New Problem",
            level: "Level:",
            score: "Score:",
            langBtn: "በአማርኛ"
        },
        am: {
            title: "የሂሳብ ላይዛን",
            checkBtn: "አረጋግጥ",
            newBtn: "አዲስ ችግር",
            level: "ደረጃ:",
            score: "ውጤት:",
            langBtn: "In English"
        }
    };

    let currentLang = 'en';
    let score = 0;
    let level = 1;
    let progress = 0;
    let currentOperation = 'add';
    let currentProblem = generateProblem();

    // DOM elements
    const langBtn = document.getElementById('langBtn');
    const titleElement = document.getElementById('title');
    const checkBtn = document.getElementById('checkBtn');
    const newBtn = document.getElementById('newBtn');
    const levelElement = document.getElementById('level');
    const scoreElement = document.getElementById('score');
    const progressBar = document.getElementById('progressBar');
    const num1Element = document.getElementById('num1');
    const operatorElement = document.getElementById('operator');
    const num2Element = document.getElementById('num2');
    const answerElement = document.getElementById('answer');
    const character = document.getElementById('character');
    const opButtons = document.querySelectorAll('.op-btn');

    function updateContent() {
        titleElement.textContent = translations[currentLang].title;
        checkBtn.textContent = translations[currentLang].checkBtn;
        newBtn.textContent = translations[currentLang].newBtn;
        levelElement.textContent = `${translations[currentLang].level} ${level}`;
        scoreElement.textContent = `${translations[currentLang].score} ${score}`;
        langBtn.textContent = translations[currentLang].langBtn;
    }

    function generateProblem() {
        let num1, num2, operator, answer;
        const max = 5 + (level * 2);
        
        switch(currentOperation) {
            case 'add':
                num1 = Math.floor(Math.random() * max) + 1;
                num2 = Math.floor(Math.random() * max) + 1;
                operator = '+';
                answer = num1 + num2;
                break;
            case 'subtract':
                num1 = Math.floor(Math.random() * max) + 5;
                num2 = Math.floor(Math.random() * num1) + 1;
                operator = '-';
                answer = num1 - num2;
                break;
            case 'multiply':
                num1 = Math.floor(Math.random() * (level + 3)) + 1;
                num2 = Math.floor(Math.random() * (level + 3)) + 1;
                operator = '×';
                answer = num1 * num2;
                break;
        }
        
        return { num1, num2, operator, answer };
    }

    function displayProblem() {
        num1Element.textContent = currentProblem.num1;
        operatorElement.textContent = currentProblem.operator;
        num2Element.textContent = currentProblem.num2;
        answerElement.value = '';
        answerElement.focus();
    }

    function updateProgress() {
        progress += 10;
        if (progress >= 100) {
            level++;
            progress = 0;
            levelElement.textContent = `${translations[currentLang].level} ${level}`;
            animateCharacter();
        }
        progressBar.style.width = `${progress}%`;
    }

    function animateCharacter() {
        character.style.transform = 'translateY(-20px)';
        setTimeout(() => {
            character.style.transform = 'translateY(0)';
        }, 300);
    }

    function checkAnswer() {
        const userAnswer = parseInt(answerElement.value);
        if (isNaN(userAnswer)) return;
        
        if (userAnswer === currentProblem.answer) {
            score += level;
            updateProgress();
            scoreElement.textContent = `${translations[currentLang].score} ${score}`;
            animateCharacter();
            currentProblem = generateProblem();
            displayProblem();
        } else {
            answerElement.select();
        }
    }

    function changeOperation(op) {
        currentOperation = op;
        opButtons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.op === op);
        });
        currentProblem = generateProblem();
        displayProblem();
    }

    // Event listeners
    langBtn.addEventListener('click', function() {
        currentLang = currentLang === 'en' ? 'am' : 'en';
        updateContent();
    });

    checkBtn.addEventListener('click', checkAnswer);
    newBtn.addEventListener('click', function() {
        currentProblem = generateProblem();
        displayProblem();
    });

    answerElement.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') checkAnswer();
    });

    opButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            changeOperation(this.dataset.op);
        });
    });

    // Initialize
    updateContent();
    displayProblem();
});