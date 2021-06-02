
function posElFixed(posElFixed, heightEl, marginEl) {
	if ($(window).scrollTop() >= heightEl.height()) {
		posElFixed.css({
			"position": "fixed",
			"width": "100%",
			"top": "0",
			"z-index": "999"
		});
		marginEl.css( "margin-top", `${posElFixed.height()}px` )
	}
	else {
		posElFixed.css({ "position": "relative" });
		marginEl.css( "margin-top", "0px" )
	}
}

$(window).scroll(function () {
	posElFixed($('.header'), $('.pos-js'), $('.main'))
});

