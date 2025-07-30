document.addEventListener('DOMContentLoaded', function() {
    const languageBtn = document.getElementById('language-btn');
    let isAmharic = false;
    
    const englishContent = {
        title: "Awesome Tech Projects",
        introTitle: "Create Cool Things with Tech!",
        introText: "Turn your ideas into real projects with these fun tech activities.",
        ideaBtn: "Get Project Ideas",
        projectsTitle: "Project Categories",
        project1Title: "Digital Story",
        project1Desc: "Create an interactive story with pictures and sounds",
        project1Btn: "Learn How",
        project2Title: "Simple Game",
        project2Desc: "Make your own video game with characters and rules",
        project2Btn: "Learn How",
        project3Title: "Animation",
        project3Desc: "Bring drawings to life with movement",
        project3Btn: "Learn How",
        project4Title: "Website",
        project4Desc: "Build your first web page about something you love",
        project4Btn: "Learn How",
        galleryTitle: "Project Gallery",
        footer: "© 2023 Tech Projects for Kids | Create and share!",
        langBtn: "በአማርኛ / In English"
    };
    
    const amharicContent = {
        title: "አስደናቂ የቴክ ፕሮጀክቶች",
        introTitle: "በቴክ አስደናቂ ነገሮችን ይፍጠሩ!",
        introText: "እነዚህን አስደሳች የቴክ እንቅስቃሴዎች በመጠቀም ሀሳቦችዎን ወደ ትክክለኛ ፕሮጀክቶች ይቀይሩ።",
        ideaBtn: "የፕሮጀክት ሀሳቦችን ያግኙ",
        projectsTitle: "የፕሮጀክት ምድቦች",
        project1Title: "ዲጂታል ታሪክ",
        project1Desc: "በስዕሎች እና በድምፆች ግንኙነት ያለው ታሪክ ይፍጠሩ",
        project1Btn: "እንዴት እንደሚደረግ ይማሩ",
        project2Title: "ቀላል ጨዋታ",
        project2Desc: "የራስዎን ቪዲዮ ጨዋታ በተዋናዮች እና ህጎች ይፍጠሩ",
        project2Btn: "እንዴት እንደሚደረግ ይማሩ",
        project3Title: "አኒሜሽን",
        project3Desc: "ስዕሎችን በእንቅስቃሴ ወደ ህይወት ያምጡ",
        project3Btn: "እንዴት እንደሚደረግ ይማሩ",
        project4Title: "ድረ-ገጽ",
        project4Desc: "ስለሚወዱት ነገር የመጀመሪያዎን ድረ-ገጽ ይገንቡ",
        project4Btn: "እንዴት እንደሚደረግ ይማሩ",
        galleryTitle: "የፕሮጀክት ማሳያ",
        footer: "© 2023 ለልጆች የቴክ ፕሮጀክቶች | ይፍጠሩ እና ያጋሩ!",
        langBtn: "In English / በአማርኛ"
    };
    
    function toggleLanguage() {
        isAmharic = !isAmharic;
        const content = isAmharic ? amharicContent : englishContent;
        
        document.getElementById('main-title').textContent = content.title;
        document.getElementById('intro-title').textContent = content.introTitle;
        document.getElementById('intro-text').textContent = content.introText;
        document.getElementById('idea-btn').textContent = content.ideaBtn;
        document.getElementById('projects-title').textContent = content.projectsTitle;
        document.getElementById('project1-title').textContent = content.project1Title;
        document.getElementById('project1-desc').textContent = content.project1Desc;
        document.getElementById('project1-btn').textContent = content.project1Btn;
        document.getElementById('project2-title').textContent = content.project2Title;
        document.getElementById('project2-desc').textContent = content.project2Desc;
        document.getElementById('project2-btn').textContent = content.project2Btn;
        document.getElementById('project3-title').textContent = content.project3Title;
        document.getElementById('project3-desc').textContent = content.project3Desc;
        document.getElementById('project3-btn').textContent = content.project3Btn;
        document.getElementById('project4-title').textContent = content.project4Title;
        document.getElementById('project4-desc').textContent = content.project4Desc;
        document.getElementById('project4-btn').textContent = content.project4Btn;
        document.getElementById('gallery-title').textContent = content.galleryTitle;
        document.getElementById('footer-text').textContent = content.footer;
        languageBtn.textContent = content.langBtn;
    }
    
    languageBtn.addEventListener('click', toggleLanguage);
    
    document.getElementById('idea-btn').addEventListener('click', function() {
        alert(isAmharic ? "የፕሮጀክት ሀሳቦች በመላክ ላይ..." : "Sending project ideas...");
    });
    
    // Add event listeners for all project buttons
    const projectButtons = ['project1-btn', 'project2-btn', 'project3-btn', 'project4-btn'];
    projectButtons.forEach(btnId => {
        document.getElementById(btnId).addEventListener('click', function() {
            const projectName = document.getElementById(btnId.replace('-btn', '-title')).textContent;
            alert(isAmharic ? 
                `${projectName} ፕሮጀክት እንዴት እንደሚደረግ በማሳየት ላይ...` : 
                `Showing how to make a ${projectName} project...`);
        });
    });
});