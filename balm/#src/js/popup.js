function showModla(modal, btn) {
	btn.click(function (e) {
		e.preventDefault()
		$('body').addClass('active');
		$('.wrapper').addClass('active');
		$('.main').addClass('active');
		modal.addClass('active');
		return false
	});

	$('.close-js').click(function () {
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

showModla($('.modal-overlay, .modal-pay'), $('.product-pay'));
showModla($('.modal-overlay, .modal-viewing'), $('.btn-viewing'));