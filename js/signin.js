$(document).ready(function() {
});

$('input').focusout(function(){
    if($(this).val().indexOf('@')>-1 &&(this).val().indexOf('.')>-1){
        $('.in').html("Valid email");
    }
    else{
        $('.in').html("Invalid email.Please try again");
    }
});
