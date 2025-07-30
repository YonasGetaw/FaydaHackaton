document.addEventListener('DOMContentLoaded', function() {
    const languageToggle = document.getElementById('language-toggle');
    let isAmharic = false;

    // English content
    const englishContent = {
        title: "Honesty",
        honesty1Title: "Tell the Truth",
        honesty1Text: "Always tell the truth, even when it's hard. People will trust you more when you're honest.",
        honesty2Title: "Admit Mistakes",
        honesty2Text: "If you make a mistake, it's okay! Admit it and learn from it. Everyone makes mistakes sometimes.",
        honesty3Title: "Build Trust",
        honesty3Text: "When you're honest, people know they can trust you. Trust is like a special gift between friends.",
        footer: "Honesty is the best policy! It makes you feel good inside and helps others trust you."
    };

    // Amharic content
    const amharicContent = {
        title: "እውነት",
        honesty1Title: "እውነት ተናገር",
        honesty1Text: "እውነት መናገር አስቸጋሪ ቢሆንም ሁልጊዜ እውነት ተናገር። ሰዎች እውነተኛ ስለሆንክ የበለጠ ይታሰብሃል።",
        honesty2Title: "ስህተቶች ይቀበሉ",
        honesty2Text: "ስህተት ሰርተህ ከሆነ ምንም አይደለም! ይቀበሉት እና ከእሱ �ስተማር። ሁሉም ሰው አንዳንድ ጊዜ ስህተቶችን ያደርጋል።",
        honesty3Title: "እምነት ይገንቡ",
        honesty3Text: "እውነተኛ ስለሆንክ ሰዎች እንደሚታሰብህ ያውቃሉ። እምነት በጓደኞች መካከል እንደ ልዩ ስጦታ ነው።",
        footer: "እውነት ልክ ነው! በውስጥህ ጥሩ ስሜት ይሰጥሃል እና ሌሎች እንዲታሰብህ ይረዳል።"
    };

    languageToggle.addEventListener('click', function() {
        isAmharic = !isAmharic;
        updateContent();
        languageToggle.textContent = isAmharic ? "English" : "አማርኛ";
    });

    function updateContent() {
        const content = isAmharic ? amharicContent : englishContent;
        
        document.getElementById('main-title').textContent = content.title;
        document.getElementById('honesty1-title').textContent = content.honesty1Title;
        document.getElementById('honesty1-text').textContent = content.honesty1Text;
        document.getElementById('honesty2-title').textContent = content.honesty2Title;
        document.getElementById('honesty2-text').textContent = content.honesty2Text;
        document.getElementById('honesty3-title').textContent = content.honesty3Title;
        document.getElementById('honesty3-text').textContent = content.honesty3Text;
        document.getElementById('footer-text').textContent = content.footer;
    }
});