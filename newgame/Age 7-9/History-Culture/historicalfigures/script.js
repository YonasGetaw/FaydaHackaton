document.addEventListener('DOMContentLoaded', function() {
    const languageToggle = document.getElementById('language-toggle');
    let isAmharic = false;

    // English content
    const englishContent = {
        title: "Ethiopian Historical Figures",
        figure1Name: "Emperor Menelik II",
        figure1Desc: "He led Ethiopia to victory at the Battle of Adwa in 1896 against Italy. He modernized Ethiopia and built the first hospital and school.",
        figure2Name: "Empress Taytu",
        figure2Desc: "A strong leader who helped plan the strategy at Adwa. She founded Addis Ababa and was known for her intelligence and bravery.",
        figure3Name: "Emperor Haile Selassie",
        figure3Desc: "The last emperor of Ethiopia. He helped create the Organization of African Unity and modernized Ethiopia's education system.",
        figure4Name: "Empress Zewditu",
        figure4Desc: "Ethiopia's first female head of state. She ruled during a time of change and was known for her kindness and devotion to the church.",
        footer: "These leaders helped shape Ethiopia's history!"
    };

    // Amharic content
    const amharicContent = {
        title: "የኢትዮጵያ ታሪካዊ ሰዎች",
        figure1Name: "ንጉሠ ነገሥት ምኒልክ ፪ኛ",
        figure1Desc: "ኢትዮጵያን በ1896 በዐድዋ ከጣሊያን ጋር በማሸነፍ አሸነፉ። ኢትዮጵያን �መመኑ እና የመጀመሪያውን ሆስፒታል እና ትምህርት ቤት ሠሩ።",
        figure2Name: "ንግሥት ጣይቱ",
        figure2Desc: "በዐድዋ ስልቱን በማዘጋጀት የረዳች ጠንካራ መሪ። አዲስ አበባን ፈጠረች እና በጥበብ እና በግብረገብነት ትታወቅ ነበር።",
        figure3Name: "ንጉሠ ነገሥት ኃይለ ሥላሴ",
        figure3Desc: "የኢትዮጵያ የመጨረሻ ንጉሥ። የአፍሪቃ አንድነት ድርጅት ለመፍጠር አስተዋጽኦ አድርገዋል እና የኢትዮጵያን የትምህርት ሥርዓት ዘመናዊ አድርገዋል።",
        figure4Name: "ንግሥት ዘውዲቱ",
        figure4Desc: "የኢትዮጵያ የመጀመሪያዋ ሴት መሪ። በለውጥ ዘመን ነገሠች እና በርኅራኄ እና በቤተክርስቲያን ተሰጥና ትታወቅ ነበር።",
        footer: "እነዚህ መሪዎች የኢትዮጵያን ታሪክ ቀርፀዋል!"
    };

    languageToggle.addEventListener('click', function() {
        isAmharic = !isAmharic;
        updateContent();
        languageToggle.textContent = isAmharic ? "English" : "አማርኛ";
    });

    function updateContent() {
        const content = isAmharic ? amharicContent : englishContent;
        
        document.getElementById('main-title').textContent = content.title;
        document.getElementById('figure1-name').textContent = content.figure1Name;
        document.getElementById('figure1-desc').textContent = content.figure1Desc;
        document.getElementById('figure2-name').textContent = content.figure2Name;
        document.getElementById('figure2-desc').textContent = content.figure2Desc;
        document.getElementById('figure3-name').textContent = content.figure3Name;
        document.getElementById('figure3-desc').textContent = content.figure3Desc;
        document.getElementById('figure4-name').textContent = content.figure4Name;
        document.getElementById('figure4-desc').textContent = content.figure4Desc;
        document.getElementById('footer-text').textContent = content.footer;
    }
});