document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("loginForm");

    form.addEventListener("submit", (event) => {
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        let isValid = true;
        let errorMessage = "";

        // Email validation
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email)) {
            isValid = false;
            errorMessage += "Please enter a valid email address.\n";
        }

        // Password validation
        if (password.length < 8) {
            isValid = false;
            errorMessage += "Password must be at least 8 characters long.\n";
        }

        if (!isValid) {
            // Prevent form submission if validation fails
            event.preventDefault();
            alert(errorMessage);
        }
    });
});
