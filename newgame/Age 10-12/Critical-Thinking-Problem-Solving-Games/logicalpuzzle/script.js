document.addEventListener('DOMContentLoaded', function() {
    // Language state
    let isAmharic = false;
    
    // Translations
    const translations = {
        en: {
            title: "Logical Puzzles",
            subtitle: "Exercise Your Reasoning",
            puzzle1Title: "Puzzle #1",
            puzzle1Text: "Three switches outside a room control three bulbs inside. You can flip switches but can only enter the room once. How do you determine which switch controls which bulb?",
            puzzle1Solution: "<p>Turn on the first switch for 5 minutes, then turn it off and turn on the second switch. Enter the room:</p><ul><li>On bulb = controlled by second switch</li><li>Off but warm bulb = controlled by first switch</li><li>Off and cold bulb = controlled by third switch</li></ul>",
            puzzle2Title: "Puzzle #2",
            puzzle2Text: "You have two ropes that each burn for exactly 60 minutes, but not at a consistent rate. How can you measure exactly 45 minutes?",
            puzzle2Solution: "<p>Light the first rope at both ends and the second rope at one end simultaneously. When the first rope burns out (after 30 minutes), light the other end of the second rope. It will burn out in 15 more minutes, totaling 45 minutes.</p>",
            solveBtn: "Show Solution",
            createTitle: "Create Your Own Puzzle",
            puzzlePlaceholder: "Enter your puzzle here...",
            solutionPlaceholder: "Enter the solution...",
            addPuzzle: "Add Puzzle",
            moreChallenges: "More challenges: ",
            teaserLink: "Brain Teasers",
            decisionLink: "Decision Making",
            footerText: "Develop your critical thinking skills",
            languageToggle: "አማርኛ / Amharic",
            emptyFields: "Please enter both a puzzle and its solution!"
        },
        am: {
            title: "ሎጂካዊ እንቆቅልሾች",
            subtitle: "የምክንያት ክህሎትዎን ይለማመዱ",
            puzzle1Title: "እንቆቅልሽ #1",
            puzzle1Text: "በአንድ ክፍል ውጭ ሶስት ስዊችዎች ውስጥ ሶስት አምፖሎችን ይቆጣጠራሉ። ስዊችዎቹን መቀያየር ትችላለህ ግን ክፍሉን አንድ ጊዜ ብቻ መግባት ትችላለህ። እያንዳንዱ ስዊች የትኛውን አምፖል እንደሚቆጣጠር እንዴት ይወስናሉ?",
            puzzle1Solution: "<p>የመጀመሪያውን ስዊች ለ5 ደቂቃዎች አብራ፣ ከዚያ ጠፍቶ ሁለተኛውን ስዊች አብራ። ክፍሉን ግባ:</p><ul><li>የተቃጠለ አምፖል = በሁለተኛው ስዊች የሚቆጣጠር</li><li>ጠፍቶ ግን ሙቅ የሆነ አምፖል = በመጀመሪያው ስዊች የሚቆጣጠር</li><li>ጠፍቶ ቀዝቃዛ የሆነ አምፖል = በሦስተኛው ስዊች የሚቆጣጠር</li></ul>",
            puzzle2Title: "እንቆቅልሽ #2",
            puzzle2Text: "ሁለት ገመዶች አሉዎት እያንዳንዳቸው በትክክል 60 ደቂቃዎች ይቃጠላሉ፣ ነገር ግን በቋሚ ፍጥነት አይደለም። በትክክል 45 ደቂቃዎችን እንዴት ልትለኩ ትችላለህ?",
            puzzle2Solution: "<p>የመጀመሪያውን ገመድ በሁለቱም ጫፎቹ አብራ፣ እና ሁለተኛውን ገመድ በአንድ ጫፍ ብቻ በአንድ ጊዜ አብራ። የመጀመሪያው ገመድ ሲቃጠል (ከ30 ደቂቃዎች በኋላ)፣ ሌላኛውን ጫፍ የሁለተኛውን ገመድ አብራ። በ15 ተጨማሪ ደቂቃዎች ውስጥ ይቃጠላል፣ በጠቅላላው 45 ደቂቃዎች።</p>",
            solveBtn: "መፍትሄ አሳይ",
            createTitle: "የራስህን እንቆቅልሽ ፍጠር",
            puzzlePlaceholder: "እንቆቅልሽህን እዚህ አስገባ...",
            solutionPlaceholder: "መፍትሄውን አስገባ...",
            addPuzzle: "እንቆቅልሽ ጨምር",
            moreChallenges: "ተጨማሪ ልምምዶች: ",
            teaserLink: "የአንጎል ልምምዶች",
            decisionLink: "ውሳኔ መስጠት",
            footerText: "የምርምር ክህሎትዎን ያዳብሩ",
            languageToggle: "English / እንግሊዝኛ",
            emptyFields: "እባክዎ ሁለቱንም እንቆቅልሽ እና መፍትሄውን ያስገቡ!"
        }
    };

    // Puzzles data
    const puzzles = [
        {
            text: translations.en.puzzle1Text,
            solution: translations.en.puzzle1Solution
        },
        {
            text: translations.en.puzzle2Text,
            solution: translations.en.puzzle2Solution
        },
        {
            text: "A man lives on the 10th floor of a building. Every day he takes the elevator to go down to the ground floor to go to work. When he returns, he takes the elevator to the 7th floor and walks up the stairs to reach his apartment on the 10th floor. Why?",
            solution: "The man is too short to reach the button for the 10th floor. He can only reach up to the 7th floor button, so he takes the elevator to the 7th floor and walks the remaining floors."
        }
    ];

    // DOM elements
    const languageToggle = document.getElementById('language-toggle');
    const puzzleCards = document.querySelectorAll('.puzzle-card');
    const puzzleTexts = document.querySelectorAll('.puzzle-text');
    const solutionDivs = document.querySelectorAll('.solution');
    const solveBtns = document.querySelectorAll('.solve-btn');
    const puzzleInput = document.querySelector('.puzzle-input');
    const solutionInput = document.querySelector('.solution-input');
    const addPuzzleBtn = document.querySelector('.add-puzzle');

    // Update language
    function updateLanguage() {
        const lang = isAmharic ? 'am' : 'en';
        const t = translations[lang];
        
        document.getElementById('title').textContent = t.title;
        document.getElementById('subtitle').textContent = t.subtitle;
        document.getElementById('puzzle1-title').textContent = t.puzzle1Title;
        document.getElementById('puzzle2-title').textContent = t.puzzle2Title;
        document.getElementById('solve-btn1').textContent = t.solveBtn;
        document.getElementById('solve-btn2').textContent = t.solveBtn;
        document.getElementById('create-title').textContent = t.createTitle;
        puzzleInput.placeholder = t.puzzlePlaceholder;
        solutionInput.placeholder = t.solutionPlaceholder;
        document.getElementById('add-puzzle').textContent = t.addPuzzle;
        document.getElementById('more-challenges').innerHTML = t.moreChallenges + 
            `<a href="#" class="footer-link">${t.teaserLink}</a> | 
            <a href="#" class="footer-link">${t.decisionLink}</a>`;
        document.getElementById('footer-text').textContent = t.footerText;
        languageToggle.textContent = t.languageToggle;
        
        // Update current puzzles
        initPuzzles();
    }

    // Initialize with first puzzles
    function initPuzzles() {
        puzzleTexts[0].textContent = isAmharic ? translations.am.puzzle1Text : translations.en.puzzle1Text;
        solutionDivs[0].innerHTML = isAmharic ? translations.am.puzzle1Solution : translations.en.puzzle1Solution;
        solutionDivs[0].classList.add('hidden');
        solveBtns[0].textContent = isAmharic ? translations.am.solveBtn : translations.en.solveBtn;
        
        puzzleTexts[1].textContent = isAmharic ? translations.am.puzzle2Text : translations.en.puzzle2Text;
        solutionDivs[1].innerHTML = isAmharic ? translations.am.puzzle2Solution : translations.en.puzzle2Solution;
        solutionDivs[1].classList.add('hidden');
        solveBtns[1].textContent = isAmharic ? translations.am.solveBtn : translations.en.solveBtn;
    }

    // Language toggle
    languageToggle.addEventListener('click', function() {
        isAmharic = !isAmharic;
        updateLanguage();
    });

    // Show solution when button clicked
    solveBtns.forEach((btn, index) => {
        btn.addEventListener('click', function() {
            solutionDivs[index].classList.toggle('hidden');
            this.textContent = solutionDivs[index].classList.contains('hidden') ? 
                (isAmharic ? translations.am.solveBtn : translations.en.solveBtn) : 
                (isAmharic ? 'መፍትሄ ደብቅ' : 'Hide Solution');
        });
    });

    // Add user-created puzzle
    addPuzzleBtn.addEventListener('click', function() {
        const puzzleText = puzzleInput.value.trim();
        const solutionText = solutionInput.value.trim();
        const t = isAmharic ? translations.am : translations.en;
        
        if (!puzzleText || !solutionText) {
            alert(t.emptyFields);
            return;
        }
        
        // Create new puzzle card
        const newPuzzleCard = document.createElement('div');
        newPuzzleCard.className = 'puzzle-card';
        newPuzzleCard.innerHTML = `
            <h3>${t.createTitle}</h3>
            <p class="puzzle-text">${puzzleText}</p>
            <button class="solve-btn">${t.solveBtn}</button>
            <div class="solution hidden">
                <p>${solutionText}</p>
            </div>
        `;
        
        // Insert before the user input section
        document.querySelector('.puzzle-container').appendChild(newPuzzleCard);
        
        // Add event listener to new button
        newPuzzleCard.querySelector('.solve-btn').addEventListener('click', function() {
            const solution = this.nextElementSibling;
            solution.classList.toggle('hidden');
            this.textContent = solution.classList.contains('hidden') ? 
                t.solveBtn : 
                (isAmharic ? 'መፍትሄ ደብቅ' : 'Hide Solution');
        });
        
        // Clear inputs
        puzzleInput.value = '';
        solutionInput.value = '';
        
        // Add to puzzles array for persistence (would use database in real app)
        puzzles.push({
            text: puzzleText,
            solution: solutionText
        });
    });

    initPuzzles();
});