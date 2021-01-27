// ----------------------------------------------
//  ADVANTAGES - media hide block 
// ----------------------------------------------

if ($(window).width() <= 526) {
	$(".advantages-column").each(function (i, elem) {
		// console.log(i)
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
// if(document.querySelectorAll('.dot-js')){
// let blockText = document.querySelectorAll('.itinerary-block'),
// 	dot = document.querySelector('.desktop').querySelectorAll('.dot-js');

// function posElem(element) {
// 	let parentPos = document.querySelector('.itinerary-blocks').getBoundingClientRect(),
// 		childrenPos = element,
// 		relativePos = {};

// 	for (let i = 0; i < childrenPos.length; i++) {
// 		let el = childrenPos[i],
// 			posEl = el.getBoundingClientRect()

// 		relativePos.top = posEl.top - parentPos.top,

// 			relativePos.right = posEl.right - parentPos.right,
// 			relativePos.bottom = posEl.bottom - parentPos.bottom,
// 			relativePos.left = posEl.left - parentPos.left;

// 		blockText[i].setAttribute("style", `left:${relativePos.left}px; top: ${relativePos.top}px;`);
// 	}
// };

// function mapBlockPosition() {
// 	if ($(window).width() > 992) {
// 		posElem(document.querySelector('.desktop').querySelectorAll('.dot-js'))

// 	} else {
// 		posElem(document.querySelector('.tablet').querySelectorAll('.dot-js'))
// 	}
// }

// $(window).resize(mapBlockPosition);
// $(document).ready(function () {
// 	mapBlockPosition()
// });
// }