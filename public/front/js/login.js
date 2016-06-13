$(function(){
   	init();

    // Check des champ vide pour désactivé le bouton Login (sans valide car trop contraignant)
    $('#login-form input').keyup(function() {

        var empty = false;
        $('#login-form input').each(function() {
            if ($(this).val().length == 0) {
                empty = true;
            }
        });

        if (empty) {
            $('#btn-login').attr('disabled', 'disabled');
        } else {
            $('#btn-login').removeAttr('disabled');
        }
    });

    $('#btn-login').click(function(){
        window.location.href='index.html';
    });
});
	
 function init() {
 	$('.label').on('click', showPassword);
 };
// Permet d'afficher le mot de passe de base crypté
 function showPassword() {

    var key_attr = $('#key').attr('type');
    
    if(key_attr != 'text') {
        
        $('.checkbox').addClass('show');
        $('#key').attr('type', 'text');
        
    } 
    else {
        
        $('.checkbox').removeClass('show');
        $('#key').attr('type', 'password');
        
    }
    
};

