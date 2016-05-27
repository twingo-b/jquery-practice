$(function () {
    $('div#top_nav ul li:last-child').click(function () {
        $('div#app_bar').toggleClass('toggle_menu');
    });
});