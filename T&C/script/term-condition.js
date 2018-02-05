
$('#three_dotted').on('click', function(){
    $('#term-left-nav-bar, .cross_icon').removeClass('display_none');
    $('#term-left-nav-bar').addClass('left-nav-toggle');
    $('#toggle-bar').addClass('display_none');
    $('#cross-nav').removeClass('hide');
});
$('.cross_icon span').click(function(){
    $('#term-left-nav-bar').removeClass('left-nav-toggle');
    $('#toggle-bar').removeClass('display_none');
    $('#term-left-nav-bar').addClass('display_none');
});