// App Data
const learningContent = {
    english: {
        uppercase: Array.from({length: 26}, (_, i) => {
            const char = String.fromCharCode(65 + i);
            return {
                char: char,
                word: getEnglishWordForLetter(char)
            };
        }),
        lowercase: Array.from({length: 26}, (_, i) => {
            const char = String.fromCharCode(97 + i);
            return {
                char: char,
                word: getEnglishWordForLetter(char.toUpperCase())
            };
        })
    },
    amharic: [
        { char: "ሀ", word: "ሀብት" }, { char: "ለ", word: "ለምል" }, 
        { char: "ሐ", word: "ሐምራዊ" }, { char: "መ", word: "መኪና" },
        { char: "ሠ", word: "ሠላም" }, { char: "ረ", word: "ራብዕ" },
        { char: "ሰ", word: "ሰማይ" }, { char: "ሸ", word: "ሸምበቆ" },
        { char: "ቀ", word: "ቀድሞ" }, { char: "በ", word: "በርበሬ" },
        { char: "ተ", word: "ተራራ" }, { char: "ቸ", word: "ቸርነት" },
        { char: "ኀ", word: "ኀይል" }, { char: "ነ", word: "ነጭ" },
        { char: "ኘ", word: "ኘላ" }, { char: "አ", word: "አባት" },
        { char: "ከ", word: "ከበሮ" }, { char: "ወ", word: "ወንድ" },
        { char: "ዐ", word: "ዐይን" }, { char: "ዘ", word: "ዘመን" },
        { char: "ዠ", word: "ዠባ" }, { char: "የ", word: "የመን" },
        { char: "ደ", word: "ደም" }, { char: "ጀ", word: "ጀርባ" },
        { char: "ገ", word: "ገንዘብ" }, { char: "ጠ", word: "ጠጅ" },
        { char: "ጨ", word: "ጨው" }, { char: "ጰ", word: "ጰራቂ" },
        { char: "ጸ", word: "ጸሃይ" }, { char: "ፀ", word: "ፀሐይ" },
        { char: "ፈ", word: "ፈረንጅ" }, { char: "ፐ", word: "ፐፐ" }
    ],
    numbers: {
        arabic: Array.from({length: 21}, (_, i) => {
            return {
                char: i.toString(),
                word: numberToEnglishWords(i)
            };
        }),
        "amharic-numbers": Array.from({length: 10}, (_, i) => {
            const amharicNumbers = ["፩", "፪", "፫", "፬", "፭", "፮", "፯", "፰", "፱", "፲"];
            const amharicWords = ["አንድ", "ሁለት", "ሶስት", "አራት", "አምስት", 
                                "ስድስት", "ሰባት", "ስምንት", "ዘጠኝ", "አስር"];
            return {
                char: amharicNumbers[i],
                word: amharicWords[i]
            };
        })
    }
};

// Helper functions
function getEnglishWordForLetter(letter) {
    const words = {
        A: "Apple", B: "Ball", C: "Cat", D: "Dog", E: "Elephant",
        F: "Fish", G: "Goat", H: "House", I: "Ice", J: "Juice",
        K: "Kite", L: "Lion", M: "Monkey", N: "Nest", O: "Orange",
        P: "Parrot", Q: "Queen", R: "Rabbit", S: "Sun", T: "Tree",
        U: "Umbrella", V: "Van", W: "Watch", X: "Xylophone", Y: "Yak", Z: "Zebra"
    };
    return words[letter] || letter;
}

function numberToEnglishWords(num) {
    const units = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
    const teens = ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", 
                  "Seventeen", "Eighteen", "Nineteen"];
    const tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
    
    if (num < 10) return units[num];
    if (num < 20) return teens[num - 10];
    if (num < 100) {
        const ten = Math.floor(num / 10);
        const unit = num % 10;
        return tens[ten] + (unit !== 0 ? " " + units[unit] : "");
    }
    return num.toString();
}

// DOM Elements
const learningGrid = document.getElementById('learning-grid');
const letterSelect = document.getElementById('letter-select');
const clearBtn = document.getElementById('clear-btn');
const speakBtn = document.getElementById('speak-btn');
const writingCanvas = document.getElementById('writing-canvas');
const feedback = document.getElementById('writing-feedback');
const englishSubcategories = document.getElementById('english-subcategories');
const numbersSubcategories = document.getElementById('numbers-subcategories');

// App State
let currentCategory = 'english';
let currentSubcategory = 'uppercase';
let currentLetter = 'A';

// Initialize the app
function init() {
    setupCategoryTabs();
    setupSubcategoryTabs();
    setupWritingCanvas();
    setupButtons();
    populateLetterSelect();
    updateContent();
}

