document.addEventListener('DOMContentLoaded', function() {
    const languageToggle = document.getElementById('language-toggle');
    let isAmharic = false;

    // English content
    const englishContent = {
        title: "Teamwork",
        team1Title: "Working Together",
        team1Text: "When we work together, we can do bigger and better things than we can do alone!",
        team2Title: "Helping Each Other",
        team2Text: "In a team, we help each other. If someone is struggling, we offer to help them.",
        team3Title: "Celebrate Together",
        team3Text: "When the team succeeds, we all succeed! Celebrate your team's accomplishments together.",
        footer: "Teamwork makes the dream work! Together we can achieve amazing things."
    };

    // Amharic content
    const amharicContent = {
        title: "ቡድን ስራ",
        team1Title: "አብረን መስራት",
        team1Text: "አብረን ስንሰራ ከብቻችን ስናደርገው የበለጠ እና የተሻለ ነገሮችን ማድረግ እንችላለን!",
        team2Title: "እርስ በርስ መርዳት",
        team2Text: "በቡድን ውስጥ እርስ በርስ እንረዳለን። አንድ ሰው ከተቸገረ እርዳታ እንለመድለዋለን።",
        team3Title: "አብረን ማክበር",
        team3Text: "ቡድኑ ሲያሸንፍ ሁላችንም አሸናፊዎች ነን! የቡድንዎን ስኬቶች አብረው ያክብሩ።",
        footer: "ቡድን ስራ ህልምን ያሳካል! አብረን አስደናቂ ነገሮችን ማሳካት እንችላለን።"
    };

    languageToggle.addEventListener('click', function() {
        isAmharic = !isAmharic;
        updateContent();
        languageToggle.textContent = isAmharic ? "English" : "አማርኛ";
    });

    function updateContent() {
        const content = isAmharic ? amharicContent : englishContent;
        
        document.getElementById('main-title').textContent = content.title;
        document.getElementById('team1-title').textContent = content.team1Title;
        document.getElementById('team1-text').textContent = content.team1Text;
        document.getElementById('team2-title').textContent = content.team2Title;
        document.getElementById('team2-text').textContent = content.team2Text;
        document.getElementById('team3-title').textContent = content.team3Title;
        document.getElementById('team3-text').textContent = content.team3Text;
        document.getElementById('footer-text').textContent = content.footer;
    }
});