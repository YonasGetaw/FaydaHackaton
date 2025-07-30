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
        'title.age7_9': 'Ethiopis - Age 7-9 Learning',
        'age7_9.title': 'Age Group 7-9 (Lower Primary)',
        'age7_9.reading_writing': 'Reading & Writing',
        'age7_9.amharic_reading': 'Amharic Reading',
        'age7_9.amharic_reading_desc': 'Practice reading simple Amharic sentences and stories',
        'age7_9.english_reading': 'English Reading',
        'age7_9.english_reading_desc': 'Short stories with comprehension questions',
        'age7_9.vocabulary': 'Vocabulary Builder',
        'age7_9.vocabulary_desc': 'Learn new words in Amharic and English',
        'age7_9.mathematics': 'Mathematics',
        'age7_9.add_subtract': 'Addition & Subtraction',
        'age7_9.add_subtract_desc': 'Practice with numbers up to 100',
        'age7_9.multiplication': 'Multiplication',
        'age7_9.multiplication_desc': 'Learn times tables up to 12',
        'age7_9.math_games': 'Math Games',
        'age7_9.math_games_desc': 'Fun interactive math challenges',
        'age7_9.science_nature': 'Science & Nature',
        'age7_9.human_body': 'Human Body',
        'age7_9.human_body_desc': 'Learn about organs and systems',
        'age7_9.space_science': 'Space Science',
        'age7_9.space_science_desc': 'Planets, stars and our solar system',
        'age7_9.environment': 'Our Environment',
        'age7_9.environment_desc': 'Ecosystems and conservation',
        'age7_9.moral_social': 'Moral & Social Lessons',
        'age7_9.good_manners': 'Good Manners',
        'age7_9.good_manners_desc': 'Being polite and respectful',
        'age7_9.teamwork': 'Teamwork',
        'age7_9.teamwork_desc': 'Working together effectively',
        'age7_9.honesty': 'Honesty',
        'age7_9.honesty_desc': 'Why telling the truth matters',
        'age7_9.history_culture': 'History & Culture',
        'age7_9.ethiopian_history': 'Ethiopian History',
        'age7_9.ethiopian_history_desc': 'Important events and periods',
        'age7_9.cultural_traditions': 'Cultural Traditions',
        'age7_9.cultural_traditions_desc': 'Festivals, food and customs',
        'age7_9.historical_figures': 'Historical Figures',
        'age7_9.historical_figures_desc': 'Ethiopian leaders and heroes',
        'age7_9.coding_tech': 'Coding & Technology',
        'age7_9.block_coding': 'Block Coding',
        'age7_9.block_coding_desc': 'Introduction to programming concepts',
        'age7_9.digital_skills': 'Digital Skills',
        'age7_9.digital_skills_desc': 'Basic computer and internet skills',
        'age7_9.tech_projects': 'Tech Projects',
        'age7_9.tech_projects_desc': 'Hands-on technology activities',
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
        'title.age7_9': 'ኢትዮጲስ - የ7-9 ዓመት ትምህርት',
        'age7_9.title': 'ዕድሜ ቡድን 7-9 (የመጀመሪያ ደረጃ)',
        'age7_9.reading_writing': 'አንባቢያና ጽሑፍ',
        'age7_9.amharic_reading': 'አማርኛ አንባቢያ',
        'age7_9.amharic_reading_desc': 'ቀላል የአማርኛ ሀረጎችና ታሪኮች ያንብቡ',
        'age7_9.english_reading': 'እንግሊዝኛ አንባቢያ',
        'age7_9.english_reading_desc': 'አጫጭር ታሪኮች ከጥያቄዎች ጋር',
        'age7_9.vocabulary': 'የቃላት ማህደር',
        'age7_9.vocabulary_desc': 'አዳዲስ ቃላት በአማርኛና እንግሊዝኛ ይማሩ',
        'age7_9.mathematics': 'ሒሳብ',
        'age7_9.add_subtract': 'መደመርና መቀነስ',
        'age7_9.add_subtract_desc': 'እስከ 100 ያሉ ቁጥሮችን ይለማመዱ',
        'age7_9.multiplication': 'የውጤት ሰንጠረዥ',
        'age7_9.multiplication_desc': 'እስከ 12 የሚደርሱ የውጤት ሰንጠረዦችን ይማሩ',
        'age7_9.math_games': 'የሒሳብ ጨዋታዎች',
        'age7_9.math_games_desc': 'ጨዋታያዊ የሂሳብ ፈተናዎች',
        'age7_9.science_nature': 'ሳይንስና ተፈጥሮ',
        'age7_9.human_body': 'የሰውነት አካላት',
        'age7_9.human_body_desc': 'ስለ አካላትና ስርዓቶች ይማሩ',
        'age7_9.space_science': 'የፀሐይ ስርዓት',
        'age7_9.space_science_desc': 'ፕላኔቶች፣ ከዋክብትና የፀሐይ ስርዓታችን',
        'age7_9.environment': 'አካባቢያችን',
        'age7_9.environment_desc': 'የአካባቢ ስርዓትና ጥበቃ',
        'age7_9.moral_social': 'ስነምግባራዊና ማህበራዊ ትምህርቶች',
        'age7_9.good_manners': 'መልካም ስነ-ምግባር',
        'age7_9.good_manners_desc': 'የተገቢ አስተዳደግና አክብሮት',
        'age7_9.teamwork': 'ቡድን ስራ',
        'age7_9.teamwork_desc': 'በጋራ በብቃት መስራት',
        'age7_9.honesty': 'እውነት መናገር',
        'age7_9.honesty_desc': 'እውነት ለማናገር ያለው ጠቀሜታ',
        'age7_9.history_culture': 'ታሪክና ባህል',
        'age7_9.ethiopian_history': 'የኢትዮጵያ ታሪክ',
        'age7_9.ethiopian_history_desc': 'አስፈላጊ ክስተቶችና ዘመናት',
        'age7_9.cultural_traditions': 'ባህላዊ ልምዶች',
        'age7_9.cultural_traditions_desc': 'በዓላት፣ ምግቦችና ልማዶች',
        'age7_9.historical_figures': 'ታሪካዊ ሰዎች',
        'age7_9.historical_figures_desc': 'የኢትዮጵያ መሪዎችና ጀግኖች',
        'age7_9.coding_tech': 'ኮድ አዘጋጅና ቴክኖሎጂ',
        'age7_9.block_coding': 'ብሎክ ኮዲንግ',
        'age7_9.block_coding_desc': 'የፕሮግራሚንግ መሰረታዊ ጽንሰ-ሀሳቦች',
        'age7_9.digital_skills': 'ዲጂታል ክህሎቶች',
        'age7_9.digital_skills_desc': 'የኮምፒዩተርና ኢንተርኔት መሰረታዊ ክህሎቶች',
        'age7_9.tech_projects': 'የቴክኖሎጂ ፕሮጀክቶች',
        'age7_9.tech_projects_desc': 'በቴክኖሎጂ ላይ የተመሰረቱ ተግባራት',
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
      document.title = translations[currentLanguage]['title.age7_9'] || 'Ethiopis - Age 7-9 Learning';
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
    // 2. IMPROVED SESSION TIMER (45 minutes)
    // ======================
    const SESSION_DURATION = 45 * 60; // 45 minutes in seconds
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
                timerContainer.classList.add('critical');
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