/*/Our services//
// JavaScript for Sliding Effect on Scroll
document.addEventListener('DOMContentLoaded', function () {
    const servicesSection = document.querySelector('.services-container');
    
    const slideInOnScroll = () => {
        const sectionPosition = servicesSection.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (sectionPosition < screenHeight * 0.75) {
            servicesSection.classList.add('show');
        }
    };

    window.addEventListener('scroll', slideInOnScroll);
    slideInOnScroll(); // Trigger on page load
});
*/

//Get quote section//
// Selecting the form using its ID
const form = document.getElementById("quoteForm");

// Adding event listener for form submission
form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Getting form data
    const name = form.name.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const Books = form.Books.value;

    // Simple Validation Check
    if (name && phone && email && Books) {
        alert(`Thank you, ${name}! for taking a positive step, We will contact you soon.`);
        form.reset(); // Reset the form after submission
    } else {
        alert("Please fill out all fields before submitting.");
    }
});

//Home slider Js//
let slideIndex = 0; 
const slides = document.getElementsByClassName("slide");

// Show the first slide
showSlides(slideIndex);

function showSlides(n) {
    for (let slide of slides) {
        slide.classList.remove("active"); // Remove active class from all slides
    }
    
    slideIndex = (n + slides.length) % slides.length; // Loop back if end reached
    slides[slideIndex].classList.add("active"); // Add active class for the slide effect
}

// Change slide manually
function changeSlide(n) {
    showSlides(slideIndex + n);
}

// Automatic Slide Transition every 5 seconds
setInterval(() => {
    changeSlide(1);
}, 5000);
