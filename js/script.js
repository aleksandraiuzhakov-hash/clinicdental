

document.addEventListener('DOMContentLoaded', function () {
    var lista = ["videos/video1.mp4", "videos/video2.mp4", "videos/video3.mp4"];
    var indice = 1;

    window.onload = function () {
        video.onended = function () {
            this.src = lista[indice];
            indice = (indice + 1) % lista.length

        }
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slides');
    const nextBtn = document.querySelector('.nextBtn');
    const prevBtn = document.querySelector('.prevBtn');
    let current = 0;
    const total = slides.length;
    let autoSlideInterval;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[index].classList.add('active');
        current = index;
    }

    nextBtn.addEventListener('click', (e) => {
        e.preventDefault();
        current = (current + 1) % total;
        showSlide(current);
        resetAutoSlide();
    });

    prevBtn.addEventListener('click', (e) => {
        e.preventDefault();
        current = (current - 1 + total) % total;
        showSlide(current);
        resetAutoSlide();
    });


    function startAutoSlide() {
        autoSlideInterval = setInterval(() => {
            current = (current + 1) % total;
            showSlide(current);
        }, 5000);
    }

    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }


    startAutoSlide();

});