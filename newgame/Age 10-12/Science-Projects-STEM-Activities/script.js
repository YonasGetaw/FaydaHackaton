// Function to switch between sections
function showSection(sectionId) {
    let sections = document.querySelectorAll('.content');
    sections.forEach(section => section.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
}

// Function to show an alert for activities
function showAlert(message) {
    alert(message);
}

// Function to check quiz answers
function checkAnswers() {
    let answer1 = document.getElementById('q1').value.toLowerCase();
    let answer2 = document.getElementById('q2').value.toLowerCase();
    let resultText = "";

    if (answer1 === "electricity" && answer2 === "evaporation") {
        resultText = "🎉 Great job! You got both answers correct!";
    } else if (answer1 === "electricity" || answer2 === "evaporation") {
        resultText = "😊 Almost there! Try again!";
    } else {
        resultText = "❌ Oops! Try again!";
    }

    document.getElementById('quiz-result').textContent = resultText;
}

// Show the first section by default
document.addEventListener('DOMContentLoaded', () => {
    showSection('electricity');
});