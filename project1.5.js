let init = false;

function swiperCard() {
    if (window.innerWidth <= 768) {
        if (!init) {
            init = true;
            swiper = new Swiper(".image-slider", {
                direction: "horizontal",
                // slidesPerView: "auto",
                centeredSlides: true,
                spaceBetween: 32,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
            });
        }
    } else if (init) {
        swiper.destroy();
        init = false;
    }
}
swiperCard();
window.addEventListener("resize", swiperCard);


let showAllList = document.querySelectorAll('.show');
let showAllButton = document.querySelector('.show_all');
let hiddenButton = document.querySelector('.button_hidden');
showAllButton.addEventListener('click', function () {
    showAllList.forEach(block => {
        block.style.display = "block";
        showAllButton.style.display = "none";
        hiddenButton.style.display = "block";
    });
});
hiddenButton.addEventListener('click', function () {
    showAllList.forEach(block => {
        block.style.display = "none";
        showAllButton.style.display = "block";
        hiddenButton.style.display = "none";
    });
});
