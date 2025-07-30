document.addEventListener('DOMContentLoaded', function() {
  // DOM Elements
  const levelBtns = document.querySelectorAll('.level-btn');
  const passageTitle = document.getElementById('passage-title');
  const passageContent = document.getElementById('passage-content');
  const hearPassageBtn = document.querySelector('.hear-passage');
  const checkAnswersBtn = document.getElementById('check-answers');
  const resetAnswersBtn = document.getElementById('reset-answers');
  const newPassageBtn = document.getElementById('new-passage');
  const resultsDiv = document.getElementById('results');
  const scoreDiv = document.getElementById('score');
  const feedbackDiv = document.getElementById('feedback');
  
  // Passage data by level
  const passages = {
      beginner: {
          title: "The Amazing Octopus",
          content: [
              "Octopuses are fascinating sea creatures known for their intelligence and unique abilities. They have eight arms, three hearts, and blue blood. Unlike most creatures, they can change their skin color and texture to blend into their surroundings.",
              "These clever animals can solve puzzles, open jars, and even use tools. In laboratory tests, octopuses have shown remarkable problem-solving skills. They have short lifespans, typically living only 1-2 years, but during this time they learn quickly and adapt to their environment.",
              "Octopuses are also masters of escape. They can squeeze through tiny spaces, as their bodies have no bones. Some have been known to leave their tanks in aquariums to catch prey in nearby tanks before returning!"
          ],
          questions: [
              {
                  question: "How many hearts does an octopus have?",
                  options: ["1", "2", "3"],
                  correct: "c"
              },
              {
                  question: "What special ability helps octopuses hide from predators?",
                  options: ["Changing color and texture", "Swimming very fast", "Making loud noises"],
                  correct: "a"
              },
              {
                  question: "What evidence shows that octopuses are intelligent?",
                  options: ["They can solve puzzles and use tools", "They have large eyes", "They live in the ocean"],
                  correct: "a"
              },
              {
                  question: "Why can octopuses squeeze through small spaces?",
                  options: ["They have no bones", "They can make themselves lighter", "They have special muscles"],
                  correct: "a"
              }
          ]
      },
      intermediate: {
          title: "The Water Cycle",
          content: [
              "The water cycle describes how water moves continuously above and below the Earth's surface. It has four main stages: evaporation, condensation, precipitation, and collection.",
              "Evaporation occurs when the sun heats water in rivers, lakes, or oceans and turns it into vapor. This vapor rises into the air. When the water vapor cools, it condenses into tiny droplets that form clouds through condensation.",
              "When these droplets become too heavy, they fall as precipitation - rain, snow, sleet or hail. The water then collects in oceans, lakes and rivers, and the cycle begins again."
          ],
          questions: [
              {
                  question: "What is the first stage of the water cycle?",
                  options: ["Condensation", "Evaporation", "Precipitation"],
                  correct: "b"
              },
              {
                  question: "What causes water to evaporate?",
                  options: ["The moon's gravity", "Heat from the sun", "Wind currents"],
                  correct: "b"
              },
              {
                  question: "What happens during condensation?",
                  options: ["Water falls to the ground", "Water vapor forms clouds", "Plants absorb water"],
                  correct: "b"
              },
              {
                  question: "Where does collected water go?",
                  options: ["Back into the cycle", "Underground only", "It disappears"],
                  correct: "a"
              }
          ]
      },
      advanced: {
          title: "Ancient Egyptian Pyramids",
          content: [
              "The ancient Egyptian pyramids are among the most impressive structures ever built. The Great Pyramid of Giza, constructed around 2560 BCE, was the tallest man-made structure for over 3,800 years.",
              "Pyramids were built as tombs for pharaohs and their consorts. Egyptians believed in an afterlife and filled the pyramids with items the pharaoh might need, including food, furniture, and gold.",
              "Construction methods remain somewhat mysterious. Workers likely used ramps, sledges, and levers to move the massive stone blocks. Recent discoveries suggest workers were well-fed and organized, not slaves as once thought."
          ],
          questions: [
              {
                  question: "How long was the Great Pyramid the tallest structure?",
                  options: ["100 years", "1,000 years", "Over 3,800 years"],
                  correct: "c"
              },
              {
                  question: "Why were items placed in pyramids?",
                  options: ["For the pharaoh's afterlife", "To show wealth to visitors", "As offerings to gods"],
                  correct: "a"
              },
              {
                  question: "What was NOT used in pyramid construction?",
                  options: ["Ramps", "Cranes", "Sledges"],
                  correct: "b"
              },
              {
                  question: "What recent discovery changed views about workers?",
                  options: ["They were slaves", "They were well-fed", "They used magic"],
                  correct: "b"
              }
          ]
      }
  };
  
  let currentLevel = 'beginner';
  let currentPassage = passages[currentLevel];
  
  // Set up level selection
  levelBtns.forEach(btn => {
      btn.addEventListener('click', function() {
          // Update active button
          levelBtns.forEach(b => b.classList.remove('active'));
          this.classList.add('active');
          
          // Load new passage
          currentLevel = this.dataset.level;
          currentPassage = passages[currentLevel];
          loadPassage(currentPassage);
          
          // Reset results
          resultsDiv.classList.add('hidden');
          resetAnswers();
      });
  });
  
  // Load passage content
  function loadPassage(passage) {
      passageTitle.textContent = passage.title;
      passageContent.innerHTML = passage.content.map(p => `<p>${p}</p>`).join('');
      
      // Update questions
      const questionElements = document.querySelectorAll('.question');
      passage.questions.forEach((q, i) => {
          if (questionElements[i]) {
              questionElements[i].querySelector('p').textContent = `${i+1}. ${q.question}`;
              
              const options = questionElements[i].querySelectorAll('label');
              q.options.forEach((opt, j) => {
                  if (options[j]) {
                      options[j].querySelector('input').value = String.fromCharCode(97 + j); // a, b, c
                      options[j].querySelector('span').textContent = opt;
                  }
              });
          }
      });
  }
  
  // Hear passage read aloud
  hearPassageBtn.addEventListener('click', function() {
      const passageText = passageContent.textContent;
      const utterance = new SpeechSynthesisUtterance(passageText);
      utterance.rate = 0.9;
      speechSynthesis.speak(utterance);
  });
  
  // Check answers
  checkAnswersBtn.addEventListener('click', function() {
      let score = 0;
      let feedbackHTML = "";
      
      currentPassage.questions.forEach((q, i) => {
          const selectedOption = document.querySelector(`input[name="q${i+1}"]:checked`);
          const questionElement = document.querySelectorAll('.question')[i];
          
          if (selectedOption) {
              if (selectedOption.value === q.correct) {
                  score++;
                  feedbackHTML += `<p class="correct">Question ${i+1}: Correct! Well done.</p>`;
                  questionElement.style.borderLeft = "4px solid var(--dark-green)";
              } else {
                  feedbackHTML += `<p class="incorrect">Question ${i+1}: Incorrect. The correct answer was "${q.options[q.correct.charCodeAt(0) - 97]}".</p>`;
                  questionElement.style.borderLeft = "4px solid var(--red)";
              }
          } else {
              feedbackHTML += `<p class="incorrect">Question ${i+1}: Not answered. The correct answer was "${q.options[q.correct.charCodeAt(0) - 97]}".</p>`;
              questionElement.style.borderLeft = "4px solid var(--red)";
          }
      });
      
      // Display results
      scoreDiv.textContent = `Score: ${score}/${currentPassage.questions.length}`;
      feedbackDiv.innerHTML = feedbackHTML;
      resultsDiv.classList.remove('hidden');
      
      // Scroll to results
      resultsDiv.scrollIntoView({ behavior: 'smooth' });
  });
  
  // Reset answers
  resetAnswersBtn.addEventListener('click', resetAnswers);
  
  function resetAnswers() {
      document.querySelectorAll('input[type="radio"]').forEach(radio => {
          radio.checked = false;
      });
      
      document.querySelectorAll('.question').forEach(q => {
          q.style.borderLeft = "1px solid #ddd";
      });
      
      resultsDiv.classList.add('hidden');
  }
  
  // New passage (same level)
  newPassageBtn.addEventListener('click', function() {
      if (confirm("This will reset your current progress. Load a new passage?")) {
          loadPassage(currentPassage);
          resetAnswers();
      }
  });
  
  // Initialize with beginner passage
  loadPassage(currentPassage);
});