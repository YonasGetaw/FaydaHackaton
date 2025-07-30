document.addEventListener('DOMContentLoaded', () => {
    const animals = [
        { name: "Lion", desc: "The lion is known as the king of the jungle!", habitat: "Savanna", image: "./Lion.png" },
        { name: "Elephant", desc: "Elephants are the largest land animals on Earth!", habitat: "Savanna", image: "elephant.png" },
        { name: "Monkey", desc: "Monkeys love to climb trees and eat bananas!", habitat: "Jungle", image: "monkey.png" },
        { name: "Giraffe", desc: "Giraffes have the longest necks of any animal!", habitat: "Savanna", image: "giraffe.png" },
        { name: "Penguin", desc: "Penguins are birds that can't fly but swim very well!", habitat: "Antarctica", image: "./penguin.png" },
        { name: "Dolphin", desc: "Dolphins are very smart and playful marine animals!", habitat: "Ocean", image: "./dolphin.png" }
    ];

    // Initialize animal list
    const animalList = document.getElementById('animalList');
    animalList.innerHTML = animals.map(animal => `
        <div class="animal-item" draggable="true" data-name="${animal.name}">
            ${animal.name}
        </div>
    `).join('');

    // Add click event to show animal info
    document.querySelectorAll('.animal-item').forEach(item => {
        item.addEventListener('click', () => {
            const animalName = item.dataset.name;
            const animal = animals.find(a => a.name === animalName);
            const animalDisplay = document.getElementById('animalDisplay');
            
            animalDisplay.innerHTML = `
                <img src="images/${animal.image}" alt="${animal.name}">
                <h2>${animal.name}</h2>
                <p>${animal.desc}</p>
            `;
        });
    });

    // Drag and drop functionality
    document.querySelectorAll('.animal-item').forEach(item => {
        item.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text/plain', item.dataset.name);
        });
    });

    const habitat = document.getElementById('habitat');
    habitat.addEventListener('dragover', (e) => {
        e.preventDefault();
        habitat.style.backgroundColor = 'rgba(46, 204, 113, 0.3)';
    });
    
    habitat.addEventListener('dragleave', () => {
        habitat.style.backgroundColor = 'rgba(46, 204, 113, 0.1)';
    });
    
    habitat.addEventListener('drop', (e) => {
        e.preventDefault();
        habitat.style.backgroundColor = 'rgba(46, 204, 113, 0.1)';
        const animalName = e.dataTransfer.getData('text/plain');
        const animal = animals.find(a => a.name === animalName);
        habitat.innerHTML = `
            <h3>${animal.name}'s Habitat</h3>
            <p>${animal.name} lives in the ${animal.habitat}</p>
            <img src="images/${animal.habitat.toLowerCase()}.png" alt="${animal.habitat}" style="max-width: 100px; margin-top: 10px;">
        `;
    });
});