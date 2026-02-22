const grid = document.getElementById("character-grid");

    // Map old IDs (img1, img2, ...) to actual filenames
    const idToFile = {
      img1: "albedo-icon.png",
      img2: "alhaitham-icon.png",
      img3: "arle-icon.png",
      img4: "ayaka-icon.png",
      img5: "ayato-icon.png",
      img6: "baizhu-icon.png",
      img7: "chasca-icon.png",
      img8: "chiori-icon.png",
      img9: "citlali-icon.png",
      img10: "clorinde-icon.png",
      img11: "cyno-icon.png",
      img12: "dehya-icon.png",
      img13: "diluc-icon.png",
      img14: "durin-icon.png",
      img15: "emilie-icon.png",
      img16: "escoffier-icon.png",
      img17: "eula-icon.png",
      img18: "furina-icon.png",
      img19: "ganyu-icon.png",
      img20: "hu tao-icon.png",
      img21: "itto-icon.png",
      img22: "jean-icon.png",
      img23: "kazuha-icon.png",
      img24: "keqing-icon.png",
      img25: "kinich-icon.png",
      img26: "klee-icon.png",
      img27: "kokomi-icon.png",
      img28: "lyney-icon.png",
      img29: "mavuika-icon.png",
      img30: "mizuki-icon.png",
      img31: "mona-icon.png",
      img32: "mualani-icon.png",
      img33: "nahida-icon.png",
      img34: "navia-icon.png",
      img35: "neuvi-icon.png",
      img36: "nilou-icon.png",
      img37: "raiden-icon.png",
      img38: "shenhe-icon.png",
      img39: "sigewinne-icon.png",
      img40: "skirk-icon.png",
      img41: "tartaglia-icon.png",
      img42: "tighnari-icon.png",
      img43: "varessa-icon.png",
      img44: "venti-icon.png",
      img45: "wanderer-icon.png",
      img46: "wriothesley-icon.png",
      img47: "xianyun-icon.png",
      img48: "xiao-icon.png",
      img49: "xilonen-icon.png",
      img50: "yaemiko-icon.png",
      img51: "yoimiya-icon.png",
      img52: "zhongli-icon.png"
    };

    const currentUser = localStorage.getItem("currentUser");
    function loadCharacters(category){
    const savedData = localStorage.getItem("characterData_" + currentUser);
    console.log("Saved Data:", savedData);

    if (!savedData) return;

    const data = JSON.parse(savedData);
    console.log("Parsed Data:", data);

    if (!data[category]) {
        console.log("Category not found:", category);
        return;

    }

    grid.innerHTML = "";

    data[category].forEach(id => {
        console.log("Loading:", id, "→", idToFile[id]);

        if (!idToFile[id]) {
        console.log("Missing mapping for:", id);
        return;
        }

        const img = document.createElement("img");
        img.src = `teamIcons/${idToFile[id]}`;
        img.alt = id;
        img.className = "character-img";
        grid.appendChild(img);
        });
    } 
    loadCharacters("wanted");