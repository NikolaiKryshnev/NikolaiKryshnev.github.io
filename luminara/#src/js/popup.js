function showModla(modal, btn) {
	btn.click(function (e) {
		e.preventDefault();
		$('.modal').removeClass('active');
		$('body').addClass('active');
		$('.wrapper').addClass('active');
		$('.main').addClass('active');
		modal.addClass('active');
	});

	$('.close-js').click(function (e) {
		e.preventDefault();
		$('body').removeClass('active');
		$('.wrapper').removeClass('active');
		$('.main').removeClass('active');
		modal.removeClass('active');
	});

	$(".modal-overlay").on('click', function (e) {
		if (e.target == this) {
			$('body').removeClass('active');
			$('.wrapper').removeClass('active');
			$('.main').removeClass('active');
			modal.removeClass('active');
		}
	});
}

showModla($('.modal-overlay, .modal-form'), $('.popupBtn-js'));
showModla($('.modal-overlay, .modal-reviews'), $('.reviewsBtn-js'));
