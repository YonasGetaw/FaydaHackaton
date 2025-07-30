// UI Elements
const modeContainer = document.getElementById("mode-container");
const gameContainer = document.getElementById("game-container");
const gameTitle = document.getElementById("game-title");
const questionContainer = document.getElementById("question");
const answerContainer = document.getElementById("answer-container");
const feedbackContainer = document.getElementById("feedback");
const [learnBtn, quizBtn] = document.querySelectorAll(".mode-btn");

// Game State
let currentMode = "";
let currentQuestionIndex = 0;
let currentDifficulty = 0;
const difficulties = ["simple", "medium", "hard"];

// Numbers Mode (0-20)
const numbers = Array.from({ length: 21 }, (_, i) => i);

// Math Quiz Questions
const quizData = {
  simple: [
    { question: "2 + 3", answer: 5, options: [4, 5, 6, 7] },
    { question: "5 - 2", answer: 3, options: [2, 3, 4, 5] },
    { question: "2 × 2", answer: 4, options: [3, 4, 5, 6] },
    { question: "6 ÷ 2", answer: 3, options: [2, 3, 4, 5] }
  ],
  medium: [
    { question: "7 + 8", answer: 15, options: [14, 15, 16, 17] },
    { question: "10 - 6", answer: 4, options: [3, 4, 5, 6] },
    { question: "3 × 4", answer: 12, options: [10, 12, 14, 16] },
    { question: "8 ÷ 2", answer: 4, options: [3, 4, 5, 6] }
  ],
  hard: [
    { question: "12 + 15", answer: 27, options: [25, 26, 27, 28] },
    { question: "20 - 9", answer: 11, options: [10, 11, 12, 13] },
    { question: "6 × 3", answer: 18, options: [16, 17, 18, 19] },
    { question: "24 ÷ 3", answer: 8, options: [7, 8, 9, 10] }
  ]
};

// Event Listeners
learnBtn.addEventListener("click", () => startGame("numbers"));
quizBtn.addEventListener("click", () => startGame("quiz"));
document.getElementById("back-btn").addEventListener("click", handleBack);
document.getElementById("next-btn").addEventListener("click", handleNext);
document.getElementById("logout-btn").addEventListener("click", () => {
  window.location.href = "login.html";
});

function startGame(mode) {
  currentMode = mode;
  gameTitle.textContent = mode === "numbers" ? "Learn Numbers 0-20" : `Math Quiz (${difficulties[currentDifficulty].toUpperCase()})`;
  modeContainer.style.display = "none";
  gameContainer.style.display = "block";
  loadContent();
}

function loadContent() {
  answerContainer.innerHTML = "";
  feedbackContainer.textContent = "";
  
  if (currentMode === "numbers") {
    numbers.forEach(num => {
      const btn = document.createElement("button");
      btn.className = "answer-btn";
      btn.textContent = num;
      btn.addEventListener("click", () => speakNumber(num));
      answerContainer.appendChild(btn);
    });
    document.getElementById("next-btn").style.display = "none";
  } else {
    loadQuizQuestion();
  }
}

function loadQuizQuestion() {
  const questions = quizData[difficulties[currentDifficulty]];
  const question = questions[currentQuestionIndex];
  
  questionContainer.textContent = `What is ${question.question}?`;
  answerContainer.innerHTML = "";
  
  question.options.sort(() => Math.random() - 0.5).forEach(option => {
    const btn = document.createElement("button");
    btn.className = "answer-btn";
    btn.textContent = option;
    btn.addEventListener("click", () => checkAnswer(option === question.answer));
    answerContainer.appendChild(btn);
  });
}

function checkAnswer(isCorrect) {
  const feedback = isCorrect ? "Correct! 🎉" : "Try Again!";
  feedbackContainer.textContent = feedback;
  feedbackContainer.style.color = isCorrect ? "#4CAF50" : "#f44336";
  
  if (isCorrect) {
    document.getElementById("next-btn").disabled = false;
    speakText(feedback);
  }
}

function handleBack() {
  if (currentMode === "numbers") {
    showHome();
  } else {
    if (currentQuestionIndex > 0) {
      currentQuestionIndex--;
      loadQuizQuestion();
    } else {
      showHome();
    }
  }
}

function handleNext() {
  if (currentMode === "quiz") {
    const questions = quizData[difficulties[currentDifficulty]];
    if (currentQuestionIndex < questions.length - 1) {
      currentQuestionIndex++;
      loadQuizQuestion();
      document.getElementById("next-btn").disabled = true;
    } else {
      currentDifficulty = (currentDifficulty + 1) % difficulties.length;
      currentQuestionIndex = 0;
      gameTitle.textContent = `Math Quiz (${difficulties[currentDifficulty].toUpperCase()})`;
      loadQuizQuestion();
    }
  }
}

function showHome() {
  modeContainer.style.display = "block";
  gameContainer.style.display = "none";
  currentQuestionIndex = 0;
  document.getElementById("next-btn").disabled = false;
}

function speakNumber(num) {
  speakText(num.toString());
}

function speakText(text) {
  if (window.speechSynthesis) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.pitch = 1.2;
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  }
}