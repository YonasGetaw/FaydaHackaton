let algebraScore = 0;
let algebraCount = 0;
const algebraQuestions = [
    { question: "Solve for x: x + 7 = 15", answer: 8 },
    { question: "Solve for y: y - 3 = 10", answer: 13 },
    { question: "Solve for a: 2a = 16", answer: 8 },
    { question: "Solve for b: b ÷ 4 = 5", answer: 20 },
    { question: "Solve for m: 3m + 2 = 14", answer: 4 }
];

function showPractice() {
    document.getElementById('algebraLesson').style.display = 'none';
    document.getElementById('algebraPractice').style.display = 'block';
    nextQuestion();
}

function nextQuestion() {
    if (algebraCount >= algebraQuestions.length) {
        const resultElement = document.getElementById('algebraResult');
        resultElement.textContent = `Practice complete! Your score: ${algebraScore}/${algebraQuestions.length}`;
        resultElement.className = algebraScore === algebraQuestions.length ? 'correct' : 'incorrect';
        return;
    }
    
    const question = algebraQuestions[algebraCount];
    document.getElementById('algebraQuestion').textContent = question.question;
    document.getElementById('algebraAnswer').value = '';
    document.getElementById('algebraAnswer').focus();
}

function checkAnswer() {
    const userAnswer = parseInt(document.getElementById('algebraAnswer').value);
    const correctAnswer = algebraQuestions[algebraCount].answer;
    const resultElement = document.getElementById('algebraResult');
    
    if (isNaN(userAnswer)) {
        resultElement.textContent = 'Please enter a valid number!';
        resultElement.className = 'incorrect';
        return;
    }
    
    if (userAnswer === correctAnswer) {
        algebraScore++;
        document.getElementById('algebraScore').textContent = algebraScore;
        resultElement.textContent = 'Correct! 🎉';
        resultElement.className = 'correct';
    } else {
        resultElement.textContent = `Incorrect. The correct answer is ${correctAnswer}.`;
        resultElement.className = 'incorrect';
    }
    
    algebraCount++;
    document.getElementById('algebraCount').textContent = algebraCount;
    
    setTimeout(() => {
        nextQuestion();
        resultElement.textContent = '';
        resultElement.className = '';
    }, 1500);
}