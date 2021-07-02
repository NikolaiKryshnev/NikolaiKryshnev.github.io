
$(document).ready(function () {
	function f_acc() {



		$('.acc-js .acc-box .acc-body-js').not($(this).next()).slideUp(300);
		$(this).next().slideToggle(300);

		$(this).parents('.acc-box').siblings('.active').removeClass('active');
		$(this).parents('.acc-box').toggleClass('active');

		let clickBtn = $(this).parents('.acc-box').find('.filter-content__btn[data-filter=".all"]');
		$(clickBtn).trigger('click').addClass('active');

	}

	$('.acc-js .acc-box .acc-head-js').on('click', f_acc);

	function tabs(itemhead, itembody, parent) {

		itemhead.click(function () {
			var id = $(this).attr('data-tab'),
				content = $(`${itembody}[data-tab="${id}"]`);
			$(this).siblings('.active').removeClass('active');
			$(this).addClass('active');
			$(this).siblings('.js-tab-trigger.active').removeClass('active');
			$(content).siblings('.active').removeClass('active');
			$(content).addClass('active');
			let clickBtn = $(content).find('.filter-content__btn[data-filter=".all"]');
			$(clickBtn).trigger('click').addClass('active');

		});
	}
	tabs($('.js-tab-parent-trigger'), '.js-tab-parent-content')
	tabs($('.js-tab-child-trigger'), '.js-tab-child-content')


	function filterGrid(filterBodyRow, filterItem, filterContentBtn) {

		let grid = new Isotope(`.${filterBodyRow}`, {
			itemSelector: `.${filterItem}`,
			layoutMode: 'fitRows'
		});

		let filterBtn = filterContentBtn;

		$(filterBtn).each(function (i, val) {
			val.onclick = function (click) {
				$(filterBtn).removeClass('active')
				let filterData = event.target.getAttribute('data-filter');
				$(filterData).each(function (i, val) {
					$(val).removeClass('active')
				});

				$(event.target).addClass('active');

				grid.arrange({
					filter: filterData
				});

			};
		});

	}

	filterGrid()

	$('.filter-content').each(function (i, val) {
		$(val).addClass(`filter-content-${i + 1}`);
		$(val).find('.filter-body__row').addClass(`filter-body__row-${i + 1}`);
		$(val).find('.filter-item').addClass(`filter-item-${i + 1}`);
		let filterBodyRow = `filter-body__row-${i + 1}`,
			filterItem = `filter-item-${i + 1}`

		filterGrid(filterBodyRow, filterItem, $(val).find('.filter-content__btn'))
	});

	if ($(window).width() <= 768) {
		$('.icon-plus').on('click', function (e) {
			$('.menu-sub').toggleClass('active')
			$(this).toggleClass('active')

		});
	}

$('.icon-search').on('click', function (e) {
	$('.search-box').toggleClass('active')

});

$('.btn-close').on('click', function (e) {
	$('.search-box').removeClass('active')

});

});	