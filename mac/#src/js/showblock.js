// function come(elem) {
// 	var docViewTop = $(window).scrollTop(),
// 		docViewBottom = docViewTop + $(window).height(),
// 		elemTop = $(elem).offset().top,
// 		elemBottom = elemTop + $(elem).height();
// 	$(elem).addClass('animation')
// 	return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
// }


// let anBorder = $('.border')
// $(window).scroll(function () {
// 	for (let i = 0; i < anBorder.length; i++) {
// 		const el = anBorder[i];
// 		if (come($(el))) {
// 			console.log('yes');
// 		} else {
// 			console.log('no');
// 			$(el).removeClass('animation')
// 		}
// 	}

// });
