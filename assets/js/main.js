
document.addEventListener('DOMContentLoaded', function () {
    var featuredSlider = document.querySelector('.featured-slider');

    var flkty = new Flickity(featuredSlider, {
        cellAlign: 'left',
        contain: true,
        prevNextButtons: false,
        pageDots: true,
        wrapAround: true,
        groupCells: 1
    });

    document.querySelector('.featured-nav-button.prev').addEventListener('click', function () {
        flkty.previous();
    });

    document.querySelector('.featured-nav-button.next').addEventListener('click', function () {
        flkty.next();
    });
});