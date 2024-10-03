document.querySelector('.scroll-arrow').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#about').scrollIntoView({
        behavior: 'smooth'
    });
});

document.querySelectorAll('.read-more').forEach(button => {
    button.addEventListener('click', function() {
        const fullText = this.parentElement.nextElementSibling;
        const previewText = this.parentElement; 

        if (fullText.style.display === 'none' || fullText.style.display === '') {
            fullText.style.display = 'block'; 
            previewText.style.display = 'none'; 
            this.style.display = 'none'; 
        }
    });
});

document.querySelectorAll('.comment-full').forEach(fullText => {
    fullText.style.display = 'none'; 
});

function checkVisibility() {
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            el.classList.add('visible'); 
            el.classList.remove('hidden'); 
        }
    });
}

window.addEventListener('scroll', checkVisibility);

document.addEventListener('DOMContentLoaded', checkVisibility);

$(document).ready(function(){
    $('.photo-slider').slick({
        slidesToShow: 3, 
        slidesToScroll: 1, 
        dots: window.innerWidth > 768, 
        infinite: true, 
        autoplay: true, 
        autoplaySpeed: 2000, 
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1, 
                    slidesToScroll: 1
                }
            }
        ]
    });
});



