document.addEventListener('DOMContentLoaded', function() {
    // Language support
    const translations = {
        en: {
            title: "Block Coding Game",
            blocks: {
                move: "Move",
                turn: "Turn",
                jump: "Jump"
            },
            dropHint: "Drag blocks here to build your code!",
            runBtn: "Run Code",
            resetBtn: "Reset",
            langBtn: "በአማርኛ"
        },
        am: {
            title: "ብሎክ ኮዲንግ ጨዋታ",
            blocks: {
                move: "እንቅስቃሴ",
                turn: "ሽክርክሪት",
                jump: "ዝለል"
            },
            dropHint: "ኮድዎን ለመገንባት ብሎኮችን ይጎትቱ!",
            runBtn: "ኮድ አስኬድ",
            resetBtn: "እንደገና ጀምር",
            langBtn: "In English"
        }
    };

    let currentLang = 'en';
    const langBtn = document.getElementById('langBtn');

    function updateContent() {
        document.getElementById('title').textContent = translations[currentLang].title;
        document.getElementById('moveBlock').textContent = translations[currentLang].blocks.move;
        document.getElementById('turnBlock').textContent = translations[currentLang].blocks.turn;
        document.getElementById('jumpBlock').textContent = translations[currentLang].blocks.jump;
        document.getElementById('dropHint').textContent = translations[currentLang].dropHint;
        document.getElementById('runBtn').textContent = translations[currentLang].runBtn;
        document.getElementById('resetBtn').textContent = translations[currentLang].resetBtn;
        langBtn.textContent = translations[currentLang].langBtn;
    }

    langBtn.addEventListener('click', function() {
        currentLang = currentLang === 'en' ? 'am' : 'en';
        updateContent();
    });

    // Drag and drop functionality
    const blocks = document.querySelectorAll('.block');
    const workspace = document.getElementById('workspace');
    const character = document.getElementById('character');
    const runBtn = document.getElementById('runBtn');
    const resetBtn = document.getElementById('resetBtn');

    blocks.forEach(block => {
        block.addEventListener('dragstart', function(e) {
            e.dataTransfer.setData('text/plain', block.id);
        });
    });

    workspace.addEventListener('dragover', function(e) {
        e.preventDefault();
    });

    workspace.addEventListener('drop', function(e) {
        e.preventDefault();
        const blockId = e.dataTransfer.getData('text/plain');
        const block = document.getElementById(blockId);
        
        const droppedBlock = document.createElement('div');
        droppedBlock.className = 'dropped-block';
        droppedBlock.textContent = block.textContent;
        droppedBlock.dataset.action = blockId.replace('Block', '').toLowerCase();
        
        workspace.insertBefore(droppedBlock, document.getElementById('dropHint'));
    });

    // Run code functionality
    runBtn.addEventListener('click', function() {
        const commands = Array.from(document.querySelectorAll('.dropped-block'));
        let delay = 0;
        
        commands.forEach((command, index) => {
            setTimeout(() => {
                executeCommand(command.dataset.action);
            }, delay);
            delay += 1000; // 1 second delay between commands
        });
    });

    function executeCommand(action) {
        const character = document.getElementById('character');
        
        switch(action) {
            case 'move':
                character.style.transform = 'translateX(50px)';
                setTimeout(() => {
                    character.style.transform = 'translateX(0)';
                }, 500);
                break;
            case 'turn':
                character.style.transform = 'rotate(90deg)';
                setTimeout(() => {
                    character.style.transform = 'rotate(0deg)';
                }, 500);
                break;
            case 'jump':
                character.style.transform = 'translateY(-50px)';
                setTimeout(() => {
                    character.style.transform = 'translateY(0)';
                }, 500);
                break;
        }
    }

    // Reset functionality
    resetBtn.addEventListener('click', function() {
        const workspace = document.getElementById('workspace');
        const dropHint = document.getElementById('dropHint');
        
        // Remove all dropped blocks
        while (workspace.firstChild !== dropHint) {
            workspace.removeChild(workspace.firstChild);
        }
        
        // Reset character position
        character.style.transform = '';
    });
});