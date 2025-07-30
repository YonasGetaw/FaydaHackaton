document.addEventListener('DOMContentLoaded', function() {
    const languageToggle = document.getElementById('language-toggle');
    let isAmharic = false;

    // English content
    const englishContent = {
        title: "Ethiopian History",
        timelineTitle1: "Queen of Sheba",
        timelineText1: "The Queen of Sheba visited King Solomon in Jerusalem. Their son Menelik I started Ethiopia's Solomonic dynasty.",
        timelineTitle2: "Christianity in Ethiopia",
        timelineText2: "Ethiopia became one of the first Christian countries in the world when King Ezana converted.",
        timelineTitle3: "Lalibela Churches",
        timelineText3: "King Lalibela built 11 amazing rock-hewn churches that are still standing today!",
        timelineTitle4: "Battle of Adwa",
        timelineText4: "Ethiopia defeated Italy at Adwa, becoming the only African country to resist European colonization.",
        footer: "Ethiopia has a proud history spanning thousands of years!"
    };

    // Amharic content
    const amharicContent = {
        title: "የኢትዮጵያ ታሪክ",
        timelineTitle1: "ንግሥተ ሳባ",
        timelineText1: "ንግሥተ ሳባ ንጉሥ ሰሎሞንን በኢየሩሳሌም ተጎብኝታለች። ልጳቸው ምኒልክ የኢትዮጵያን ሰሎሞናዊ ሥርወ መንግሥት ጀመሩ።",
        timelineTitle2: "ክርስትና በኢትዮጵያ",
        timelineText2: "ንጉሥ እዛና በሃይማኖት ሲለወጡ ኢትዮጵያ በዓለም ከመጀመሪያዎቹ ክርስቲያን ሀገራት አንዷ ሆነች።",
        timelineTitle3: "የላሊበላ አብያተ ክርስቲያናት",
        timelineText3: "ንጉሥ ላሊበላ 11 አስደናቂ ከዓለት የተጠረቡ አብያተ ክርስቲያናትን ሠርተዋል እነሱም እስካሁን ቆመዋል!",
        timelineTitle4: "የዐድዋ ጦርነት",
        timelineText4: "ኢትዮጵያ ጣሊያንን በዐድዋ በማሸነፍ ብቸኛዋ አፍሪቃዊት ሀገር ሆነች እነዚህም አውሮፓውያንን ቅኝ ግዛት ያልተቀበሉ።",
        footer: "ኢትዮጵያ ለሺህ ዓመታት የምትዘረጋ ኩራት ያለው ታሪክ አላት!"
    };

    languageToggle.addEventListener('click', function() {
        isAmharic = !isAmharic;
        updateContent();
        languageToggle.textContent = isAmharic ? "English" : "አማርኛ";
    });

    function updateContent() {
        const content = isAmharic ? amharicContent : englishContent;
        
        document.getElementById('main-title').textContent = content.title;
        document.getElementById('timeline-title1').textContent = content.timelineTitle1;
        document.getElementById('timeline-text1').textContent = content.timelineText1;
        document.getElementById('timeline-title2').textContent = content.timelineTitle2;
        document.getElementById('timeline-text2').textContent = content.timelineText2;
        document.getElementById('timeline-title3').textContent = content.timelineTitle3;
        document.getElementById('timeline-text3').textContent = content.timelineText3;
        document.getElementById('timeline-title4').textContent = content.timelineTitle4;
        document.getElementById('timeline-text4').textContent = content.timelineText4;
        document.getElementById('footer-text').textContent = content.footer;
    }
});