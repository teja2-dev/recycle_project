/*/ Duplicate images for infinite loop
const slider = document.getElementById('slider');
const slideContent = slider.innerHTML;
slider.innerHTML += slideContent;
*/

//Donate a book Js starts//
//Contact us form JS//
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission behavior
    const thankYouMessage = document.getElementById('thankYouMessage');
    thankYouMessage.style.display = 'block';
    // Display success message and hide the form
    document.getElementById('contactForm').style.display = 'none';
     // Optionally, clear the form fields after submission
    this.reset();
  });
  //Contact us form JS ends//
//Donate a book Js ends//  

//hover image//
// Optional JS for Console Testing
console.log("Descriptive Image Box Loaded");
