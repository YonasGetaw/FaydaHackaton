let fractionScore = 0;
let fractionCount = 0;
const fractionQuestions = [
    { question: "Convert 1/2 to decimal", answer: "0.5" },
    { question: "Convert 0.75 to fraction", answer: "3/4" },
    { question: "Convert 3/5 to decimal", answer: "0.6" },
    { question: "Convert 0.2 to fraction", answer: "1/5" },
    { question: "Convert 5/8 to decimal", answer: "0.625" }
];

function showPractice() {
    document.getElementById('fractionLesson').style.display = 'none';
    document.getElementById('fractionPractice').style.display = 'block';
    nextQuestion();
}

function nextQuestion() {
    if (fractionCount >= fractionQuestions.length) {
        const resultElement = document.getElementById('fractionResult');
        resultElement.textContent = `Practice complete! Your score: ${fractionScore}/${fractionQuestions.length}`;
        resultElement.className = fractionScore === fractionQuestions.length ? 'correct' : 'incorrect';
        return;
    }
    
    const question = fractionQuestions[fractionCount];
    document.getElementById('fractionQuestion').textContent = question.question;
    document.getElementById('fractionAnswer').value = '';
    document.getElementById('fractionAnswer').focus();
}

function checkAnswer() {
    const userAnswer = document.getElementById('fractionAnswer').value.trim();
    const correctAnswer = fractionQuestions[fractionCount].answer;
    const resultElement = document.getElementById('fractionResult');
    
    if (!userAnswer) {
        resultElement.textContent = 'Please enter an answer!';
        resultElement.className = 'incorrect';
        return;
    }
    
    if (userAnswer === correctAnswer) {
        fractionScore++;
        document.getElementById('fractionScore').textContent = fractionScore;
        resultElement.textContent = 'Correct! 🎉';
        resultElement.className = 'correct';
    } else {
        resultElement.textContent = `Incorrect. The correct answer is ${correctAnswer}.`;
        resultElement.className = 'incorrect';
    }
    
    fractionCount++;
    document.getElementById('fractionCount').textContent = fractionCount;
    
    setTimeout(() => {
        nextQuestion();
        resultElement.textContent = '';
        resultElement.className = '';
    }, 1500);
}