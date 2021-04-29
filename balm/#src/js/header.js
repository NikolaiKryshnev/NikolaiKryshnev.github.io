
function showBlockHeader() {
	let parentBlock = $('.parent-js');
	let clickShow = $('.clickShow-js');

	$.each($(clickShow), function (index, value) {
		$(this).on('click', function (e) {
			if ($(this).parent('.parent-js').hasClass('active') !== true) {
				$('.child-js').fadeOut(200);
				parentBlock.removeClass('active');

				$(this).parent('.parent-js').addClass('active');
				$(this).siblings('.child-js').fadeIn(200);
			} else {
				$('.child-js').fadeOut(200);
				parentBlock.removeClass('active');
			}
		});
		$('.close').on('click', function (e) {
			$('.child-js').fadeOut(200);
			parentBlock.removeClass('active');
		});
	});
}



function appendBloks(el, blockMinWidth, blockMaxWidth) {
	if ($(window).width() < 992) {
		el.appendTo(blockMinWidth)
	} else {
		el.appendTo(blockMaxWidth)
	}
}


function subMenuMob() {
	let linkSubMenu = $('.parentSub-js');
	$.each(linkSubMenu, function (i, val) {
		if ($(window).width() < 992 && $(this).children('.menuSub-js').length > 0) {
			if ($(this).children('a').children('.arrow-menu').length < 1) {
				$(this).children('a').append(`<div class="arrow-menu"></div>`);
			}
		}
		$(this).find('.arrow-menu').on('click', function (e) {
			if ($(this).is('.arrow-menu') == true) {
				e.preventDefault();


				if ($(this).hasClass('active') !== true) {
					linkSubMenu.children('a').removeClass('active');
					$(this).parents('.parentSub-js').siblings('.parentSub-js').children('.arrow-menu').removeClass('active');
					$(this).parents('.parentSub-js').siblings('.parentSub-js').children('.menuSub-js').hide();

					$(this).addClass('active');
					$(this).parents('a').addClass('active');
					$(this).parents('a').siblings('.menuSub-js').show();
				} else {
					$(this).removeClass('active');
					$(this).parents('a').removeClass('active');
					$(this).parents('a').siblings('.menuSub-js').hide();

				}
			}
		});

	});
}

$('.js-tab-trigger').click(function () {
	var id = $(this).attr('data-tab'),
		content = $('.js-tab-content[data-tab="' + id + '"]');

	$('.js-tab-trigger.active').removeClass('active');
	$(this).addClass('active');

	$('.js-tab-content.active').removeClass('active');
	content.addClass('active');
});
///---------------------------------------------------------------------------

// Сортировка списка 
$.fn.sortList = function () {
	let mylist = $(this);
	let listitems = $('a', mylist).get();
	listitems.sort(function (a, b) {

		let compA = $(a).text().toUpperCase();
		let compB = $(b).text().toUpperCase();

		return (compA < compB) ? -1 : 1;
	});
	$.each(listitems, function (i, itm) {
		mylist.append(itm);

	});
}


// data work
function wordOne(params) {
	let abcSorting = $('.abc-sorting a');
	$.each(abcSorting, function (i, val) {
		$(this).attr('data-work', $(this).text().toUpperCase().substr(0, 1));
	});

	$.each(abcSorting, function (i, val) {
		let className = $(this).attr('data-work');

		if ($(this).parent().hasClass(`brandABC-${className}`) !== true) {
			$(`.abc-sorting a[data-work="${className}"`).wrapAll(`<div class="brand-box brandABC-${className}" id="abc-${className.toLowerCase()}"></div>`);
			$(`.brandABC-${className}`).prepend(`<div class="abs-title">${className}</div>`);
		}
	});
	scrollAnimation()


}

// animation scroll
function scrollAnimation() {

	$(".brand-abc a").each(function () {
		if ($($(this).attr('href')).hasClass('brand-box') !== true) {
			$(this).addClass('disabled')
		}
	});

	$(".brand-abc").on("click", "a", function (e) {
		e.preventDefault();
		$(".brand-abc a").removeAttr("style")
		if($(this).hasClass('disabled') !== true){$(this).css({'color':'#cca75d'});}

		let id = $(this).attr('href');
		if ($(id).hasClass('brand-box') == true) {
			let Eltop = $(id).position();

			$('.abs-title').removeAttr("style")
			$(id).children('.abs-title').css({'color':'#cca75d'});

			$('.brand-abc_box').animate({ scrollTop: Eltop.top }, 500);
		}
		return
	});
}

$(".abc-sorting").sortList();
wordOne()

///---------------------------------------------------------------------------

showBlockHeader()
appendBloks($('.form-search'), $('.header-bot'), $('.header-top'))
appendBloks($('.header-menu'), $('.mobTab-content--categ'), $('.header-nav'))
subMenuMob()

$(window).resize(function () {
	appendBloks($('.form-search'), $('.header-bot'), $('.header-top'))
	appendBloks($('.header-menu'), $('.mobTab-content--categ'), $('.header-nav'))
	subMenuMob()

});



