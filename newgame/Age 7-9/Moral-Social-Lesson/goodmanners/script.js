document.addEventListener('DOMContentLoaded', function() {
    const languageToggle = document.getElementById('language-toggle');
    let isAmharic = false;

    // English content
    const englishContent = {
        title: "Good Manners",
        manner1Title: "Magic Words",
        manner1Text: 'Always say "please" when asking for something and "thank you" when you receive it. These are called magic words!',
        manner2Title: "Sharing is Caring",
        manner2Text: "Share your toys and snacks with friends. It makes everyone happy and helps you make more friends.",
        manner3Title: "Good Listening",
        manner3Text: "When others are speaking, listen carefully without interrupting. Wait for your turn to talk.",
        footer: "Remember: Good manners make you a great friend and a wonderful person!"
    };

    // Amharic content
    const amharicContent = {
        title: "መልካም ሥነ ምግባር",
        manner1Title: "ስለታዊ ቃላት",
        manner1Text: 'ለማንኛውም ነገር ሲጠይቁ "እባክህ/እባክሽ" ይበሉ እና ሲያገኙ "አመሰግናለሁ" ይበሉ። እነዚህ ስለታዊ ቃላት ይባላሉ!',
        manner2Title: "ማካፈል እንክብካቤ ነው",
        manner2Text: "ከጓደኞችዎ ጋር መጫወቻዎችዎን እና ቁርስ ያጋሩ። ይህ ሁሉንም ደስ ያሰኛል እና ተጨማሪ ጓደኞች እንዲኖሩዎት ይረዳዎታል።",
        manner3Title: "መልካም መስማት",
        manner3Text: "ሌሎች ሲናገሩ ሳያቋርጡ በጥንቃቄ ይስማ። የእርስዎ ተራ እስኪደርስ ይጠብቁ።",
        footer: "አስታውሱ፡ መልካም ሥነ ምግባር ጥሩ ጓደኛ እና አስደናቂ ሰው ያደርግዎታል!"
    };

    languageToggle.addEventListener('click', function() {
        isAmharic = !isAmharic;
        updateContent();
        languageToggle.textContent = isAmharic ? "English" : "አማርኛ";
    });

    function updateContent() {
        const content = isAmharic ? amharicContent : englishContent;
        
        document.getElementById('main-title').textContent = content.title;
        document.getElementById('manner1-title').textContent = content.manner1Title;
        document.getElementById('manner1-text').textContent = content.manner1Text;
        document.getElementById('manner2-title').textContent = content.manner2Title;
        document.getElementById('manner2-text').textContent = content.manner2Text;
        document.getElementById('manner3-title').textContent = content.manner3Title;
        document.getElementById('manner3-text').textContent = content.manner3Text;
        document.getElementById('footer-text').textContent = content.footer;
    }
});