document.addEventListener('DOMContentLoaded', () => {
    const synth = window.speechSynthesis;
    let voices = [];
    
    function loadVoices() {
        voices = synth.getVoices();
    }
    
    if (synth.onvoiceschanged !== undefined) {
        synth.onvoiceschanged = loadVoices;
    }
    loadVoices();
  
    function speakBilingual(text) {
        synth.cancel();
        
        const [english, amharic] = text.split(' - ');
        
        const engUtterance = new SpeechSynthesisUtterance(english);
        engUtterance.lang = 'en-US';
        engUtterance.rate = 0.8;
        engUtterance.pitch = 1.1;
        
        const amhUtterance = new SpeechSynthesisUtterance(amharic);
        amhUtterance.lang = 'am-ET';
        amhUtterance.rate = 0.8;
        amhUtterance.pitch = 1.1;
        
        synth.speak(engUtterance);
        setTimeout(() => {
            synth.speak(amhUtterance);
        }, 800);
    }
  
    function animateElement(element) {
        element.style.transform = 'scale(1.15)';
        element.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
        
        setTimeout(() => {
            element.style.transform = 'scale(1)';
            element.style.boxShadow = 'none';
        }, 300);
    }
  
    document.querySelectorAll('.color-swatch').forEach(swatch => {
        swatch.addEventListener('click', function() {
            const name = this.getAttribute('data-name');
            animateElement(this);
            speakBilingual(name);
        });
        
        swatch.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                const name = this.getAttribute('data-name');
                animateElement(this);
                speakBilingual(name);
            }
        });
    });
  });