//----------------------------------------------------------------------

$(function () {
	let iframeVideo = $('iframe');

	function adaptivIframe(iframeBlock) {
		for (let i = 0; i < iframeBlock.length; i++) {
			const video = iframeBlock[i];
			$(video).css({ 'position': 'absolute', 'width': '100%', 'height': '100%', 'top': '0', 'left': '0' });
			$(video).wrapAll('<div class="adaptive-video js-videoWrapper" style=" position: relative; width: 100%; padding: 26% 0; height: 100%;">');

		}
	}

	function videoPlay(wrapper) {
		let iframe = wrapper.find('iframe');
		let src = iframe.data('src');
		iframe.attr('src', src + '?rel=0&showinfo=0&autoplay=1&loop=0&egm=0&border=0&fs=0&modestbranding=1&showinfo=0&cc_load_policy=0&iv_load_policy=3&showinfo=0&controls=2');
		$('.videoPoster').css({ 'opacity': '0', 'visibility': 'hidden', });

	}

	adaptivIframe(iframeVideo);

	$('.js-videoWrapper').append(`
	<button class="videoPoster js-videoPoster">
	<svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M37.4999 0C16.7893 0 0 16.7893 0 37.4999C0 58.2105 16.7893 74.9998 37.4999 74.9998C58.2105 74.9998 74.9998 58.2105 74.9998 37.4999C74.9779 16.7986 58.2014 0.0221296 37.4999 0ZM53.2926 38.6948C53.033 39.2155 52.611 39.6377 52.0901 39.8973V39.9106L30.6616 50.625C29.3382 51.2862 27.7295 50.7496 27.0681 49.4262C26.8801 49.05 26.7832 48.6347 26.7856 48.2143V26.7857C26.785 25.3064 27.9836 24.1067 29.463 24.1059C29.879 24.1057 30.2894 24.2024 30.6616 24.3884L52.0901 35.1027C53.4141 35.7625 53.9526 37.3708 53.2926 38.6948Z" fill="white"/>
	</svg>
	</button>`)

	$(document).on('click', '.js-videoPoster', function (e) {
		e.preventDefault();
		let poster = $(this);
		let wrapper = poster.closest('.js-videoWrapper');
		videoPlay(wrapper);

	});
})

//----------------------------------------------------------------------
function slider(sliderBlock, num) {
	// $(sliderBlock).filter('.slick-initialized').slick('unslick');
	$(sliderBlock).parents('._parent-slider').find('._title-slider').append(`<div class="box-arrows"></div>`);
	let boxArrow = $(sliderBlock).parents('._parent-slider').find('.box-arrows');
	$(sliderBlock).slick({
		infinite: true,
		dots: false,
		slidesToShow: num,
		slidesToScroll: 1,
		adaptiveHeight: true,
		arrows: true,
		appendArrows: boxArrow,
		prevArrow: '<div class="slick-arrow slick-arrow__left"><svg width="26" height="16" viewBox="0 0 26 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.292892 8.70711C-0.0976315 8.31658 -0.0976315 7.68342 0.292892 7.29289L6.65685 0.928932C7.04738 0.538408 7.68054 0.538408 8.07107 0.928932C8.46159 1.31946 8.46159 1.95262 8.07107 2.34315L2.41421 8L8.07107 13.6569C8.46159 14.0474 8.46159 14.6805 8.07107 15.0711C7.68054 15.4616 7.04738 15.4616 6.65685 15.0711L0.292892 8.70711ZM26 9H1V7H26V9Z" fill="#F45959"/></svg></div>',
		nextArrow: '<div class="slick-arrow slick-arrow__right"><svg width="26" height="16" viewBox="0 0 26 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25.7071 8.70711C26.0976 8.31658 26.0976 7.68342 25.7071 7.29289L19.3431 0.928932C18.9526 0.538408 18.3195 0.538408 17.9289 0.928932C17.5384 1.31946 17.5384 1.95262 17.9289 2.34315L23.5858 8L17.9289 13.6569C17.5384 14.0474 17.5384 14.6805 17.9289 15.0711C18.3195 15.4616 18.9526 15.4616 19.3431 15.0711L25.7071 8.70711ZM0 9H25V7H0V9Z" fill="#F45959"/></svg></div>',
	});
}

