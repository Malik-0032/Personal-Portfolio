const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
}

/*Animated Background*/ 
document.addEventListener('DOMContentLoaded', function() {
    const shapesContainer = document.querySelector('.background-animation');
    const shapes = document.querySelectorAll('.floating-shape');

    // Create more shapes dynamically if necessary
    const numberOfShapes = 4; // Adjust this value as needed
    for (let i = 0; i < numberOfShapes; i++) {
        let newShape = document.createElement('div');
        newShape.classList.add('floating-shape');
        newShape.classList.add('shape' + ((i % 6) + 1)); // Cycles through shape1 to shape6
        shapesContainer.appendChild(newShape);
    }

    // Position the floating shapes randomly within the viewport
    const shapeElements = document.querySelectorAll('.floating-shape');
    shapeElements.forEach(shape => {
        const randomTop = Math.random() * 100;  // Random vertical position (0% to 100%)
        const randomLeft = Math.random() * 100; // Random horizontal position (0% to 100%)

        shape.style.top = `${randomTop}vh`;  // Position from top (in vh)
        shape.style.left = `${randomLeft}vw`; // Position from left (in vw)
    });
});

//Animated about
document.addEventListener('DOMContentLoaded', function() {
    const textElement = document.querySelector('.info-box span');
    const texts = ['Cybersecurity Analyst', 'Network Security Specialist', 'Security Operations Engineer']; // Texts to type and backspace
    let index = 0; // To track current text
    let currentText = ''; // To store the current text being typed
    let typing = true; // Flag to check if we are typing or backspacing
    let typingSpeed = 150; // Speed of typing in ms
    let backspacingSpeed = 100; // Speed of backspacing in ms
    let loopDelay = 1000; // Delay between full cycle (typing + backspacing)

    function typeText() {
        if (typing) {
            currentText = texts[index].substring(0, currentText.length + 1);
            textElement.textContent = currentText;
            if (currentText.length === texts[index].length) {
                typing = false;
                setTimeout(backspaceText, loopDelay);
            } else {
                setTimeout(typeText, typingSpeed);
            }
        }
    }

    function backspaceText() {
        currentText = texts[index].substring(0, currentText.length - 1);
        textElement.textContent = currentText;
        if (currentText.length === 0) {
            index = (index + 1) % texts.length; // Switch to the next text
            typing = true;
            setTimeout(typeText, loopDelay); // Start typing the next text
        } else {
            setTimeout(backspaceText, backspacingSpeed);
        }
    }

    typeText(); // Start the typing animation
});



// Form Submission Handler
function setupFormSubmission() {
    const contactForm = document.querySelector('.contact-form');
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        // Placeholder for form submission logic
        console.log('Form submitted:', { name, email, message });
        
        // Reset form
        contactForm.reset();
        
        // Optional: Show success message
        alert('Message sent successfully!');
    });
}




