// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Navigation
    const pages = document.querySelectorAll('.page');
    const navButtons = document.querySelectorAll('.nav-btn');
    
    navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const pageId = btn.dataset.page;
            navButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            pages.forEach(page => page.classList.toggle('active', page.id === pageId));
        });
    });

    // Coloring Page
    const canvas = document.getElementById('drawing-canvas');
    const ctx = canvas.getContext('2d');
    let isDrawing = false;
    let currentColor = 'red';
    let brushSize = 5;

    // Set canvas size
    function resizeCanvas() {
        const rect = canvas.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Drawing functions
    function startDrawing(e) {
        isDrawing = true;
        ctx.beginPath();
        ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    }

    function draw(e) {
        if (!isDrawing) return;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.lineWidth = brushSize;
        ctx.strokeStyle = currentColor;
        
        ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
        ctx.stroke();
    }

    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', () => isDrawing = false);
    canvas.addEventListener('mouseout', () => isDrawing = false);

    // Color selection
    document.querySelectorAll('.color-option').forEach(color => {
        color.addEventListener('click', () => {
            document.querySelectorAll('.color-option').forEach(c => c.classList.remove('selected'));
            color.classList.add('selected');
            currentColor = color.style.backgroundColor;
        });
    });

    // Clear and Save
    document.getElementById('clear-btn').addEventListener('click', () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    });

    document.getElementById('save-btn').addEventListener('click', () => {
        const link = document.createElement('a');
        link.download = 'drawing.png';
        link.href = canvas.toDataURL();
        link.click();
    });

    // Animals Matching Game
    setupDragDrop('animal', 'name-box', (dragged, target) => {
        return dragged.dataset.animal === target.dataset.animal;
    });

    // Shapes Matching Game
    setupDragDrop('shape', 'outline', (dragged, target) => {
        const shapeType = dragged.classList.contains('circle') ? 'circle' :
                         dragged.classList.contains('square') ? 'square' : 'triangle';
        return target.classList.contains(`${shapeType}-outline`);
    });

    // Drag-Drop Helper Function
    function setupDragDrop(draggableClass, dropZoneClass, validationFn) {
        const draggables = document.querySelectorAll(`.${draggableClass}`);
        const dropZones = document.querySelectorAll(`.${dropZoneClass}`);

        draggables.forEach(item => {
            item.addEventListener('dragstart', (e) => {
                e.dataTransfer.setData('text/plain', item.id);
                item.style.opacity = '0.5';
            });

            item.addEventListener('dragend', () => {
                item.style.opacity = '1';
            });
        });

        dropZones.forEach(zone => {
            zone.addEventListener('dragover', (e) => {
                e.preventDefault();
                zone.style.backgroundColor = '#ebf8ff';
            });

            zone.addEventListener('dragleave', () => {
                zone.style.backgroundColor = '';
            });

            zone.addEventListener('drop', (e) => {
                e.preventDefault();
                const itemId = e.dataTransfer.getData('text/plain');
                const draggedItem = document.getElementById(itemId);
                
                if (validationFn(draggedItem, zone)) {
                    zone.style.backgroundColor = '#c6f6d5';
                    playSound('correct');
                    showFeedback('Correct! 🎉', zone.parentElement);
                } else {
                    zone.style.backgroundColor = '#fed7d7';
                    playSound('wrong');
                    showFeedback('Try again!', zone.parentElement);
                }
            });
        });
    }

    function playSound(type) {
        const sound = document.getElementById(`${type}-sound`);
        if (sound) {
            sound.currentTime = 0;
            sound.play();
        }
    }

    function showFeedback(message, container) {
        const feedback = container.querySelector('.feedback');
        feedback.textContent = message;
        setTimeout(() => feedback.textContent = '', 2000);
    }
});