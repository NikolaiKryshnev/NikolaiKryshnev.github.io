//<POPUP>---------------------------------------

function showPopup(btn, modal, close) {
	btn.click(function () {
		modal.addClass('active');
		$('.wrapper').addClass('active');
	});
	
	close.click(function () {
		modal.removeClass('active');
	});
}
showPopup($('.popupBtn-js'), $('.modal-overlay, .modal'), $('.close-js'))
//</POPUP>---------------------------------------
