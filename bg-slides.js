document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".bg-slide");
    let index = 0;

    if (slides.length <= 1) return;

    setInterval(() => {
        slides[index].classList.remove("active");
        index = (index + 1) % slides.length;
        slides[index].classList.add("active");
    }, 5000);
});

