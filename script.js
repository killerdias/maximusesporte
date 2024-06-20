document.addEventListener("DOMContentLoaded", function() {
    let currentSlide = 0;
    const slides = document.querySelectorAll(".carousel-item");

    function showSlide(index) {
        if (index >= slides.length) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = slides.length - 1;
        } else {
            currentSlide = index;
        }
        const offset = -currentSlide * 100;
        document.querySelector(".carousel-inner").style.transform = `translateX(${offset}%)`;
    }

    window.prevSlide = function() {
        showSlide(currentSlide - 1);
    }

    window.nextSlide = function() {
        showSlide(currentSlide + 1);
    }
    
    // Initialize the carousel
    showSlide(currentSlide);
    
    // Form submission logic
    document.querySelector("form").addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Mensagem enviada com sucesso!");
    });
});
