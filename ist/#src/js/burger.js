$(function () {
	function showBlockClick(btn, block, main) {
		btn.click(function (e) {
			e.preventDefault();
			btn.addClass('active');
			block.addClass('active');
			main.addClass('active');
			$('.wrapper').addClass('active');

		})
		main.on('click', function (e) {
			if (e.target == this) {
				$('.header').removeClass('active');
				btn.removeClass('active');
				block.removeClass('active');
				main.removeClass('active');
				$('.wrapper').removeClass('active');

			}


		});
		
		$('.burgerClose-js').click(function () {
			$('.header').removeClass('active');
				btn.removeClass('active');
				block.removeClass('active');
				main.removeClass('active');
				$('.wrapper').removeClass('active');

		})
	}
	showBlockClick($('.burger-js'), $('.header-menu--js'), $('.main'))

})