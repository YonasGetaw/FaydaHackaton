// Section Navigation
function showSection(sectionId) {
  document.querySelectorAll('.content').forEach(section => {
    section.classList.remove('active');
  });
  document.getElementById(sectionId).classList.add('active');
}

// Timeline Functionality
function addTimelineEvent() {
  const input = document.getElementById('timeline-input');
  const timeline = document.getElementById('timeline-list');
  
  if (input.value.trim()) {
    const li = document.createElement('li');
    li.textContent = input.value;
    li.style.backgroundColor = '#e8f5e9';
    li.style.padding = '0.5rem';
    li.style.borderRadius = '4px';
    timeline.appendChild(li);
    input.value = '';
  }
}

// Story Saving
function submitStory() {
  const storyInput = document.getElementById('story-input');
  const storyOutput = document.getElementById('story-output');
  
  if (storyInput.value.trim()) {
    storyOutput.textContent = storyInput.value;
    storyInput.value = '';
  }
}

// Initialize default section
document.addEventListener('DOMContentLoaded', () => {
  showSection('introduction');
});