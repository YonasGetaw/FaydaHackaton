document.addEventListener('DOMContentLoaded', function() {
    const langToggle = document.getElementById('langToggle');
    let isAmharic = false;
    
    const translations = {
        title: ["The Water Cycle", "የውሃ ዑደት"],
        section1: ["What is the Water Cycle?", "የውሃ ዑደት ምንድን ነው?"],
        content1: [
            "The water cycle describes how water evaporates from the surface of the earth, rises into the atmosphere, cools and condenses into rain or snow in clouds, and falls again to the surface as precipitation.",
            "የውሃ ዑደት ውሃ ከምድር ላይ እንዴት እንደሚተነፍስ፣ ወደ ከባቢ አየር እንደሚወጣ፣ በደመናዎች ውስጥ በማቅለጥ ዝናብ ወይም በረዶ እንደሚሆን እና እንደ ዝናብ ወደ ምድር እንደሚመለስ ይገልጻል።"
        ],
        section2: ["Stages of the Water Cycle", "የውሃ ዑደት ደረጃዎች"],
        stage1: ["Evaporation", "መተንፈሻ"],
        content2: [
            "The sun heats up water in rivers, lakes or oceans and turns it into vapor which rises into the air.",
            "ፀሐይ በወንዞች፣ በሐይቆች ወይም በውቅያኖሶች ውስጥ ያለውን ውሃ በማሞቅ ወደ አየር የሚወጣ ትኩሳት ያደርገዋል።"
        ],
        stage2: ["Condensation", "መቅለጫ"],
        content3: [
            "Water vapor in the air cools and changes back into liquid, forming clouds.",
            "በአየር ውስጥ ያለው የውሃ ትኩሳት በሚቀዘቅዝ ጊዜ ወደ ፈሳሽ በመለወጥ ደመናዎችን ይፈጥራል።"
        ],
        stage3: ["Precipitation", "ዝናብ"],
        content4: [
            "When so much water has condensed that the air cannot hold it anymore, it falls back to earth as rain, snow, sleet or hail.",
            "በአየር ውስጥ በጣም ብዙ ውሃ ሲቀላቀል አየሩ ሊይዘው ስለማይችሉ ወደ ምድር እንደ ዝናብ፣ በረዶ፣ ዝናብ በረዶ ወይም ዝናብ በረዶ ይወድቃል።"
        ],
        stage4: ["Collection", "መሰብሰቢያ"],
        content5: [
            "Water falls back to earth as precipitation and collects in rivers, lakes and oceans, ready to evaporate again.",
            "ውሃ እንደ ዝናብ ወደ ምድር ወድቆ በወንዞች፣ በሐይቆች �ና በውቅያኖሶች ውስጥ ይሰበሰባል፣ እና እንደገና ለመተንፈስ ዝግጁ ይሆናል።"
        ],
        section3: ["Interactive Water Cycle", "በውሃ ዑደት ውስጥ መስተጋብር"],
        content6: [
            "Click the buttons below to see each stage of the water cycle in action.",
            "የውሃ ዑደትን እያንዳንዱን ደረጃ በተግባር ለማየት ከታች ያሉትን ቁልፎች ጠቅ ያድርጉ።"
        ],
        footerText: [
            "Water is essential to life on Earth. The water cycle ensures water is continuously recycled.",
            "ውሃ በምድር ላይ ለሕይወት አስፈላጊ ነው። �ውሃ ዑደት ውሃ በተከታታይ እንደገና እንደሚጠቀም ያረጋግጣል።"
        ],
        moreLink: ["More About Water Conservation", "ስለ ውሃ ጥበቃ ተጨማሪ"]
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
        document.getElementById('evapBtn').textContent = isAmharic ? "መተንፈሻ" : "Evaporation";
        document.getElementById('condBtn').textContent = isAmharic ? "መቅለጫ" : "Condensation";
        document.getElementById('precipBtn').textContent = isAmharic ? "ዝናብ" : "Precipitation";
        document.getElementById('collectBtn').textContent = isAmharic ? "መሰብሰቢያ" : "Collection";
    });
    
    // Water cycle demo functionality
    const cycleDemo = document.getElementById('cycleDemo');
    const evapBtn = document.getElementById('evapBtn');
    const condBtn = document.getElementById('condBtn');
    const precipBtn = document.getElementById('precipBtn');
    const collectBtn = document.getElementById('collectBtn');
    
    function resetDemo() {
        cycleDemo.innerHTML = `
            <svg width="400" height="300" viewBox="0 0 400 300">
                <rect x="50" y="200" width="300" height="50" fill="#1E90FF" opacity="0.3"/>
                <text x="200" y="230" fill="#000" text-anchor="middle" font-size="14">${isAmharic ? "ውቅያኖስ/ሐይቅ" : "Ocean/Lake"}</text>
            </svg>
        `;
    }
    
    function showEvaporation() {
        resetDemo();
        const svg = cycleDemo.querySelector('svg');
        
        // Sun
        const sun = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        sun.setAttribute("cx", "350");
        sun.setAttribute("cy", "50");
        sun.setAttribute("r", "30");
        sun.setAttribute("fill", "yellow");
        svg.appendChild(sun);
        
        // Heat waves
        for (let i = 0; i < 5; i++) {
            const wave = document.createElementNS("http://www.w3.org/2000/svg", "path");
            wave.setAttribute("d", `M ${320 + i*10} 80 Q ${330 + i*10} 70, ${340 + i*10} 80`);
            wave.setAttribute("stroke", "orange");
            wave.setAttribute("fill", "none");
            svg.appendChild(wave);
        }
        
        // Water vapor
        for (let i = 0; i < 10; i++) {
            const drop = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            drop.setAttribute("cx", 100 + i*20);
            drop.setAttribute("cy", 180 - i*10);
            drop.setAttribute("r", "2");
            drop.setAttribute("fill", "#1E90FF");
            svg.appendChild(drop);
        }
        
        // Label
        const label = document.createElementNS("http://www.w3.org/2000/svg", "text");
        label.setAttribute("x", "200");
        label.setAttribute("y", "150");
        label.setAttribute("fill", "#4CAF50");
        label.setAttribute("text-anchor", "middle");
        label.textContent = isAmharic ? "መተንፈሻ: ውሃ ወደ ትኩሳት ይቀየራል" : "Evaporation: Water turns to vapor";
        svg.appendChild(label);
    }
    
    function showCondensation() {
        resetDemo();
        const svg = cycleDemo.querySelector('svg');
        
        // Clouds
        const cloud1 = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
        cloud1.setAttribute("cx", "100");
        cloud1.setAttribute("cy", "80");
        cloud1.setAttribute("rx", "40");
        cloud1.setAttribute("ry", "25");
        cloud1.setAttribute("fill", "#EEE");
        svg.appendChild(cloud1);
        
        const cloud2 = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
        cloud2.setAttribute("cx", "150");
        cloud2.setAttribute("cy", "70");
        cloud2.setAttribute("rx", "50");
        cloud2.setAttribute("ry", "30");
        cloud2.setAttribute("fill", "#EEE");
        svg.appendChild(cloud2);
        
        const cloud3 = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
        cloud3.setAttribute("cx", "200");
        cloud3.setAttribute("cy", "80");
        cloud3.setAttribute("rx", "40");
        cloud3.setAttribute("ry", "25");
        cloud3.setAttribute("fill", "#EEE");
        svg.appendChild(cloud3);
        
        // Label
        const label = document.createElementNS("http://www.w3.org/2000/svg", "text");
        label.setAttribute("x", "200");
        label.setAttribute("y", "150");
        label.setAttribute("fill", "#4CAF50");
        label.setAttribute("text-anchor", "middle");
        label.textContent = isAmharic ? "መቅለጫ: ትኩሳት ደመና ይሆናል" : "Condensation: Vapor forms clouds";
        svg.appendChild(label);
    }
    
    function showPrecipitation() {
        resetDemo();
        const svg = cycleDemo.querySelector('svg');
        
        // Cloud
        const cloud = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
        cloud.setAttribute("cx", "200");
        cloud.setAttribute("cy", "80");
        cloud.setAttribute("rx", "60");
        cloud.setAttribute("ry", "35");
        cloud.setAttribute("fill", "#CCC");
        svg.appendChild(cloud);
        
        // Rain
        for (let i = 0; i < 20; i++) {
            const drop = document.createElementNS("http://www.w3.org/2000/svg", "line");
            drop.setAttribute("x1", 170 + i*10);
            drop.setAttribute("y1", "115");
            drop.setAttribute("x2", 165 + i*10);
            drop.setAttribute("y2", "130");
            drop.setAttribute("stroke", "#1E90FF");
            drop.setAttribute("stroke-width", "2");
            svg.appendChild(drop);
        }
        
        // Label
        const label = document.createElementNS("http://www.w3.org/2000/svg", "text");
        label.setAttribute("x", "200");
        label.setAttribute("y", "150");
        label.setAttribute("fill", "#4CAF50");
        label.setAttribute("text-anchor", "middle");
        label.textContent = isAmharic ? "ዝናብ: ውሃ ወደ ምድር ይወርዳል" : "Precipitation: Water falls to earth";
        svg.appendChild(label);
    }
    
    function showCollection() {
        resetDemo();
        const svg = cycleDemo.querySelector('svg');
        
        // Rivers flowing to ocean
        const river1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
        river1.setAttribute("d", "M 50 150 Q 100 130, 150 150 Q 200 170, 250 150 L 350 200");
        river1.setAttribute("stroke", "#1E90FF");
        river1.setAttribute("stroke-width", "10");
        river1.setAttribute("fill", "none");
        svg.appendChild(river1);
        
        const river2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
        river2.setAttribute("d", "M 100 100 Q 150 120, 200 100 Q 250 80, 300 100 L 350 200");
        river2.setAttribute("stroke", "#1E90FF");
        river2.setAttribute("stroke-width", "8");
        river2.setAttribute("fill", "none");
        svg.appendChild(river2);
        
        // Label
        const label = document.createElementNS("http://www.w3.org/2000/svg", "text");
        label.setAttribute("x", "200");
        label.setAttribute("y", "150");
        label.setAttribute("fill", "#4CAF50");
        label.setAttribute("text-anchor", "middle");
        label.textContent = isAmharic ? "መሰብሰቢያ: ውሃ ወደ ውቅያኖሶች ይመለሳል" : "Collection: Water returns to oceans";
        svg.appendChild(label);
    }
    
    // Initialize
    resetDemo();
    
    // Add event listeners
    evapBtn.addEventListener('click', showEvaporation);
    condBtn.addEventListener('click', showCondensation);
    precipBtn.addEventListener('click', showPrecipitation);
    collectBtn.addEventListener('click', showCollection);
});