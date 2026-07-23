

document.addEventListener('DOMContentLoaded', (event) => {
    
    const contactForm = document.querySelector('form');

    
    contactForm.addEventListener('submit', function (event) {
        
        event.preventDefault();

        
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');

        const nameValue = nameInput.value.trim();
        const emailValue = emailInput.value.trim();
        const messageValue = messageInput.value.trim();

        
        if (nameValue === '' || emailValue === '' || messageValue === '') {
            alert('Please fill in all fields.');
            return; 
        }

        if (!validateEmail(emailValue)) {
            alert('Please enter a valid email address.');
            return; 
        }

        
        console.log('Form Submitted Successfully!');
        console.log('Name:', nameValue);
        console.log('Email:', emailValue);
        console.log('Message:', messageValue);

        
        alert('Thank you for your message, ' + nameValue + '! We have received it.');

        
        contactForm.reset();
    });

    
    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
});
