

$('.close-js').click(function () {
	$('body').removeClass('active');
	$('.wrapper').removeClass('active');
	$('.main').removeClass('active');
	$('.modal-overlay, .modal').removeClass('active');
});

$(".modal-overlay").on('click', function (e) {
	if (e.target == this) {
		$('body').removeClass('active');
		$('.wrapper').removeClass('active');
		$('.main').removeClass('active');
		$('.modal-overlay, .modal').removeClass('active');
	}
});

$("._modalForm").click(function (e) {
	e.preventDefault()
	$('body').addClass('active');
	$('.wrapper').addClass('active');
	$('.modal-overlay, ._modal-form').addClass('active');
	$('._modal-car').removeClass('active');

});



$.each($('.car-block'), function (i, block) {
	$(block).click(function (e) {
		e.preventDefault()
		if($('._modal-car .modal-content__top')){
			$('._modal-car .modal-content__top').find('.car-block__name').remove();
			$('._modal-car .modal-content__top').find('.car-block__subText').remove();
		}
		let blockInfo=  $(block).find('.car-block__title').html();
		let $html  = $('._modal-car .modal-content__top').html();

		$('._modal-car .modal-content__text').html('');
		$('._modal-car .modal-content__js').html('');

		$('._modal-car .modal-content__js').html(blockInfo);
		// $('._modal-car .modal-content__top').html(blockInfo+=$html);
		$('._modal-car .modal-content__text').html($(block).find('.car-info').html());
$('._modal-tech .technology-box__info').html($(block).find('.technology-box__text_full').html());
		$('._modal-car .modal-content__img img').attr('src', `${$(block).attr('data-img')}`);

		if($('._modal-car .modal-content__img source')){
			$('._modal-car .modal-content__img source').attr('srcset', '');
			$('._modal-car .modal-content__img source').attr('srcset', `${$(block).attr('data-img')}`);
			
		}

		$('body').addClass('active');
		$('.wrapper').addClass('active');
		$('.modal-overlay, ._modal-car').addClass('active');
	});
});

$.each($('.technology-box'), function (i, block) {
	$(block).find('.technology-box__info > a').click(function (e) {
		e.preventDefault()
		$('._modal-tech .technology-box__title').html('');
		$('._modal-tech .technology-box__text').html('');
		$('._modal-tech .technology-box__img img').attr('src', '');

		$('._modal-tech .technology-box__title').html($(block).find('.technology-box__title').html());
		$('._modal-tech .technology-box__info').html($(block).find('.technology-box__text_full').html());
		$('._modal-tech .technology-box__img img').attr('src', `${$(block).attr('data-img')}`);

		if($('._modal-tech .technology-box__img source')){
			$('._modal-tech .technology-box__img source').attr('srcset', '');
			$('._modal-tech .technology-box__img source').attr('srcset', `${$(block).attr('data-img')}`);
		}

		$('body').addClass('active');
		$('.wrapper').addClass('active');
		$('.modal-overlay, ._modal-tech').addClass('active');

	});
});