$(document).ready(function () {
    $(".dl-menu li a[href^='#']").on('click', function (e) {

        // prevent default anchor click behavior
        e.preventDefault();

        // store hash
        var hash = this.hash;

        var navOffset;
        navOffset = $('.navbar').height();

        // animate
        $('html, body').animate({
            scrollTop: $(hash).offset().top - 70
        }, 300, function () {

            // when done, add hash to url
            // (default click behaviour)
        });
    });
    $('#program_type').on('change', function () {
        if ($(this).val() == "other") {

            $("#program_type_other").removeAttr('disabled');
        } else {
            $("#program_type_other").Attr('disabled','disabled');

        }
    })
});
