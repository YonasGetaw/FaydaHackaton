document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".nav-button");
    const sections = document.querySelectorAll(".story-section");
    const langButtons = document.querySelectorAll(".lang-button");
    const headerTitle = document.querySelector("h1");

    const englishContent = {
        header: "📚 Fun Time Stories & Rhymes",
        story1Title: "🐻 The Three Bears",
        story1Text1: "Once upon a time, there were three bears who lived in a cozy little house in the woods. There was a great big Papa Bear, a medium-sized Mama Bear, and a tiny little Baby Bear.",
        story1Text2: "One morning, Mama Bear made some yummy porridge, but it was too hot! They went for a walk while it cooled. Meanwhile, Goldilocks entered their house...",
        story2Title: "🐇 Rabbit's Adventure",
        story2Text1: "Once, there was a little rabbit named Pip. Pip loved to explore. One sunny morning, he decided to go on an adventure.",
        story2Text2: "Pip hopped through the tall green grass, met a butterfly, saw a shiny fish in a stream, and found a big, juicy carrot. After his fun adventure, he went home, happy and tired.",
        rhyme1Title: "🌟 Twinkle Star",
        rhyme1Text1: "High up in the dark night sky, there lived a little star named Twinkle. Twinkle loved to shine brightly.",
        rhyme1Text2: "Every night, Twinkle would sparkle and bring joy. One night, she shone extra bright for a sad boy, making him smile."
    };

    const amharicContent = {
        header: "📚 አስደሳች የልጆች ታሪኮች እና ግጥሞች",
        story1Title: "🐻 ሦስቱ ድቦች",
        story1Text1: "በአንድ ወቅት በጫካ ውስጥ ምቹ በሆነ ትንሽ ቤት ውስጥ የሚኖሩ ሦስት ድቦች ነበሩ። አንድ ትልቅ አባት ድብ፣ መካከለኛ እናት ድብ እና ትንሽ ህፃን ድብ ነበሩ።",
        story1Text2: "አንድ ቀን ጠዋት እናት ድብ የሚጣፍጥ ገንፎ አዘጋጀች፣ ግን በጣም ሞቃት ነበር! ሲቀዘቅዝ ለመራመድ ሄዱ። ይህ በእንዲህ እንዳለ ጎልዲሎክስ ወደ ቤታቸው ገባች...",
        story2Title: "🐇 የጥንቸል ጀብዱ",
        story2Text1: "አንድ ጊዜ ፒፕ የሚባል ትንሽ ጥንቸል ነበር። ፒፕ መፈለግ ይወድ ነበር። አንድ ፀሐያማ ጥዋት ጀብዱ ለመጀመር ወሰነ።",
        story2Text2: "ፒፕ ረዣዥም አረንጓዴ ሳር ውስጥ ዘሎ፣ ቢራቢሮ አገኘ፣ በጅረት ውስጥ የሚያብረቀርቅ ዓሳ አየ፣ እና ትልቅ ጭማቂ ካሮት አገኘ። አዝናኝ ጀብዱውን ከጨረሰ በኋላ ደስተኛ እና ደክሞት ወደ ቤቱ ሄደ።",
        rhyme1Title: "🌟 የሚያበራው ኮከብ",
        rhyme1Text1: "በጨለማው የሌሊት ሰማይ ላይ ትዊንክል የሚባል ትንሽ ኮከብ ይኖር ነበር። ትዊንክል በደመቀ ሁኔታ ማብራት ይወድ ነበር።",
        rhyme1Text2: "በየምሽቱ ትዊንክል እያበራ ደስታን ያመጣል። አንድ ምሽት ለተከዘ ልጅ ተጨማሪ አበራች፣ ፈገግ አደረገችው።"
    };

    function changeLanguage(lang) {
        let content = lang === "am" ? amharicContent : englishContent;

        headerTitle.textContent = content.header;

        document.querySelector("#story1 .story-title").textContent = content.story1Title;
        document.querySelector("#story1 .story-text:nth-of-type(1)").textContent = content.story1Text1;
        document.querySelector("#story1 .story-text:nth-of-type(2)").textContent = content.story1Text2;

        document.querySelector("#story2 .story-title").textContent = content.story2Title;
        document.querySelector("#story2 .story-text:nth-of-type(1)").textContent = content.story2Text1;
        document.querySelector("#story2 .story-text:nth-of-type(2)").textContent = content.story2Text2;

        document.querySelector("#rhyme1 .story-title").textContent = content.rhyme1Title;
        document.querySelector("#rhyme1 .story-text:nth-of-type(1)").textContent = content.rhyme1Text1;
        document.querySelector("#rhyme1 .story-text:nth-of-type(2)").textContent = content.rhyme1Text2;

        document.body.classList.toggle("amharic-font", lang === "am");
    }

    // Language button event listeners
    langButtons.forEach(button => {
        button.addEventListener("click", function() {
            let lang = this.getAttribute("data-lang");
            changeLanguage(lang);
        });
    });

    // Story navigation button event listeners
    buttons.forEach(button => {
        button.addEventListener("click", function() {
            let sectionId = this.getAttribute("data-section");

            sections.forEach(section => {
                section.style.display = "none";
            });

            document.getElementById(sectionId).style.display = "block";
        });
    });

    // Dragging functionality for characters
    let draggableItems = document.querySelectorAll(".draggable");

    draggableItems.forEach(item => {
        item.addEventListener("mousedown", function(event) {
            item.style.position = "absolute";
            item.style.zIndex = 1000;

            let shiftX = event.clientX - item.getBoundingClientRect().left;
            let shiftY = event.clientY - item.getBoundingClientRect().top;

            function moveAt(pageX, pageY) {
                item.style.left = pageX - shiftX + "px";
                item.style.top = pageY - shiftY + "px";
            }

            function onMouseMove(event) {
                moveAt(event.pageX, event.pageY);
            }

            document.addEventListener("mousemove", onMouseMove);

            item.onmouseup = function() {
                document.removeEventListener("mousemove", onMouseMove);
                item.onmouseup = null;
            };
        });

        item.ondragstart = function() {
            return false;
        };
    });

    // Set default language and show first story
    changeLanguage("en");
    document.querySelector(".story-section").style.display = "block";
});