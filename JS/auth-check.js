document.addEventListener('DOMContentLoaded', () => {
    // Check authentication status
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const allowedPages = ['index.html', 'about.html', 'login.html', 'register.html'];

    if (!currentUser && !allowedPages.some(page => window.location.pathname.endsWith(page))) {
        window.location.href = 'login.html';
    }

    if (currentUser && window.location.pathname.endsWith('login.html')) {
        window.location.href = `age-${currentUser.ageGroup}.html`;
    }
});