// check num slider 
function sliderShow(params) {
	for (let i = 0; i < $(params).length; i++) {
		const sliderBox = $(params)[i];
		let itemNum = +$(sliderBox).children('.slider-item').length,
			widthDesNum = +$(sliderBox).attr("data-widthDes"),
			widthTabNum = +$(sliderBox).attr("data-widthTab"),
			widthMob = +$(sliderBox).attr("data-widthMob");
		if (widthDesNum < itemNum && $(window).width() > 991) {
			slider(sliderBox, widthDesNum)
		} else if (widthTabNum <= itemNum && 526 < $(window).width() && $(window).width() <= 991) {
			slider(sliderBox, widthTabNum)
		} else if (widthMob <= itemNum && 526 > $(window).width()) {
			slider(sliderBox, widthMob)
		} else {
			console.log("not slider")
		}
	}
}

//----------------------------------------------------------------------

function showModalGallery(block) {
	let modalGallery = $('.modal-gallery'),
		modalGalleryTitle = $('.modal-gallery .modal-title'),
		modalGalleryColNum = $('.modal-gallery .galleryNum-js'),
		modalGalleryContent = $('.modal-gallery .modal-content__info'),
		modalGallerySlider = $('.modal-gallery .modal-slider__row'),
		modalPoster = $('.modal-gallery .js-videoPoster'),
		modalVideo = $('.modal-gallery iframe'),
		modalGalleryHtml = '',
		urlImg = $(block).attr('data-gallery');

	if (urlImg !== "" && !!urlImg) {
		$(block).find('.gallery-number').html(`(${urlImg.split(',').length})`)
	}

	$(block).click(function () {
		modalGalleryTitle.html($(block).find('.serv-box__title').html());
		modalGalleryContent.html($(block).find('.serv-box__modalText').html());
		modalGalleryColNum.html($(block).find('.gallery-number').html());
		modalGalleryHtml = '';

		$('body').addClass('active');
		$('.wrapper').addClass('active');
		$('.main').addClass('active');
		$('.modal-overlay, .modal-gallery').addClass('active');
		let urlVideo = $(block).attr('data-urlVideo');

		

		if (urlImg !== "" && !!urlImg) {
			$('.phote-js').show()
			$.each(urlImg.split(','), function (i, val) {
				modalGalleryHtml += `
				<div class="modal-slider__col slider-item">
					<a class="modal-slider__box" class="fancybox" data-fancybox="modalImg" href="${val}">
						<div class="modal-slider__img">
							<img src="${val}"  alt=""  loading="lazy">
						</div>
					</a>
				</div>
				`
			});
			modalGallerySlider.html(modalGalleryHtml);
			sliderShow(modalGallery.find('.sliderModal--js'));

		} else {
			$('.phote-js').hide();
		}

		if (urlVideo !== "" && !!urlVideo) {
			$('.video-js').show();
			modalPoster.css('background-image', `url(${$(block).attr('data-urlposter')})`);
			modalVideo.attr('data-src', urlVideo);
			modalVideo.attr('src', '');
		} else {
			$('.video-js').hide();
		}
		return false
	});

	function closeModal() {
		modalGalleryTitle.html('');
	modalGalleryContent.html('');
	modalGalleryColNum.html('');
	if (modalGallerySlider.hasClass('slick-slider')) {
		modalGallerySlider.slick('unslick');
	}
	modalGallerySlider.html('');
	$('body').removeClass('active');
	$('.wrapper').removeClass('active');
	$('.main').removeClass('active');
	$('.modal-overlay, .modal-gallery').removeClass('active');
	$('.videoPoster').css({ 'opacity': '1', 'visibility': 'visible', });
	modalVideo.attr('src', '');
	modalGallery.find('.box-arrows').remove()
	}
	$('.modal-gallery .close-js').click(function () {
		closeModal()
	});

	$(".modal-overlay").on('click', function (e) {
		if (e.target == this) {
			closeModal()

		}
	});
}

$(".fancybox").fancybox({
	openEffect: 'none',
	closeEffect: 'none',
	helpers: {
		media: {}
	}
})

$(function () {
	let servBoxs = $('.serv-box--js');

	for (let i = 0; i < servBoxs.length; i++) {
		const servBox = servBoxs[i];
		let childServBox = $(servBox).find('.serv-box__number');
		if (i + 1 <= 9) {
			childServBox.html(`0${i + 1}`);
		} else {
			childServBox.html(`${i + 1}`);
		}
		showModalGallery(servBox);
	}


})