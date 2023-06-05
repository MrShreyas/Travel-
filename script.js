// Open and close the mobile navigation menu
const menuBtn = document.querySelector('.menu-btn');
const navigation = document.querySelector('nav');

menuBtn.addEventListener('click', () => {
    navigation.classList.toggle('open');
});

// Smooth scrolling for anchor links
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
        navigation.classList.remove('open');
    });
});


// Form validation
const form = document.querySelector('.contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (nameInput.value.trim() === '') {
        showError(nameInput, 'Name is required');
    } else {
        showSuccess(nameInput);
    }

    if (emailInput.value.trim() === '') {
        showError(emailInput, 'Email is required');
    } else if (!isValidEmail(emailInput.value.trim())) {
        showError(emailInput, 'Invalid email format');
    } else {
        showSuccess(emailInput);
    }

    if (messageInput.value.trim() === '') {
        showError(messageInput, 'Message is required');
    } else {
        showSuccess(messageInput);
    }
});

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.classList.add('error');
    const errorText = formControl.querySelector('.error-text');
    errorText.innerText = message;
}

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.classList.remove('error');
    const errorText = formControl.querySelector('.error-text');
    errorText.innerText = '';
}

function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}


// Form submission and validation
const bookingForm = document.getElementById('booking-form');

bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Perform form validation
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const packageInput = document.getElementById('package');

    if (nameInput.value.trim() === '') {
        showError(nameInput, 'Name is required');
    } else {
        showSuccess(nameInput);
    }

    if (emailInput.value.trim() === '') {
        showError(emailInput, 'Email is required');
    } else if (!isValidEmail(emailInput.value.trim())) {
        showError(emailInput, 'Invalid email format');
    } else {
        showSuccess(emailInput);
    }

    if (packageInput.value === '') {
        showError(packageInput, 'Please select a package');
    } else {
        showSuccess(packageInput);
    }

    // If all form inputs are valid, submit the form
    if (bookingForm.checkValidity()) {
        // Perform the form submission (e.g., send data to the server)
        // You can use AJAX or fetch to send the form data to the server
        // For example:
        // const formData = new FormData(bookingForm);
        // fetch('submit-url', {
        //     method: 'POST',
        //     body: formData
        // })
        // .then(response => {
        //     // Handle the response from the server
        //     // For example, show a success message or redirect to a thank you page
        // })
        // .catch(error => {
        //     // Handle any errors that occur during form submission
        // });
        
        // Reset the form after successful submission
        bookingForm.reset();
    }
});

function showError(input, message) {
    const formGroup = input.parentElement;
    formGroup.classList.add('error');
    const errorText = formGroup.querySelector('.error-text');
    errorText.innerText = message;
}

function showSuccess(input) {
    const formGroup = input.parentElement;
    formGroup.classList.remove('error');
    const errorText = formGroup.querySelector('.error-text');
    errorText.innerText = '';
}

function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}


// Form submission and validation
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Perform form validation
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    if (nameInput.value.trim() === '') {
        showError(nameInput, 'Name is required');
    } else {
        showSuccess(nameInput);
    }

    if (emailInput.value.trim() === '') {
        showError(emailInput, 'Email is required');
    } else if (!isValidEmail(emailInput.value.trim())) {
        showError(emailInput, 'Invalid email format');
    } else {
        showSuccess(emailInput);
    }

    if (messageInput.value.trim() === '') {
        showError(messageInput, 'Message is required');
    } else {
        showSuccess(messageInput);
    }

    // If all form inputs are valid, submit the form
    if (contactForm.checkValidity()) {
        // Perform the form submission (e.g., send data to the server)
        // You can use AJAX or fetch to send the form data to the server
        // For example:
        // const formData = new FormData(contactForm);
        // fetch('submit-url', {
        //     method: 'POST',
        //     body: formData
        // })
        // .then(response => {
        //     // Handle the response from the server
        //     // For example, show a success message or redirect to a thank you page
        // })
        // .catch(error => {
        //     Handle any errors that occur during form submission
        // });
        
        // Reset the form after successful submission
        contactForm.reset();
    }
});

function showError(input, message) {
    const formGroup = input.parentElement;
    formGroup.classList.add('error');
    const errorText = formGroup.querySelector('.error-text');
    errorText.innerText = message;
}

function showSuccess(input) {
    const formGroup = input.parentElement;
    formGroup.classList.remove('error');
    const errorText = formGroup.querySelector('.error-text');
    errorText.innerText = '';
}

function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}


//thank you mnessage

// If all form inputs are valid, submit the form
if (bookingForm.checkValidity()) {
    // Perform the form submission (e.g., send data to the server)
    // ...

    // Display thank you message and hide the form
    const formContainer = document.querySelector('.form-container');
    const thankYouMessage = document.createElement('p');
    thankYouMessage.innerText = 'Thank you for booking with us!';
    formContainer.innerHTML = '';
    formContainer.appendChild(thankYouMessage);
}
