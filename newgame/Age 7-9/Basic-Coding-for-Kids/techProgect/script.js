document.addEventListener('DOMContentLoaded', function() {
    // Project data with translations
    const projectsData = {
        en: {
            title: "Tech Projects",
            filters: {
                all: "All",
                beginner: "Beginner",
                intermediate: "Intermediate"
            },
            projects: [
                {
                    id: 1,
                    title: "Scratch Game",
                    description: "Create your first video game using Scratch's block coding",
                    difficulty: "beginner",
                    materials: [
                        "Computer with internet",
                        "Scratch account",
                        "Creative ideas"
                    ],
                    image: "images/scratch.png"
                },
                {
                    id: 2,
                    title: "Digital Storybook",
                    description: "Make an interactive story with pictures and sounds",
                    difficulty: "beginner",
                    materials: [
                        "Tablet or computer",
                        "Drawing app or photos",
                        "Story ideas"
                    ],
                    image: "images/book.png"
                },
                {
                    id: 3,
                    title: "Robot Friend",
                    description: "Build a simple robot using everyday materials",
                    difficulty: "intermediate",
                    materials: [
                        "Cardboard boxes",
                        "Markers",
                        "Glue",
                        "Recycled materials"
                    ],
                    image: "images/robet.png"
                },
                {
                    id: 4,
                    title: "Animation Short",
                    description: "Create a 30-second animation using simple tools",
                    difficulty: "intermediate",
                    materials: [
                        "Stop-motion app",
                        "Toys or clay",
                        "Good lighting"
                    ],
                    image: "images/animation.png"
                }
            ],
            details: {
                materials: "Materials Needed:",
                close: "Close"
            },
            btnText: "በአማርኛ"
        },
        am: {
            title: "የቴክ ፕሮጀክቶች",
            filters: {
                all: "ሁሉም",
                beginner: "ጀማሪ",
                intermediate: "መካከለኛ"
            },
            projects: [
                {
                    id: 1,
                    title: "የScratch ጨዋታ",
                    description: "የScratch ብሎክ ኮዲንግ በመጠቀም የመጀመሪያዎን ቪዲዮ ጨዋታ ይፍጠሩ",
                    difficulty: "beginner",
                    materials: [
                        "ከኢንተርኔት ጋር የተያያዘ ኮምፒውተር",
                        "የScratch መለያ",
                        "ፈጣን ሀሳቦች"
                    ],
                    image: "images/scratch.png"
                },
                {
                    id: 2,
                    title: "ዲጂታል የታሪክ መጽሐፍ",
                    description: "በስዕሎች እና በድምፆች ግንኙነት ያለው ታሪክ ይፍጠሩ",
                    difficulty: "beginner",
                    materials: [
                        "ታብሌት ወይም ኮምፒውተር",
                        "የመሳል መተግበሪያ ወይም ፎቶዎች",
                        "የታሪክ ሀሳቦች"
                    ],
                    image: "images/book.png"
                },
                {
                    id: 3,
                    title: "ሮቦት ጓደኛ",
                    description: "በዕለት ተዕለት እቃዎች ቀላል ሮቦት ይገንቡ",
                    difficulty: "intermediate",
                    materials: [
                        "ካርቦርድ ሳጥኖች",
                        "ማርከሮች",
                        "ለስላሳ",
                        "የተመልሰ ቁሳቁሶች"
                    ],
                    image: "images/robot.png"
                },
                {
                    id: 4,
                    title: "አኒሜሽን አጫጭር ፊልም",
                    description: "ቀላል መሣሪያዎችን በመጠቀም 30-ሰከንድ አኒሜሽን ይፍጠሩ",
                    difficulty: "intermediate",
                    materials: [
                        "Stop-motion መተግበሪያ",
                        "መጫወቻዎች ወይም ኬላ",
                        "ጥሩ መብራት"
                    ],
                    image: "images/sort.png"
                }
            ],
            details: {
                materials: "የሚያስፈልጉ እቃዎች:",
                close: "ዝጋ"
            },
            btnText: "In English"
        }
    };

    // Current language and DOM elements
    let currentLang = 'en';
    const langBtn = document.getElementById('langBtn');
    const titleElement = document.getElementById('title');
    const projectsContainer = document.getElementById('projectsContainer');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectDetails = document.getElementById('projectDetails');
    const detailsTitle = document.getElementById('detailsTitle');
    const detailsDesc = document.getElementById('detailsDesc');
    const materialsTitle = document.getElementById('materialsTitle');
    const materialsList = document.getElementById('materialsList');
    const closeDetails = document.getElementById('closeDetails');

    // Initialize the app
    function initApp() {
        updateContent();
        renderProjects();
        setupEventListeners();
    }

    // Update language content
    function updateContent() {
        const data = projectsData[currentLang];
        titleElement.textContent = data.title;
        langBtn.textContent = data.btnText;
        
        // Update filter buttons
        filterButtons.forEach(btn => {
            const filter = btn.dataset.filter;
            btn.textContent = data.filters[filter];
        });
        
        // Update details section
        materialsTitle.textContent = data.details.materials;
        closeDetails.textContent = data.details.close;
    }

    // Render projects based on current filter
    function renderProjects(filter = 'all') {
        const data = projectsData[currentLang];
        projectsContainer.innerHTML = '';
        
        data.projects.forEach(project => {
            if (filter === 'all' || project.difficulty === filter) {
                const projectCard = document.createElement('div');
                projectCard.className = 'project-card';
                projectCard.dataset.id = project.id;
                projectCard.dataset.difficulty = project.difficulty;
                
                projectCard.innerHTML = `
                    <img src="${project.image}" alt="${project.title}" class="project-image">
                    <div class="project-info">
                        <h3>${project.title}</h3>
                        <p>${project.description}</p>
                        <span class="difficulty ${project.difficulty}">
                            ${currentLang === 'en' ? project.difficulty : projectsData[currentLang].filters[project.difficulty]}
                        </span>
                    </div>
                `;
                
                projectsContainer.appendChild(projectCard);
            }
        });
    }

    // Show project details
    function showProjectDetails(projectId) {
        const data = projectsData[currentLang];
        const project = data.projects.find(p => p.id == projectId);
        
        if (project) {
            detailsTitle.textContent = project.title;
            detailsDesc.textContent = project.description;
            
            // Clear and rebuild materials list
            materialsList.innerHTML = '';
            project.materials.forEach(material => {
                const li = document.createElement('li');
                li.textContent = material;
                materialsList.appendChild(li);
            });
            
            projectDetails.style.display = 'flex';
        }
    }

    // Setup event listeners
    function setupEventListeners() {
        // Language toggle
        langBtn.addEventListener('click', function() {
            currentLang = currentLang === 'en' ? 'am' : 'en';
            updateContent();
            renderProjects(document.querySelector('.filter-btn.active').dataset.filter);
        });
        
        // Filter buttons
        filterButtons.forEach(btn => {
            btn.addEventListener('click', function() {
                filterButtons.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                renderProjects(this.dataset.filter);
            });
        });
        
        // Project click (using event delegation)
        projectsContainer.addEventListener('click', function(e) {
            const projectCard = e.target.closest('.project-card');
            if (projectCard) {
                showProjectDetails(projectCard.dataset.id);
            }
        });
        
        // Close details
        closeDetails.addEventListener('click', function() {
            projectDetails.style.display = 'none';
        });
        
        // Close when clicking outside details
        projectDetails.addEventListener('click', function(e) {
            if (e.target === this) {
                this.style.display = 'none';
            }
        });
    }

    // Start the app
    initApp();
});