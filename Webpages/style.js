// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("bookingForm");

    // Add an event listener for form submission
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get form values
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const service = document.getElementById("service").value;
        const pickupDate = document.getElementById("pickup_date").value;
        const deliveryDate = document.getElementById("delivery_date").value;
        const instructions = document.getElementById("instructions").value;

        // Simple validation (you can expand this as needed)
        if (!name || !email || !phone || !service || !pickupDate || !deliveryDate) {
            alert("Please fill in all required fields.");
            return;
        }

        // Display a confirmation message
        alert(`Thank you, ${name}! Your booking for ${service} has been received. We will contact you at ${email} or ${phone}.`);

        // Optionally, you can reset the form after submission
        form.reset();
    });
});

// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");

    // Add an event listener for form submission
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get form values
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Simple validation (you can expand this as needed)
        if (!name || !email || !message) {
            alert("Please fill in all fields.");
            return;
        }

        // Display a confirmation message
       if (!submit){
        alert(`Thank you, ${name}! Your message has been sent. We will contact you at ${email}.`);
       }
        // Optionally, you can reset the form after submission
        form.reset();
    });
});




