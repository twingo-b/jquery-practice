$(function () {
    // move to top
    $('#move_to_top').click(function () {
        $('html,body').animate({scrollTop: 0}, 'slow');
    });
    // move to bottom
    $('#move_to_bottom').click(function () {
        $('html,body').animate({scrollTop: $(document).height()}, 'slow');
    });
});