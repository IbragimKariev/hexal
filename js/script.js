


$('.mobile-menu').on('click', function (e) {
    $('.menu-btn').toggleClass('menu-active');
    $('.menu-wrap').toggleClass('menu-active');
    $('.main-content').toggleClass('menu-active');
});
$('.menu_list a').on('click', function (e) {
    $('.menu-btn').removeClass('menu-active');
    $('.menu_list').removeClass('menu-active');
});
$(document).ready(function() {
    $("a.anchor").click(function() {
        var elementClick = $(this).attr("href")
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({
            scrollTop: destination
        }, 900);
        return false;
    });})