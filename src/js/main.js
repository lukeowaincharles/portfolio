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

});
