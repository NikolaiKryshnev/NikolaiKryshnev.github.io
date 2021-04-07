
function posElFixed(posElFixed, heightEl, marginEl) {
	if ($(window).scrollTop() >= heightEl.outerHeight()) {
		posElFixed.css({
			"position": "fixed",
			"width": "100%",
			"top": "0",
			"z-index": "99"
		});
		marginEl.css( "margin-top", `${posElFixed.outerHeight()}px` )
	}
	else {
		posElFixed.css({ "position": "relative" });
		marginEl.css( "margin-top", `0px` )

	}
}

$(window).scroll(function () {
	posElFixed($('.header'), $('.pos-js'), $('.main'))
});
posElFixed($('.header'), $('.pos-js'), $('.main'))


