//<POPUP>---------------------------------------

function modal(btn, modal) {

	btn.click(function () {
		modal.addClass('active');
		$('.wrapper').addClass('active');

	});

	$('.close-js').click(function () {
		modal.removeClass('active');
	});
	
	$(".modal-overlay").on('click', function (e) {
		if (e.target == this) {
			modal.removeClass('active');
			$('.wrapper').removeClass('active');

		}

	});
}

modal($('.btnPhone-js'), $('.modal-overlay, .modalTel-js'))
modal($('.btnReviews-js'), $('.modal-overlay, .modalReviews-js'))



//</POPUP>---------------------------------------
