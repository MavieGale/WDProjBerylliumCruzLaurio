    document.addEventListener("DOMContentLoaded", function() {
        const form = document.getElementById("loginForm");

        form.addEventListener("submit", function(e) {
            e.preventDefault();

            const email = document.getElementById("email").value;
            localStorage.setItem("currentUser", email);

            window.location.href = "userCharTrackers.html";
        });
    });