class LearningGame {
  constructor() {
    this.stars = parseInt(localStorage.getItem('stars')) || 0;
    this.currentGame = null;
    this.init();
  }

  init() {
    this.updateStars();
    this.setupEventListeners();
  }

  setupEventListeners() {
    // Game card clicks
    document.querySelectorAll('.game-card').forEach(card => {
      card.addEventListener('click', (e) => {
        const game = e.currentTarget.dataset.game;
        this.openGame(game);
      });
    });

    // Modal close buttons
    document.querySelectorAll('.close').forEach(btn => {
      btn.addEventListener('click', () => this.closeModal());
    });

    // Click outside modal content to close
    document.querySelectorAll('.modal').forEach(modal => {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) this.closeModal();
      });
    });
  }

  openGame(game) {
    this.currentGame = game;
    const modal = document.getElementById(`${game}Modal`);
    modal.style.display = 'block';

    switch (game) {
      case 'math': this.createMathGame(); break;
      case 'lang': this.createLanguageGame(); break;
      case 'history': this.createHistoryGame(); break;
      case 'science': this.createScienceGame(); break;
      case 'geo': this.createGeoGame(); break;
    }
  }

  // Math Game
  createMathGame() {
    const problems = [
      { question: "3 + 5", answer: 8, visual: "☕☕☕ + ☕☕☕☕☕" },
      { question: "10 - 4", answer: 6, visual: "🍪🍪🍪🍪🍪🍪🍪🍪🍪🍪 - �🍪🍪🍪" }
    ];
    const problem = problems[Math.floor(Math.random() * problems.length)];

    const content = `
      <h2>🧮 Coffee Bean Math</h2>
      <div class="beans-visual">
        <span class="math-inline">${problem.visual}</span>
      </div>
      <div class="math-problem">
        ${problem.question} = ?
      </div>
      <div class="number-pad">
        ${Array.from({ length: 10 }, (_, i) => `
          <button class="number-btn" data-value="${i}">${i}</button>
        `).join('')}
      </div>
    `;
    document.getElementById('mathContent').innerHTML = content;

    document.querySelectorAll('.number-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        this.checkAnswer(parseInt(e.target.dataset.value), problem.answer);
      });
    });
  }

  // Language Game
  createLanguageGame() {
    const wordPairs = [
      { english: "Lion", amharic: "አንበሳ" },
      { english: "Sun", amharic: "ፀሐይ" },
      { english: "Water", amharic: "ውሃ" },
      { english: "House", amharic: "ቤት" },
      { english: "Book", amharic: "መጽሐፍ" }
    ];
    const pair = wordPairs[Math.floor(Math.random() * wordPairs.length)];

    const content = `
      <h2>🔤 Word Match Challenge</h2>
      <div class="word-grid">
        <div class="word-card draggable" draggable="true" data-lang="english">${pair.english}</div>
        <div class="word-card draggable" draggable="true" data-lang="amharic">${pair.amharic}</div>
      </div>
      <div class="drop-zone" data-lang="english">English</div>
      <div class="drop-zone" data-lang="amharic">Amharic</div>
    `;
    document.getElementById('langContent').innerHTML = content;
    this.setupDragAndDrop();
  }

  setupDragAndDrop() {
    const cards = document.querySelectorAll('.word-card');
    const zones = document.querySelectorAll('.drop-zone');
    let draggedCard = null;

    cards.forEach(card => {
      card.addEventListener('dragstart', (e) => {
        draggedCard = e.target;
      });
    });

    zones.forEach(zone => {
      zone.addEventListener('dragover', (e) => {
        e.preventDefault();
      });

      zone.addEventListener('drop', (e) => {
        e.preventDefault();
        if (draggedCard && draggedCard.dataset.lang === zone.dataset.lang) {
          zone.appendChild(draggedCard);
          this.addStars(1);
          this.playCelebration();
          this.closeModal();
        } else {
          this.showFeedback("Please try again!", "#e74c3c");
        }
      });
    });
  }

  // History Game
  createHistoryGame() {
    const timelineEvents = [
      { event: "Kingdom of Aksum", year: "100" },
      { event: "Construction of Lalibela Churches", year: "1200" },
      { event: "Battle of Adwa", year: "1896" },
      { event: "Haile Selassie crowned", year: "1930" },
      { event: "Modern Ethiopia established", year: "1995" }
    ].sort(() => Math.random() - 0.5);

    const content = `
      <h2>📜 Historical Timeline</h2>
      <div class="timeline-game">
        ${timelineEvents.map(event => `
          <div class="timeline-item" data-year="${event.year}" draggable="true">
            ${event.event} (${event.year})
          </div>
        `).join('')}
      </div>
      <button class="check-btn">Check Order</button>
    `;
    document.getElementById('historyContent').innerHTML = content;
    
    document.querySelector('.check-btn').addEventListener('click', () => this.checkTimeline());
    this.setupTimelineDrag();
  }

  setupTimelineDrag() {
    const items = document.querySelectorAll('.timeline-item');
    const gameArea = document.querySelector('.timeline-game');
    let draggedItem = null;

    items.forEach(item => {
      item.addEventListener('dragstart', (e) => {
        draggedItem = e.target;
      });
    });

    gameArea.addEventListener('dragover', (e) => {
      e.preventDefault();
    });

    gameArea.addEventListener('drop', (e) => {
      e.preventDefault();
      if (draggedItem) {
        const dropTarget = e.target.closest('.timeline-item');
        if (dropTarget && dropTarget !== draggedItem) {
          const dropIndex = Array.from(gameArea.children).indexOf(dropTarget);
          const dragIndex = Array.from(gameArea.children).indexOf(draggedItem);

          if (dropIndex < dragIndex) {
            gameArea.insertBefore(draggedItem, dropTarget);
          } else {
            gameArea.insertBefore(draggedItem, dropTarget.nextSibling);
          }
        }
        draggedItem = null;
      }
    });
  }

  checkTimeline() {
    const items = Array.from(document.querySelectorAll('.timeline-item'));
    const sortedItems = items.slice().sort((a, b) => parseInt(a.dataset.year) - parseInt(b.dataset.year));
    let correct = true;

    items.forEach((item, index) => {
      if (item.dataset.year !== sortedItems[index].dataset.year) {
        correct = false;
      }
    });

    if (correct) {
      this.addStars(5);
      this.playCelebration();
      this.closeModal();
    } else {
      this.showFeedback("The timeline is not correct. Try again!", "#e74c3c");
    }
  }

  // Science Game
  createScienceGame() {
    const colorCombinations = {
      "blue+red": "purple",
      "blue+yellow": "green",
      "red+yellow": "orange"
    };

    const content = `
      <h2>🧪 Color Mixing Lab</h2>
      <div class="color-mixer">
        <div class="color-tube" style="background: red" data-color="red"></div>
        <div class="color-tube" style="background: blue" data-color="blue"></div>
        <div class="color-tube" style="background: yellow" data-color="yellow"></div>
      </div>
      <div class="result-box"></div>
      <button class="reset-btn">Reset</button>
    `;
    document.getElementById('scienceContent').innerHTML = content;
    this.setupColorMixing(colorCombinations);
  }

  setupColorMixing(combinations) {
    const tubes = document.querySelectorAll('.color-tube');
    const resultBox = document.querySelector('.result-box');
    const resetButton = document.querySelector('.reset-btn');
    let selectedColors = [];

    tubes.forEach(tube => {
      tube.addEventListener('click', () => {
        const color = tube.dataset.color;
        if (!selectedColors.includes(color)) {
          selectedColors.push(color);
        }
        if (selectedColors.length === 2) {
          const sortedColors = selectedColors.sort().join('+');
          if (combinations[sortedColors]) {
            resultBox.style.background = combinations[sortedColors];
            this.addStars(2);
            this.playCelebration();
          } else {
            this.showFeedback("Those colors don't mix to make a new one!", "#e74c3c");
          }
          selectedColors = [];
        }
      });
    });

    resetButton.addEventListener('click', () => {
      selectedColors = [];
      resultBox.style.background = '';
    });
  }

  // Geography Game with real map
  createGeoGame() {
    const regions = [
      { id: "tigray", name: "Tigray", top: "15%", left: "30%" },
      { id: "amhara", name: "Amhara", top: "25%", left: "40%" },
      { id: "oromia", name: "Oromia", top: "45%", left: "35%" },
      { id: "snnp", name: "SNNP", top: "60%", left: "45%" },
      { id: "afar", name: "Afar", top: "20%", left: "50%" }
    ];

    const content = `
      <h2>🌍 Explore Ethiopia</h2>
      <div class="ethiopia-map">
        ${regions.map(region => `
          <div class="region" 
               style="top: ${region.top}; left: ${region.left}" 
               data-region="${region.id}">${region.name}</div>
        `).join('')}
      </div>
      <p>Click on a region to learn about it!</p>
    `;
    document.getElementById('geoContent').innerHTML = content;
    this.setupGeoInteraction(regions);
  }

  setupGeoInteraction(regions) {
    document.querySelectorAll('.region').forEach(region => {
      region.addEventListener('click', () => {
        const regionName = regions.find(r => r.id === region.dataset.region).name;
        this.showFeedback(`You selected ${regionName} region!`, "#2980b9");
        this.addStars(1);
        this.playCelebration();
      });
    });
  }

  // Common Game Functions
  checkAnswer(selected, correct) {
    if (selected === correct) {
      this.addStars(3);
      this.playCelebration();
      this.showFeedback("Great job! You got it right!", "#27ae60");
      setTimeout(() => this.closeModal(), 1500);
    } else {
      this.showFeedback("Please try again! You can do it!", "#e74c3c");
    }
  }

  // Star System
  addStars(amount) {
    this.stars += amount;
    localStorage.setItem('stars', this.stars);
    this.updateStars();
  }

  updateStars() {
    document.getElementById('stars').textContent = this.stars;
  }

  // Confetti Celebration
  playCelebration() {
    for (let i = 0; i < 50; i++) {
      const confetti = document.createElement('div');
      confetti.className = 'confetti';
      confetti.style.cssText = `
        background: hsl(${Math.random() * 360}, 100%, 50%);
        left: ${Math.random() * 100}%;
      `;
      document.body.appendChild(confetti);
      setTimeout(() => confetti.remove(), 2000);
    }
  }

  // Close all modals
  closeModal() {
    document.querySelectorAll('.modal').forEach(modal => {
      modal.style.display = 'none';
    });
  }

  // Show feedback in a custom rectangle
  showFeedback(message, bgColor) {
    const feedbackContainer = document.getElementById('feedbackContainer');
    feedbackContainer.textContent = message;
    feedbackContainer.style.backgroundColor = bgColor || '#4CAF50';
    feedbackContainer.classList.add('active');

    setTimeout(() => {
      feedbackContainer.classList.remove('active');
    }, 2000);
  }
}

// Initialize the game
const learningGame = new LearningGame();