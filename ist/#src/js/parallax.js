
let blockParallax = $('.main--parallax .section-ban');
let mainBlock = $('.main--parallax');

function blocksParallax() {
	blockParallax.css({
		"width": `100%`,
		"position": "fixed",
		"top": "0",
		"left": "0",
		"margin-top": "0"
	});
	mainBlock.css({
		"padding-top": `${blockParallax.outerHeight()}px`
	});
}
$(document).ready(function () {
blocksParallax()
	
});

$(window).resize(blocksParallax);