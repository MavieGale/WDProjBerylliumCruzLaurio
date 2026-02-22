let data = {
        owned: [],
        wanted: []
    };
    const currentUser = localStorage.getItem("currentUser");
    const leftBox = document.getElementById("left");
    const ownedBox = document.getElementById("owned-box");
    const wantedBox = document.getElementById("wanted-box");
    const characters = document.querySelectorAll(".character-img");
    
    //BRING BACK TO THE LEFT
    leftBox.addEventListener("dragover", function(e) {
    e.preventDefault();
    });

    // LOAD FROM LOCAL STORAGE
    function loadData() {
    const saved = localStorage.getItem("characterData");
    if (saved) {
        data = JSON.parse(saved);
    }

    // Move owned characters
    data.owned.forEach(id => {
        const img = document.getElementById(id);
        if (img) ownedBox.appendChild(img);
    });

    // Move wanted characters
    data.wanted.forEach(id => {
        const img = document.getElementById(id);
        if (img) wantedBox.appendChild(img);
    });
    }

    // SAVE FUNCTION
    function saveData() {
        if (!currentUser) return;
        localStorage.setItem("characterData_" + currentUser, JSON.stringify(data));
    }

    // DRAG START
    characters.forEach(img => {
        img.addEventListener("dragstart", function(e) {
        e.dataTransfer.setData("text/plain", this.id); // store id
        });
    });

    // ALLOW DROP
    [ownedBox, wantedBox].forEach(box => {
        box.addEventListener("dragover", function(e) {
            e.preventDefault();
        });
    });

    // DROP LOGIC
    ownedBox.addEventListener("drop", function(e) {
        e.preventDefault();
        const id = e.dataTransfer.getData("text/plain");
        const img = document.getElementById(id);

        if (!data.owned.includes(id)) data.owned.push(id);
        data.wanted = data.wanted.filter(i => i !== id);

        if (img) ownedBox.appendChild(img);
        saveData();
    });

    wantedBox.addEventListener("drop", function(e) {
        e.preventDefault();
        const id = e.dataTransfer.getData("text/plain");
        const img = document.getElementById(id);

        if (!data.wanted.includes(id)) data.wanted.push(id);
        data.owned = data.owned.filter(i => i !== id); // FIXED LINE

        if (img) wantedBox.appendChild(img);
        saveData();
    });

    leftBox.addEventListener("drop", function(e) {
    e.preventDefault();
    const id = e.dataTransfer.getData("text/plain");
    const img = document.getElementById(id);

    // Remove from both arrays
    data.owned = data.owned.filter(i => i !== id);
    data.wanted = data.wanted.filter(i => i !== id);

    // Move back to original container
    const characterContainer = document.querySelector(".character");
    if (img && characterContainer) {
        characterContainer.appendChild(img);
    }

    saveData();
    });

    function loadData() {
    if (!currentUser) return;

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

    // LOAD ON START
    window.addEventListener("DOMContentLoaded", loadData);