document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registration-form');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');
    const phone = document.getElementById('phone');
    const ageGroupOptions = document.querySelectorAll('input[name="age-group"]');
  
    // Ethiopian phone number validation (accepts +2517/07 and +2519/09)
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

    // Check if phone is already registered
    const isPhoneRegistered = (phoneNumber) => {
        const normalizedPhone = normalizePhoneNumber(phoneNumber);
        const users = JSON.parse(localStorage.getItem('users')) || [];
        return users.some(user => user.phone === normalizedPhone);
    };
  
    // Validate Ethiopian phone number format
    phone.addEventListener('input', function() {
        const parentGroup = this.closest('.form-group');
        if (!validatePhoneNumber(this.value)) {
            parentGroup.classList.add('invalid');
        } else {
            parentGroup.classList.remove('invalid');
        }
    });
  
    // Validate password length (minimum 5 characters)
    password.addEventListener('input', function() {
        const parentGroup = this.closest('.form-group');
        if (this.value.length < 5) {
            parentGroup.classList.add('invalid');
        } else {
            parentGroup.classList.remove('invalid');
        }
    });
  
    // Validate password confirmation
    confirmPassword.addEventListener('input', function() {
        const parentGroup = this.closest('.form-group');
        if (this.value !== password.value) {
            parentGroup.classList.add('invalid');
        } else {
            parentGroup.classList.remove('invalid');
        }
    });
  
    // Form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        let isValid = true;
      
        // Validate phone
        if (!validatePhoneNumber(phone.value)) {
            phone.closest('.form-group').classList.add('invalid');
            isValid = false;
        } else if (isPhoneRegistered(phone.value)) {
            showNotification(translations[currentLanguage]['register.phone_exists'], 'error');
            isValid = false;
        }
      
        // Check password
        if (password.value.length < 5) {
            password.closest('.form-group').classList.add('invalid');
            isValid = false;
        }
      
        // Check password match
        if (confirmPassword.value !== password.value) {
            confirmPassword.closest('.form-group').classList.add('invalid');
            isValid = false;
        }
      
        // Check age group selected
        const ageGroupSelected = [...ageGroupOptions].some(option => option.checked);
        if (!ageGroupSelected) {
            showNotification(translations[currentLanguage]['register.age_group_error'], 'error');
            isValid = false;
        }
      
        if (isValid) {
            const formData = {
                parentName: document.getElementById('parent-name').value,
                phone: normalizePhoneNumber(phone.value),
                password: password.value,
                childName: document.getElementById('child-name').value,
                ageGroup: document.querySelector('input[name="age-group"]:checked').value,
                registeredAt: new Date().toISOString()
            };
            
            // Save to localStorage
            const users = JSON.parse(localStorage.getItem('users')) || [];
            users.push(formData);
            localStorage.setItem('users', JSON.stringify(users));
            
            showNotification(translations[currentLanguage]['register.success'], 'success');
            
            // Redirect to login page after registration
            setTimeout(() => {
                window.location.href = 'login.html';
            }, 1500);
        }
    });

    // Add input masking for phone number
    phone.addEventListener('keydown', function(e) {
        if (!/[0-9+]/.test(e.key) && 
            !['Backspace', 'Delete', 'Tab', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(e.key)) {
            e.preventDefault();
        }
    });
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