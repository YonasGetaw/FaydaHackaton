document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('login-form');
    const phone = document.getElementById('login-phone');
    const password = document.getElementById('login-password');

    // Check URL for registration success parameter
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('registered')) {
        showNotification(translations[currentLanguage]['login.registration_success'], 'success');
        
        // Try to auto-fill the last registered phone number
        const users = JSON.parse(localStorage.getItem('users')) || [];
        if (users.length > 0) {
            phone.value = users[users.length - 1].phone.replace('+251', '0');
            password.focus();
        }
    }

    // Ethiopian phone number validation
    const validatePhoneNumber = (phoneNumber) => {
        const phoneRegex = /^(\+251|0)[79][0-9]{8}$/;
        return phoneRegex.test(phoneNumber);
    };

    // Normalize Ethiopian phone number to +251 format
    const normalizePhoneNumber = (phoneNumber) => {
        if (phoneNumber.startsWith('0')) {
            return '+251' + phoneNumber.substring(1);
        }
        return phoneNumber;
    };

    // Validate phone number
    phone.addEventListener('input', function() {
        const parentGroup = this.closest('.form-group');
        if (!validatePhoneNumber(this.value)) {
            parentGroup.classList.add('invalid');
        } else {
            parentGroup.classList.remove('invalid');
        }
    });

    // Validate password is not empty
    password.addEventListener('input', function() {
        const parentGroup = this.closest('.form-group');
        if (this.value.length === 0) {
            parentGroup.classList.add('invalid');
        } else {
            parentGroup.classList.remove('invalid');
        }
    });

    // Add input masking for phone number
    phone.addEventListener('keydown', function(e) {
        if (!/[0-9+]/.test(e.key) && 
            !['Backspace', 'Delete', 'Tab', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
            e.preventDefault();
        }
    });

    // Form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        let isValid = true;
        
        // Check phone
        if (!validatePhoneNumber(phone.value)) {
            phone.closest('.form-group').classList.add('invalid');
            isValid = false;
        }
        
        // Check password
        if (password.value.length === 0) {
            password.closest('.form-group').classList.add('invalid');
            isValid = false;
        }
        
        if (isValid) {
            const normalizedPhone = normalizePhoneNumber(phone.value);
            const users = JSON.parse(localStorage.getItem('users')) || [];
            const user = users.find(u => u.phone === normalizedPhone && u.password === password.value);
            
            if (user) {
                // Save current user session
                localStorage.setItem('currentUser', JSON.stringify({
                    phone: user.phone,
                    ageGroup: user.ageGroup,
                    childName: user.childName
                }));
                
                showNotification(translations[currentLanguage]['login.success'], 'success');
                
                setTimeout(() => {
                    redirectToAgeGroup(user.ageGroup);
                }, 1500);
            } else {
                showNotification(translations[currentLanguage]['login.invalid_credentials'], 'error');
            }
        }
    });

    // Redirect to appropriate age group page
    function redirectToAgeGroup(ageGroup) {
        switch(ageGroup) {
            case '4-6':
                window.location.href = 'age-4-6.html';
                break;
            case '7-9':
                window.location.href = 'age-7-9.html';
                break;
            case '10-12':
                window.location.href = 'age-10-12.html';
                break;
            default:
                window.location.href = 'index.html';
        }
    }
});

// Notification function
function showNotification(message, type = 'info', duration = 3000) {
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.setAttribute('role', 'alert');
    notification.setAttribute('aria-live', 'polite');
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, duration);
}