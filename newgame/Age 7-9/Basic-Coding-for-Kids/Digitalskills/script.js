document.addEventListener('DOMContentLoaded', function() {
    // Quiz data with translations
    const quizData = {
        en: {
            title: "Digital Skills Quiz",
            questions: [
                "What should you do if a stranger messages you online?",
                "What is the safest way to create passwords?",
                "Why shouldn't you share personal information online?",
                "What should you do before downloading a file?",
                "How can you tell if a website is secure?",
                "What is cyberbullying?",
                "Why is it important to log out of accounts on shared computers?",
                "What should you do if you see something upsetting online?",
                "How often should you update your software?",
                "What is a good rule for screen time?"
            ],
            options: [
                ["Reply to them", "Tell a parent", "Ignore it", "Share your information"],
                ["Use your pet's name", "Use random letters and numbers", "Use your birthday", "Use 'password'"],
                ["It's fun to share", "It can be used to harm you", "Everyone does it", "No reason not to"],
                ["Check who sent it", "Download immediately", "Open all attachments", "Ignore warnings"],
                ["It has pictures", "It says 'safe'", "URL starts with https://", "It has bright colors"],
                ["Being nice online", "Using technology to hurt others", "Playing games", "Sharing photos"],
                ["To save electricity", "To protect your information", "It makes the computer faster", "No reason"],
                ["Share it with friends", "Tell a trusted adult", "Ignore it", "Post about it"],
                ["Never", "Only when it stops working", "Regularly when updates are available", "Once a year"],
                ["As much as you want", "Follow family rules", "Never take breaks", "Only at night"]
            ],
            correctAnswers: [1, 1, 1, 0, 2, 1, 1, 1, 2, 1],
            btnText: "በአማርኛ",
            progressText: "Question {current} of {total}",
            scoreText: "Score: {score}/{total}"
        },
        am: {
            title: "ዲጂታል ክህሎቶች ፈተና",
            questions: [
                "ከማያውቁት ሰው መልእክት ከተቀበሉ ምን ማድረግ አለብዎት?",
                "የይለፍ ቃል ለመፍጠር በጣም ደህንነቱ የተጠበቀ መንገድ ምንድን ነው?",
                "ለምን የግል መረጃ በመስመር ላይ መጋራት የለብዎትም?",
                "ፋይል ከማውረድዎ በፊት ምን ማድረግ አለብዎት?",
                "ድረ-ገጽ ደህንነቱ የተጠበቀ መሆኑን እንዴት �ያያሉ?",
                "የሳይበር ማጭበርበር ምንድን ነው?",
                "በተጋራ ኮምፒውተሮች ላይ ከመለያዎች የመውጣት ጠቀሜታ ምንድን ነው?",
                "በመስመር ላይ አስቸጋሪ ነገር ካዩ ምን ማድረግ አለብዎት?",
                "ሶፍትዌርዎን ምን ያህል ጊዜ መዘምን አለብዎት?",
                "ስላይት ጊዜ በተመለከተ ጥሩ ደንብ ምንድን ነው?"
            ],
            options: [
                ["መልስ መስጠት", "ወላጅ ማሳወቅ", "ችላ ማለት", "መረጃዎን መጋራት"],
                ["የቤት እንስሳትዎ ስም መጠቀም", "የዘፈቀደ ፊደላት እና ቁጥሮች መጠቀም", "የልደት ቀንዎን መጠቀም", "'password' መጠቀም"],
                ["ማጋራት አስደሳች ነው", "እርስዎን ለመጉዳት ሊያገለግል ይችላል", "ሁሉም ያደርጋል", "ማይጋር የሚል ምንም ምክንያት የለም"],
                ["ማን እንዳስቀመጠው ማረጋገጥ", "ወዲያውኑ ማውረድ", "ሁሉንም ተቀላጣፊዎች መክፈት", "ማስጠንቀቂያዎችን ችላ ማለት"],
                ["ስዕሎች አሉት", "'ደህንነቱ ተጠብቆ' ይላል", "URL በ https:// ይጀምራል", "ብሩህ ቀለሞች አሉት"],
                ["በመስመር ላይ መልካም መሆን", "ቴክኖሎጂን ሌሎችን ለመጉዳት መጠቀም", "ጨዋታዎችን መጫወት", "ስዕሎችን መጋራት"],
                ["ኤሌክትሪክ ለመቆጣጠር", "መረጃዎን ለመጠበቅ", "ኮምፒውተሩን ፈጣን ለማድረግ", "ምንም ምክንያት የለም"],
                ["ከጓደኞች ጋር መጋራት", "ለታመነ አዋቂ ማሳወቅ", "ችላ ማለት", "ስለዚህ ልጥፍ ማስቀመጥ"],
                ["ፈፅሞ አይደለም", "ሲያቆም ብቻ", "ዝመናዎች ሲገኙ በየጊዜው", "በየአመቱ አንድ ጊዜ"],
                ["እንደፈለጉት", "የቤተሰብ ደንቦችን መከተል", "መቆም የለብዎትም", "በማታ ብቻ"]
            ],
            correctAnswers: [1, 1, 1, 0, 2, 1, 1, 1, 2, 1],
            btnText: "In English",
            progressText: "ጥያቄ {current} ከ {total}",
            scoreText: "ውጤት: {score}/{total}"
        }
    };

    // Quiz variables
    let currentLang = 'en';
    let currentQuestion = 0;
    let score = 0;
    let selectedOption = null;
    let quizCompleted = false;

    // DOM elements
    const langBtn = document.getElementById('langBtn');
    const titleElement = document.getElementById('title');
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const resultElement = document.getElementById('result');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const progressText = document.getElementById('progressText');
    const progressFill = document.getElementById('progressFill');
    const scoreText = document.getElementById('scoreText');

    // Initialize quiz
    function initQuiz() {
        updateContent();
        showQuestion();
    }

    // Update language content
    function updateContent() {
        titleElement.textContent = quizData[currentLang].title;
        langBtn.textContent = quizData[currentLang].btnText;
        updateProgress();
        updateScore();
    }

    // Show current question
    function showQuestion() {
        const quiz = quizData[currentLang];
        questionElement.textContent = quiz.questions[currentQuestion];
        
        optionsElement.innerHTML = '';
        quiz.options[currentQuestion].forEach((option, index) => {
            const optionElement = document.createElement('div');
            optionElement.classList.add('option');
            optionElement.textContent = option;
            optionElement.addEventListener('click', () => selectOption(index));
            optionsElement.appendChild(optionElement);
        });
        
        updateProgress();
        resetButtons();
    }

    // Select an option
    function selectOption(index) {
        const options = document.querySelectorAll('.option');
        
        // Remove previous selection
        if (selectedOption !== null) {
            options[selectedOption].classList.remove('selected');
        }
        
        // Set new selection
        selectedOption = index;
        options[selectedOption].classList.add('selected');
        
        // Enable next button
        nextBtn.disabled = false;
    }

    // Check answer
    function checkAnswer() {
        const quiz = quizData[currentLang];
        const options = document.querySelectorAll('.option');
        const correctIndex = quiz.correctAnswers[currentQuestion];
        
        // Disable all options
        options.forEach(option => {
            option.style.cursor = 'default';
            option.removeEventListener('click', selectOption);
        });
        
        // Mark correct and wrong answers
        options[correctIndex].classList.add('correct');
        if (selectedOption !== correctIndex) {
            options[selectedOption].classList.add('wrong');
        }
        
        // Update score if correct
        if (selectedOption === correctIndex) {
            score++;
            resultElement.textContent = currentLang === 'en' ? 'Correct! 🎉' : 'ትክክል! 🎉';
            resultElement.style.color = '#4CAF50';
        } else {
            resultElement.textContent = currentLang === 'en' ? `Wrong! The correct answer is: ${quiz.options[currentQuestion][correctIndex]}` : 
                                                           `ትክክል አይደለም! ትክክለኛው መልስ: ${quiz.options[currentQuestion][correctIndex]}`;
            resultElement.style.color = '#f44336';
        }
        
        updateScore();
    }

    // Next question
    function nextQuestion() {
        if (selectedOption === null) return;
        
        checkAnswer();
        
        if (currentQuestion < quizData[currentLang].questions.length - 1) {
            currentQuestion++;
            selectedOption = null;
            setTimeout(() => {
                resultElement.textContent = '';
                showQuestion();
            }, 1500);
        } else {
            quizCompleted = true;
            nextBtn.textContent = currentLang === 'en' ? 'Finish' : 'ጨርስ';
            nextBtn.classList.add('hidden');
            prevBtn.classList.add('hidden');
            resultElement.textContent = currentLang === 'en' ? 
                `Quiz completed! Your final score is ${score}/${quizData[currentLang].questions.length}` :
                `ፈተናው ተጠናቀቀ! የመጨረሻ ውጤትዎ ${score}/${quizData[currentLang].questions.length}`;
        }
    }

    // Previous question
    function prevQuestion() {
        if (currentQuestion > 0) {
            currentQuestion--;
            selectedOption = null;
            resultElement.textContent = '';
            showQuestion();
        }
    }

    // Update progress
    function updateProgress() {
        const quiz = quizData[currentLang];
        const progress = ((currentQuestion + 1) / quiz.questions.length) * 100;
        
        progressFill.style.width = `${progress}%`;
        progressText.textContent = quiz.progressText
            .replace('{current}', currentQuestion + 1)
            .replace('{total}', quiz.questions.length);
    }

    // Update score
    function updateScore() {
        const quiz = quizData[currentLang];
        scoreText.textContent = quiz.scoreText
            .replace('{score}', score)
            .replace('{total}', quiz.questions.length);
    }

    // Reset buttons
    function resetButtons() {
        nextBtn.disabled = selectedOption === null;
        prevBtn.disabled = currentQuestion === 0;
        
        if (currentQuestion === quizData[currentLang].questions.length - 1) {
            nextBtn.textContent = currentLang === 'en' ? 'Finish' : 'ጨርስ';
        } else {
            nextBtn.textContent = currentLang === 'en' ? 'Next' : 'ቀጣይ';
        }
        
        prevBtn.textContent = currentLang === 'en' ? 'Previous' : 'ቀዳሚ';
        
        nextBtn.classList.remove('hidden');
        prevBtn.classList.remove('hidden');
    }

    // Event listeners
    langBtn.addEventListener('click', function() {
        currentLang = currentLang === 'en' ? 'am' : 'en';
        updateContent();
        showQuestion();
    });

    nextBtn.addEventListener('click', nextQuestion);
    prevBtn.addEventListener('click', prevQuestion);

    // Start the quiz
    initQuiz();
});