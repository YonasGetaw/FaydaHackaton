/* script.js */
document.addEventListener('DOMContentLoaded', function() {
    const languageToggle = document.getElementById('language-toggle');
    let isAmharic = false;

    // English content
    const englishContent = {
        title: "The Amazing Human Body",
        system1Title: "Skeletal System",
        system1Text: "Your body has 206 bones that work together to help you stand and move.",
        system2Title: "Digestive System",
        system2Text: "Food travels through a 9-meter long tube called the digestive tract.",
        system3Title: "Circulatory System",
        system3Text: "Your heart pumps blood through 96,000 km of blood vessels - that's enough to go around Earth twice!",
        footer: "Your body is amazing! Take good care of it.",
        fact1: "The smallest bone is in your ear and is as tiny as a grain of rice!",
        fact2: "Your stomach acid is strong enough to dissolve metal!",
        fact3: "Your heart beats about 100,000 times every day!"
    };

    // Amharic content
    const amharicContent = {
        title: "የሰውነት አስደናቂ አሠራር",
        system1Title: "የአጥንት ስርዓት",
        system1Text: "ሰውነትዎ 206 አጥንቶች አሉት እነሱም አብረው እንዲቆሙ እና እንዲንቀሳቀሱ ይረዳዎታል።",
        system2Title: "የምግብ መፈጨት ስርዓት",
        system2Text: "ምግብ በ9 ሜትር ርዝመት ያለው የምግብ ማስተላለፊያ ቱቦ ውስጥ ይጓዛል።",
        system3Title: "የደም ዝውውር ስርዓት",
        system3Text: "ልብዎ ደምን በ96,000 ኪ.ሜ የደም ሥሮች ውስጥ ይጎርፋል - ይህ ምድርን ሁለት ጊዜ ለመዞር በቂ ነው!",
        footer: "ሰውነትዎ አስደናቂ ነው! ጥሩ ፅዳት ያድርጉበት።",
        fact1: "ትንሹ አጥንት በጆሮዎ ውስጥ ነው እና እንደ ሩዝ ቅንጣት ትንሽ ነው!",
        fact2: "የሆድዎ አሲድ ብረትን ለመቅለጥ በቂ ጠንካራ ነው!",
        fact3: "ልብዎ በየቀኑ ወደ 100,000 ጊዜ ይምታል!"
    };

    // Function to update content based on language
    function updateContent() {
        const content = isAmharic ? amharicContent : englishContent;

        document.getElementById('main-title').textContent = content.title;
        document.getElementById('system1-title').textContent = content.system1Title;
        document.getElementById('system1-text').textContent = content.system1Text;
        document.getElementById('system2-title').textContent = content.system2Title;
        document.getElementById('system2-text').textContent = content.system2Text;
        document.getElementById('system3-title').textContent = content.system3Title;
        document.getElementById('system3-text').textContent = content.system3Text;
        document.getElementById('footer-text').textContent = content.footer;

        // Update fun fact buttons and texts if needed (though text is toggled)
        document.getElementById('fact1-btn').textContent = isAmharic ? "አስደናቂ እውነታ" : "Fun Fact";
        document.getElementById('fact2-btn').textContent = isAmharic ? "አስደናቂ እውነታ" : "Fun Fact";
        document.getElementById('fact3-btn').textContent = isAmharic ? "አስደናቂ እውነታ" : "Fun Fact";
        document.getElementById('fact1-text').textContent = isAmharic ? amharicContent.fact1 : englishContent.fact1;
        document.getElementById('fact2-text').textContent = isAmharic ? amharicContent.fact2 : englishContent.fact2;
        document.getElementById('fact3-text').textContent = isAmharic ? amharicContent.fact3 : englishContent.fact3;
    }

    // Function to toggle fun fact display and style
    function toggleFunFact(systemId) {
        const systemDiv = document.getElementById(systemId);
        const factText = document.getElementById(`fact${systemId.slice(-1)}-text`);
        const factButton = document.getElementById(`fact${systemId.slice(-1)}-btn`);

        if (factText.style.display === 'none' || factText.style.display === '') {
            factText.style.display = 'block';
            factButton.textContent = isAmharic ? "ዝጋ" : "Close";
            systemDiv.style.backgroundColor = '#d4edda'; /* Light green background */
            systemDiv.style.borderColor = '#c3e6cb';
            systemDiv.style.borderRadius = '15px';
            systemDiv.style.padding = '30px';
            factButton.style.backgroundColor = '#c0392b'; /* Red close button */
        } else {
            factText.style.display = 'none';
            factButton.textContent = isAmharic ? "አስደናቂ እውነታ" : "Fun Fact";
            systemDiv.style.backgroundColor = '#fff';
            systemDiv.style.borderColor = '#e0e0e0';
            systemDiv.style.borderRadius = '12px';
            systemDiv.style.padding = '25px';
            factButton.style.backgroundColor = '#2ecc71'; /* Green fun fact button */
        }
    }

    // Set up button event listeners for fun facts
    document.getElementById('fact1-btn').addEventListener('click', function() {
        toggleFunFact('system1');
    });

    document.getElementById('fact2-btn').addEventListener('click', function() {
        toggleFunFact('system2');
    });

    document.getElementById('fact3-btn').addEventListener('click', function() {
        toggleFunFact('system3');
    });

    // Language toggle functionality
    languageToggle.addEventListener('click', function() {
        isAmharic = !isAmharic;
        updateContent();
        languageToggle.textContent = isAmharic ? "English" : "አማርኛ";
        // Update close button text on language switch if a fact is open
        document.querySelectorAll('.body-system').forEach(system => {
            const factText = system.querySelector('.fun-fact-text');
            const factButton = system.querySelector('.fun-fact-btn');
            if (factText.style.display === 'block') {
                factButton.textContent = isAmharic ? "ዝጋ" : "Close";
            } else {
                factButton.textContent = isAmharic ? "አስደናቂ እውነታ" : "Fun Fact";
            }
        });
    });

    // Initial content update
    updateContent();
});