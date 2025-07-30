// Get UI elements
const englishBtn = document.getElementById("english-btn");
const amharicBtn = document.getElementById("amharic-btn");
const bodyInfo = document.getElementById("body-info");
const planetInfo = document.getElementById("planet-info");
const ecosystemInfo = document.getElementById("ecosystem-info");
const quizArea = document.getElementById("quiz-area");
const heartFast = document.getElementById("heart-fast");
const heartSlow = document.getElementById("heart-slow");
const heartAnimation = document.getElementById("heart-animation");
const gravityItems = document.querySelectorAll(".gravity-item");
const gravityDrop = document.getElementById("gravity-drop");
const clouds = document.getElementById("clouds");
const rain = document.getElementById("rain");

// Custom Alert Elements
const modalOverlay = document.getElementById("modal-overlay");
const customAlert = document.getElementById("custom-alert");
const alertMessage = document.getElementById("alert-message");
const alertOkButton = document.getElementById("alert-ok-button");

let language = "english"; // Default language
let isRaining = false;

/* --- Translation Data --- */

// Human Body translations
const bodyTitles = {
  english: {
    brain: "Brain",
    heart: "Heart",
    lungs: "Lungs",
    heartExperiment: "Heartbeat Experiment"
  },
  amharic: {
    brain: "አዕምሮ",
    heart: "ልብ",
    lungs: "ዕፀ",
    heartExperiment: "የልብ ምት ሙከራ"
  }
};

const bodyTexts = {
  english: {
    brain: "The brain controls everything you do.",
    heart: "The heart pumps blood around your body.",
    lungs: "The lungs help you breathe."
  },
  amharic: {
    brain: "አዕምሮ ሁሉንም ነገር ይቆጣጠራል።",
    heart: "ልብ ደምን በሰውነት ውስጥ ይወጣል።",
    lungs: "ዕፀ እንዲተነፍሱ ይረዳል።"
  }
};

// Space translations
const planetTitles = {
  english: {
    mercury: "Mercury",
    venus: "Venus",
    earth: "Earth",
    mars: "Mars",
    jupiter: "Jupiter",
    saturn: "Saturn",
    uranus: "Uranus",
    neptune: "Neptune",
    gravityExperiment: "Gravity Experiment"
  },
  amharic: {
    mercury: "ሜርኩሪ",
    venus: "ቬነስ",
    earth: "ምድር",
    mars: "ማርስ",
    jupiter: "ጁፒተር",
    saturn: "ሳተርን",
    uranus: "ዩራነስ",
    neptune: "ኔፕቱን",
    gravityExperiment: "የንጥረ ኃይል ሙከራ"
  }
};

const planetTexts = {
  english: {
    mercury: "Mercury is the closest planet to the sun.",
    venus: "Venus is the hottest planet.",
    earth: "Earth is our home planet.",
    mars: "Mars is known as the red planet.",
    jupiter: "Jupiter is the largest planet.",
    saturn: "Saturn has beautiful rings.",
    uranus: "Uranus rotates on its side.",
    neptune: "Neptune is the farthest planet."
  },
  amharic: {
    mercury: "ሜርኩሪ ለፀሐይ ቅርብ ነው።",
    venus: "ቬነስ በጣም ሞቃታማ ነው።",
    earth: "ምድር የቤታችን ፕላኔት ነው።",
    mars: "ማርስ ቀይ ፕላኔት ነው።",
    jupiter: "ጁፒተር ትልቁ ፕላኔት ነው።",
    saturn: "ሳተርን ውብ ጠባይ አለው።",
    uranus: "ዩራነስ በልቡ ይተካል።",
    neptune: "ኔፕቱን በጣም ሩቅ ነው።"
  }
};

// Ecosystem translations
const ecosystemTitles = {
  english: {
    forest: "Forest",
    ocean: "Ocean",
    desert: "Desert"
  },
  amharic: {
    forest: "ጫካ",
    ocean: "ውቅያኖስ",
    desert: "በረሃ"
  }
};

