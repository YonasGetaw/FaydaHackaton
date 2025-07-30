document.addEventListener('DOMContentLoaded', function() {
    const translations = {
        en: {
            title: "Addition & Subtraction",
            addLabel: "Addition",
            subtractLabel: "Subtraction",
            checkBtn: "Check",
            newBtn: "New Problem",
            langBtn: "በአማርኛ"
        },
        am: {
            title: "መደመር እና መቀነስ",
            addLabel: "መደመር",
            subtractLabel: "መቀነስ",
            checkBtn: "አረጋግጥ",
            newBtn: "አዲስ ችግር",
            langBtn: "In English"
        }
    };

    let currentLang = 'en';
    let score = 0;
    let currentProblem = generateProblem();

    // DOM elements
    const langBtn = document.getElementById('langBtn');
    const titleElement = document.getElementById('title');
    const addLabel = document.getElementById('addLabel');
    const subtractLabel = document.getElementById('subtractLabel');
    const checkBtn = document.getElementById('checkBtn');
    const newBtn = document.getElementById('newBtn');
    const scoreElement = document.getElementById('score');
    const num1Element = document.getElementById('num1');
    const operatorElement = document.getElementById('operator');
    const num2Element = document.getElementById('num2');
    const answerElement = document.getElementById('answer');
    const operationRadios = document.querySelectorAll('input[name="operation"]');

    function updateContent() {
        titleElement.textContent = translations[currentLang].title;
        addLabel.textContent = translations[currentLang].addLabel;
        subtractLabel.textContent = translations[currentLang].subtractLabel;
        checkBtn.textContent = translations[currentLang].checkBtn;
        newBtn.textContent = translations[currentLang].newBtn;
        langBtn.textContent = translations[currentLang].langBtn;
        updateScore();
    }

    function generateProblem() {
        const operation = document.querySelector('input[name="operation"]:checked').value;
        const num1 = Math.floor(Math.random() * 10) + 1;
        const num2 = Math.floor(Math.random() * 10) + 1;
        
        let operator, answer;
        if (operation === 'add') {
            operator = '+';
            answer = num1 + num2;
        } else {
            operator = '-';
            answer = num1 - num2;
            if (answer < 0) return generateProblem(); // Ensure positive results
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

    function updateScore() {
        scoreElement.textContent = currentLang === 'en' 
            ? `Score: ${score}` 
            : `ውጤት: ${score}`;
    }

    function checkAnswer() {
        const userAnswer = parseInt(answerElement.value);
        if (isNaN(userAnswer)) return;
        
        if (userAnswer === currentProblem.answer) {
            score++;
            updateScore();
            currentProblem = generateProblem();
            displayProblem();
        } else {
            answerElement.select();
        }
    }

    function newProblem() {
        currentProblem = generateProblem();
        displayProblem();
    }

    // Event listeners
    langBtn.addEventListener('click', function() {
        currentLang = currentLang === 'en' ? 'am' : 'en';
        updateContent();
    });

    checkBtn.addEventListener('click', checkAnswer);
    newBtn.addEventListener('click', newProblem);

    answerElement.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') checkAnswer();
    });

    operationRadios.forEach(radio => {
        radio.addEventListener('change', newProblem);
    });

    // Initialize
    updateContent();
    displayProblem();
});