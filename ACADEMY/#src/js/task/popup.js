//<POPUP>---------------------------------------

let modal = $('.modal-overlay, .modal');

$('.popupBtn-js').click(function () {
	modal.addClass('active');
	$('.wrapper').addClass('hidden');
	
});

$('.close-js').click(function () {
	modal.removeClass('active');
	$('.wrapper').relass('hidden');

});

//</POPUP>---------------------------------------
