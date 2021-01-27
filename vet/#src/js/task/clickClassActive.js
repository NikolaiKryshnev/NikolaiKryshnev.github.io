//!Sub Menu Active
//---------------------------------------------------------------------------------------------------------------------

let width = $(window).width();
let submenu = $('.header-menu-js > li.submenu-js');
let submenuA = $('.header-menu-js > li.submenu-js > a');

if (width >= 992) {
	submenu.hover(
		function () {
			$(this).addClass('hover');
		},
		function () {
			$(this).removeClass('hover');
		});
} else {
	submenuA.click(function (e) {
		e.preventDefault();
		$(this).toggleClass('active');
		$(this).next().toggleClass('hover');
	})
}


//! show Block Click
//---------------------------------------------------------------------------------------------------------------------
function showBlockClick(btn, block, main) {
	btn.click(function () {
		btn.toggleClass('active');
		block.toggleClass('active');
		main.toggleClass('active');
		
	})
	main.on('click', function (e) {
		if (e.target == this) {
			btn.removeClass('active');
			block.removeClass('active');
			main.removeClass('active');
		}

	});
}
showBlockClick($('.burger-js'), $('.header-menu-js'), $('.main'))
//</showBlockClick >---------------------------------------
