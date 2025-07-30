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
        'title.age10_12': 'Ethiopis - Age 10-12 Learning',
        'age10_12.title': 'Age Group 10-12 (Upper Primary)',
        'age10_12.advanced_reading': 'Advanced Reading & Writing',
        'age10_12.essay_writing': 'Essay Writing',
        'age10_12.essay_writing_desc': 'Learn to structure and write short essays in English and Amharic',
        'age10_12.reading_comp': 'Reading Comprehension',
        'age10_12.reading_comp_desc': 'Advanced passages with critical thinking questions',
        'age10_12.creative_writing': 'Creative Writing',
        'age10_12.creative_writing_desc': 'Develop storytelling and descriptive writing skills',
        'age10_12.math_challenges': 'Math Challenges',
        'age10_12.fractions': 'Fractions & Decimals',
        'age10_12.fractions_desc': 'Operations with fractions and decimal numbers',
        'age10_12.algebra': 'Algebra Basics',
        'age10_12.algebra_desc': 'Introduction to variables and simple equations',
        'age10_12.geometry': 'Geometry',
        'age10_12.geometry_desc': 'Shapes, angles, and area calculations',
        'age10_12.science_stem': 'Science Projects & STEM',
        'age10_12.electricity': 'Electricity Basics',
        'age10_12.electricity_desc': 'Circuits, conductors and simple electronics',
        'age10_12.water_cycle': 'Water Cycle',
        'age10_12.water_cycle_desc': 'Evaporation, condensation and precipitation',
        'age10_12.science_experiments': 'Science Experiments',
        'age10_12.science_experiments_desc': 'Hands-on projects with household items',
        'age10_12.critical_thinking': 'Critical Thinking',
        'age10_12.logic_puzzles': 'Logic Puzzles',
        'age10_12.logic_puzzles_desc': 'Develop reasoning and problem-solving skills',
        'age10_12.brain_teasers': 'Brain Teasers',
        'age10_12.brain_teasers_desc': 'Challenging problems to stretch your mind',
        'age10_12.decision_making': 'Decision Making',
        'age10_12.decision_making_desc': 'Learn to evaluate options and consequences',
        'age10_12.history_geo': 'Ethiopian History & Geography',
        'age10_12.ethiopian_regions': 'Ethiopian Regions',
        'age10_12.ethiopian_regions_desc': 'Geography, climate and cultures of Ethiopia',
        'age10_12.historical_events': 'Historical Events',
        'age10_12.historical_events_desc': 'Key moments in Ethiopian history',
        'age10_12.cultural_heritage': 'Cultural Heritage',
        'age10_12.cultural_heritage_desc': 'UNESCO sites and national treasures',
        'age10_12.computer_skills': 'Basic Computer Skills',
        'age10_12.typing': 'Typing Skills',
        'age10_12.typing_desc': 'Learn touch typing and keyboard skills',
        'age10_12.internet_safety': 'Internet Safety',
        'age10_12.internet_safety_desc': 'Staying safe and responsible online',
        'age10_12.presentation': 'Presentation Skills',
        'age10_12.presentation_desc': 'Creating and delivering digital presentations',
        'age10_12.fun_challenges': 'Fun Challenges & Competitions',
        'age10_12.spelling_bee': 'Spelling Bee',
        'age10_12.spelling_bee_desc': 'Test your spelling skills with challenges',
        'age10_12.math_contest': 'Math Contest',
        'age10_12.math_contest_desc': 'Timed math challenges and competitions',
        'age10_12.science_quiz': 'Science Quiz',
        'age10_12.science_quiz_desc': 'Test your science knowledge',
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
        'title.age10_12': 'ኢትዮጲስ - የ10-12 ዓመት ትምህርት',
        'age10_12.title': 'ዕድሜ ቡድን 10-12 (ከፍተኛ የመጀመሪያ ደረጃ)',
        'age10_12.advanced_reading': 'የላቀ አንባቢያና ጽሑፍ',
        'age10_12.essay_writing': 'የፅሁፍ ጽሑፍ',
        'age10_12.essay_writing_desc': 'በእንግሊዝኛ እና አማርኛ አጭር ፅሁፎችን መዋቅር እና መጻፍ ይማሩ',
        'age10_12.reading_comp': 'የአንባቢያ ግንዛቤ',
        'age10_12.reading_comp_desc': 'የላቀ መጣጥፎች ከአስተሳሰብ ጥያቄዎች ጋር',
        'age10_12.creative_writing': 'ፈጠራዊ ጽሑፍ',
        'age10_12.creative_writing_desc': 'ታሪክ መተርካት እና ገላጭ የጽሑፍ ክህሎቶችን ያዳብሩ',
        'age10_12.math_challenges': 'የሂሳብ ፈተናዎች',
        'age10_12.fractions': 'ክፍልፋዮች እና የአስርዮሽ',
        'age10_12.fractions_desc': 'በክፍልፋዮች እና የአስርዮሽ ቁጥሮች ላይ ስራዎች',
        'age10_12.algebra': 'አልጀብራ መሰረታዊ',
        'age10_12.algebra_desc': 'ተለዋዋጮችን እና ቀላል እኩልታዎችን መግቢያ',
        'age10_12.geometry': 'ጂኦሜትሪ',
        'age10_12.geometry_desc': 'ቅርጾች፣ ማዕዘኖች እና የአካባቢ ስሌቶች',
        'age10_12.science_stem': 'የሳይንስ ፕሮጀክቶች እና STEM',
        'age10_12.electricity': 'የኤሌክትሪክ መሰረታዊ',
        'age10_12.electricity_desc': 'ወረዳዎች፣ ኮንዳክተሮች እና ቀላል ኤሌክትሮኒክስ',
        'age10_12.water_cycle': 'የውሃ ዑደት',
        'age10_12.water_cycle_desc': 'ማጠራቀሚያ፣ ማጠናከሪያ እና ዝናብ',
        'age10_12.science_experiments': 'የሳይንስ ሙከራዎች',
        'age10_12.science_experiments_desc': 'በቤት ውስጥ የሚገኙ ነገሮች የተሰሩ ተግባራዊ ፕሮጀክቶች',
        'age10_12.critical_thinking': 'አስተሳሰብ',
        'age10_12.logic_puzzles': 'የሎጂክ እንቆቅልሾች',
        'age10_12.logic_puzzles_desc': 'ምክንያታዊ እና ችግር መፍታት ክህሎቶችን ያዳብሩ',
        'age10_12.brain_teasers': 'የአንጎል እንቆቅልሾች',
        'age10_12.brain_teasers_desc': 'አእምሯችሁን ለማራገፍ የሚረዱ አስቸጋሪ ችግሮች',
        'age10_12.decision_making': 'ውሳኔ መስጠት',
        'age10_12.decision_making_desc': 'አማራጮችን እና ውጤቶችን ለመገምገም ይማሩ',
        'age10_12.history_geo': 'የኢትዮጵያ ታሪክ እና ጂኦግራፊ',
        'age10_12.ethiopian_regions': 'የኢትዮጵያ ክልሎች',
        'age10_12.ethiopian_regions_desc': 'የኢትዮጵያ ጂኦግራፊ፣ አየር ንብረት እና ባህሎች',
        'age10_12.historical_events': 'ታሪካዊ ክስተቶች',
        'age10_12.historical_events_desc': 'በኢትዮጵያ ታሪክ ውስጥ የቁልፍ ቅጽበቶች',
        'age10_12.cultural_heritage': 'ባህላዊ ቅርስ',
        'age10_12.cultural_heritage_desc': 'ዩኔስኮ ቦታዎች እና ብሔራዊ ገንዘቦች',
        'age10_12.computer_skills': 'የኮምፒዩተር መሰረታዊ ክህሎቶች',
        'age10_12.typing': 'የጠቅላላ ጽሑፍ ክህሎት',
        'age10_12.typing_desc': 'ያለማየት የጽሑፍ አደራጅ እና የቁልፍ ሰሌዳ ክህሎቶችን ይማሩ',
        'age10_12.internet_safety': 'የኢንተርኔት ደህንነት',
        'age10_12.internet_safety_desc': 'በመስመር ላይ ደህንነቱ የተጠበቀ እና ተጠያቂ መሆን',
        'age10_12.presentation': 'የማቅረቢያ ክህሎቶች',
        'age10_12.presentation_desc': 'ዲጂታል ማቅረቢያዎችን መፍጠር እና ማቅረብ',
        'age10_12.fun_challenges': 'የማራኪ ፈተናዎች እና ውድድሮች',
        'age10_12.spelling_bee': 'የፊደል ፈተና',
        'age10_12.spelling_bee_desc': 'የፊደል ክህሎትዎን በፈተናዎች ይሞክሩ',
        'age10_12.math_contest': 'የሂሳብ ውድድር',
        'age10_12.math_contest_desc': 'በጊዜ የተገደበ የሂሳብ ፈተናዎች እና ውድድሮች',
        'age10_12.science_quiz': 'የሳይንስ ፈተና',
        'age10_12.science_quiz_desc': 'የሳይንስ እውቀትዎን ይሞክሩ',
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
      document.title = translations[currentLanguage]['title.age10_12'] || 'Ethiopis - Age 10-12 Learning';
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
    // 2. IMPROVED SESSION TIMER (60 minutes)
    // ======================
    const SESSION_DURATION = 60 * 60; // 60 minutes in seconds
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
            } else if (timeLeft <= 5 * 60) {
                // Last 5 minutes - critical state
                timerContainer.classList.add('critical');
                timerContainer.classList.remove('warning');
            } else if (timeLeft <= 10 * 60) {
                // Last 10 minutes - warning state
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