document.addEventListener("DOMContentLoaded", function () {

    // GET CURRENT USER
    const currentUserObj = JSON.parse(localStorage.getItem("currentUser"));

    if (!currentUserObj) {
        window.location.href = "userCharDirectory.html";
        return;
    }

    const currentUser = currentUserObj.uid;

    // DISPLAY USER INFO
    document.getElementById("display-nickname").innerText = currentUserObj.nickname;
    document.getElementById("display-uid").innerText = "UID: " + currentUserObj.uid;

    const profile = document.querySelector(".user-profile-header");
        profile.addEventListener("click", function () {
            profile.classList.toggle("active");
        });

    // DATA STRUCTURE
    let data = {
        owned: [],
        wanted: []
    };

    // ELEMENTS
    const leftBox = document.getElementById("left");
    const ownedBox = document.getElementById("owned-box");
    const wantedBox = document.getElementById("wanted-box");
    const characters = document.querySelectorAll(".character-img");

    // LOAD DATA 
    function loadData() {
        const saved = localStorage.getItem("characterData_" + currentUser);
        if (saved) {
            data = JSON.parse(saved);
        }

        data.owned.forEach(id => {
            const img = document.getElementById(id);
            if (img) ownedBox.appendChild(img);
        });

        data.wanted.forEach(id => {
            const img = document.getElementById(id);
            if (img) wantedBox.appendChild(img);
        });
    }

    // SAVE DATA
    function saveData() {
        localStorage.setItem("characterData_" + currentUser, JSON.stringify(data));
    }

    // DRAG START
    characters.forEach(img => {
        img.addEventListener("dragstart", function (e) {
            e.dataTransfer.setData("text/plain", this.id);
        });
    });

    // ALLOW DROP
    [ownedBox, wantedBox, leftBox].forEach(box => {
        box.addEventListener("dragover", function (e) {
            e.preventDefault();
        });
    });

    // DROP -> OWNED
    ownedBox.addEventListener("drop", function (e) {
        e.preventDefault();
        const id = e.dataTransfer.getData("text/plain");
        const img = document.getElementById(id);

        if (!data.owned.includes(id)) data.owned.push(id);
        data.wanted = data.wanted.filter(i => i !== id);

        if (img) ownedBox.appendChild(img);
        saveData();
    });

    // DROP -> WANTED
    wantedBox.addEventListener("drop", function (e) {
        e.preventDefault();
        const id = e.dataTransfer.getData("text/plain");
        const img = document.getElementById(id);

        if (!data.wanted.includes(id)) data.wanted.push(id);
        data.owned = data.owned.filter(i => i !== id);

        if (img) wantedBox.appendChild(img);
        saveData();
    });

    // DROP -> BACK TO LEFT
    leftBox.addEventListener("drop", function (e) {
        e.preventDefault();
        const id = e.dataTransfer.getData("text/plain");
        const img = document.getElementById(id);

        data.owned = data.owned.filter(i => i !== id);
        data.wanted = data.wanted.filter(i => i !== id);

        const container = document.querySelector(".character");
        if (img && container) {
            container.appendChild(img);
        }

        saveData();
    });

    //  RESET BUTTON
    const resetBtn = document.getElementById("reset-btn");

    if (resetBtn) {
        resetBtn.addEventListener("click", function () {
            const confirmReset = confirm("Are you sure you want to reset your tracker?");

            if (confirmReset) {
                localStorage.removeItem("characterData_" + currentUser);

                data = { owned: [], wanted: [] };

                window.location.reload();
            }
        });
    }

    // LOAD ON START
    loadData();
});


// LOGOUT FUNCTION 
function logoutUser() {
    localStorage.clear();
    window.location.href = "login.html";
}