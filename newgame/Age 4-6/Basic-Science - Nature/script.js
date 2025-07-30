document.addEventListener('DOMContentLoaded', () => {
    const weatherTypes = [
        { 
            name: "Sunny", 
            desc: "A sunny day is perfect for playing outside! The sun gives us light and warmth.", 
            icon: "☀️",
            activities: ["Wear sunscreen", "Play outside", "Have a picnic"]
        },
        { 
            name: "Rainy", 
            desc: "Rain helps plants grow and fills our rivers! It's nature's way of watering the earth.", 
            icon: "🌧️",
            activities: ["Use an umbrella", "Jump in puddles", "Watch the rain"]
        },
        { 
            name: "Windy", 
            desc: "Wind can fly kites and spin wind turbines! It's moving air that we can't see but can feel.", 
            icon: "🌪️",
            activities: ["Fly a kite", "Feel the breeze", "Watch leaves blow"]
        },
        { 
            name: "Snowy", 
            desc: "Snow is frozen water that falls from the sky when it's very cold!", 
            icon: "❄️",
            activities: ["Build a snowman", "Go sledding", "Make snow angels"]
        },
        { 
            name: "Cloudy", 
            desc: "Clouds are made of tiny water droplets floating in the sky!", 
            icon: "☁️",
            activities: ["Look for shapes in clouds", "Read a book", "Play board games"]
        }
    ];

    // Initialize weather buttons
    const weatherButtons = document.getElementById('weatherButtons');
    weatherButtons.innerHTML = weatherTypes.map(weather => `
        <button class="weather-btn" data-type="${weather.name}">
            ${weather.icon} ${weather.name}
        </button>
    `).join('');

    // Add click events
    document.querySelectorAll('.weather-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const weatherType = btn.dataset.type;
            const weather = weatherTypes.find(w => w.name === weatherType);
            const weatherDisplay = document.getElementById('weatherDisplay');
            
            weatherDisplay.innerHTML = `
                <div class="weather-icon">${weather.icon}</div>
                <h2>${weather.name} Weather</h2>
                <div class="weather-info">
                    <p>${weather.desc}</p>
                    <h3 style="margin-top: 1rem;">Fun Things to Do:</h3>
                    <ul style="text-align: left; margin-top: 0.5rem;">
                        ${weather.activities.map(activity => `<li>${activity}</li>`).join('')}
                    </ul>
                </div>
            `;
        });
    });
});