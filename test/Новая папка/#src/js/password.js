$('body').on('click', '.password-control', function(){
	if ($('.detailsForm-input input').attr('type') == 'password'){
		$(this).addClass('view');
		$('.detailsForm-input input').attr('type', 'text');
	} else {
		$(this).removeClass('view');
		$('.detailsForm-input input').attr('type', 'password');
	}
	return false;
});