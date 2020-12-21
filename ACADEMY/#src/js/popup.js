//<POPUP>---------------------------------------

let modal = $('.modal-overlay, .modal');

$('.popupBtn-js').click(function () {
	modal.addClass('active');
	$('.wrapper').addClass('blur');
	
});

$('.close-js').click(function () {
	modal.removeClass('active');
	$('.wrapper').removeClass('blur');

});

$(".modal-overlay").on('click', function (e) {
	if (e.target == this) {
		modal.removeClass('active');
		$('.wrapper').removeClass('blur');

	}

});
//</POPUP>---------------------------------------
