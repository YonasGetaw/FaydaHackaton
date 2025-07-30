document.addEventListener('DOMContentLoaded', () => {
    const plants = [
        { 
            name: "Rose", 
            desc: "Roses are beautiful flowers with lovely scent! They come in many colors like red, pink, yellow and white.", 
            image: "rose.png",
            growth: "Roses grow from seeds or cuttings and need plenty of sunlight and water."
        },
        { 
            name: "Sunflower", 
            desc: "Sunflowers turn to face the sun! They can grow very tall and their seeds are tasty and nutritious.", 
            image: "sunflower.png",
            growth: "Sunflowers grow quickly from seeds and always face the sunlight."
        },
        { 
            name: "Tree", 
            desc: "Trees give us oxygen and clean the air! They provide shade, homes for animals, and wood for many uses.", 
            image: "tree.png",
            growth: "Trees grow from seeds over many years, developing strong trunks and branches."
        },
        { 
            name: "Cactus", 
            desc: "Cacti store water in their stems to survive in dry deserts! They have spines instead of leaves.", 
            image: "cactus.png",
            growth: "Cacti grow slowly and can survive with very little water."
        },
        { 
            name: "Tulip", 
            desc: "Tulips are colorful flowers that bloom in spring! They grow from bulbs underground.", 
            image: "tulip.png",
            growth: "Tulip bulbs are planted in fall and bloom beautifully in spring."
        }
    ];

    // Initialize plant list
    const plantList = document.getElementById('plantList');
    plantList.innerHTML = plants.map(plant => `
        <div class="plant-item" data-name="${plant.name}">
            ${plant.name}
        </div>
    `).join('');

    // Add click event to show plant info
    document.querySelectorAll('.plant-item').forEach(item => {
        item.addEventListener('click', () => {
            const plantName = item.dataset.name;
            const plant = plants.find(p => p.name === plantName);
            const plantDisplay = document.getElementById('plantDisplay');
            
            plantDisplay.innerHTML = `
                <img src="images/${plant.image}" alt="${plant.name}">
                <h2>${plant.name}</h2>
                <p>${plant.desc}</p>
                <p style="margin-top: 1rem;"><strong>How it grows:</strong> ${plant.growth}</p>
            `;
        });
    });

    // Growth animation
    const growBtn = document.getElementById('growBtn');
    const growthAnimation = document.getElementById('growthAnimation');
    
    growBtn.addEventListener('click', () => {
        // Reset animation
        growthAnimation.style.height = '0';
        void growthAnimation.offsetWidth; // Trigger reflow
        
        // Grow animation
        growthAnimation.style.height = '200px';
        
        // Reset after animation completes
        setTimeout(() => {
            growthAnimation.style.height = '0';
        }, 3000);
    });
});