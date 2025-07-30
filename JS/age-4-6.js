document.addEventListener('DOMContentLoaded', function() {
  // Translations object with English (en) and Amharic (am) translations
  const translations = {
    en: {
      'session.timer_title': 'Session Timer',
      'session.expired': 'Session expired. Please login again.',
      'content.load_error': 'Failed to load content',
      'language.toggle': 'Toggle language',
      'language.change': 'Language changed to English',
      'notification.close': 'Close',
      'title.age4_6': 'Ethiopis - Age 4-6 Learning',
      'age4_6.title': 'Age Group 4-6 (Preschool & Kindergarten)',
      'age4_6.alphabet_numbers': 'Alphabet & Numbers',
      'age4_6.amharic_alphabet': 'Amharic Alphabet',
      'age4_6.amharic_alphabet_desc': 'Learn all 33 Amharic letters with sounds and examples',
      'age4_6.english_alphabet': 'English Alphabet',
      'age4_6.english_alphabet_desc': 'A-Z with phonics and vocabulary',
      'age4_6.numbers': 'Numbers 1-20',
      'age4_6.numbers_desc': 'Counting in Amharic and English',
      'age4_6.shapes_colors': 'Shapes & Colors',
      'age4_6.basic_shapes': 'Basic Shapes',
      'age4_6.basic_shapes_desc': 'Circle, square, triangle and more',
      'age4_6.color_names': 'Color Names',
      'age4_6.color_names_desc': 'Learn colors in multiple languages',
      'age4_6.shape_game': 'Shape Matching Game',
      'age4_6.shape_game_desc': 'Match shapes with real objects',
      'age4_6.stories_rhymes': 'Stories & Rhymes',
      'age4_6.ethiopian_stories': 'Ethiopian Stories',
      'age4_6.ethiopian_stories_desc': 'Traditional folktales with animations',
      'age4_6.nursery_rhymes': 'Nursery Rhymes',
      'age4_6.nursery_rhymes_desc': 'Popular English rhymes with actions',
      'age4_6.sing_along': 'Sing Along',
      'age4_6.sing_along_desc': 'Interactive songs with lyrics',
      'age4_6.games_puzzles': 'Games & Puzzles',
      'age4_6.memory_game': 'Memory Game',
      'age4_6.memory_game_desc': 'Match pairs of images',
      'age4_6.animal_puzzle': 'Animal Puzzle',
      'age4_6.animal_puzzle_desc': 'Drag and drop puzzle pieces',
      'age4_6.letter_game': 'Letter Matching',
      'age4_6.letter_game_desc': 'Match letters with pictures',
      'age4_6.science_nature': 'Science & Nature',
      'age4_6.ethiopian_animals': 'Ethiopian Animals',
      'age4_6.ethiopian_animals_desc': 'Learn about local wildlife',
      'age4_6.weather': 'Weather',
      'age4_6.weather_desc': 'Sunny, rainy, cloudy and more',
      'age4_6.plants': 'Plants',
      'age4_6.plants_desc': 'Parts of a plant and how they grow',
      'age4_6.drawing_writing': 'Drawing & Writing',
      'age4_6.drawing_pad': 'Drawing Pad',
      'age4_6.drawing_pad_desc': 'Digital drawing with colors',
      'age4_6.letter_tracing': 'Letter Tracing',
      'age4_6.letter_tracing_desc': 'Practice writing letters',
      'age4_6.coloring_book': 'Coloring Book',
      'age4_6.coloring_book_desc': 'Color Ethiopian-themed images',
      'nav.logout': 'Logout',
      'footer.copyright': '© 2025 Ethiopis. All rights reserved.'
    },
    am: {
      'session.timer_title': 'የክፍለ-ጊዜ ሰዓት',
      'session.expired': 'ክፍለ-ጊዜው አልቋል። እባክዎ ዳግም ይግቡ',
      'content.load_error': 'ይዘቱን ማስገባት አልተሳካም',
      'language.toggle': 'ቋንቋ ቀይር',
      'language.change': 'ቋንቋ ወደ አማርኛ ተቀይሯል',
      'notification.close': 'ዝጋ',
      'title.age4_6': 'ኢትዮጲስ - የ4-6 ዓመት ትምህርት',
      'age4_6.title': 'ዕድሜ ቡድን 4-6 (ፕሪ-ስክሎል እና ኪንደርጋርተን)',
      'age4_6.alphabet_numbers': 'ፊደል እና ቁጥሮች',
      'age4_6.amharic_alphabet': 'አማርኛ ፊደል',
      'age4_6.amharic_alphabet_desc': 'ሁሉንም 33 የአማርኛ ፊደሎች ከድምፅ እና ምሳሌዎች ጋር ይማሩ',
      'age4_6.english_alphabet': 'እንግሊዝኛ ፊደል',
      'age4_6.english_alphabet_desc': 'A-Z ከድምፅ እና ቃላት ጋር',
      'age4_6.numbers': 'ቁጥሮች 1-20',
      'age4_6.numbers_desc': 'በአማርኛ እና እንግሊዝኛ መቁጠር',
      'age4_6.shapes_colors': 'ቅርጾች እና ቀለሞች',
      'age4_6.basic_shapes': 'መሰረታዊ ቅርጾች',
      'age4_6.basic_shapes_desc': 'ክብ፣ ካሬ፣ ሶስት ማእዘን እና ሌሎች',
      'age4_6.color_names': 'የቀለም ስሞች',
      'age4_6.color_names_desc': 'ቀለሞችን በብዙ ቋንቋዎች ይማሩ',
      'age4_6.shape_game': 'የቅርጽ መስመር ጨዋታ',
      'age4_6.shape_game_desc': 'ቅርጾችን ከእውነተኛ ነገሮች ጋር ያዛምዱ',
      'age4_6.stories_rhymes': 'ታሪኮች እና ምኞቶች',
      'age4_6.ethiopian_stories': 'ኢትዮጵያዊ ታሪኮች',
      'age4_6.ethiopian_stories_desc': 'ባህላዊ አፈ ታሪኮች ከእነቆች ጋር',
      'age4_6.nursery_rhymes': 'ሕፃናት ምኞቶች',
      'age4_6.nursery_rhymes_desc': 'ታዋቂ የእንግሊዝኛ ምኞቶች ከተግባራት ጋር',
      'age4_6.sing_along': 'አብረው ይዘምሩ',
      'age4_6.sing_along_desc': 'ቃላት ያሉት ተዋዋይ ዘፈኖች',
      'age4_6.games_puzzles': 'ጨዋታዎች እና እንቆቅልሾች',
      'age4_6.memory_game': 'የማስታወሻ ጨዋታ',
      'age4_6.memory_game_desc': 'የምስሎች ጥንዶችን ያዛምዱ',
      'age4_6.animal_puzzle': 'የእንስሳት እንቆቅልሽ',
      'age4_6.animal_puzzle_desc': 'የእንቆቅልሽ ቁራጮችን ይጎትቱ እና ይጣሉ',
      'age4_6.letter_game': 'የፊደል መስመር',
      'age4_6.letter_game_desc': 'ፊደሎችን ከምስሎች ጋር ያዛምዱ',
      'age4_6.science_nature': 'ሳይንስ እና ተፈጥሮ',
      'age4_6.ethiopian_animals': 'ኢትዮጵያዊ እንስሳት',
      'age4_6.ethiopian_animals_desc': 'ስለ አካባቢያዊ የበረሃ እንስሳት ይማሩ',
      'age4_6.weather': 'አየር ሁኔታ',
      'age4_6.weather_desc': 'ፀሐይ፣ ዝናብ፣ ደመና እና ሌሎች',
      'age4_6.plants': 'ተክሎች',
      'age4_6.plants_desc': 'የተክል ክፍሎች እና እንዴት እንደሚያድጉ',
      'age4_6.drawing_writing': 'መሳል እና መጻፍ',
      'age4_6.drawing_pad': 'የመሳል ሰሌዳ',
      'age4_6.drawing_pad_desc': 'በቀለም ዲጂታል መሳል',
      'age4_6.letter_tracing': 'የፊደል ክትትል',
      'age4_6.letter_tracing_desc': 'ፊደሎችን የመጻፍ ልምምድ',
      'age4_6.coloring_book': 'የቀለም መጽሐፍ',
      'age4_6.coloring_book_desc': 'ኢትዮጵያዊ ገጽታ ያላቸውን ምስሎች ቀለም ይሙሉ',
      'nav.logout': 'ውጣ',
      'footer.copyright': '© 2025 ኢትዮጲስ። ሁሉም መብቶች የተጠበቁ ናቸው።'
    }
  };

  // Current language (default to English)
  let currentLanguage = localStorage.getItem('preferredLanguage') || 'en';
  const languageToggle = document.getElementById('language-toggle');

  // ======================
  // 1. LANGUAGE TOGGLE FUNCTIONALITY
  // ======================
  function updateLanguageToggle() {
    if (languageToggle) {
      languageToggle.textContent = currentLanguage === 'en' ? 'EN | አማ' : 'አማ | EN';
      languageToggle.setAttribute('aria-label', translations[currentLanguage]['language.toggle'] || 'Toggle language');
    }
  }

  function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'am' : 'en';
    localStorage.setItem('preferredLanguage', currentLanguage);
    updateLanguageToggle();
    updatePageContent();
    
    // Smooth transition effect
    document.body.style.opacity = '0';
    setTimeout(() => {
      document.body.style.opacity = '1';
    }, 150);
  }

  function updatePageContent() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      if (translations[currentLanguage][key]) {
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
          element.placeholder = translations[currentLanguage][key];
        } else if (element.tagName === 'IMG' && element.hasAttribute('alt')) {
          element.alt = translations[currentLanguage][key];
        } else {
          element.textContent = translations[currentLanguage][key];
        }
      }
    });
    
    // Update page title for age group
    document.title = translations[currentLanguage]['title.age4_6'] || 'Ethiopis - Age 4-6 Learning';
  }

  function getTranslation(key, fallback = '') {
    return translations[currentLanguage]?.[key] || 
           translations.en[key] || 
           fallback || 
           key;
  }

  // Initialize language on page load
  function initializeLanguage() {
    updateLanguageToggle();
    updatePageContent();
    
    if (languageToggle) {
      languageToggle.addEventListener('click', toggleLanguage);
    }
  }

  // ======================
  // 2. IMPROVED SESSION TIMER (30 minutes)
  // ======================
  const SESSION_DURATION = 30 * 60; // 30 minutes in seconds
  let timeLeft = SESSION_DURATION;
  let sessionTimer;
  
  const timerElement = document.getElementById('session-time');
  const progressBar = document.getElementById('progress-bar');
  const timerContainer = document.querySelector('.session-timer');

  // Initialize session timer
  function initSessionTimer() {
      // Check if we have an active session
      const sessionStart = localStorage.getItem('sessionStartTime');
      const savedTimeLeft = localStorage.getItem('sessionTimeLeft');
      
      if (sessionStart) {
          // Calculate elapsed time since session start
          const elapsed = Math.floor((Date.now() - parseInt(sessionStart)) / 1000);
          timeLeft = Math.max(SESSION_DURATION - elapsed, 0);
          
          if (timeLeft > 0) {
              startSessionTimer();
          } else {
              // Session expired
              endSession(true);
          }
      } else {
          // New session - start fresh
          localStorage.setItem('sessionStartTime', Date.now().toString());
          timeLeft = SESSION_DURATION;
          startSessionTimer();
      }
  }

  function startSessionTimer() {
      clearInterval(sessionTimer);
      updateTimerDisplay();
      
      sessionTimer = setInterval(() => {
          timeLeft--;
          localStorage.setItem('sessionTimeLeft', timeLeft.toString());
          updateTimerDisplay();
          
          if (timeLeft <= 0) {
              endSession(true);
          } else if (timeLeft <= 2 * 60) {
              // Last 2 minutes - critical state
              timerContainer.classList.add('critical');
              timerContainer.classList.remove('warning');
          } else if (timeLeft <= 5 * 60) {
              // Last 5 minutes - warning state
              timerContainer.classList.add('warning');
          }
      }, 1000);
  }

  function updateTimerDisplay() {
      const minutes = Math.floor(timeLeft / 60);
      const seconds = timeLeft % 60;
      timerElement.textContent = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
      
      const progressPercentage = (timeLeft / SESSION_DURATION) * 100;
      progressBar.style.width = `${progressPercentage}%`;
  }

  function endSession(expired = false) {
      clearInterval(sessionTimer);
      localStorage.removeItem('sessionStartTime');
      localStorage.removeItem('sessionTimeLeft');
      
      if (expired) {
          showNotification(getTranslation('session.expired'), 'error', 5000);
          setTimeout(() => {
              window.location.href = 'login.html';
          }, 5000);
      }
  }

  // ======================
  // 3. MODAL FUNCTIONALITY
  // ======================
  const modal = document.getElementById('content-modal');
  const modalIframe = document.getElementById('modal-iframe');
  const closeModal = document.querySelector('.close-modal');
  const videoModal = document.getElementById('videoModal');
  
  document.querySelectorAll('.portfolio-item, .video-link').forEach(item => {
    item.addEventListener('click', function(e) {
      if (this.classList.contains('video-link')) {
        e.preventDefault();
        const videoSrc = this.dataset.video;
        const videoPlayer = videoModal.querySelector('video');
        
        videoPlayer.querySelector('source').src = videoSrc;
        videoPlayer.load();
        videoPlayer.play();
        
        videoModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        
        const closeVideoModal = () => {
          videoModal.style.display = 'none';
          videoPlayer.pause();
          videoPlayer.currentTime = 0;
          document.body.style.overflow = 'auto';
        };
        
        videoModal.querySelector('.close').addEventListener('click', closeVideoModal);
        videoModal.addEventListener('click', function(e) {
          if(e.target === videoModal) closeVideoModal();
        });
        
        return;
      }
      
      const contentUrl = this.getAttribute('data-content') || this.getAttribute('href');
      if (contentUrl && contentUrl.endsWith('.html')) {
        e.preventDefault();
        modalIframe.onload = () => {
          modalIframe.src = contentUrl;
          modal.style.display = 'flex';
          document.body.style.overflow = 'hidden';
        };
        modalIframe.onerror = () => {
          showNotification(getTranslation('content.load_error'), 'error');
        };
        modalIframe.src = contentUrl;
      }
    });
  });
  
  closeModal.addEventListener('click', function() {
    modal.style.display = 'none';
    modalIframe.src = '';
    document.body.style.overflow = 'auto';
  });
  
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      modal.style.display = 'none';
      modalIframe.src = '';
      document.body.style.overflow = 'auto';
    }
  });

  // ======================
  // 4. LOGOUT FUNCTIONALITY
  // ======================
  document.getElementById('logout-button').addEventListener('click', function() {
    endSession();
    window.location.href = 'login.html';
  });

  // ======================
  // 5. NOTIFICATION SYSTEM
  // ======================
  function showNotification(message, type = 'info', duration = 3000) {
    const existing = document.querySelector('.notification');
    if (existing) existing.remove();
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.setAttribute('role', 'alert');
    notification.setAttribute('aria-live', 'polite');
    
    notification.innerHTML = `
      <div class="notification-content">${message}</div>
      <button class="notification-close" aria-label="${getTranslation('notification.close', 'Close')}">
        &times;
      </button>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => notification.classList.add('show'), 10);
    
    notification.querySelector('.notification-close').addEventListener('click', () => {
      dismissNotification(notification);
    });
    
    if (duration > 0) {
      setTimeout(() => dismissNotification(notification), duration);
    }
  }
  
  function dismissNotification(notification) {
    notification.classList.remove('show');
    setTimeout(() => notification.remove(), 300);
  }

  // ======================
  // 6. INITIALIZATION
  // ======================
  initializeLanguage();
  initSessionTimer();
  
  // Ensure all interactive elements have proper ARIA labels
  document.querySelectorAll('button, [tabindex="0"]').forEach(el => {
    if (!el.hasAttribute('aria-label')) {
      const label = el.textContent.trim() || el.getAttribute('title') || '';
      if (label) el.setAttribute('aria-label', label);
    }
  });

  // Clean up on page unload
  window.addEventListener('beforeunload', () => {
    if (timeLeft > 0) {
      localStorage.setItem('sessionTimeLeft', timeLeft.toString());
    }
  });
});