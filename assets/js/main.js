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

    // Flickity cho new-arrivals responsive groupCells
    var newArrivalsCarousel = document.querySelector('.new-arrivals .carousel');
    var newArrivalsFlkty;
    function getGroupCells() {
        return window.innerWidth <= 768 ? 2 : 4;
    }
    function initNewArrivalsFlickity() {
        if (newArrivalsFlkty) {
            newArrivalsFlkty.destroy();
        }
        newArrivalsFlkty = new Flickity(newArrivalsCarousel, {
            groupCells: getGroupCells(),
            prevNextButtons: false,
            pageDots: true,
            wrapAround: true
        });
    }
    if (newArrivalsCarousel) {
        initNewArrivalsFlickity();
        window.addEventListener('resize', function () {
            var newGroupCells = getGroupCells();
            if (newArrivalsFlkty.options.groupCells !== newGroupCells) {
                initNewArrivalsFlickity();
            }
        });
    }

    // Offcanvas Menu Functionality
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const offcanvas = document.querySelector('#mobileMenu');
    const offcanvasBackdrop = document.querySelector('.offcanvas-backdrop');

    // Toggle hamburger animation
    function toggleHamburger() {
        mobileMenuToggle.classList.toggle('active');
    }

    // Handle offcanvas show
    offcanvas.addEventListener('show.bs.offcanvas', function () {
        toggleHamburger();
        document.body.style.overflow = 'hidden';
    });

    // Handle offcanvas hide
    offcanvas.addEventListener('hide.bs.offcanvas', function () {
        toggleHamburger();
        document.body.style.overflow = '';
    });

    // Close offcanvas when clicking on menu items
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function () {
            const offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvas);
            if (offcanvasInstance) {
                offcanvasInstance.hide();
            }
        });
    });

    // Close offcanvas when clicking outside
    document.addEventListener('click', function (event) {
        if (offcanvas.classList.contains('show') &&
            !offcanvas.contains(event.target) &&
            !mobileMenuToggle.contains(event.target)) {
            const offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvas);
            if (offcanvasInstance) {
                offcanvasInstance.hide();
            }
        }
    });

    // Handle escape key
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && offcanvas.classList.contains('show')) {
            const offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvas);
            if (offcanvasInstance) {
                offcanvasInstance.hide();
            }
        }
    });

    // Smooth scroll for mobile menu links
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});