// Category tabs functionality
function setupCategoryTabs() {
    document.querySelectorAll('.category-tab').forEach(tab => {
        tab.addEventListener('click', function() {
            document.querySelectorAll('.category-tab').forEach(t => {
                t.classList.remove('active');
            });
            
            this.classList.add('active');
            currentCategory = this.dataset.category;
            
            // Show/hide subcategory tabs based on category
            if (currentCategory === 'english') {
                englishSubcategories.style.display = 'flex';
                numbersSubcategories.style.display = 'none';
                currentSubcategory = 'uppercase';
            } else if (currentCategory === 'numbers') {
                englishSubcategories.style.display = 'none';
                numbersSubcategories.style.display = 'flex';
                currentSubcategory = 'arabic';
            } else {
                englishSubcategories.style.display = 'none';
                numbersSubcategories.style.display = 'none';
                currentSubcategory = '';
            }
            
            // Reset subcategory tabs to first option
            document.querySelectorAll('.subcategory-tab').forEach(tab => {
                tab.classList.remove('active');
            });
            
            const firstSubTab = document.querySelector(`.subcategory-tab[data-subcategory="${currentSubcategory}"]`);
            if (firstSubTab) firstSubTab.classList.add('active');
            
            updateContent();
        });
    });
}

// Subcategory tabs functionality
function setupSubcategoryTabs() {
    document.querySelectorAll('.subcategory-tab').forEach(tab => {
        tab.addEventListener('click', function() {
            document.querySelectorAll('.subcategory-tab').forEach(t => {
                t.classList.remove('active');
            });
            
            this.classList.add('active');
            currentSubcategory = this.dataset.subcategory;
            updateContent();
        });
    });
}

// Update learning content grid
function updateContent() {
    learningGrid.innerHTML = '';
    
    let content = [];
    if (currentCategory === 'english') {
        content = learningContent.english[currentSubcategory];
    } else if (currentCategory === 'amharic') {
        content = learningContent.amharic;
    } else if (currentCategory === 'numbers') {
        content = learningContent.numbers[currentSubcategory];
    }
    
    content.forEach(item => {
        const card = document.createElement('div');
        card.className = 'letter-card';
        card.innerHTML = `
            <div class="char">${item.char}</div>
            <div class="word">${item.word}</div>
        `;
        
        card.addEventListener('click', () => {
            speakText(`${item.char} is for ${item.word}`);
            card.classList.add('highlight');
            setTimeout(() => card.classList.remove('highlight'), 1000);
        });
        
        learningGrid.appendChild(card);
    });
}

// Populate letter select dropdown for writing practice
function populateLetterSelect() {
    letterSelect.innerHTML = '';
    
    // Add English letters
    for (let i = 0; i < 26; i++) {
        const upperChar = String.fromCharCode(65 + i);
        const lowerChar = String.fromCharCode(97 + i);
        
        const upperOption = document.createElement('option');
        upperOption.value = upperChar;
        upperOption.textContent = `Letter ${upperChar}`;
        
        const lowerOption = document.createElement('option');
        lowerOption.value = lowerChar;
        lowerOption.textContent = `Letter ${lowerChar}`;
        
        letterSelect.appendChild(upperOption);
        letterSelect.appendChild(lowerOption);
    }
    
    // Add Amharic letters
    learningContent.amharic.forEach(item => {
        const option = document.createElement('option');
        option.value = item.char;
        option.textContent = `Letter ${item.char}`;
        letterSelect.appendChild(option);
    });
    
    // Add numbers (Arabic)
    for (let i = 0; i <= 20; i++) {
        const option = document.createElement('option');
        option.value = i.toString();
        option.textContent = `Number ${i}`;
        letterSelect.appendChild(option);
    }
    
    // Add numbers (Amharic)
    const amharicNumbers = ["፩", "፪", "፫", "፬", "፭", "፮", "፯", "፰", "፱", "፲"];
    amharicNumbers.forEach((num, index) => {
        const option = document.createElement('option');
        option.value = num;
        option.textContent = `Number ${index + 1}`;
        letterSelect.appendChild(option);
    });
}

