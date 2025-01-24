// JavaScript for form submission and success message handling
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Hide the form
    document.getElementById('contactForm').style.display = 'none';

    // Show the success message with animation
    const successMessage = document.getElementById('successMessage');
    successMessage.classList.remove('hidden');
});
