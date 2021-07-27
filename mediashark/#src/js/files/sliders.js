

let windowWidth = window.innerWidth;
if (windowWidth < 992) {
	document.querySelector('.mainGoals-slider').classList.add('_swiper');
}

let sliders = document.querySelectorAll('._swiper');
if (sliders) {
	for (let index = 0; index < sliders.length; index++) {
		let slider = sliders[index];
		if (!slider.classList.contains('swiper-bild')) {
			let slider_items = slider.children;
			if (slider_items) {
				for (let index = 0; index < slider_items.length; index++) {
					let el = slider_items[index];
					el.classList.add('swiper-slide');
				}
			}
			let slider_content = slider.innerHTML;
			let slider_wrapper = document.createElement('div');
			slider_wrapper.classList.add('swiper-wrapper');
			slider_wrapper.innerHTML = slider_content;
			slider.innerHTML = '';
			slider.appendChild(slider_wrapper);
			slider.classList.add('swiper-bild');

			if (slider.classList.contains('_swiper_scroll')) {
				let sliderScroll = document.createElement('div');
				sliderScroll.classList.add('swiper-scrollbar');
				slider.appendChild(sliderScroll);
			}
		}
		if (slider.classList.contains('_gallery')) {
			//slider.data('lightGallery').destroy(true);
		}
	}
	sliders_bild_callback();
}


function sliders_bild_callback(params) { }

let sliderScrollItems = document.querySelectorAll('._swiper_scroll');
if (sliderScrollItems.length > 0) {
	for (let index = 0; index < sliderScrollItems.length; index++) {
		const sliderScrollItem = sliderScrollItems[index];
		const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
		const sliderScroll = new Swiper(sliderScrollItem, {
			observer: true,
			observeParents: true,
			direction: 'vertical',
			slidesPerView: 'auto',
			freeMode: true,
			scrollbar: {
				el: sliderScrollBar,
				draggable: true,
				snapOnRelease: false
			},
			mousewheel: {
				releaseOnEdges: true,
			},
		});
		sliderScroll.scrollbar.updateSize();
	}
}


function sliders_bild_callback(params) { }


//num sliders 
function numberZero(currentClassNum) {
	const el = currentClassNum;
	let num = el.innerHTML;
	if (num <= 9) {
		el.innerHTML = `0${num}`
	}
}

function sliderNum(el) {
	// console.log(el.querySelector('.swiper-pagination-current'));

	if (el.querySelector('.swiper-pagination-current') !== null) {
		numberZero(el.querySelector('.swiper-pagination-current'));
		numberZero(el.querySelector('.swiper-pagination-total'));
	}
}

let sliderSwiper = new Swiper('._slider', {

	observer: true,
	observeParents: true,
	slidesPerView: 3,
	speed: 800,
	spaceBetween: 30,

	// pagination: {
	// 	el: '._slider__progress',
	// 	type: 'progressbar',
	// 	draggable: true,

	// },

	scrollbar: {
		el: '._slider__progress',
		draggable: true
	},


	breakpoints: {
		0: {
			slidesPerView: 1,
			spaceBetween: 5,
			autoHeight: true,

		},

		527: {
			slidesPerView: 1,
			spaceBetween: 15,
			// autoHeight: true,

		},
		768: {
			slidesPerView: 1,
			spaceBetween: 15,
			// autoHeight: false,

		},
		840: {
			slidesPerView: 2,
			spaceBetween: 15,
			// autoHeight: false,

		},

		1171: {
			slidesPerView: 3,
			spaceBetween: 30,
			autoHeight: false,

		},
	},

	// Фракция


	on: {
		lazyImageReady: function () {
			ibg();
		},
	}

	// And if we need scrollbar
	//scrollbar: {
	//	el: '.swiper-scrollbar',
	//},
});

