//BildSlider

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
	let num = currentClassNum.innerHTML;
	if (num <= 9) {
		currentClassNum.innerHTML = `0${num}`
	}
}

let sliderSlider = new Swiper('._slider', {
	/*
	effect: 'fade',
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	*/
	observer: true,
	observeParents: true,
	slidesPerView: 3,
	// autoHeight: true,
	speed: 800,
	spaceBetween: 30,
	//touchRatio: 0,
	//simulateTouch: false,
	//loop: true,
	//preloadImages: false,
	//lazy: true,
	// Dotts
	pagination: {
		el: '.swiper-pagination',
		type: 'progressbar'
		// clickable: true,
	},
	// Arrows
	// navigation: {
	// 	nextEl: '.about__more .more__item_next',
	// 	prevEl: '.about__more .more__item_prev',
	// },

	breakpoints: {
		0: {
			slidesPerView: 1,
			spaceBetween: 5,
			autoHeight: true,

		},

		527: {
			slidesPerView: 1,
			spaceBetween: 15,
			autoHeight: true,

		},
		768: {
			slidesPerView: 1,
			spaceBetween: 15,
			autoHeight: false,

		},
		840: {
			slidesPerView: 2,
			spaceBetween: 15,
			autoHeight: false,

		},

		1171: {
			slidesPerView: 3,
			spaceBetween: 30,
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

let timingSeo = new Swiper('.timingSeo-slider', {
	/*
	effect: 'fade',
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	*/
	observer: true,
	observeParents: true,
	slidesPerView: 2,
	// autoHeight: true,
	speed: 800,
	spaceBetween: 30,
	slidesPerGroup: 1,
	//touchRatio: 0,
	//simulateTouch: false,
	//loop: true,
	//preloadImages: false,
	//lazy: true,
	// Dotts
	// pagination: {
	// 	el: '.swiper-pagination',
	// 	type: 'progressbar'
	// 	// clickable: true,
	// },
	// Arrows
	navigation: {
		nextEl: '.timingSeo__arrows .timingSeo__arrows_next',
		prevEl: '.timingSeo__arrows  .timingSeo__arrows_prev',
	},
	// pagination: {
	// 	el: '.swiper-pagination--number',
	// 	// clickable: true,
	// 	type: 'fraction',
	// 	// Кастомный вывод фракции
	// 	renderFraction: function (currentClass, totalClass) {

	// 		return '<span class="' + currentClass + '"> </span>' +
	// 			'/' +
	// 			'<span class="' + totalClass + '"> </span>';
	// 	},
	// },

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

	observer: true,
	observeParents: true,
	slidesPerView: 3,
	speed: 800,
	spaceBetween: 30,
	slidesPerGroup: 3,

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
		init: function () {

		},
		slideChange: function () {
			numberZero(document.querySelector('.swiper-pagination-current'));
			numberZero(document.querySelector('.swiper-pagination-total'));
		},
	},

});

numberZero(document.querySelector('.swiper-pagination-current'));
numberZero(document.querySelector('.swiper-pagination-total'));

let sliderBlock = document.querySelector('._slider');

sliderBlock.addEventListener("mouseenter", function (e) {
	sliderSlider.params.autoplay.disableOnInteraction = false;
	sliderSlider.params.autoplay.delay = 1500;
	sliderSlider.autoplay.start();
});
sliderBlock.addEventListener("mouseleave", function (e) {
	sliderSlider.autoplay.stop();
});



if (windowWidth < 992) {
	let mainGoalsSlider = new Swiper('.mainGoals-slider', {
		/*
		effect: 'fade',
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		*/
		observer: true,
		observeParents: true,
		slidesPerView: 1,
		// autoHeight: true,
		speed: 800,
		spaceBetween: 15,
		slidesPerGroup: 1,
		//touchRatio: 0,
		//simulateTouch: false,
		//loop: true,
		//preloadImages: false,
		//lazy: true,
		// Dotts
		// pagination: {
		// 	el: '.swiper-pagination',
		// 	type: 'progressbar'
		// 	// clickable: true,
		// },
		// Arrows
		navigation: {
		nextEl: '.slider-arrows ._mainGoals__arrow-next',
		prevEl: '.slider-arrows ._mainGoals__arrow-prev',
		},
		// pagination: {
		// 	el: '.swiper-pagination--number',
		// 	// clickable: true,
		// 	type: 'fraction',
		// 	// Кастомный вывод фракции
		// 	renderFraction: function (currentClass, totalClass) {

		// 		return '<span class="' + currentClass + '"> </span>' +
		// 			'/' +
		// 			'<span class="' + totalClass + '"> </span>';
		// 	},
		// },

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



let CasesSliders = new Swiper('._cases-sliders', {
	/*
	effect: 'fade',
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	*/
	observer: true,
	observeParents: true,
	slidesPerView: 1,
	// autoHeight: true,
	speed: 800,
	// spaceBetween: 30,
	autoHeight: true,

	//touchRatio: 0,
	//simulateTouch: false,
	//loop: true,
	//preloadImages: false,
	//lazy: true,
	// Dotts
	pagination: {
		el: '._cases__progress-bar',
		type: 'progressbar'
		// clickable: true,
	},
	// Arrows
	navigation: {
		nextEl: '.slider-arrows ._cases__arrow-next',
		prevEl: '.slider-arrows ._cases__arrow-prev',
	},

	// breakpoints: {
	// 	0: {
	// 		slidesPerView: 1,
	// 		spaceBetween: 5,

	// 	},

	// 	527: {
	// 		slidesPerView: 1,
	// 		spaceBetween: 15,
	// 		autoHeight: true,

	// 	},
	// 	768: {
	// 		slidesPerView: 1,
	// 		spaceBetween: 15,
	// 		autoHeight: false,

	// 	},
	// 	840: {
	// 		slidesPerView: 2,
	// 		spaceBetween: 15,
	// 		autoHeight: false,

	// 	},

	// 	1171: {
	// 		slidesPerView: 3,
	// 		spaceBetween: 30,
	// 	},
	// },

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