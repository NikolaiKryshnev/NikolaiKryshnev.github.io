// ----------------------------------------------
// BURGER MENU
// ----------------------------------------------

$(function () {
	function showBlockClick(btn, block, main) {
		btn.click(function () {
			btn.toggleClass('active');
			block.toggleClass('active');
			main.toggleClass('active');
			$('.header').toggleClass('active');
			let height = $('header').height();
			if ($('.header-search').hasClass('active')) {
				$('.header-search').css({ 'top': `${height}px` });
			} else {
				$('.header-search').css({ 'top': `0px` });
			}
		})
		main.on('click', function (e) {
			if (e.target == this) {
				if ($('.header-search').hasClass('active')) {
					console.log('search');
					$('.header-search').css({ 'top': `0` });
				}
				$('.header').removeClass('active');
				btn.removeClass('active');
				block.removeClass('active');
				main.removeClass('active');
			}


		});
	}
	showBlockClick($('.burger-js'), $('.header-menu-js'), $('.main'))
	showBlockClick($('.search-icon--js'), $('.header-search'), $('.main'))

})