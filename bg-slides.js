document.addEventListener("DOMContentLoaded", () => { // Runs after page loads

    const slides = document.querySelectorAll(".bg-slide"); // Selects all background slides
    let index = 0; // Tracks current background image

    if (slides.length <= 1) return; // Stops if only one background exists

    setInterval(() => { // Changes background automatically every 5 seconds
        slides[index].classList.remove("active"); // Removes active background
        index = (index + 1) % slides.length; // Moves to next background (loops)
        slides[index].classList.add("active"); // Shows new background
    }, 5000);
});


