    document.addEventListener("DOMContentLoaded", function() {
        const form = document.getElementById("loginForm");

        form.addEventListener("submit", function(e) {
            e.preventDefault();

            const UID = document.getElementById("UID").value;
            localStorage.setItem("currentUser", UID);

            window.location.href = "userCharTrackers.html"; /* fix log in logic, where u can press log in and then directed to ur own current user version of userCharTracker*/
        });
    });