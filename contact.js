document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("O-UTvvyXPGyx5fl_-"); // Replace with your EmailJS Public Key

    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault();

        emailjs.sendForm("service_hkfoo8s", "template_797gu38", this)
            .then(function () {
                alert("Message sent successfully!");
                document.getElementById("contact-form").reset();
            }, function (error) {
                alert("Failed to send message. Please try again.");
                console.error("EmailJS Error:", error);
            });
    });
});
