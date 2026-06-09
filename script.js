// Wait until page loads
document.addEventListener("DOMContentLoaded", function() {

    // Typing animation
    var typed = new Typed("#typing", {
        strings: [
            "Software Professional",
            "Lead QA Analyst",
            "Aspiring Architect"
        ],
        typeSpeed: 60,
        backSpeed: 30,
        loop: true
    });

    // Initialize AOS
    AOS.init({
        duration: 1000,
        once: true
    });

    console.log("Portfolio loaded ✅");

    // Contact form
    document.getElementById("contact-form").addEventListener("submit", function(e) {
        e.preventDefault();

        emailjs.sendForm("service_t92ua1s", "template_pbtfazg", this)
            .then(function() {
                document.getElementById("status").innerText = "Message sent successfully ✅";
            }, function(error) {
                document.getElementById("status").innerText = "Failed to send ❌";
            });
    });

});
