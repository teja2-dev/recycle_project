// Price Calculation Function
function calculatePrice() {
    const weight = parseFloat(document.getElementById("weight").value);
    const pricePerKg = parseFloat(document.getElementById("pricePerKg").value);
    const currency = document.getElementById("currency").value;
    const totalPriceElement = document.getElementById("totalPrice");

    if (isNaN(weight) || isNaN(pricePerKg) || weight <= 0 || pricePerKg <= 0) {
        alert("Please enter valid weight and price per KG.");
        return;
    }

    // Calculate Total Price
    let totalPrice = weight * pricePerKg;

    // Currency Symbols
    const currencySymbols = {
        "INR": "₹",
        "USD": "$",
        "EUR": "€",
        "GBP": "£"
    };

    // Display Result with Selected Currency
    totalPriceElement.textContent = `${currencySymbols[currency]}${totalPrice.toFixed(2)}`;
}

// Contact Form Submission
function handleContactSubmit(event) {
    event.preventDefault(); // Prevent the page from refreshing

    // Fetch form data
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const city = document.getElementById("city").value.trim();

    if (!name || !email || !phone || !city) {
        alert("Please fill in all required fields.");
        return;
    }

    // Display Thank You Message
    document.getElementById("thankYouMessage").style.display = "block";
}
