document.addEventListener('DOMContentLoaded', function() {
    const typeButtons = document.querySelectorAll('.type-btn');
    const guideTitle = document.getElementById('guide-title');
    const guideContent = document.getElementById('guide-content');
    const exportBtn = document.getElementById('export-essay');
    const checkStructureBtn = document.getElementById('check-structure');
    const progressFill = document.querySelector('.progress-fill');
    const progressText = document.querySelector('.progress-text');
    const textareas = document.querySelectorAll('textarea');
    
    // Essay type guides
    const essayGuides = {
        persuasive: {
            title: "Persuasive Essay Guide",
            introduction: "Start with a hook to grab attention. State your thesis clearly - this is your main argument.",
            body: "Each paragraph should present one main idea with supporting evidence. Use facts, examples, and reasoning.",
            conclusion: "Restate your thesis in new words. Summarize main points. End with a strong final thought."
        },
        narrative: {
            title: "Narrative Essay Guide",
            introduction: "Set the scene and introduce your characters. Engage the reader with an interesting opening.",
            body: "Tell your story in chronological order. Use descriptive language and dialogue to bring the story to life.",
            conclusion: "Reflect on the significance of the experience. What did you learn? How did it change you?"
        },
        expository: {
            title: "Expository Essay Guide",
            introduction: "Introduce the topic and provide background information. State your main idea clearly.",
            body: "Present facts, examples, and explanations. Organize information logically (compare/contrast, cause/effect, etc.).",
            conclusion: "Summarize the information presented. Restate the main idea in a new way."
        },
        descriptive: {
            title: "Descriptive Essay Guide",
            introduction: "Introduce what you're describing. Create interest with an engaging opening sentence.",
            body: "Use vivid details and sensory language (sight, sound, smell, touch, taste). Organize details logically (spatial order works well).",
            conclusion: "Leave the reader with a strong final impression. Summarize the significance of what you described."
        }
    };
    
    // Change essay type
    typeButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active button
            typeButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Update guide content
            const type = this.dataset.type;
            const guide = essayGuides[type];
            
            guideTitle.textContent = guide.title;
            
            const sections = guideContent.querySelectorAll('.guide-section');
            sections[0].querySelector('p').textContent = guide.introduction;
            sections[1].querySelector('p').textContent = guide.body;
            sections[2].querySelector('p').textContent = guide.conclusion;
            
            // Clear textareas
            textareas.forEach(textarea => {
                textarea.value = '';
            });
            
            // Reset progress
            updateProgress();
        });
    });
    
    // Export essay
    exportBtn.addEventListener('click', function() {
        let essayText = `# ${guideTitle.textContent}\n\n`;
        
        const sections = guideContent.querySelectorAll('.guide-section');
        sections.forEach(section => {
            const heading = section.querySelector('h4').textContent;
            const content = section.querySelector('textarea').value;
            
            essayText += `## ${heading}\n${content}\n\n`;
        });
        
        // Create download link
        const blob = new Blob([essayText], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'my-essay.txt';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    });
    
    // Check structure
    checkStructureBtn.addEventListener('click', function() {
        let feedback = [];
        let wordCount = 0;
        
        textareas.forEach(textarea => {
            const words = textarea.value.trim() ? textarea.value.trim().split(/\s+/).length : 0;
            wordCount += words;
            
            if (words < 30 && textarea.parentElement.querySelector('h4').textContent === 'Body Paragraphs') {
                feedback.push("Your body paragraphs could use more detail and examples.");
            } else if (words < 15 && textarea.parentElement.querySelector('h4').textContent === 'Introduction') {
                feedback.push("Your introduction should be more engaging and clearly state your main idea.");
            } else if (words < 10 && textarea.parentElement.querySelector('h4').textContent === 'Conclusion') {
                feedback.push("Your conclusion should summarize your main points more thoroughly.");
            }
        });
        
        if (wordCount < 100) {
            feedback.push("Your essay is quite short. Try to expand on your ideas with more details and examples.");
        }
        
        if (feedback.length === 0) {
            alert("Great job! Your essay has good structure and length.");
        } else {
            alert("Feedback:\n\n" + feedback.join("\n\n"));
        }
    });
    
    // Update progress
    function updateProgress() {
        let filledCount = 0;
        
        textareas.forEach(textarea => {
            if (textarea.value.trim()) {
                filledCount++;
            }
        });
        
        const progress = Math.round((filledCount / textareas.length) * 100);
        progressFill.style.width = `${progress}%`;
        progressText.textContent = `${progress}% complete`;
    }
    
    // Track progress
    textareas.forEach(textarea => {
        textarea.addEventListener('input', updateProgress);
    });
    
    // Initialize
    updateProgress();
});