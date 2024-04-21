if ($(window).width() < 992) {
	$('.filterSort-head-js').each(function (i, val) {
		$(this).on('click', function (e) {
			if ($(this).hasClass('active') !== true) {
				$('.filterSort-head-js').removeClass('active');
				$('.filterSort-body-js').not($(this).next()).fadeOut(200);
				$(this).addClass('active').siblings('.filterSort-body-js').fadeIn(200);
			} else {
				$(this).removeClass('active').siblings('.filterSort-body-js').fadeOut(200);
			}
	
			$(document).click(function (e) {
				if (!$('.filterSort-head-js').is(e.target) && !$('.filterSort-body-js').is(e.target) && $('.filterSort-body-js').has(e.target).length === 0) {
					$('.filterSort-head-js').removeClass('active').siblings('.filterSort-body-js').fadeOut(200);
				};
			});
		});
	});
	$('.sidebar-filter__title--mb').on('click', function (e) {
		if ($(this).hasClass('active') !== true) {
			$('.filter-form').fadeIn(200);
			$(this).addClass('active');
		} else {
			$('.filter-form').fadeOut(200);
			$(this).removeClass('active');
		}
	});
	
	$(document).click(function (e) {
		if (!$('.sidebar-filter__title--mb').is(e.target) && !$('.filter-form').is(e.target) && $('.filter-form').has(e.target).length === 0) {
			$('.filter-form').fadeOut(200);
			$('.sidebar-filter__title--mb').removeClass('active');
		};
	});
}