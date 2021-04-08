$(function () {
	$.each($(".reviews-box"), function (i, val) {
		let reviewsBtn = $(val).find('.read-text');
		if (reviewsBtn.length > 0) {
			reviewsBtn.click(function (e) {
				e.preventDefault();
				reviewsBtn.siblings('.reviews-box__com').css('max-height', '999px')
				reviewsBtn.hide()
			});
		}
	});

})