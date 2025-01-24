// Fixed prices associated with each material (stored in the backend)
const materialPrices = {
    plastic: 20,   // Price per Kg
    fiber: 25,     // Price per Kg
    steel: 30,     // Price per Kg
    iron: 15,      // Price per Kg
    papers: 10,    // Price per Kg
    copper: 50,    // Price per Kg
    metals: 40     // Price per Kg
};

// Handle calculate price button click
document.getElementById("calculateBtn").addEventListener("click", function() {
    const selectedMaterial = document.getElementById("material").value;
    const weight = document.getElementById("weight").value;

    if (!selectedMaterial || !weight) {
        alert("Please select a material and enter the weight!");
        return;
    }

    // Calculate price
    const pricePerKg = materialPrices[selectedMaterial];
    const totalPrice = pricePerKg * weight;

    // Display the result in INR
    document.getElementById("priceResult").textContent = "₹" + totalPrice.toFixed(2);
});
