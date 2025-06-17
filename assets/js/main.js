document.addEventListener('DOMContentLoaded', function () {
    const banner = document.querySelector('.banner');
    if (banner) {
        new Flickity(banner, {
            cellAlign: 'left',
            contain: true,
            autoPlay: 3000,
            wrapAround: true,
            prevNextButtons: false,
            pageDots: true,
            pauseAutoPlayOnHover: true,
            imagesLoaded: true,
            lazyLoad: 1
        });
    }
});