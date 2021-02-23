function showModla(modal, btn) {
	btn.click(function () {
		$('body').addClass('active');
		$('.wrapper').addClass('active');
		$('.main').addClass('active');
		modal.addClass('active');
	});

	$('.close-js').click(function () {
		$('body').removeClass('active');
		$('.wrapper').removeClass('active');
		$('.main').removeClass('active');
		modal.removeClass('active');
		$('.content-infoExtra').hide();
		$('.infoExtra--show').show()
	});

	$(".modal-overlay").on('click', function (e) {
		if (e.target == this) {
			$('body').removeClass('active');
			$('.wrapper').removeClass('active');
			$('.main').removeClass('active');
			modal.removeClass('active');
			$('.content-infoExtra').hide();
			$('.infoExtra--show').show()
		}
	});

	$('.calcRepeat--js').on('click', function (e) {
		$('body').removeClass('active');
		$('.wrapper').removeClass('active');
		$('.main').removeClass('active');
		modal.removeClass('active');
		$('.content-infoExtra').hide();
		$('.infoExtra--show').show();
		$('#carPrice').val('').focus();
		$('#carType').prop('selectedIndex',0);
		$('#carYear').prop('selectedIndex',0);
	});
}
