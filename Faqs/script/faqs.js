var currentState = true;
$('#three_dotted').on('click', function(){
    $('#faq-left-nav-bar, .cross_icon').removeClass('display_none');
    $('#faq-left-nav-bar').addClass('left-nav-toggle');
    $('#toggle-bar').addClass('display_none');
    $('#cross-nav').removeClass('hide');
});

$('.cross_icon span').click(function(){
    $('#faq-left-nav-bar').removeClass('left-nav-toggle');
    $('#toggle-bar').removeClass('display_none');
    $('#faq-left-nav-bar').addClass('display_none');
});

$('.panelToggleSec').on('click', function(){
    if(currentState === true){
        $(this).find( "span i").removeClass().addClass('fa fa-angle-up');
    }
    else{
        $(this).find( "span i").removeClass().addClass('fa fa-angle-down');
    }
    currentState = !currentState;
});
