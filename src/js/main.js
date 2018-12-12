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
    $('.device-icons').hover(function () {
        $('.default').stop().fadeOut(500);
        $('.device-image').stop().fadeIn(1000);
    }, function () {
        $('.default').stop().fadeIn(1000);
        $('.device-image').stop().fadeOut(500);
    });

});