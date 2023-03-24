window.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");

    slides.forEach( slide => {
        slide.addEventListener("click", () => {
            removeActive(slides);
            slide.classList.add("active");
        });
    });
    function removeActive(elems) {
        elems.forEach( item => {
            item.classList.remove("active");
        });

    }
});