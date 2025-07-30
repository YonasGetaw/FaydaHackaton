// Spelling Bee Game
function startSpelling() {
    let words = ["elephant", "giraffe", "crocodile", "chocolate"];
    let chosenWord = words[Math.floor(Math.random() * words.length)];
    let userWord = prompt(`Spell this word: ${chosenWord}`);
    if (userWord.toLowerCase() === chosenWord) {
        document.getElementById("spelling-result").innerText = "🎉 Correct!";
    } else {
        document.getElementById("spelling-result").innerText = "❌ Try again!";
    }
}

// Math Challenge Game
function startMathChallenge() {
    let score = 0;
    for (let i = 0; i < 5; i++) {
        let num1 = Math.floor(Math.random() * 10) + 1;
        let num2 = Math.floor(Math.random() * 10) + 1;
        let answer = prompt(`What is ${num1} + ${num2}?`);
        if (parseInt(answer) === num1 + num2) {
            score++;
        }
    }
    document.getElementById("math-score").innerText = `You got ${score} correct!`;
}

// Riddle Answer Check
function checkRiddle() {
    let answer = document.getElementById("riddle-answer").value.toLowerCase();
    if (answer === "piano") {
        document.getElementById("riddle-result").innerText = "🎉 Correct!";
    } else {
        document.getElementById("riddle-result").innerText = "❌ Try again!";
    }
}

// Memory Game
function startMemoryGame() {
    let items = ["apple", "banana", "car", "elephant", "house"];
    alert(`Remember these: ${items.join(", ")}`);
    setTimeout(() => {
        let answer = prompt("Enter as many items as you remember:");
        let correctItems = answer.split(",").filter(item => items.includes(item.trim()));
        document.getElementById("memory-score").innerText = `You remembered ${correctItems.length} items!`;
    }, 5000);
}

// Storytelling Random Words
function generateStoryWords() {
    let words = ["dragon", "forest", "hero", "magic", "castle"];
    let randomWords = words.sort(() => Math.random() - 0.5).slice(0, 3);
    document.getElementById("story-words").innerText = `Your words: ${randomWords.join(", ")}`;
}
