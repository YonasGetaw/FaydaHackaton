document.addEventListener('DOMContentLoaded', () => {
  // Initialize Web Speech API
  const synth = window.speechSynthesis;
  let voices = [];
  
  // Load available voices
  function loadVoices() {
      voices = synth.getVoices();
  }
  
  // Load voices when they become available
  if (synth.onvoiceschanged !== undefined) {
      synth.onvoiceschanged = loadVoices;
  }
  loadVoices();

  // Speech function with bilingual support
  function speakBilingual(text) {
      // Cancel any ongoing speech
      synth.cancel();
      
      const [english, amharic] = text.split(' - ');
      
      // English pronunciation
      const engUtterance = new SpeechSynthesisUtterance(english);
      engUtterance.lang = 'en-US';
      engUtterance.rate = 0.8;
      engUtterance.pitch = 1.1;
      
      // Amharic pronunciation
      const amhUtterance = new SpeechSynthesisUtterance(amharic);
      amhUtterance.lang = 'am-ET';
      amhUtterance.rate = 0.8;
      amhUtterance.pitch = 1.1;
      
      // Queue both pronunciations with delay
      synth.speak(engUtterance);
      setTimeout(() => {
          synth.speak(amhUtterance);
      }, 800);
  }

  // Animation handler
  function animateElement(element) {
      element.style.transform = 'scale(1.15)';
      element.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
      
      setTimeout(() => {
          element.style.transform = 'scale(1)';
          element.style.boxShadow = 'none';
      }, 300);
  }

  // Setup click handlers for shapes
  document.querySelectorAll('.shape').forEach(shape => {
      shape.addEventListener('click', function() {
          const name = this.getAttribute('data-name');
          animateElement(this);
          speakBilingual(name);
      });
  });

  // Setup click handlers for colors
  document.querySelectorAll('.color-swatch').forEach(swatch => {
      swatch.addEventListener('click', function() {
          const name = this.getAttribute('data-name');
          animateElement(this);
          speakBilingual(name);
      });
  });

  // Keyboard accessibility
  document.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
          const focused = document.activeElement;
          if (focused.classList.contains('shape') || 
              focused.classList.contains('color-swatch')) {
              focused.click();
          }
      }
  });
});