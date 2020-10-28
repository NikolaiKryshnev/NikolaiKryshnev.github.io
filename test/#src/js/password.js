//---------------------------------------------
// Password
//---------------------------------------------


$('.password-control').click(function (e) {
	e.preventDefault();
	if ($(this).next().attr('type') == 'password') {
		$(this).addClass('view');
		$(this).next().attr('type', 'text');


	} else {
		$(this).removeClass('view');
		$(this).next().attr('type', 'password');


	}
	return false;
})


$('.input-password').click(function (e) {

	if ($('.input-password[value=""]').length) {
		console.log('путсо')
	}
})