// Writing canvas setup
function setupWritingCanvas() {
    const ctx = writingCanvas.getContext('2d');
    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;
    
    // Set canvas size
    function resizeCanvas() {
        const container = writingCanvas.parentElement;
        writingCanvas.width = container.offsetWidth;
        writingCanvas.height = container.offsetHeight;
        drawGuideLetter();
    }
    
    // Initial resize
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Drawing functions
    writingCanvas.addEventListener('mousedown', startDrawing);
    writingCanvas.addEventListener('mousemove', draw);
    writingCanvas.addEventListener('mouseup', endDrawing);
    writingCanvas.addEventListener('mouseout', endDrawing);
    
    // Touch support
    writingCanvas.addEventListener('touchstart', handleTouchStart);
    writingCanvas.addEventListener('touchmove', handleTouchMove);
    writingCanvas.addEventListener('touchend', endDrawing);
    
    function startDrawing(e) {
        isDrawing = true;
        [lastX, lastY] = getPosition(e);
    }
    
    function draw(e) {
        if (!isDrawing) return;
        
        const [x, y] = getPosition(e);
        
        ctx.lineWidth = 3;
        ctx.lineCap = 'round';
        ctx.strokeStyle = '#4CAF50';
        
        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(x, y);
        ctx.stroke();
        
        [lastX, lastY] = [x, y];
    }
    
    function endDrawing() {
        isDrawing = false;
    }
    
    function handleTouchStart(e) {
        e.preventDefault();
        const touch = e.touches[0];
        const mouseEvent = new MouseEvent('mousedown', {
            clientX: touch.clientX,
            clientY: touch.clientY
        });
        startDrawing(mouseEvent);
    }
    
    function handleTouchMove(e) {
        e.preventDefault();
        const touch = e.touches[0];
        const mouseEvent = new MouseEvent('mousemove', {
            clientX: touch.clientX,
            clientY: touch.clientY
        });
        draw(mouseEvent);
    }
    
    function getPosition(e) {
        const rect = writingCanvas.getBoundingClientRect();
        return [
            e.clientX - rect.left,
            e.clientY - rect.top
        ];
    }
    
    function drawGuideLetter() {
        // Clear canvas
        ctx.clearRect(0, 0, writingCanvas.width, writingCanvas.height);
        
        // Draw guide letter
        ctx.font = '200px Arial';
        ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(currentLetter, writingCanvas.width/2, writingCanvas.height/2);
    }
    
    function clearCanvas() {
        ctx.clearRect(0, 0, writingCanvas.width, writingCanvas.height);
        drawGuideLetter();
        feedback.textContent = '';
    }
}

// Button setup
function setupButtons() {
    // Letter selection
    letterSelect.addEventListener('change', function() {
        currentLetter = this.value;
        const ctx = writingCanvas.getContext('2d');
        ctx.clearRect(0, 0, writingCanvas.width, writingCanvas.height);
        
        // Draw new guide letter
        ctx.font = '200px Arial';
        ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(currentLetter, writingCanvas.width/2, writingCanvas.height/2);
    });
    
    // Clear button
    clearBtn.addEventListener('click', () => {
        const ctx = writingCanvas.getContext('2d');
        ctx.clearRect(0, 0, writingCanvas.width, writingCanvas.height);
        
        // Redraw guide letter
        ctx.font = '200px Arial';
        ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(currentLetter, writingCanvas.width/2, writingCanvas.height/2);
        
        feedback.textContent = '';
    });
    
    // Speak button
    speakBtn.addEventListener('click', () => {
        const selectedOption = letterSelect.options[letterSelect.selectedIndex];
        const char = selectedOption.value;
        let word = '';
        
        // Find the word for the selected character
        if (currentCategory === 'english') {
            const letters = learningContent.english.uppercase.concat(learningContent.english.lowercase);
            const found = letters.find(item => item.char === char);
            word = found ? found.word : '';
        } else if (currentCategory === 'amharic') {
            const found = learningContent.amharic.find(item => item.char === char);
            word = found ? found.word : '';
        } else if (currentCategory === 'numbers') {
            if (currentSubcategory === 'arabic') {
                const found = learningContent.numbers.arabic.find(item => item.char === char);
                word = found ? found.word : '';
            } else {
                const found = learningContent.numbers['amharic-numbers'].find(item => item.char === char);
                word = found ? found.word : '';
            }
        }
        
        if (word) {
            speakText(`${char} is for ${word}`);
        } else {
            speakText(char);
        }
    });
}

// Text-to-speech functionality
function speakText(text) {
    if (!window.speechSynthesis) {
        feedback.textContent = "Speech not supported in your browser";
        return;
    }
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    
    // Try to find appropriate voice
    const voices = window.speechSynthesis.getVoices();
    const preferredVoice = voices.find(voice => voice.lang.includes('en'));
    
    if (preferredVoice) {
        utterance.voice = preferredVoice;
    }
    
    window.speechSynthesis.speak(utterance);
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', init);

// Update voices when they become available
window.speechSynthesis.onvoiceschanged = function() {
    // This ensures voices are available when needed
};