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
    if(labelState === true){
        $(this).attr('src','images/active_notification.png');
    }
    else{
        $(this).attr('src','images/alert.png');
    }
    labelState = !labelState;
});

$('#user-option').on('click', function(e){
    var x = ($(this).position().left)+(-233);
    $('.user-option-dropdown').css('left',x);
});
