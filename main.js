const mainImg = document.querySelector('.mainImg img');
const smallImages = document.querySelectorAll('.flexible div img');

smallImages.forEach(img => {
    img.addEventListener('click', function() {
        mainImg.style.opacity = 0;
        setTimeout(() => {
            mainImg.setAttribute('src', img.src);
            mainImg.style.opacity = 1;
        }, 500);
    });
});