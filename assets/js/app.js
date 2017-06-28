/**
 * Toggle nav based on class nav-opened
 */
function navToggle() {
    if($('#nav').hasClass('nav-opened')) {
        $('#nav').removeClass('nav-opened');
        $('#nav').css({width: '0'});
        $('#main').css({marginLeft: '0'});
    }else {
        $('#nav').addClass('nav-opened');
        $('#nav').css({width: '250px'});
        $('#main').css({marginLeft: '250px'});
    }
}

/**
 * Document ready
 */
$(function() {
    $('#nav-toggle').click(function() {
        navToggle();
    });

    if($(window).width() < 768) {
        navToggle();
    }
});
