document.addEventListener('DOMContentLoaded', function() {
    // Language state
    let isAmharic = false;
    
    // Translations
    const translations = {
        en: {
            title: "Ethiopian Regions",
            subtitle: "Diversity in Unity",
            region1Title: "Amhara Region",
            region1Desc: "Home to Lake Tana (source of Blue Nile) and Simien Mountains National Park.",
            region1Capital: "Capital: Bahir Dar",
            region2Title: "Oromia Region",
            region2Desc: "Largest region by area, known for coffee production and Bale Mountains.",
            region2Capital: "Capital: Adama",
            region3Title: "Tigray Region",
            region3Desc: "Historic region with ancient Axumite civilization and rock-hewn churches.",
            region3Capital: "Capital: Mekelle",
            showCapital: "Show Capital",
            hideCapital: "Hide Capital",
            mapTitle: "Ethiopia's Regional Map",
            mapText: "[Interactive map showing Ethiopia's regions would appear here]",
            exploreBtn: "Explore Regions",
            moreTopics: "More topics: ",
            heritageLink: "Cultural Heritage",
            historyLink: "Historical Events",
            footerText: "Celebrating Ethiopia's regional diversity",
            languageToggle: "አማርኛ / Amharic"
        },
        am: {
            title: "የኢትዮጵያ ክልሎች",
            subtitle: "በአንድነት ውስጥ የተለያዩ",
            region1Title: "አማራ ክልል",
            region1Desc: "የታና ሐይቅ (የአባይ ምንጭ) እና የስሜን ተራሮች ብሔራዊ ፓርክ በመሆን ይታወቃል።",
            region1Capital: "ዋና ከተማ: ባሕር ዳር",
            region2Title: "ኦሮሚያ ክልል",
            region2Desc: "በመሬት ስፋት ትልቁ ክልል፣ በቡና ምርት እና በባሌ ተራሮች ይታወቃል።",
            region2Capital: "ዋና ከተማ: አዳማ",
            region3Title: "ትግራይ ክልል",
            region3Desc: "በጥንታዊው የአክሱም ሥልጣኔ እና በድንጋይ የተጎራበቱ ቤተክርስቲያናት የሚታወቅ ታሪካዊ ክልል።",
            region3Capital: "ዋና ከተማ: መቀሌ",
            showCapital: "ዋና ከተማ አሳይ",
            hideCapital: "ዋና ከተማ ደብቅ",
            mapTitle: "የኢትዮጵያ ክልላዊ ካርታ",
            mapText: "[የኢትዮጵያን ክልሎች የሚያሳይ በይነተገናኝ ካርታ እዚህ ይታያል]",
            exploreBtn: "ክልሎችን ያስሱ",
            moreTopics: "ተጨማሪ ርዕሶች: ",
            heritageLink: "ባህላዊ ቅርስ",
            historyLink: "ታሪካዊ ክስተቶች",
            footerText: "የኢትዮጵያን ክልላዊ ልዩነት በማክበር",
            languageToggle: "English / እንግሊዝኛ"
        }
    };

    // DOM elements
    const languageToggle = document.getElementById('language-toggle');
    const showCapitalBtns = document.querySelectorAll('.show-capital');

    // Update language
    function updateLanguage() {
        const lang = isAmharic ? 'am' : 'en';
        const t = translations[lang];
        
        // Update all text elements
        document.getElementById('title').textContent = t.title;
        document.getElementById('subtitle').textContent = t.subtitle;
        document.getElementById('region1-title').textContent = t.region1Title;
        document.getElementById('region1-desc').textContent = t.region1Desc;
        document.getElementById('region1-capital').textContent = t.region1Capital;
        document.getElementById('region2-title').textContent = t.region2Title;
        document.getElementById('region2-desc').textContent = t.region2Desc;
        document.getElementById('region2-capital').textContent = t.region2Capital;
        document.getElementById('region3-title').textContent = t.region3Title;
        document.getElementById('region3-desc').textContent = t.region3Desc;
        document.getElementById('region3-capital').textContent = t.region3Capital;
        document.querySelectorAll('.show-capital').forEach(btn => {
            const capital = btn.nextElementSibling;
            btn.textContent = capital.classList.contains('hidden') ? t.showCapital : t.hideCapital;
        });
        document.getElementById('map-title').textContent = t.mapTitle;
        document.getElementById('map-text').textContent = t.mapText;
        document.getElementById('explore-btn').textContent = t.exploreBtn;
        document.getElementById('more-topics').innerHTML = t.moreTopics + 
            `<a href="#" class="footer-link">${t.heritageLink}</a> | 
            <a href="#" class="footer-link">${t.historyLink}</a>`;
        document.getElementById('footer-text').textContent = t.footerText;
        languageToggle.textContent = t.languageToggle;
    }

    // Language toggle
    languageToggle.addEventListener('click', function() {
        isAmharic = !isAmharic;
        updateLanguage();
    });

    // Show capital when button clicked
    showCapitalBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const capital = this.nextElementSibling;
            capital.classList.toggle('hidden');
            const t = isAmharic ? translations.am : translations.en;
            this.textContent = capital.classList.contains('hidden') ? t.showCapital : t.hideCapital;
        });
    });

    // Explore regions button
    document.getElementById('explore-btn').addEventListener('click', function() {
        alert(isAmharic ? 
            "ሁሉንም ክልሎች ለማስረዳት እዚህ የበለጠ መረጃ ይታያል!" : 
            "More information about all regions would be displayed here!");
    });

    // Initialize
    updateLanguage();
});