$(document).ready(function () {

    // smooth scroll function
    $('a[href^="#"]').on('click', function (e) {

        var target = $(this.getAttribute('href'));

        if (target.length) {
            e.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });

    // device image change
    $('.device-icons_wrapper').hover(function (e) {
        $(this).closest('.projects_wrapper').toggleClass('is-hovered');
    });

    //page loader
    $(window).on('load', function () {
        setTimeout(function () {
            $('#pageLoader').css('display', 'none');
        }, 2000);
    });

});