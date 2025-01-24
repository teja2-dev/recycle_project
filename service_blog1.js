/*/ JS code for any additional functionality if needed, for example, handling read more clicks

document.querySelectorAll(".read-more").forEach(button => {
    button.addEventListener("click", (event) => {
        event.preventDefault();
        alert("You clicked on 'Read More'");
    });
}); */

// Function to toggle between 'Read More' and 'Read Less'
function toggleReadMore(event) {
    event.preventDefault(); // Prevents the default behavior of the anchor tag

    const readMoreLink = event.target;
    const extraContent = readMoreLink.previousElementSibling; // Get the extra content (div)

    // Toggle visibility of the extra content
    if (extraContent.style.display === "none" || extraContent.style.display === "") {
        extraContent.style.display = "block"; // Show the extra content
        readMoreLink.textContent = "Read Less"; // Change the text to 'Read Less'
    } else {
        extraContent.style.display = "none"; // Hide the extra content
        readMoreLink.textContent = "Read More"; // Change the text back to 'Read More'
    }
}

//Contact form//
//Contact form //
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission
    
    // Hide the contact form
    const contactForm = document.getElementById("contact-form");
    contactForm.classList.add("hidden");
  
    // Show the thank-you message
    const thankYouMessage = document.getElementById("thank-you-message");
    thankYouMessage.classList.remove("hidden");
  
    // Reset the form after 10 seconds
    setTimeout(() => {
      // Clear all form fields
      document.getElementById("contactForm").reset();
      
      // Hide the thank-you message
      thankYouMessage.classList.add("hidden");
      
      // Show the contact form again
      contactForm.classList.remove("hidden");
    }, 10000); // 10 seconds
  });
