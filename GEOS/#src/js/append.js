function appendSlaon() {
	if ($(window).width() < 726) {
		let salonColumn = $('.salon-column')
		for (let i = 0; i < salonColumn.length; i++) {
			const el = salonColumn[i];
			appendBlock($(el).find('.salon-column__row'), $(el).find('.btn--arrow'));
		}
	}
}

if ($('.main').hasClass('main-salon') == true) {

} else {
	$(document).ready(function () {
		appendSlaon()
	});

	$(window).resize(function () {
		appendSlaon()
	});
}