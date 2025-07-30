document.addEventListener('DOMContentLoaded', () => {
    const introSection = document.getElementById('intro');
    const challenge2 = document.getElementById('challenge2');
    const challenge3 = document.getElementById('challenge3');
    const endGame = document.getElementById('endGame');

    const startGameBtn = document.getElementById('startGame');
    const nextChallenge2Btn = document.getElementById('nextChallenge2');
    const nextChallenge3Btn = document.getElementById('nextChallenge3');
    const restartGameBtn = document.getElementById('restartGame');

    const backToIntroBtn = document.getElementById('backToIntro');
    const backToChallenge2Btn = document.getElementById('backToChallenge2');

    const englishBtn = document.getElementById('englishBtn');
    const amharicBtn = document.getElementById('amharicBtn');

    startGameBtn.addEventListener('click', () => {
        introSection.style.display = 'none';
        challenge2.style.display = 'block';
    });

    nextChallenge2Btn.addEventListener('click', () => {
        challenge2.style.display = 'none';
        challenge3.style.display = 'block';
    });

    nextChallenge3Btn.addEventListener('click', () => {
        challenge3.style.display = 'none';
        endGame.style.display = 'block';
    });

    backToIntroBtn.addEventListener('click', () => {
        challenge2.style.display = 'none';
        introSection.style.display = 'block';
    });

    backToChallenge2Btn.addEventListener('click', () => {
        challenge3.style.display = 'none';
        challenge2.style.display = 'block';
    });

    restartGameBtn.addEventListener('click', () => {
        endGame.style.display = 'none';
        introSection.style.display = 'block';
    });

    const translations = {
        en: {
            introText: "Are you ready to use your brainpower to crack puzzles, solve mysteries, and think outside the box?",
            startGame: "Start the Game!",
            challenge2Title: "Challenge 2: The Riddle of the Hidden Treasure",
            challenge2Description: "You’ve found an ancient map with riddles!",
            checkRiddle: "Check Answer",
            nextChallenge2: "Next Challenge",
            backToIntro: "Back",
            challenge3Title: "Challenge 3: The Maze of Mindful Decisions",
            nextChallenge3: "Next Challenge",
            backToChallenge2: "Back",
            endTitle: "Congratulations!",
            endText: "You've completed the problem-solving adventure!",
            restartGame: "Go to First Page"
        },
        am: {
            introText: "ምስጢሮችን ለመፍታት የአእምሮዎን ኃይል ለማጠቀም ዝግጁ ነዎት?",
            startGame: "ጨዋታውን ጀምር!",
            challenge2Title: "ፈተና 2: የተደበቀውን ዝምድና አንብብ",
            challenge2Description: "እስከ ዛሬው ያለፈ የቆየ ካርታ ተገኝቷል!",
            checkRiddle: "መልስ አረጋግጥ",
            nextChallenge2: "ቀጣይ ፈተና",
            backToIntro: "ተመለስ",
            challenge3Title: "ፈተና 3: የውስጣዊ ውሳኔ መድረሻ",
            nextChallenge3: "ቀጣይ ፈተና",
            backToChallenge2: "ተመለስ",
            endTitle: "እንኳን ደስ አሎት!",
            endText: "የችሎታ ጉዞዎን ጨርሰዋል!",
            restartGame: "ወደ መጀመሪያ ገጽ ተመለስ"
        }
    };

    englishBtn.addEventListener('click', () => updateLanguage('en'));
    amharicBtn.addEventListener('click', () => updateLanguage('am'));

    function updateLanguage(lang) {
        Object.keys(translations[lang]).forEach(id => {
            const element = document.getElementById(id);
            if (element) element.textContent = translations[lang][id];
        });
    }
});