const ecosystemTexts = {
  english: {
    forest: "Forests are home to many trees and animals.",
    ocean: "Oceans cover most of the Earth.",
    desert: "Deserts are very dry and hot."
  },
  amharic: {
    forest: "ጫካዎች ብዙ ዛፎች እና እንስሳት ያሟሉ።",
    ocean: "ውቅያኖሶች የምድር ክፍል ናቸው።",
    desert: "በረሃዎች በጣም ደረቅ እና ሞቃት ናቸው።"
  }
};

// Quiz translations
const quizQuestions = {
  english: [
    {
      question: "What pumps blood?",
      choices: ["Brain", "Heart", "Lungs"],
      answer: "Heart"
    },
    {
      question: "Which planet is our home?",
      choices: ["Mars", "Earth", "Venus"],
      answer: "Earth"
    },
    {
      question: "Deserts are very...",
      choices: ["Wet", "Dry", "Cold"],
      answer: "Dry"
    }
  ],
  amharic: [
    {
      question: "ደምን ያሰራጫል?",
      choices: ["አዕምሮ", "ልብ", "ዕፀ"],
      answer: "ልብ"
    },
    {
      question: "የቤታችን ፕላኔት የትኛው ነው?",
      choices: ["ማርስ", "ምድር", "ቬነስ"],
      answer: "ምድር"
    },
    {
      question: "በረሃዎች በጣም...",
      choices: ["ሙሉ", "ደረቅ", "ቀዝቃዛ"],
      answer: "ደረቅ"
    }
  ]
};

/* -------------------------
   CUSTOM ALERT FUNCTIONS
------------------------- */
// 1. Show the custom alert
function showCustomAlert(message) {
  alertMessage.textContent = message;             // set text
  modalOverlay.style.display = "block";           // show overlay
  customAlert.style.display = "block";            // show modal
}

// 2. Close the custom alert
alertOkButton.addEventListener("click", () => {
  modalOverlay.style.display = "none";
  customAlert.style.display = "none";
});

/* -------------------------
   LANGUAGE TOGGLE
------------------------- */
englishBtn.addEventListener("click", () => {
  language = "english";
  englishBtn.classList.add("active");
  amharicBtn.classList.remove("active");
  updateContent();
});

amharicBtn.addEventListener("click", () => {
  language = "amharic";
  amharicBtn.classList.add("active");
  englishBtn.classList.remove("active");
  updateContent();
});

/* -------------------------
   UPDATE TEXT FUNCTIONS
------------------------- */

// Updates static text that has data-en / data-am attributes
function updateStaticText() {
  document.querySelectorAll("[data-en][data-am]").forEach((el) => {
    el.textContent =
      language === "english" ? el.getAttribute("data-en") : el.getAttribute("data-am");
  });
}

// Update quiz area
function updateQuiz() {
  quizArea.innerHTML = "";
  quizQuestions[language].forEach((q) => {
    const questionDiv = document.createElement("div");
    questionDiv.classList.add("quiz-question");
    questionDiv.innerHTML = `<p>${q.question}</p>`;
    q.choices.forEach((choice) => {
      const btn = document.createElement("button");
      btn.textContent = choice;
      btn.addEventListener("click", () => {
        if (choice === q.answer) {
          showCustomAlert(language === "english" ? "Correct!" : "ትክክል!");
        } else {
          showCustomAlert(language === "english" ? "Try again!" : "እንደገና ይሞክሩ!");
        }
      });
      questionDiv.appendChild(btn);
    });
    quizArea.appendChild(questionDiv);
  });
}

