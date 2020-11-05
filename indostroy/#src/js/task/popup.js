//<POPUP>---------------------------------------

let modal = $('.modal-overlay, .modal--tel');
let modalform = $('.modal-overlay, .modal--form');
let modalVacancies = $('.modal-overlay, .modal--vacancies');

let btnVacan = $('.btn-vacancies-js');
let btns = $('.popupBtn-js');
let faqBtn = $('.faq-btn-js');

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
modals(modal, btns);
modals(modalform, faqBtn);
modals(modalVacancies, btnVacan);

//</POPUP>---------------------------------------

//<Sidebar width 991>---------------------------------------


if (width >= 992) {

} else {
	$('.sidebar-js').appendTo($('.modal-overlay'));

	$('.btnSidebar-js').click(function () {
		$('.modal-overlay, .sidebar-js').addClass('active');
		$('.wrapper').addClass('active');

	});
	$('.sidebar-close').click(function () {
		$('.modal-overlay, .sidebar-js').removeClass('active');
	});

}

//</Sidebar width 991>---------------------------------------