let sliderTimingSeo = new Swiper('.timingSeo-slider', {

	observer: true,
	observeParents: true,
	slidesPerView: 2,
	speed: 500,
	spaceBetween: 30,

	navigation: {
		nextEl: '.timingSeo__arrows .timingSeo__arrows_next',
		prevEl: '.timingSeo__arrows  .timingSeo__arrows_prev',
	},

	breakpoints: {

		0: {
			slidesPerView: 1,
			spaceBetween: 15,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		1171: {
			slidesPerView: 2,
			spaceBetween: 30,
		},
	},

	on: {
		lazyImageReady: function () {
			ibg();
		},
		init: function () {

		},
		slideChange: function () {

		},
	},

});

let sliderAboutChoose = new Swiper('.aboutChoose-slider', {

	slidesPerView: 3,
	speed: 800,
	spaceBetween: 30,
	slidesPerGroup: 3,
	// loop: true,
	freeMode: true,
	watchOverflow: true,
	initialSlide: 0,
	slidesPerColumn: 1,
	observer: true,

	navigation: {
		nextEl: '.slider-arrows ._aboutChoose__arrow-next',
		prevEl: '.slider-arrows ._aboutChoose__arrow-prev',
	},
	pagination: {
		el: '._aboutChoose__pagination-number',
		type: 'fraction',
		renderFraction: function (currentClass, totalClass) {

			return '<span class="' + currentClass + '"> </span>' +
				'/' +
				'<span class="' + totalClass + '"> </span>';
		},
	},

	breakpoints: {
		0: {
			slidesPerView: 1,
			spaceBetween: 5,
			autoHeight: false,
			slidesPerGroup: 1,

		},

		527: {
			slidesPerView: 1,
			spaceBetween: 15,
			autoHeight: true,
			slidesPerGroup: 1,


		},
		768: {
			slidesPerView: 1,
			slidesPerGroup: 1,
			spaceBetween: 15,
		},
		992: {
			slidesPerView: 2,
			spaceBetween: 20,
			slidesPerGroup: 2,

		},
		1171: {
			slidesPerView: 3,
			spaceBetween: 30,
			slidesPerGroup: 3,

		},
	},

	on: {
		lazyImageReady: function () {
			ibg();
		},

		slideChange: function () {
			sliderNum(document.querySelector('.aboutChoose'))
		},
		afterInit: function () {
			sliderNum(document.querySelector('.aboutChoose'))

		},
	},

});

let sliderBlock = document.querySelector('._slider');

sliderBlock.addEventListener("mouseenter", function (e) {
	sliderSwiper.params.autoplay.disableOnInteraction = false;
	sliderSwiper.params.autoplay.delay = 1500;
	sliderSwiper.autoplay.start();
});
sliderBlock.addEventListener("mouseleave", function (e) {
	sliderSwiper.autoplay.stop();
});


if (windowWidth < 992) {
	let mainGoalsSlider = new Swiper('.mainGoals-slider', {

		observer: true,
		observeParents: true,
		slidesPerView: 1,
		speed: 800,
		spaceBetween: 15,
		slidesPerGroup: 1,
		navigation: {
			nextEl: '.slider-arrows ._mainGoals__arrow-next',
			prevEl: '.slider-arrows ._mainGoals__arrow-prev',
		},

		breakpoints: {

			0: {
				slidesPerView: 1,
				spaceBetween: 15,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 20,
			},

		},

	});
}

let sliderCases = new Swiper('._cases-sliders', {

	observer: true,
	observeParents: true,
	slidesPerView: 1,
	speed: 800,
	autoHeight: true,
	noSwipingSelector: '._noSwipingSelector',
	// loop: true,

	scrollbar: {
		el: '._cases__progress-bar',
		draggable: true
	},
	navigation: {
		nextEl: '.slider-arrows ._cases__arrow-next',
		prevEl: '.slider-arrows ._cases__arrow-prev',
	},
	pagination: {
		el: '._cases__pagination-number',
		type: 'fraction',
		renderFraction: function (currentClass, totalClass) {
			return '<span class="' + currentClass + '"> </span>' +
				'/' +
				'<span class="' + totalClass + '"> </span>';
		},
	},

	breakpoints: {

		768: {
			onlyExternal: true
		},
	},

	on: {
		lazyImageReady: function () {
			ibg();
		},
		slideNextTransitionEnd: function (swiper) {
			caseSliderShowAnimation()
			if (windowWidth <= 991) {
				const el = document.querySelector('.cases');
				el.scrollIntoView();
			}

		},
		slidePrevTransitionEnd: function (swiper) {
			if (windowWidth <= 991) {
				const el = document.querySelector('.cases');
				el.scrollIntoView();
			}

		},
		scrollbarDragEnd: function (swiper) {
			caseSliderShowAnimation()

		},
		slideChange: function () {
			sliderNum(document.querySelector('.section___cases'))
		},
		afterInit: function () {
			sliderNum(document.querySelector('.section___cases'))

		},
	}
});


let sliderClients = new Swiper('.clients-slider', {

	observer: true,
	observeParents: true,
	slidesPerView: 1,
	speed: 800,
	spaceBetween: 15,
	slidesPerGroup: 1,
	loop: true,

	navigation: {
		nextEl: '.slider-arrows ._clients__arrow-next',
		prevEl: '.slider-arrows ._clients__arrow-prev',
	},
	pagination: {
		el: '._clients__pagination-number',
		type: 'fraction',
		renderFraction: function (currentClass, totalClass) {

			return '<span class="' + currentClass + '"> </span>' +
				'/' +
				'<span class="' + totalClass + '"> </span>';
		},
	},

	breakpoints: {
		0: {
			slidesPerView: 1,
			spaceBetween: 5,
			autoHeight: true,
			slidesPerGroup: 1,

		},

		527: {
			slidesPerView: 1,
			spaceBetween: 15,
			autoHeight: true,
			slidesPerGroup: 1,


		},
		768: {
			slidesPerView: 1,
			slidesPerGroup: 1,
			spaceBetween: 15,
		},

	},

	on: {
		lazyImageReady: function () {
			ibg();
		},


		slideChange: function () {
			sliderNum(document.querySelector('.clients'))
		},
		afterInit: function () {
			sliderNum(document.querySelector('.clients'))

		},

	},
	scrollbar: {
		draggable: true
	},

});

let sliderReviews = new Swiper('.reviews-slider', {

	observer: true,
	observeParents: true,
	slidesPerView: 1,
	speed: 800,
	spaceBetween: 15,
	slidesPerGroup: 1,
	loop: true,

	navigation: {
		nextEl: '.slider-arrows ._reviews__arrow-next',
		prevEl: '.slider-arrows ._reviews__arrow-prev',
	},

	breakpoints: {
		0: {
			scrollbar: {
				el: '._reviews__progress-bar',
				draggable: true
			},
			on: {
				slideChange: function (swiper) {
					reviewsTextMin()
				},
			},

		},

		991: {
			pagination: {
				el: '._reviews__pagination-number',
				type: 'fraction',
				renderFraction: function (currentClass, totalClass) {

					return '<span class="' + currentClass + '"> </span>' +
						'/' +
						'<span class="' + totalClass + '"> </span>';
				},
			},

		},

	},

	on: {
		lazyImageReady: function () {
			ibg();
		},

		slideChange: function () {
			sliderNum(document.querySelector('.reviews'))
			reviewsTextMin()
		},
		afterInit: function () {
			sliderNum(document.querySelector('.reviews'))

		},

	},
	scrollbar: {
		draggable: true
	},

});




