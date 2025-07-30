document.addEventListener('DOMContentLoaded', function() {
    // Language state
    let isAmharic = false;
    
    // Translations
    const translations = {
        en: {
            title: "Decision Making",
            subtitle: "Weigh Your Options",
            scenario1Title: "Scenario #1",
            scenario1Text: "You're offered a high-paying job in another city, but it would mean leaving your family and friends behind. What do you do?",
            scenario1Options: [
                { value: "accept", text: "Accept the job" },
                { value: "negotiate", text: "Negotiate remote work" },
                { value: "decline", text: "Decline the offer" }
            ],
            scenario1Analyses: {
                accept: "Pros: Career growth, financial benefits. Cons: Loneliness, family separation.",
                negotiate: "Pros: Potential best of both worlds. Cons: Employer may refuse.",
                decline: "Pros: Maintain current lifestyle. Cons: Missed opportunity."
            },
            scenario2Title: "Scenario #2",
            scenario2Text: "Your team is divided on two approaches to a project. Half want the safe, proven method, half want an innovative but risky approach. How do you decide?",
            scenario2Options: [
                { value: "safe", text: "Choose the safe method" },
                { value: "innovative", text: "Choose the innovative approach" },
                { value: "combine", text: "Combine elements of both" }
            ],
            scenario2Analyses: {
                safe: "Pros: Predictable outcome. Cons: May miss innovation benefits.",
                innovative: "Pros: Potential breakthrough. Cons: Higher risk of failure.",
                combine: "Pros: Balanced approach. Cons: May satisfy no one fully."
            },
            analyzeBtn: "Analyze Decision",
            newScenario: "New Scenario",
            moreChallenges: "More challenges: ",
            teaserLink: "Brain Teasers",
            puzzleLink: "Logical Puzzles",
            footerText: "Develop your critical thinking skills",
            languageToggle: "አማርኛ / Amharic",
            noSelection: "Please select an option first!"
        },
        am: {
            title: "ውሳኔ መስጠት",
            subtitle: "አማራጮችዎን ይመዝኑ",
            scenario1Title: "አጋጣሚ #1",
            scenario1Text: "በሌላ ከተማ ከፍተኛ የደመወዝ ስራ ቀርቧል፣ ነገር ግን ቤተሰብዎን እና ጓደኞችዎን መተው አለብዎት። ምን ትሰራለህ?",
            scenario1Options: [
                { value: "accept", text: "ስራውን ተቀበል" },
                { value: "negotiate", text: "ሩቅ ከመስራት ይውደዱ" },
                { value: "decline", text: "አቅርቦቱን ውደቅ አድርግ" }
            ],
            scenario1Analyses: {
                accept: "ጥቅሞች: ሙያዊ እድገት፣ የገንዘብ ጥቅም። ጉዳቶች: ብቸኝነት፣ ከቤተሰብ መለያየት።",
                negotiate: "ጥቅሞች: ሁለቱንም ዓይነት ጥቅም ማግኘት ይቻላል። ጉዳቶች: ሰራተኛው ሊከለክል ይችላል።",
                decline: "ጥቅሞች: የአሁኑን �ለታ ይዘው ይቆያሉ። ጉዳቶች: ያመለጠ እድል።"
            },
            scenario2Title: "አጋጣሚ #2",
            scenario2Text: "ቡድንዎ በአንድ ፕሮጀክት ላይ በሁለት ዘዴዎች ተከፍሏል። ግማሽ ደህንነቱ የተጠበቀ ዘዴን ይፈልጋሉ፣ ግማሽ ግን ሊያስገኝ የሚችል ግን አደገኛ ዘዴን ይፈልጋሉ። እንዴት ይወስናሉ?",
            scenario2Options: [
                { value: "safe", text: "ደህንነቱ የተጠበቀውን ዘዴ ይምረጡ" },
                { value: "innovative", text: "ሊያስገኝ የሚችለውን ዘዴ ይምረጡ" },
                { value: "combine", text: "የሁለቱንም አካላት ያጣምሩ" }
            ],
            scenario2Analyses: {
                safe: "ጥቅሞች: የሚጠበቅ ውጤት። ጉዳቶች: የሊያስገኝ ዘዴ ጥቅሞች ሊጠፉ ይችላሉ።",
                innovative: "ጥቅሞች: አዲስ ነገር ሊፈጠር ይችላል። ጉዳቶች: ውድቀት ከፍተኛ አደጋ አለው።",
                combine: "ጥቅሞች: ሚዛናዊ አቀራረብ። ጉዳቶች: ማንንም ሙሉ በሙሉ ላያረካ ይችላል።"
            },
            analyzeBtn: "ውሳኔውን ይተነትኑ",
            newScenario: "አዲስ አጋጣሚ",
            moreChallenges: "ተጨማሪ ልምምዶች: ",
            teaserLink: "የአንጎል ልምምዶች",
            puzzleLink: "ሎጂካዊ እንቆቅልሾች",
            footerText: "የምርምር ክህሎትዎን ያዳብሩ",
            languageToggle: "English / እንግሊዝኛ",
            noSelection: "እባክዎ መጀመሪያ አማራጭ ይምረጡ!"
        }
    };

    // Scenarios data
    const scenarios = [
        {
            text: translations.en.scenario1Text,
            options: translations.en.scenario1Options,
            analyses: translations.en.scenario1Analyses
        },
        {
            text: translations.en.scenario2Text,
            options: translations.en.scenario2Options,
            analyses: translations.en.scenario2Analyses
        },
        {
            text: "You discover a colleague is taking credit for your work in meetings. Do you:",
            options: [
                { value: "confront", text: "Confront them directly" },
                { value: "manager", text: "Bring it up with your manager" },
                { value: "document", text: "Document your work and let results speak" }
            ],
            analyses: {
                confront: "Direct confrontation can resolve issues quickly but may damage relationships if not handled diplomatically.",
                manager: "Involving management is professional but may be seen as escalating unnecessarily.",
                document: "Documenting protects you but doesn't address the immediate issue of credit-taking."
            }
        }
    ];

    // DOM elements
    const languageToggle = document.getElementById('language-toggle');
    const scenarioCards = document.querySelectorAll('.scenario-card');
    const scenarioTexts = document.querySelectorAll('.scenario-text');
    const optionsContainers = document.querySelectorAll('.options');
    const analyzeBtns = document.querySelectorAll('.analyze-btn');
    const analysisDivs = document.querySelectorAll('.analysis');
    const newScenarioBtn = document.querySelector('.new-scenario');

    // Update language
    function updateLanguage() {
        const lang = isAmharic ? 'am' : 'en';
        const t = translations[lang];
        
        document.getElementById('title').textContent = t.title;
        document.getElementById('subtitle').textContent = t.subtitle;
        document.getElementById('scenario1-title').textContent = t.scenario1Title;
        document.getElementById('scenario2-title').textContent = t.scenario2Title;
        document.getElementById('analyze-btn1').textContent = t.analyzeBtn;
        document.getElementById('analyze-btn2').textContent = t.analyzeBtn;
        document.getElementById('new-scenario').textContent = t.newScenario;
        document.getElementById('more-challenges').innerHTML = t.moreChallenges + 
            `<a href="#" class="footer-link">${t.teaserLink}</a> | 
            <a href="#" class="footer-link">${t.puzzleLink}</a>`;
        document.getElementById('footer-text').textContent = t.footerText;
        languageToggle.textContent = t.languageToggle;
        
        // Update current scenarios
        initScenarios();
    }

    // Initialize with first scenarios
    function initScenarios() {
        scenarios.slice(0, 2).forEach((scenario, index) => {
            const t = isAmharic ? translations.am : translations.en;
            const scenarioKey = `scenario${index+1}`;
            
            scenarioTexts[index].textContent = t[`${scenarioKey}Text`];
            
            // Clear previous options
            optionsContainers[index].innerHTML = '';
            
            // Add new options
            t[`${scenarioKey}Options`].forEach(option => {
                const label = document.createElement('label');
                label.innerHTML = `
                    <input type="radio" name="decision${index+1}" value="${option.value}">
                    <span>${option.text}</span>
                `;
                optionsContainers[index].appendChild(label);
            });
            
            // Reset analysis
            analysisDivs[index].classList.add('hidden');
            analyzeBtns[index].textContent = t.analyzeBtn;
        });
    }

    // Language toggle
    languageToggle.addEventListener('click', function() {
        isAmharic = !isAmharic;
        updateLanguage();
    });

    // Analyze decision when button clicked
    analyzeBtns.forEach((btn, index) => {
        btn.addEventListener('click', function() {
            const selectedOption = document.querySelector(`input[name="decision${index+1}"]:checked`);
            const t = isAmharic ? translations.am : translations.en;
            
            if (!selectedOption) {
                alert(t.noSelection);
                return;
            }
            
            const currentScenario = scenarios.find(s => 
                s.text === scenarioTexts[index].textContent || 
                s.text === translations.en[`scenario${index+1}Text`] || 
                s.text === translations.am[`scenario${index+1}Text`]
            );
            
            if (currentScenario) {
                let analysisText = currentScenario.analyses[selectedOption.value];
                
                // For the first two scenarios, use translations
                if (index < 2) {
                    const scenarioKey = `scenario${index+1}`;
                    analysisText = t[`${scenarioKey}Analyses`][selectedOption.value];
                }
                
                analysisDivs[index].textContent = analysisText;
                analysisDivs[index].classList.remove('hidden');
            }
        });
    });

    // Get new random scenarios
    newScenarioBtn.addEventListener('click', function() {
        const shuffled = [...scenarios].sort(() => 0.5 - Math.random());
        const t = isAmharic ? translations.am : translations.en;
        
        scenarioCards.forEach((card, index) => {
            if (shuffled[index]) {
                // For the first two scenarios, use translations
                if (index < 2) {
                    const scenarioKey = `scenario${index+1}`;
                    card.querySelector('.scenario-text').textContent = t[`${scenarioKey}Text`];
                    
                    // Clear and add new options
                    const optionsContainer = card.querySelector('.options');
                    optionsContainer.innerHTML = '';
                    
                    t[`${scenarioKey}Options`].forEach(option => {
                        const label = document.createElement('label');
                        label.innerHTML = `
                            <input type="radio" name="decision${index+1}" value="${option.value}">
                            <span>${option.text}</span>
                        `;
                        optionsContainer.appendChild(label);
                    });
                } else {
                    // For additional scenarios, use English
                    card.querySelector('.scenario-text').textContent = shuffled[index].text;
                    
                    // Clear and add new options
                    const optionsContainer = card.querySelector('.options');
                    optionsContainer.innerHTML = '';
                    
                    shuffled[index].options.forEach(option => {
                        const label = document.createElement('label');
                        label.innerHTML = `
                            <input type="radio" name="decision${index+1}" value="${option.value}">
                            <span>${option.text}</span>
                        `;
                        optionsContainer.appendChild(label);
                    });
                }
                
                // Reset analysis
                card.querySelector('.analysis').classList.add('hidden');
                card.querySelector('.analyze-btn').textContent = t.analyzeBtn;
            }
        });
    });

    initScenarios();
});