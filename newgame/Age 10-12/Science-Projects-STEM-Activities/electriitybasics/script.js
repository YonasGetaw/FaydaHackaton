document.addEventListener('DOMContentLoaded', function() {
    const langToggle = document.getElementById('langToggle');
    let isAmharic = false;
    
    const translations = {
        title: ["Electricity Basics", "የኤሌክትሪክ መሰረታዊ ነገሮች"],
        section1: ["What is Electricity?", "ኤሌክትሪክ ምንድን ነው?"],
        content1: [
            "Electricity is the flow of electrical power or charge. It is a secondary energy source which means that we get it from the conversion of other sources of energy, like coal, natural gas, oil, nuclear power and other natural sources.",
            "ኤሌክትሪክ የኤሌክትሪክ ኃይል ወይም ክፍያ ፍሰት ነው። ከሌሎች የኃይል ምንጮች እንደ ከሰል, ተፈጥሯዊ ጋዝ, ነዳጅ, ኑክሌር ኃይል እና ሌሎች ተፈጥሯዊ ምንጮች የምናገኘው ሁለተኛ ደረጃ የኃይል �ምንጭ ነው።"
        ],
        section2: ["Basic Components", "መሰረታዊ አካላት"],
        component1: ["Battery", "ባትሪ"],
        content2: ["Provides the voltage that pushes electrons through a circuit.", "ኤሌክትሮኖችን በሰንሰለት ውስጥ የሚገፋ ቮልቴጅ ይሰጣል።"],
        component2: ["Wire", "ሽቦ"],
        content3: ["Conducts electricity from one point to another.", "ኤሌክትሪክን ከአንድ ቦታ ወደ ሌላ ቦታ ያስተላልፋል።"],
        component3: ["Resistor", "ተቃዋሚ"],
        content4: ["Limits the flow of electric current.", "የኤሌክትሪክ ፍሰትን ይገድባል።"],
        component4: ["Switch", "ስዊች"],
        content5: ["Controls the flow of electricity by opening or closing the circuit.", "የኤሌክትሪክ ፍሰትን በሰንሰለቱን በመክፈት ወይም በመዝጋት ይቆጣጠራል።"],
        section3: ["Simple Circuit", "ቀላል ወረዳ"],
        content6: [
            "A basic electric circuit consists of a power source (like a battery), wires to carry the current, and a load (like a light bulb) that uses the energy. When all components are connected properly, the circuit is 'closed' and electricity flows.",
            "መሰረታዊ የኤሌክትሪክ ወረዳ ኃይል ምንጭ (እንደ ባትሪ)፣ የአሁኑን የሚያጓጉዙ �ሽቦዎች እና ኃይልን የሚጠቀም ጭነት (እንደ የመብራት ቢልባ) ያቀፈ ነው። ሁሉም አካላት በትክክል �ባረሩ ከሆነ፣ ወረዳው 'ዘግቷል' እና ኤሌክትሪክ ይፈስበታል።"
        ],
        footerText: ["Learn more about electricity and its applications in our daily lives.", "በዕለት ተዕለት �የሕይወታችን ውስጥ �ስለ ኤሌክትሪክ እና አፈፃፀሞቹ ተጨማሪ ይማሩ።"],
        moreLink: ["More Resources", "ተጨማሪ ምንጮች"]
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
    });
    
    // Circuit demo functionality
    const circuitDemo = document.getElementById('circuitDemo');
    const demoArea = document.getElementById('demoArea');
    
    circuitDemo.addEventListener('click', function() {
        demoArea.innerHTML = `
            <svg width="300" height="150" viewBox="0 0 300 150">
                <rect x="20" y="50" width="40" height="50" fill="#ccc" stroke="#000"/>
                <text x="40" y="80" fill="#000" text-anchor="middle">${isAmharic ? "ባትሪ" : "Battery"}</text>
                
                <line x1="60" y1="75" x2="100" y2="75" stroke="#000" stroke-width="2"/>
                
                <circle cx="120" cy="75" r="15" fill="yellow" stroke="#000"/>
                <text x="120" y="80" fill="#000" text-anchor="middle">${isAmharic ? "ቢልባ" : "Bulb"}</text>
                
                <line x1="135" y1="75" x2="175" y2="75" stroke="#000" stroke-width="2"/>
                
                <rect x="180" y="60" width="30" height="30" fill="#fff" stroke="#000"/>
                <text x="195" y="80" fill="#000" text-anchor="middle">${isAmharic ? "ስዊች" : "Switch"}</text>
                
                <line x1="210" y1="75" x2="250" y2="75" stroke="#000" stroke-width="2"/>
                <line x1="250" y1="75" x2="250" y2="50" stroke="#000" stroke-width="2"/>
                <line x1="250" y1="50" x2="20" y2="50" stroke="#000" stroke-width="2"/>
                
                <text x="150" y="120" fill="#4CAF50" text-anchor="middle">${isAmharic ? "ቀላል የኤሌክትሪክ ወረዳ" : "Simple Electric Circuit"}</text>
            </svg>
        `;
    });
});