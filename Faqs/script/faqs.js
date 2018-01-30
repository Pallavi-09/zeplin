$(document).ready(function(){
    if ($(window).width() <= 1000) {   
        $('#three_dotted').on('click', function(){
            $('#faq-left-nav-bar, .cross_icon').removeClass('display_none');
            $('#faq-left-nav-bar').addClass('left-nav-toggle');
            $('#toggle-bar').addClass('display_none');
        });
    }

    $('.cross_icon span').click(function(){
        $('#faq-left-nav-bar').removeClass('left-nav-toggle');
        $('#toggle-bar').removeClass('display_none');
        $('#faq-left-nav-bar').addClass('display_none');
    });

});  
