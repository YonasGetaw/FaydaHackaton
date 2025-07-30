let currentLanguage = 'en';
let activeFigure = 'menelik';

const historicalFigures = [
    {
        id: 'menelik',
        image: './menilik.png',
        en: {
            name: "Menelik II",
            title: "Emperor Menelik II",
            facts: [
                "Crowned Emperor in 1889, expanded Ethiopia's territory",
                "Led victory against Italy at 1896 Battle of Adwa",
                "Modernized infrastructure and government systems",
                "Established first modern legal codes",
                "Maintained diplomatic relations while resisting colonization"
            ]
        },
        am: {
            name: "ምኒልክ አንደኛ",
            title: "ንጉሠ ነገሥት ምኒልክ አንደኛ",
            facts: [
                "1889 ዓ.ም. ንጉሠ ነገሥት ሆነው የኢትዮጵያን ወሰን አስፋተው",
                "1896 �.ም. በአድዋ ጦርነት ጣልያንን በማሸነፍ ነፃነት ጠበቁ",
                "ዘመናዊ መሠረተ ልማቶችን አስጀመሩ",
                "የመጀመሪያውን ዘመናዊ ሕገ መንግሥት አዋቅራል",
                "ቅኝ ግዛት እንዳይሆን በዲፕሎማሲ ተከላከሉ"
            ]
        }
    },
    {
        id: 'taytu',
        image: './taytu.png',
        en: {
            name: "Empress Taytu",
            title: "Empress Taytu Betul",
            facts: [
                "Key strategist during Battle of Adwa",
                "Negotiated treaties and foreign relations",
                "Founded Addis Ababa as new capital",
                "Promoted education and women's empowerment",
                "Established modern court system"
            ]
        },
        am: {
            name: "ንግስት ጣይቱ",
            title: "ንግስት ጣይቱ ብጡል",
            facts: [
                "በአድዋ ጦርነት ውስጥ ዋና የስልት አዘጋጅ",
                "የውጭ ግንኙነቶችን እና ስምምነቶችን አስተዳደሩ",
                "አዲስ አበባን አቋቁመዋል",
                "ትምህርት እና የሴቶች እድገት አበረታቱ",
                "የንግድ ፍርድ ቤት �ስርዓት ፈጠሩ"
            ]
        }
    },
    {
        id: 'selassie',
        image: './haile.png',
        en: {
            name: "Haile Selassie",
            title: "Emperor Haile Selassie I",
            facts: [
                "Founded Organization of African Unity (1963)",
                "Introduced Ethiopia's first written constitution",
                "Established Haile Selassie I University",
                "Global advocate for decolonization",
                "Revered in Rastafari movement"
            ]
        },
        am: {
            name: "ኃይለ ሥላሴ",
            title: "ንጉሠ ነገሥት ኃይለ ሥላሴ ቀዳማዊ",
            facts: [
                "1963 ዓ.ም. የአፍሪካ አንድነት ድርጅት መስራቹ",
                "1931 ዓ.ም. የመጀመሪያውን ሕገ መንግሥት አቀረቡ",
                "አዲስ አበባ ዩኒቨርሲቲን መሠረቱ",
                "የአፍሪካ ነፃነት ዳራሽ",
                "በራስታፋሪ ሃይማኖት የተከበሩ"
            ]
        }
    }
];

function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'am' : 'en';
    updateContent();
    showInfo(activeFigure);
}

function updateContent() {
    document.querySelectorAll('[data-en], [data-am]').forEach(element => {
        element.textContent = element.getAttribute(`data-${currentLanguage}`);
    });
}

function renderImages() {
    const imageRow = document.getElementById('image-row');
    imageRow.innerHTML = '';

    historicalFigures.forEach(figure => {
        const imageContainer = document.createElement('div');
        imageContainer.className = `historical-image ${figure.id === activeFigure ? 'active' : ''}`;
        imageContainer.onclick = () => showInfo(figure.id);
        
        imageContainer.innerHTML = `
            <img src="${figure.image}" alt="${figure[currentLanguage].name}">
            <div class="image-label">${figure[currentLanguage].name}</div>
        `;
        
        imageRow.appendChild(imageContainer);
    });
}

function showInfo(figureId) {
    activeFigure = figureId;
    const historyColumn = document.getElementById('history-column');
    const figure = historicalFigures.find(f => f.id === figureId);
    const langData = figure[currentLanguage];
    
    historyColumn.innerHTML = `
        <div class="history-content active">
            <h2>${langData.title}</h2>
            ${langData.facts.map(fact => `<p>${fact}</p>`).join('')}
        </div>
    `;
    
    renderImages();
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    updateContent();
    renderImages();
    showInfo(activeFigure);
});