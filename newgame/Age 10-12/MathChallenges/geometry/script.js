document.addEventListener('DOMContentLoaded', function() {
    // Game state variables
    let geometryScore = 0;
    let currentQuestion = 0;
    const totalQuestions = 5;
    
    // Question bank with shape data
    const geometryQuestions = [
        { 
            type: "rectangle",
            question: "Find the area of this rectangle:",
            dimensions: { length: 5, width: 3 },
            answer: 15,
            unit: "cm²",
            explanation: "Area = length × width = 5 × 3 = 15 cm²"
        },
        { 
            type: "triangle",
            question: "Find the area of this triangle:",
            dimensions: { base: 6, height: 4 },
            answer: 12,
            unit: "cm²",
            explanation: "Area = ½ × base × height = 0.5 × 6 × 4 = 12 cm²"
        },
        { 
            type: "circle",
            question: "Find the area of this circle (use π ≈ 3.14):",
            dimensions: { radius: 5 },
            answer: 78.5,
            unit: "cm²",
            explanation: "Area = π × radius² = 3.14 × 5 × 5 = 78.5 cm²"
        },
        { 
            type: "parallelogram",
            question: "Find the area of this parallelogram:",
            dimensions: { base: 7, height: 4 },
            answer: 28,
            unit: "cm²",
            explanation: "Area = base × height = 7 × 4 = 28 cm²"
        },
        { 
            type: "composite",
            question: "Find the total area of this shape (rectangle + triangle):",
            dimensions: { 
                rectangle: { length: 8, width: 3 }, 
                triangle: { base: 8, height: 2 } 
            },
            answer: 32,
            unit: "m²",
            explanation: "Rectangle: 8 × 3 = 24 m², Triangle: 0.5 × 8 × 2 = 8 m², Total = 24 + 8 = 32 m²"
        }
    ];

    // DOM elements
    const startButton = document.getElementById('startButton');
    const submitButton = document.getElementById('submitAnswer');
    const geometryLesson = document.getElementById('geometryLesson');
    const geometryPractice = document.getElementById('geometryPractice');
    const geometryQuestion = document.getElementById('geometryQuestion');
    const geometryDiagram = document.getElementById('geometryDiagram');
    const geometryAnswer = document.getElementById('geometryAnswer');
    const geometryResult = document.getElementById('geometryResult');
    const geometryScoreDisplay = document.getElementById('geometryScore');
    const geometryCountDisplay = document.getElementById('geometryCount');

    // Initialize the game
    function initGame() {
        geometryScore = 0;
        currentQuestion = 0;
        geometryScoreDisplay.textContent = geometryScore;
        geometryCountDisplay.textContent = `1/${totalQuestions}`;
        geometryLesson.style.display = 'block';
        geometryPractice.style.display = 'none';
    }

    // Start the game
    function startGame() {
        geometryLesson.style.display = 'none';
        geometryPractice.style.display = 'block';
        showQuestion();
    }

    // Display the current question
    function showQuestion() {
        if (currentQuestion >= totalQuestions) {
            endGame();
            return;
        }

        const question = geometryQuestions[currentQuestion];
        geometryQuestion.textContent = question.question;
        geometryAnswer.value = '';
        geometryResult.textContent = '';
        geometryResult.className = '';
        geometryCountDisplay.textContent = `${currentQuestion + 1}/${totalQuestions}`;

        // Generate the diagram
        geometryDiagram.innerHTML = '';
        const diagram = createDiagram(question.type, question.dimensions);
        geometryDiagram.appendChild(diagram);

        // Focus on answer input
        geometryAnswer.focus();
    }

    // Create diagram for the shape
    function createDiagram(type, dimensions) {
        const container = document.createElement('div');
        container.className = 'shape-container';

        switch(type) {
            case 'rectangle':
                const rect = document.createElement('div');
                rect.className = 'rectangle';
                rect.style.width = `${dimensions.width * 20}px`;
                rect.style.height = `${dimensions.length * 20}px`;
                container.appendChild(rect);

                const widthLabel = document.createElement('span');
                widthLabel.className = 'dimension width';
                widthLabel.textContent = `${dimensions.width}cm`;
                container.appendChild(widthLabel);

                const lengthLabel = document.createElement('span');
                lengthLabel.className = 'dimension height';
                lengthLabel.textContent = `${dimensions.length}cm`;
                container.appendChild(lengthLabel);
                break;

            case 'triangle':
                const triangle = document.createElement('div');
                triangle.className = 'triangle';
                triangle.style.borderLeftWidth = `${dimensions.base * 10}px`;
                triangle.style.borderRightWidth = `${dimensions.base * 10}px`;
                triangle.style.borderBottomWidth = `${dimensions.height * 20}px`;
                triangle.style.borderBottomColor = '#4CAF50';
                container.appendChild(triangle);

                const baseLabel = document.createElement('span');
                baseLabel.className = 'dimension base';
                baseLabel.textContent = `${dimensions.base}cm`;
                container.appendChild(baseLabel);

                const heightLabel = document.createElement('span');
                heightLabel.className = 'dimension height';
                heightLabel.textContent = `${dimensions.height}cm`;
                container.appendChild(heightLabel);
                break;

            case 'circle':
                const circle = document.createElement('div');
                circle.className = 'circle';
                circle.style.width = `${dimensions.radius * 40}px`;
                circle.style.height = `${dimensions.radius * 40}px`;
                container.appendChild(circle);

                const radiusLabel = document.createElement('span');
                radiusLabel.className = 'dimension radius';
                radiusLabel.textContent = `Radius = ${dimensions.radius}cm`;
                container.appendChild(radiusLabel);
                break;

            case 'parallelogram':
                const parallelogram = document.createElement('div');
                parallelogram.className = 'parallelogram';
                parallelogram.style.width = `${dimensions.base * 20}px`;
                parallelogram.style.height = `${dimensions.height * 20}px`;
                container.appendChild(parallelogram);

                const pBaseLabel = document.createElement('span');
                pBaseLabel.className = 'dimension base';
                pBaseLabel.textContent = `Base = ${dimensions.base}cm`;
                container.appendChild(pBaseLabel);

                const pHeightLabel = document.createElement('span');
                pHeightLabel.className = 'dimension height';
                pHeightLabel.textContent = `Height = ${dimensions.height}cm`;
                container.appendChild(pHeightLabel);
                break;

            case 'composite':
                // Rectangle part
                const rectPart = document.createElement('div');
                rectPart.className = 'rectangle';
                rectPart.style.width = `${dimensions.rectangle.length * 20}px`;
                rectPart.style.height = `${dimensions.rectangle.width * 20}px`;
                rectPart.style.margin = '0 auto';
                container.appendChild(rectPart);

                // Triangle part
                const triPart = document.createElement('div');
                triPart.className = 'triangle';
                triPart.style.borderLeftWidth = `${dimensions.triangle.base * 10}px`;
                triPart.style.borderRightWidth = `${dimensions.triangle.base * 10}px`;
                triPart.style.borderBottomWidth = `${dimensions.triangle.height * 20}px`;
                triPart.style.borderBottomColor = '#4CAF50';
                triPart.style.margin = '0 auto';
                container.appendChild(triPart);

                // Labels
                const rectWidthLabel = document.createElement('span');
                rectWidthLabel.className = 'dimension width';
                rectWidthLabel.textContent = `${dimensions.rectangle.length}m`;
                rectWidthLabel.style.bottom = '-40px';
                container.appendChild(rectWidthLabel);

                const rectHeightLabel = document.createElement('span');
                rectHeightLabel.className = 'dimension height';
                rectHeightLabel.textContent = `${dimensions.rectangle.width}m`;
                container.appendChild(rectHeightLabel);

                const triHeightLabel = document.createElement('span');
                triHeightLabel.className = 'dimension';
                triHeightLabel.textContent = `Triangle height: ${dimensions.triangle.height}m`;
                triHeightLabel.style.bottom = '-20px';
                triHeightLabel.style.left = '0';
                triHeightLabel.style.right = '0';
                triHeightLabel.style.textAlign = 'center';
                container.appendChild(triHeightLabel);
                break;
        }

        return container;
    }

    // Check the submitted answer
    function checkAnswer() {
        const userAnswer = parseFloat(geometryAnswer.value);
        const question = geometryQuestions[currentQuestion];
        
        if (isNaN(userAnswer)) {
            geometryResult.textContent = 'Please enter a valid number!';
            geometryResult.className = 'incorrect';
            return;
        }
        
        // Allow for rounding errors (2 decimal places)
        if (Math.abs(userAnswer - question.answer) < 0.01) {
            geometryScore++;
            geometryScoreDisplay.textContent = geometryScore;
            geometryResult.textContent = 'Correct! 🎉';
            geometryResult.className = 'correct';
        } else {
            geometryResult.textContent = `Incorrect. The correct answer is ${question.answer}${question.unit}.`;
            geometryResult.className = 'incorrect';
        }
        
        // Show explanation after a delay
        setTimeout(() => {
            geometryResult.textContent = question.explanation;
            currentQuestion++;
            
            if (currentQuestion < totalQuestions) {
                setTimeout(showQuestion, 1500);
            } else {
                endGame();
            }
        }, 1500);
    }

    // End the game and show final results
    function endGame() {
        geometryQuestion.textContent = `Game Over! Your final score: ${geometryScore}/${totalQuestions}`;
        geometryDiagram.innerHTML = '';
        geometryAnswer.style.display = 'none';
        submitButton.style.display = 'none';
        
        // Add restart button
        const restartBtn = document.createElement('button');
        restartBtn.textContent = 'Play Again';
        restartBtn.className = 'start-btn';
        restartBtn.addEventListener('click', initGame);
        geometryResult.appendChild(restartBtn);
    }

    // Event listeners
    startButton.addEventListener('click', startGame);
    submitButton.addEventListener('click', checkAnswer);
    geometryAnswer.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            checkAnswer();
        }
    });

    // Initialize the game
    initGame();
});