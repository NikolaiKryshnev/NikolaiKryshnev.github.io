function showBlockClick(btn, block, main) {
	btn.click(function () {
		btn.toggleClass('active');
		block.toggleClass('active');
		let headerHeight = $('header').height();
		if (block.hasClass('header-menu')) {
			console.log('yes');
			
			block.css({ 'top': `${headerHeight}px` });
			main.toggleClass('active');
		} else {
			main.toggleClass('active');

		}

	});

	// if (closeBtn.hasClass('closeBtn')) {

		$('.search-close--js').click(function () {
			btn.removeClass('active');
			block.removeClass('active');
			main.removeClass('active');
			$('.search-input--js').val('');

		});
	// }

	main.on('click', function (e) {
		if (e.target == this) {
			btn.removeClass('active');
			block.removeClass('active');
			main.removeClass('active');
		}

	});

}
showBlockClick($('.burger--js'), $('.header-menu--js'), $('.main'))

showBlockClick($('.search-btn--js'), $('.header-search--js'), $('.main'))
