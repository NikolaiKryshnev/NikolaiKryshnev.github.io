//<POPUP>---------------------------------------

function modals(modal, btn) {
	btn.click(function () {
		modal.addClass('active');
		$('.wrapper').addClass('active');

	});

	$('.close-js').click(function () {
		$('.wrapper').removeClass('active');
		modal.removeClass('active');
	});

	$(".modal-overlay").on('click', function (e) {
		if (e.target == this) {
			modal.removeClass('active');
			$('.wrapper').removeClass('active');

		}

	});
}
modals($('.modal-overlay, .modal--tel'), $('.popupBtn-js'));
modals($('.modal-overlay, .modal--form'), $('.faq-btn-js'));
modals($('.modal-overlay, .modal--vacancies'), $('.btn-vacancies-js'));

//</POPUP>---------------------------------------

//<Sidebar width 991>---------------------------------------


if (width >= 992) {

} else {
	$('.sidebar-js').appendTo($('.modal-overlay'));
	modals($('.modal-overlay, .sidebar-js'), $('.btnSidebar-js'));
}

//</Sidebar width 991>---------------------------------------





