document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("loginForm");

    form.addEventListener("submit", function(e) {
        e.preventDefault();

        // 1. Collect all data from the form
        const userObj = {
            nickname: document.getElementById("nickname").value,
            uid: document.getElementById("UID").value,
            server: form.querySelector("select").value
        };

        // 2. Save the WHOLE object as the current user
        localStorage.setItem("currentUser", JSON.stringify(userObj));

        // 3. Redirect to tracker
        window.location.href = "userCharTrackers.html";
    });
});