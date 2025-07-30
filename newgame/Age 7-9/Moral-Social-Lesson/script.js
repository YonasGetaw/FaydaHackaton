const englishBtn = document.getElementById('english-btn');
const amharicBtn = document.getElementById('amharic-btn');
const contentDiv = document.querySelector('.content');
const storyTitle = document.getElementById('story-title');
const storyText = document.getElementById('story-text');
const choicesDiv = document.getElementById('choices');
const feedbackDiv = document.getElementById('feedback');
const gameContainer = document.querySelector('.game-container');
const gameArea = document.getElementById('game-area');
const rewardContainer = document.querySelector('.reward-container');
const rewardsDiv = document.getElementById('rewards');

let language = 'english';
let currentStory = 'manners';
let stars = 0;

const stories = {
    english: {
        manners: {
            title: "Polite Panda's Day",
            text: "Panda wants to play with his friends. He sees his friend Bear playing with a toy. What should Panda do?",
            choices: [
                { text: "Grab the toy.", outcome: "Panda's friend gets sad. It's important to ask nicely.", good: false },
                { text: "Say, 'Please, can I play too?'", outcome: "Bear shares the toy. Panda is happy!", good: true },
                { text: "Yell, 'Give me that toy!'", outcome: "Bear gets scared and doesn't want to play.", good: false },
                { text: "Ask nicely, and offer to share his own toys.", outcome: "Bear and Panda play together, and have a great time.", good: true }
            ]
        },
        honesty: {
            title: "Lost and Found",
            text: "Rabbit finds a shiny necklace. What should Rabbit do?",
            choices: [
                { text: "Keep it.", outcome: "Rabbit feels guilty. It's not his.", good: false },
                { text: "Ask around to find the owner.", outcome: "Rabbit returns the necklace and feels good.", good: true },
                { text: "Sell it for candy.", outcome: "Rabbit gets candy, but loses a friend.", good: false },
                { text: "Make a poster to find the owner.", outcome: "Rabbit finds the owner, and they become friends.", good: true }
            ]
        },
        teamwork: {
            title: "Teamwork Triumph",
            text: "The forest friends need to build a bridge to cross a river. How do they work together?",
            choices: [
                { text: "Each animal works alone", outcome: "The bridge is not completed.", good: false },
                { text: "They work together, each doing their part", outcome: "The bridge is built, they cross the river!", good: true },
                { text: "Only the strongest animals work.", outcome: "The bridge is weak and breaks.", good: false },
                { text: "Everyone helps, including the small animals.", outcome: "The bridge is strong and everyone crosses.", good: true }
            ]
        }
    },
    amharic: {
        manners: {
            title: "የፓንዳ ጨዋታ ቀን",
            text: "ፓንዳ ከጓደኞቹ ጋር መጫወት ይፈልጋል። ድብ አሻንጉሊት ሲጫወት ያያል። ፓንዳ ምን ማድረግ �ለበት?",
            choices: [
                { text: "አሻንጉሊቱን ይውሰዱ።", outcome: "ጓደኛው አዘነ። በጨዋታ መጠየቅ አስፈላጊ ነው።", good: false },
                { text: "እባክህ እኔም ልጫወት?", outcome: "ድብ አሻንጉሊቱን አካፈለው። ፓንዳ ተደሰተ!", good: true },
                { text: "ጮክ ብለህ 'ያንን አሻንጉሊት ስጠኝ!' በል።", outcome: "ድብ ፈርቶ መጫወት አይፈልግም።", good: false },
                { text: "በጨዋታ ጠይቅ፣ እና የራሱን አሻንጉሊቶች ለማካፈል አቅርብ።", outcome: "ድብ እና ፓንዳ አብረው ይጫወታሉ፣ እና ጥሩ ጊዜ ያሳልፋሉ።", good: true }
            ]
        },
        honesty: {
            title: "የጠፋው እና የተገኘው",
            text: "ጥንቸል የሚያብረቀርቅ የአንገት ሀብል አገኘ። ጥንቸል ምን ማድረግ አለበት?",
            choices: [
                { text: "ይያዘው።", outcome: "ጥንቸል የጥፋተኝነት ስሜት ተሰማው። የእሱ አይደለም።", good: false },
                { text: "ባለቤቱን ለማግኘት ይጠይቁ።", outcome: "ጥንቸል የአንገት ሀብሉን መለሰ እና ጥሩ ስሜት ተሰማው።", good: true },
                { text: "ለከረሜላ ይሽጡት።", outcome: "ጥንቸል ከረሜላ አገኘ፣ ግን ጓደኛ አጣ።", good: false },
                { text: "ባለቤቱን ለማግኘት ፖስተር ይስሩ።", outcome: "ጥንቸል ባለቤቱን አገኘ፣ እና ጓደኛሞች ሆኑ።", good: true }
            ]
        },
        teamwork: {
            title: "የቡድን ሥራ �ል",
            text: "የጫካ ጓደኞች ወንዝ ለመሻገር ድልድይ መገንባት አለባቸው። እንዴት አብረው ይሠራሉ?",
            choices: [
                { text: "እያንዳንዱ እንስሳ ብቻውን ይሠራል", outcome: "ድልድዩ አልተጠናቀቀም።", good: false },
                { text: "እያንዳንዱ የራሱን ክፍል እየሠራ አብረው ይሠራሉ", outcome: "ድልድዩ ተገንብቷል፣ ወንዙን ተሻገሩ!", good: true },
                { text: "ጠንካራዎቹ እንስሳት ብቻ ይሠራሉ።", outcome: "ድልድዩ ደካማ ነው እና ይሰበራል።", good: false },
                { text: "ትናንሽ እንስሳትን ጨምሮ ሁሉም ይረዳሉ።", outcome: "ድልድዩ ጠንካራ ነው እና ሁሉም ይሻገራሉ።", good: true }
            ]
        }
    }
};

function loadStory(storyKey) {
    const story = stories[language][storyKey];
    storyTitle.textContent = story.title;
    storyText.textContent = story.text;
    choicesDiv.innerHTML = '';
    feedbackDiv.textContent = '';
    
    story.choices.forEach((choice, index) => {
        const button = document.createElement('button');
        button.textContent = choice.text;
        button.addEventListener('click', () => handleChoice(choice));
        choicesDiv.appendChild(button);
    });
}

function handleChoice(choice) {
    feedbackDiv.textContent = choice.outcome;
    if (choice.good) {
        stars++;
        rewardsDiv.innerHTML = `<p>You earned a star! ★ Total: ${stars}</p>`;
        rewardContainer.style.display = 'block';
    } else {
        rewardsDiv.innerHTML = `<p>Try again next time!</p>`;
        rewardContainer.style.display = 'block';
    }
    choicesDiv.innerHTML = '';
    
    setTimeout(() => {
        rewardContainer.style.display = 'none';
        nextStory();
    }, 4000); // Increased from 2000ms to 4000ms (4 seconds)
}

function nextStory() {
    if (currentStory === 'manners') {
        currentStory = 'honesty';
    } else if (currentStory === 'honesty') {
        currentStory = 'teamwork';
    } else {
        currentStory = 'manners';
    }
    loadStory(currentStory);
}

englishBtn.addEventListener('click', () => {
    language = 'english';
    contentDiv.style.display = 'block';
    loadStory(currentStory);
});

amharicBtn.addEventListener('click', () => {
    language = 'amharic';
    contentDiv.style.display = 'block';
    loadStory(currentStory);
});

// Initial start
if(language === 'english'){
    contentDiv.style.display = 'block';
    loadStory(currentStory);
}