//---------------------------------------------
// Tabs
//---------------------------------------------

$('.js-tab-trigger').click(function () {
	let idtab = $(this).attr('data-tab'),
		content = $('.js-tab-content[data-tab="' + idtab + '"]');

	$('.js-tab-trigger.active').removeClass('active'); // 1
	$(this).addClass('active'); // 2

	$('.js-tab-content.active').removeClass('active'); // 3
	content.addClass('active'); // 4
});

$('.js-tab-triggerMenu').click(function () {
	let idtabMenu = $(this).attr('data-tabMenu'),
		contentMenu = $('.js-tab-contentMenu[data-tabMenu="' + idtabMenu + '"]');

	$('.js-tab-triggerMenu.active').removeClass('active'); // 1
	$(this).addClass('active'); // 2

	$('.js-tab-contentMenu.active').removeClass('active'); // 3
	contentMenu.addClass('active'); // 4
});