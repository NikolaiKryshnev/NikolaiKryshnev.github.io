function showModla(modal, btn) {
	btn.click(function () {
		$('body').addClass('active');
		$('.wrapper').addClass('active');
		modal.addClass('active');
		return false
	});

	$('.close-js').click(function () {
		$('body').removeClass('active');
		$('.wrapper').removeClass('active');
		modal.removeClass('active');
	});

	$(".modal-overlay").on('click', function (e) {
		if (e.target == this) {
			$('body').removeClass('active');
			$('.wrapper').removeClass('active');
			modal.removeClass('active');
		}
	});
}

showModla($('.modal-overlay, .modal--form'), $('.popupBtn-js'));