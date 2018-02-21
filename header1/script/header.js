var currentState = true;
var labelState = true;
$('#nav-bar-icon').on('click', function(){
    $('#show-nav').toggleClass('nav-bar-subicon');
    $('#cross-icon').toggleClass('display-block');
    $('.bar').toggleClass('display_none');
});
$('#user-option').on('click', function(){
    if(currentState === true){
        $('#user-option i').removeClass().addClass('fa fa-angle-up down-icon fa-2x ');
    }
    else{
        $('#user-option i').removeClass().addClass('fa fa-angle-down down-icon fa-2x ');
    }
    currentState = !currentState;
});
$('#alert-icon').on('click', function(){
    var x = ($(this).position().left)-244;
    $('.alert-icon').css('left',x);
    var x1 = window.matchMedia("(max-width: 496px) and (min-width: 371px) ");
    var x2 = window.matchMedia("(max-width: 370px)");
    var x3 = window.matchMedia("(max-width: 740px) and (min-width: 496px)");

    if (x1.matches) {
        var x = ($('#alert-icon').position().left)-178;
        $(".notification-manage").css('left','70%');
        $('.alert-icon').css('left',x);
       
    } 
    if (x2.matches) {
        var x = ($('#alert-icon').position().left)-100;
        $('.alert-icon').css('left',x);
        $(".notification-manage").css('left','47%');
       
    }
    if(x3.matches) {
        $(".notification-manage").css('left','81%');
    }
});

$('#notification-block').on('click', function(){
    console.log('enter');
    $('.notification-manage').toggleClass('hide');
    if(labelState === true){
         $('#alert-icon').attr('src','images/active_notification.png');
    }
    else{
         $('#alert-icon').attr('src','images/alert.png');
    }
   labelState = !labelState;
});

$('#user-option').on('click', function(e){
    var x = ($(this).position().left)+(-233);
    $('.user-option-dropdown').css('left',x);
});


