
var userSelect = $('#choose-user');

userSelect.on('keyup', function(){
    if(userSelect.val() != '' && userSelect.val() != 'undefined'){
        $('#login-btn').removeClass('disabled');
    }
    else{
        $('#login-btn').addClass('disabled');
    }
});

$('#login-btn').on('click', function(){
    if($(this).hasClass('disabled')){
        return false;
    }
    else{
        loginCallback(userSelect.val().trim());
    }
});


function loginCallback(userName){
    $.get('/login?alias=' + userName, function(result) {
        // console.log(result);
        window.location.href="/"; 
    });
}
