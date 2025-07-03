// Add event listener to button
document.querySelector('button').addEventListener('click', () => {
    // Add fade-in animation to sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
        section.classList.add('fade-in');
    });
});

// Add event listener to form submit
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    // Get form data
    const name = document.querySelector('input[type="text"]').value;
    const email = document.querySelector('input[type="email"]').value;
    const message = document.querySelector('textarea').value;
    // Display form data
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Message: ${message}`);
    // Clear form fields
    document.querySelector('input[type="text"]').value = '';
    document.querySelector('input[type="email"]').value = '';
    document.querySelector('textarea').value = '';
});