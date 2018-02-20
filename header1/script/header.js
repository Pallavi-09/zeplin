$('#nav-bar-icon').on('click', function(){
    $('#show-nav').toggleClass('nav-bar-subicon');
    $('#cross-icon').toggleClass('display-block');
    $('.bar').toggleClass('display_none');
});
$('#user-option').on('click', function(){
    if(this.currentState === true){
        $('#user-option i').removeClass().addClass('fa fa-angle-up down-icon fa-2x ');
    }
    else{
        $('#user-option i').removeClass().addClass('fa fa-angle-down down-icon fa-2x ');
    }
    this.currentState = !this.currentState;
});
$('#alert-icon').on('click', function(){
    
    console.log(1);
    var x = ($(this).position().left)-244;
    $('.alert-icon').css('left',x);
    if(this.labelState === true){
        $(this).attr('src','assets/images/header/active_notification.png');
    }
    else{
        $(this).attr('src','assets/images/header/alert.png');
    }
    this.labelState = !this.labelState;
});

$('#user-option').on('click', function(e){
    var x = ($(this).position().left)+(-233);
    $('.user-option-dropdown').css('left',x);
});
 