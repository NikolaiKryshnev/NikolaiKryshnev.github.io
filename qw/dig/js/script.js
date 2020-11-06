
// --------------------------------
// FAQ
// --------------------------------
if ($('.faq--js')) {
	let acrd = $('.faq--js .faq-block__link');
	$(document).ready(function () {
		acrd.on('click', f_acc);
	});

	function f_acc() {
		$('.faq--js .faq-block__content').not($(this).next()).slideUp(500).removeClass('active');
		$(this).next().slideToggle(500).toggleClass('active');

		$('.faq--js .faq-block__link').not($(this)).removeClass('active');
		$(this).toggleClass('active');

	}

}
// --------------------------------
// PopUp
// --------------------------------
if ($('.popUp-js')) {
	$(function () {

		$('.popUp-js').click(function () {
			$('.popUp-js').removeClass('active');
			setTimeout(function () {
				$('.popUp-js').css({ 'visibility': 'hidden' });
			}, 2000);
		})

	})
}


//---------------------------------------------
// Modal
//---------------------------------------------
if ($('.modal')) {
	let modal = $('.modal-overlay, .modalForm-js');

	$('.btn-js').click(function () {
		modal.addClass('active');
	});

	$('.close-modal').click(function () {
		modal.removeClass('active');
	});
}

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
	}
})