// Section Navigation
function showSection(sectionId) {
  document.querySelectorAll('.content').forEach(section => {
      section.classList.remove('active');
  });
  document.getElementById(sectionId).classList.add('active');
}

// Computer Parts Info Display
function showInfo(infoText) {
  const infoBox = document.getElementById('parts-info');
  infoBox.textContent = infoText;
  infoBox.style.animation = 'fadeIn 0.3s';
  setTimeout(() => infoBox.style.animation = '', 300);
}

// Password Validation System
function validatePassword() {
  const password = document.getElementById('password-input').value;
  const requirements = {
      length: password.length >= 8,
      letter: /[a-zA-Z]/.test(password),
      number: /\d/.test(password),
      symbol: /[^a-zA-Z0-9]/.test(password)
  };

  Object.entries(requirements).forEach(([key, met]) => {
      const element = document.getElementById(key);
      element.classList.toggle('unmet', !met);
  });
}

function finalCheck() {
  const password = document.getElementById('password-input').value;
  const resultDiv = document.getElementById('password-result');
  
  if (password.length >= 8 &&
      /[a-zA-Z]/.test(password) &&
      /\d/.test(password) &&
      /[^a-zA-Z0-9]/.test(password)) {
      resultDiv.textContent = "🎉 Excellent! Super strong password!";
      resultDiv.style.backgroundColor = "#C8E6C9";
      resultDiv.style.color = "#1B5E20";
  } else {
      resultDiv.textContent = "⚠️ Keep trying! Use letters, numbers, and symbols!";
      resultDiv.style.backgroundColor = "#FFCDD2";
      resultDiv.style.color = "#B71C1C";
  }
}

// Drag & Drop System
function dragStart(event) {
  event.dataTransfer.setData("text/plain", event.target.id);
}

function allowDrop(event) {
  event.preventDefault();
}

function handleDrop(event) {
  event.preventDefault();
  const data = event.dataTransfer.getData("text/plain");
  const draggedElement = document.getElementById(data);
  const resultDiv = document.getElementById('drop-result');
  
  if (data === 'draggable-file') {
      event.target.textContent = '📁 Folder contains: secret.txt';
      resultDiv.textContent = "✅ File successfully organized!";
      resultDiv.style.color = "#4CAF50";
      draggedElement.style.display = 'none';
  }
}

// Initial Setup
document.addEventListener('DOMContentLoaded', () => {
  showSection('computer-parts');
  document.querySelectorAll('.requirement').forEach(item => {
      item.classList.add('unmet');
  });
});