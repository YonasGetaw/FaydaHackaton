document.addEventListener('DOMContentLoaded', function() {
    const langToggle = document.getElementById('langToggle');
    let isAmharic = false;
    
    const translations = {
        title: ["Fun Science Experiments", "መዝናኛ የሳይንስ ሙከራዎች"],
        section1: ["Easy Home Experiments", "ቀላል የቤት ውስጥ ሙከራዎች"],
        content1: [
            "These simple experiments use common household items to demonstrate scientific principles.",
            "እነዚህ ቀላል ሙከራዎች የቤት ዕቃዎችን በመጠቀም የሳይንሳዊ መርሆችን ያሳያሉ።"
        ],
        exp1: ["Volcano Eruption", "የግፊት ሙከራ"],
        content2: [
            "Create a chemical reaction with baking soda and vinegar.",
            "ከብአክስስ ሶዳ እና ከኮምጣጤ ጋር የኬሚካል ምላሽ ይፍጠሩ።"
        ],
        materials1: ["Materials:", "ቁሳቁሶች:"],
        steps1: ["Steps:", "ደረጃዎች:"],
        explanation1: [
            "The acid (vinegar) and base (baking soda) react to produce carbon dioxide gas, creating the eruption.",
            "አሲድ (ኮምጣጤ) እና ቤዝ (ብአክስስ ሶዳ) ካርቦን ዳይኦክሳይድ ጋዝ ለመፍጠር ይገናኛሉ፣ ይህም የግፊት ሙከራውን ያስከትላል።"
        ],
        exp2: ["Rainbow Milk", "ቀስተ ደመና ወተት"],
        content3: [
            "Explore surface tension with milk, food coloring and soap.",
            "በወተት፣ �ብለብ እና ሳሙና የላይኛው ንብርብር ግጭት ያስሱ።"
        ],
        materials2: ["Materials:", "ቁሳቁሶች:"],
        steps2: ["Steps:", "ደረጃዎች:"],
        explanation2: [
            "Soap breaks the surface tension of milk and reacts with fat molecules, causing the movement.",
            "ሳሙና የወተት የላይኛው ንብርብር ግጭት ይሰብራል እና ከስብ ሞለኪውሎች ጋር ይገናኛል፣ ይህም እንቅስቃሴውን ያስከትላል።"
        ],
        exp3: ["Balloon Rocket", "የባሎን ሮኬት"],
        content4: [
            "Demonstrate Newton's Third Law of Motion.",
            "የኒውተን ሦስተኛ ህግ አሳይ።"
        ],
        materials3: ["Materials:", "ቁሳቁሶች:"],
        steps3: ["Steps:", "ደረጃዎች:"],
        explanation3: [
            "Air rushing out pushes the balloon forward (action) which creates an equal opposite force (reaction).",
            "የሚወጣው አየር ባሎኑን ወደፊት ይገፋዋል (ድርጊት) ይህም እኩል የሆነ ተቃራኒ ኃይል (ምላሽ) ያስከትላል።"
        ],
        section2: ["Experiment Simulator", "የሙከራ አስመስሎ"],
        content5: [
            "Try this virtual density experiment with different liquids.",
            "በተለያዩ ፈሳሽ ይህን የምድብ ሙከራ ይሞክሩ።"
        ],
        liquidLabel1: ["Liquid 1:", "ፈሳሽ 1:"],
        liquidLabel2: ["Liquid 2:", "ፈሳሽ 2:"],
        footerText: [
            "Always perform experiments with adult supervision and follow safety guidelines.",
            "ሙከራዎችን ሁልጊዜ ከአዋቂ ቁጥጥር ጋር ያከናውኑ እና የደህንነት መመሪያዎችን ይከተሉ።"
        ],
        moreLink: ["More Safety Tips", "ተጨማሪ የደህንነት ምክሮች"]
    };
    
    // Toggle between English and Amharic
    langToggle.addEventListener('click', function() {
        isAmharic = !isAmharic;
        this.textContent = isAmharic ? "English" : "አማርኛ";
        
        // Update all translatable elements
        for (const [key, value] of Object.entries(translations)) {
            const elements = document.querySelectorAll(`[id="${key}"]`);
            elements.forEach(el => {
                el.textContent = value[isAmharic ? 1 : 0];
            });
        }
        
        // Update button texts
        document.querySelectorAll('.show-btn').forEach(btn => {
            const target = btn.getAttribute('data-target');
            let expText = "";
            if (target === "volcano") {
                expText = isAmharic ? "ዝርዝሮችን አሳይ" : "Show Details";
            } else if (target === "milk") {
                expText = isAmharic ? "ዝርዝሮችን አሳይ" : "Show Details";
            } else if (target === "rocket") {
                expText = isAmharic ? "ዝርዝሮችን አሳይ" : "Show Details";
            }
            btn.textContent = expText;
        });
        
        document.getElementById('pourBtn').textContent = isAmharic ? "አንድ ላይ ጨምር" : "Pour Together";
    });
    
    // Experiment details toggle
    document.querySelectorAll('.show-btn').forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const details = document.getElementById(targetId);
            details.classList.toggle('show');
            
            // Change button text
            if (details.classList.contains('show')) {
                this.textContent = isAmharic ? "ዝርዝሮችን ደብቅ" : "Hide Details";
            } else {
                this.textContent = isAmharic ? "ዝርዝሮችን አሳይ" : "Show Details";
            }
        });
    });
    
    // Density simulator
    const pourBtn = document.getElementById('pourBtn');
    const simulation = document.getElementById('simulation');
    const liquid1Select = document.getElementById('liquid1');
    const liquid2Select = document.getElementById('liquid2');
    
    const liquidProperties = {
        honey: { color: '#FFA500', density: 1.42, name: { en: "Honey", am: "ማር" } },
        syrup: { color: '#8B4513', density: 1.37, name: { en: "Maple Syrup", am: "የመፍስስ ማር" } },
        dishsoap: { color: '#FFD700', density: 1.03, name: { en: "Dish Soap", am: "የሳሙና ፈሳሽ" } },
        water: { color: '#1E90FF', density: 1.00, name: { en: "Water", am: "ውሃ" } },
        oil: { color: '#DAA520', density: 0.92, name: { en: "Vegetable Oil", am: "የአትክልት ዘይት" } },
        alcohol: { color: '#ADD8E6', density: 0.79, name: { en: "Rubbing Alcohol", am: "አልኮል" } }
    };
    
    pourBtn.addEventListener('click', function() {
        simulation.innerHTML = '';
        
        const liquid1 = liquid1Select.value;
        const liquid2 = liquid2Select.value;
        
        // Determine which liquid is denser
        let topLiquid, bottomLiquid;
        if (liquidProperties[liquid1].density > liquidProperties[liquid2].density) {
            bottomLiquid = liquid1;
            topLiquid = liquid2;
        } else {
            bottomLiquid = liquid2;
            topLiquid = liquid1;
        }
        
        // Create bottom liquid
        const bottom = document.createElement('div');
        bottom.className = 'liquid';
        bottom.style.bottom = '0';
        bottom.style.height = '50%';
        bottom.style.backgroundColor = liquidProperties[bottomLiquid].color;
        simulation.appendChild(bottom);
        
        // Create top liquid
        const top = document.createElement('div');
        top.className = 'liquid';
        top.style.bottom = '50%';
        top.style.height = '50%';
        top.style.backgroundColor = liquidProperties[topLiquid].color;
        simulation.appendChild(top);
        
        // Add labels
        const bottomLabel = document.createElement('div');
        bottomLabel.style.position = 'absolute';
        bottomLabel.style.bottom = '10px';
        bottomLabel.style.left = '10px';
        bottomLabel.style.color = '#000';
        bottomLabel.style.fontWeight = 'bold';
        bottomLabel.textContent = isAmharic ? 
            liquidProperties[bottomLiquid].name.am + " (ከባድ)" : 
            liquidProperties[bottomLiquid].name.en + " (denser)";
        simulation.appendChild(bottomLabel);
        
        const topLabel = document.createElement('div');
        topLabel.style.position = 'absolute';
        topLabel.style.bottom = '60%';
        topLabel.style.left = '10px';
        topLabel.style.color = '#000';
        topLabel.style.fontWeight = 'bold';
        topLabel.textContent = isAmharic ? 
            liquidProperties[topLiquid].name.am + " (ቀላል)" : 
            liquidProperties[topLiquid].name.en + " (less dense)";
        simulation.appendChild(topLabel);
        
        // Add explanation
        const explanation = document.createElement('div');
        explanation.style.position = 'absolute';
        explanation.style.top = '10px';
        explanation.style.left = '10px';
        explanation.style.right = '10px';
        explanation.style.textAlign = 'center';
        explanation.style.color = '#4CAF50';
        explanation.style.fontWeight = 'bold';
        explanation.textContent = isAmharic ? 
            "ከባድ ፈሳሾች ከቀላል ፈሳሾች በታች ይቀመጣሉ!" : 
            "Denser liquids sink below less dense liquids!";
        simulation.appendChild(explanation);
    });
});