// List of slots with specific times
const slots = [
    { slot: "Slot 1", time: "9 AM" },
    { slot: "Slot 2", time: "10 AM" },
    { slot: "Slot 3", time: "11 AM" },
    { slot: "Slot 4", time: "12 PM" },
    { slot: "Slot 5", time: "2 PM" },
    { slot: "Slot 6", time: "3 PM" },
    { slot: "Slot 7", time: "4 PM" },
    { slot: "Slot 8", time: "5 PM" },
    { slot: "Slot 9", time: "6 PM" },
    { slot: "Slot 10", time: "8 PM" }
];

// Simulating booked slots (replace this with Firebase data in a real setup)
let bookedSlots = ["Slot 3", "Slot 6"]; // Example booked slots

// Populate slot dropdown
const slotDropdown = document.getElementById("slot");
slots.forEach(slotObj => {
    const option = document.createElement("option");
    option.value = slotObj.slot;
    option.textContent = `${slotObj.slot} - ${slotObj.time}` + (bookedSlots.includes(slotObj.slot) ? " (Unavailable)" : " (Available)");
    option.disabled = bookedSlots.includes(slotObj.slot);
    slotDropdown.appendChild(option);
});

// Restrict date selection to future dates only
const dateInput = document.getElementById("date");
const today = new Date().toISOString().split('T')[0];
dateInput.setAttribute('min', today);

// Form submission logic
document.getElementById("bookingForm").addEventListener("submit", function (event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const city = document.getElementById('city').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const date = document.getElementById('date').value;
    const slot = document.getElementById('slot').value;

    if (!name || !email || !city || !phone || !date || !slot) {
        alert('Please fill all mandatory fields!');
        return;
    }

    // Show thank you message and update the slot as booked
    document.getElementById("bookingForm").style.display = "none";
    document.getElementById("thankYouMessage").style.display = "block";

    // Mark the selected slot as booked (demo purpose)
    bookedSlots.push(slot);

    // Refresh the dropdown for slot availability
    slotDropdown.innerHTML = "";
    slots.forEach(slotObj => {
        const option = document.createElement("option");
        option.value = slotObj.slot;
        option.textContent = `${slotObj.slot} - ${slotObj.time}` + (bookedSlots.includes(slotObj.slot) ? " (Unavailable)" : " (Available)");
        option.disabled = bookedSlots.includes(slotObj.slot);
        slotDropdown.appendChild(option);
    });
});

 // Toggle visibility of the material dropdown when the down arrow is clicked
document.getElementById("materialToggle").addEventListener("click", function() {
    var dropdown = document.getElementById("materialDropdown");
    // Toggle display property of the dropdown
    if (dropdown.style.display === "none" || dropdown.style.display === "") {
        dropdown.style.display = "flex";
        dropdown.style.justifyContent = "center";  
    } else {
        dropdown.style.display = "none";
    }
}); 

// Handle material option selection
document.querySelectorAll('.material-option').forEach(option => {
    option.addEventListener('click', function() {
        // Toggle selected class to mark the option as selected
        this.classList.toggle('selected');
    });
});

// Handle dropdown toggle
document.getElementById("materialToggle").addEventListener("click", function() {
    const dropdown = document.getElementById("materialDropdown");
    dropdown.style.display = dropdown.style.display === "block" ? "flex" : "center";
});

// Track selected materials
let selectedMaterials = [];

// Handle material selection
document.querySelectorAll(".material-option").forEach(option => {
    option.addEventListener("click", function() {
        const materialValue = this.getAttribute("data-value");
        if (selectedMaterials.includes(materialValue)) {
            selectedMaterials = selectedMaterials.filter(value => value !== materialValue);
            this.style.backgroundColor = ""; // Remove the selection color
        } else {
            selectedMaterials.push(materialValue);
            this.style.backgroundColor = "#d3d3d3"; // Highlight the selected option
        }
    });
});

// Form submission logic
document.getElementById("calculateBtn").addEventListener("click", function() {
    const weight = document.getElementById("weight").value;

    // Check if at least one material is selected
    if (selectedMaterials.length === 0) {
        // Display error message if no material is selected
        document.getElementById("materialError").style.display = "block";
        return;
    } else {
        // Hide the error message if a material is selected
        document.getElementById("materialError").style.display = "none";
    }

    // Check if weight is entered
    if (!weight || weight <= 0) {
        alert("Please enter a valid weight.");
        return;
    }

    // Proceed with calculation (your calculation logic here)
    // ...
});