// Main function to refresh all dynamic content
function updateContent() {
  updateStaticText();

  // Update body part clicks
  document.querySelectorAll(".body-part").forEach((part) => {
    part.onclick = () => {
      const key = part.getAttribute("data-part");
      bodyInfo.innerHTML = `<h3>${bodyTitles[language][key]}</h3><p>${bodyTexts[language][key]}</p>`;
    };
  });

  // Update planet info
  document.querySelectorAll(".planet").forEach((planet) => {
    planet.textContent =
      language === "english"
        ? planet.getAttribute("data-en")
        : planet.getAttribute("data-am");
    planet.onclick = () => {
      const key = planet.getAttribute("data-planet");
      planetInfo.innerHTML = `<h3>${planetTitles[language][key]}</h3><p>${planetTexts[language][key]}</p>`;
    };
  });

  // Update ecosystem info
  document.querySelectorAll(".ecosystem").forEach((eco) => {
    eco.textContent =
      language === "english"
        ? eco.getAttribute("data-en")
        : eco.getAttribute("data-am");
    eco.onclick = () => {
      const key = eco.getAttribute("data-ecosystem");
      ecosystemInfo.innerHTML = `<h3>${ecosystemTitles[language][key]}</h3><p>${ecosystemTexts[language][key]}</p>`;
    };
  });

  // Update experiment headings
  document.querySelector("#heart-experiment h3").textContent =
    language === "english"
      ? bodyTitles.english.heartExperiment
      : bodyTitles.amharic.heartExperiment;

  document.querySelector("#gravity-experiment h3").textContent =
    language === "english"
      ? planetTitles.english.gravityExperiment
      : planetTitles.amharic.gravityExperiment;

  // Update quiz
  updateQuiz();
}

/* -------------------------
   HEART EXPERIMENT
------------------------- */
heartFast.addEventListener("click", () => {
  heartAnimation.style.animationDuration = "0.5s";
});
heartSlow.addEventListener("click", () => {
  heartAnimation.style.animationDuration = "1.5s";
});

/* -------------------------
   GRAVITY EXPERIMENT
------------------------- */
let draggedItem = null;
gravityItems.forEach((item) => {
  item.addEventListener("dragstart", (event) => {
    draggedItem = event.target;
    event.dataTransfer.setData("text/plain", event.target.getAttribute("data-gravity"));
  });
});

gravityDrop.addEventListener("dragover", (event) => {
  event.preventDefault();
});

gravityDrop.addEventListener("drop", (event) => {
  event.preventDefault();
  const gravity = event.dataTransfer.getData("text/plain");
  if (draggedItem) {
    gravityDrop.appendChild(draggedItem);
    if (gravity === "earth") {
      showCustomAlert(
        language === "english"
          ? "The ball falls quickly on Earth!"
          : "በምድር ላይ ኳስ ፈጣን ይወድቃል!"
      );
    } else if (gravity === "space") {
      showCustomAlert(
        language === "english"
          ? "The feather floats in space!"
          : "ጭንቅላቱ በሰማይ ይንቀሳቀሳል!"
      );
    }
    draggedItem = null;
  }
});

/* -------------------------
   WATER CYCLE EXPERIMENT
------------------------- */
clouds.addEventListener("click", () => {
  if (!isRaining) {
    isRaining = true;
    rain.style.display = "block";
    rain.innerHTML = "";
    const numRaindrops = 20;
    for (let i = 0; i < numRaindrops; i++) {
      const raindrop = document.createElement("div");
      raindrop.style.position = "absolute";
      raindrop.style.width = "2px";
      raindrop.style.height = "10px";
      raindrop.style.backgroundColor = "#0000FF";
      raindrop.style.left = `${Math.random() * clouds.offsetWidth}px`;
      raindrop.style.top = `${clouds.offsetHeight}px`;
      raindrop.style.animationDuration = `${Math.random() * 1 + 0.5}s`;
      raindrop.style.animationName = "raindropFall";
      rain.appendChild(raindrop);
    }
    setTimeout(() => {
      rain.innerHTML = "";
      rain.style.display = "none";
      isRaining = false;
    }, 2000);
  }
});

/* -------------------------
   INITIALIZE
------------------------- */
updateContent();
