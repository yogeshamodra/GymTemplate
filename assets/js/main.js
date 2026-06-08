$(document).ready(function () {
    $('.testimonial-slider').slick({
        autoplay: true,
        dots: false,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });


    // Toggle mobile menu
    $(document).ready(function () {
        $('.menu-toggle').click(function () {
            $(this).toggleClass('open');
            $('nav').slideToggle();
        });

        $('.menu-toggle').click(function (e) {
            e.preventDefault();
            $('.burgar-menu').toggleClass('activate');
            $('header').toggleClass('header-active');
            $('html').toggleClass('overflow-hidden');
            $('body').toggleClass('body-active');
            $('.header').removeClass('sub-menu-active');
        });
        const menuItems = $('.menu-item');
        menuItems.each(function () {
            const megaMenu = $(this).find('.mega-menu');
            if (megaMenu.length) {
                $(this).hover(
                    function () {
                        $('body').addClass('overflow-hidden');
                        $('.header').addClass('header-bg');
                    },
                    function () {
                        $('body').removeClass('overflow-hidden');
                        $('.header').removeClass('header-bg');
                    }
                );
            }
        });
    });
});