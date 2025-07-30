document.addEventListener('DOMContentLoaded', function() {
    const languageToggle = document.getElementById('language-toggle');
    let isAmharic = false;

    // English content
    const englishContent = {
        title: "Our Wonderful Environment",
        topic1Title: "The Water Cycle",
        topic1Text: "Water moves from clouds to rain to rivers to oceans and back to clouds again!",
        topic2Title: "Plants and Trees",
        topic2Text: "Plants clean our air and give us oxygen to breathe. One tree can provide oxygen for 4 people!",
        topic3Title: "Recycling",
        topic3Text: "Recycling helps reduce waste. Paper can be recycled up to 7 times!",
        footer: "We all share one planet - let's take care of it together!",
        activity1: "Try this: Put water in a plastic bag, tape it to a sunny window, and watch the water cycle in action!",
        activity2: "Try this: Plant seeds in a cup and watch them grow. Measure them each week!",
        activity3: "Try this: Make a recycling bin for your home and sort paper, plastic, and cans."
    };

    // Amharic content
    const amharicContent = {
        title: "የእኛ አስደናቂ አካባቢ",
        topic1Title: "የውሃ አዘገጃጀት",
        topic1Text: "ውሃ ከደመናዎች ወደ ዝናብ ወደ ወንዞች ወደ ውቅያኖሶች እና እንደገና ወደ ደመናዎች ይጓዛል!",
        topic2Title: "ተክሎች እና ዛፎች",
        topic2Text: "ተክሎች አየራችንን ያፅዳሉ እና የምንተነፍሰውን ኦክሲጅን ይሰጡናል። አንድ ዛፍ ለ4 ሰዎች ኦክሲጅን ሊሰጥ ይችላል!",
        topic3Title: "መልሶ ማዋል",
        topic3Text: "መልሶ ማዋል ቆሻሻን ለመቀነስ ይረዳል። ወረቀት እስከ 7 ጊዜ ድረስ እንደገና ሊዋል ይችላል!",
        footer: "ሁላችንም አንድ ፕላኔት እንጋራለን - አብረን እንንከባከበው!",
        activity1: "ይህን ይሞክሩት፡ ውሃን በፕላስቲክ ቦርሳ ውስጥ ያስቀምጡት፣ በፀሐይ ያብረቀረቀ መስኮት ላይ ያጣብቁት፣ እና የውሃ አዘገጃጀቱን በተግባር ይመልከቱ!",
        activity2: "ይህን ይሞክሩት፡ በአንድ ኩባያ ውስጥ ዘሮችን ይትከሉ እና እያደጉ ይመልከቷቸው። በየሳምንቱ ይለኩዋቸው!",
        activity3: "ይህን ይሞክሩት፡ ለቤትዎ የመልሶ ማዋል መጣያ ያዘጋጁ እና ወረቀቶችን፣ ፕላስቲኮችን እና ቆርቆሮዎችን ይለያዩ።"
    };

    // Function to update content based on language
    function updateContent() {
        const content = isAmharic ? amharicContent : englishContent;

        document.getElementById('main-title').textContent = content.title;
        document.getElementById('topic1-title').textContent = content.topic1Title;
        document.getElementById('topic1-text').textContent = content.topic1Text;
        document.getElementById('topic2-title').textContent = content.topic2Title;
        document.getElementById('topic2-text').textContent = content.topic2Text;
        document.getElementById('topic3-title').textContent = content.topic3Title;
        document.getElementById('topic3-text').textContent = content.topic3Text;
        document.getElementById('footer-text').textContent = content.footer;

        // Update activity buttons and texts
        document.getElementById('activity1-btn').textContent = isAmharic ? "የእንቅስቃሴ ሀሳብ" : "Activity Idea";
        document.getElementById('activity2-btn').textContent = isAmharic ? "የእንቅስቃሴ ሀሳብ" : "Activity Idea";
        document.getElementById('activity3-btn').textContent = isAmharic ? "የእንቅስቃሴ ሀሳብ" : "Activity Idea";
        document.getElementById('activity1-text').textContent = isAmharic ? amharicContent.activity1 : englishContent.activity1;
        document.getElementById('activity2-text').textContent = isAmharic ? amharicContent.activity2 : englishContent.activity2;
        document.getElementById('activity3-text').textContent = isAmharic ? amharicContent.activity3 : englishContent.activity3;
        document.querySelectorAll('.close-activity-btn').forEach(btn => {
            btn.textContent = isAmharic ? "ዝጋ" : "Close";
        });
    }

    // Function to toggle activity box display and style
    function toggleActivity(topicId) {
        const topicDiv = document.getElementById(topicId);
        const activityBox = document.getElementById(`activity${topicId.slice(-1)}-box`);
        const activityButton = document.getElementById(`activity${topicId.slice(-1)}-btn`);

        if (activityBox.style.display === 'none' || activityBox.style.display === '') {
            activityBox.style.display = 'block';
            activityButton.textContent = isAmharic ? "ዝጋ" : "Close";
            topicDiv.style.backgroundColor = '#e6ffe6'; /* Light green background */
            topicDiv.style.borderColor = '#b3ffb3';
            topicDiv.style.borderRadius = '15px';
            topicDiv.style.padding = '30px';
            activityButton.style.backgroundColor = '#c0392b'; /* Red close button */
        } else {
            activityBox.style.display = 'none';
            activityButton.textContent = isAmharic ? "የእንቅስቃሴ ሀሳብ" : "Activity Idea";
            topicDiv.style.backgroundColor = '#fff';
            topicDiv.style.borderColor = '#e0e0e0';
            topicDiv.style.borderRadius = '12px';
            topicDiv.style.padding = '25px';
            activityButton.style.backgroundColor = '#2ecc71'; /* Green activity button */
        }
    }

    // Set up button event listeners for activity ideas
    document.getElementById('activity1-btn').addEventListener('click', function() {
        toggleActivity('topic1');
    });

    document.getElementById('activity2-btn').addEventListener('click', function() {
        toggleActivity('topic2');
    });

    document.getElementById('activity3-btn').addEventListener('click', function() {
        toggleActivity('topic3');
    });

    // Event listeners for close buttons
    document.getElementById('close-activity1-btn').addEventListener('click', function() {
        toggleActivity('topic1');
    });
    document.getElementById('close-activity2-btn').addEventListener('click', function() {
        toggleActivity('topic2');
    });
    document.getElementById('close-activity3-btn').addEventListener('click', function() {
        toggleActivity('topic3');
    });

    // Language toggle functionality
    languageToggle.addEventListener('click', function() {
        isAmharic = !isAmharic;
        updateContent();
        languageToggle.textContent = isAmharic ? "English" : "አማርኛ";
        // Update button text on language switch if an activity is open
        document.querySelectorAll('.environment-card').forEach(card => {
            const activityBox = card.querySelector('.activity-box');
            const activityButton = card.querySelector('.activity-btn');
            if (activityBox.style.display === 'block') {
                activityButton.textContent = isAmharic ? "ዝጋ" : "Close";
            } else {
                activityButton.textContentactivityButton.textContent = isAmharic ? "የእንቅስቃሴ ሀሳብ" : "Activity Idea";
            }
        });
        document.querySelectorAll('.close-activity-btn').forEach(btn => {
            btn.textContent = isAmharic ? "ዝጋ" : "Close";
        });
    });

    // Initial content update
    updateContent();
});