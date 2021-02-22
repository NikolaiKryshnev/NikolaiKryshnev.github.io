function moveBlock() {
	if ($(window).width() <= 991) {
		$('.style .container').prepend($('.style .section-title'));
	}else{
		$('.style-info').prepend($('.style .section-title'));
	}
}
$(document).ready(function () {
	moveBlock();
});
$(window).resize(function() {
	moveBlock();
});