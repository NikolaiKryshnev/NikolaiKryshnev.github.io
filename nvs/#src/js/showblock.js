// ----------------------------------------------
//  ADVANTAGES - media hide block 
// ----------------------------------------------

if ($(window).width() <= 526) {
	$(".advantages-column").each(function (i, elem) {
		console.log(i)
		if (i <= 2) {
			console.log('advantages-column - 2, yes - 3')
		} else {
			$(this).addClass("hide")
		}
	});

	$(".showBlock--js").on('click', function (e) {
		if (e.target == this) {
			$(".advantages-column").removeClass('hide');
			$(this).hide();
		}

	});
}

// ----------------------------------------------
//  ITINERARY - position element section-itinerary
// ----------------------------------------------

let posEl,
	block = $('.itinerary-block');

function positonDot(elem, number) {
	let elements = elem;
	for (let i = 0; i < elements.length; i++) {
		let el = elements[i];
		posEl = $(el).offset()
			$(block[i]).offset({ top: posEl.top + number, left: posEl.left })
	}
}

function mapBlockPosition() {
	if ($(window).width() > 992) {
		positonDot($('.itinerary-line.desktop .dot-js'), +25)
	} else {
		positonDot($('.itinerary-line.tablet .dot-js'), -15)
	}
}

$(window).resize(mapBlockPosition);

$(document).ready(function () {
	mapBlockPosition()
});


