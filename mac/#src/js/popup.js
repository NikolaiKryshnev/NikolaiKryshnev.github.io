function showModla(modal, btn) {
	btn.click(function () {
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

function burger(btn, block) {
	btn.click(function () {
		$('.main').toggleClass('active');
		btn.toggleClass('active');
		block.toggleClass('active');


	});

	$(".main").on('click', function (e) {
		if (e.target == this) {
			$('.main').removeClass('active');
			btn.removeClass('active');
			block.removeClass('active');

		}
	});
}

burger($('.burger-js'), $('.header-menu--js'))
showModla($('.modal-overlay, .modal--form'), $('.popupBtn-js'));