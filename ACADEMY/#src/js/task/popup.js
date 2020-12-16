//<POPUP>---------------------------------------

let modal = $('.modal-overlay, .modal');

$('.popupBtn-js').click(function () {
	modal.addClass('active');
	$('.wrapper').addClass('active');
	
});

$('.close-js').click(function () {
	modal.removeClass('active');
});

//</POPUP>---------------------------------------
