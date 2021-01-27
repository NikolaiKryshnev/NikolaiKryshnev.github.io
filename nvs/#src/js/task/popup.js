//<POPUP>---------------------------------------

let modal = $('.modal-overlay, .modal');


function showModla(modal, btn) {
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

showModla($('.modal-overlay, .modal--feedback'), $('.popupBtn-js'));
showModla($('.modal-overlay, .modal--reviews'), $('.reviews-slider__block .btn'));


//</POPUP>---------------------------------------
