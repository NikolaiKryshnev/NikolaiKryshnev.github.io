if (window.innerWidth <= 991) {
	let advantages = document.querySelector('._advantages--num'),
		advContainer = document.querySelector('.advantages--num ._container'),
		advantagesInfo = document.querySelector('._advantages--num .advantages__info');
	if (advantages != null) {
		advContainer.prepend(advantagesInfo)
		advContainer.querySelectorAll('.advantages-col')[0].remove();

		let sliderSwiperAdv = document.querySelector('._slider-advantages');
		sliderSwiperAdv.classList.add('_swiper');
	}
}
//BildSlider
let slidersSwiper = document.querySelectorAll('._swiper');
if (slidersSwiper) {
	for (let index = 0; index < slidersSwiper.length; index++) {
		let slider = slidersSwiper[index];
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

let _sliderTechnique = new Swiper('._slider-technique', {
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
	spaceBetween: 0,
	speed: 800,
	spaceBetween: 64,
	//touchRatio: 0,
	//simulateTouch: false,
	//loop: true,
	//preloadImages: false,
	//lazy: true,
	// Dotts
	//pagination: {
	//	el: '.slider-quality__pagging',
	//	clickable: true,
	//},
	// Arrows
	navigation: {
		nextEl: '.technique .swiper-button-next',
		prevEl: '.technique .swiper-button-prev',
	},

	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 15,
		},
		992: {
			slidesPerView: 3,
			spaceBetween: 30,
		},
		1268: {
			slidesPerView: 3,
			spaceBetween: 64,
		},
	},

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

let photeSlide = new Swiper('.phote-slide', {
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
	spaceBetween: 0,
	speed: 800,
	spaceBetween: 64,
	//touchRatio: 0,
	//simulateTouch: false,
	//loop: true,
	//preloadImages: false,
	//lazy: true,
	// Dotts
	//pagination: {
	//	el: '.slider-quality__pagging',
	//	clickable: true,
	//},
	// Arrows
	navigation: {
		nextEl: '.phote .swiper-button-next',
		prevEl: '.phote .swiper-button-prev',
	},

	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 15,
		},
		992: {
			slidesPerView: 2,
			spaceBetween: 30,
		},
		1268: {
			slidesPerView: 2,
			spaceBetween: 64,
		},
	},

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

let sliderTechniqueTwo = new Swiper('._slider-techniqueTwo', {
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
	spaceBetween: 0,
	speed: 800,
	spaceBetween: 64,
	//touchRatio: 0,
	//simulateTouch: false,
	//loop: true,
	//preloadImages: false,
	//lazy: true,
	// Dotts
	//pagination: {
	//	el: '.slider-quality__pagging',
	//	clickable: true,
	//},
	// Arrows
	navigation: {
		nextEl: '.main-body__title .swiper-button-next',
		prevEl: '.main-body__title .swiper-button-prev',
	},

	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 15,
		},
	},

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

let _sliderAdvantages = new Swiper('._slider-advantages._swiper', {
	/*
	effect: 'fade',
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	*/
	observer: true,
	observeParents: true,
	spaceBetween: 0,
	speed: 800,
	spaceBetween: 64,
	//touchRatio: 0,
	//simulateTouch: false,
	//loop: true,
	//preloadImages: false,
	//lazy: true,
	// Dotts
	//pagination: {
	//	el: '.slider-quality__pagging',
	//	clickable: true,
	//},
	// Arrows
	navigation: {
		nextEl: '.advantages--num .swiper-button-next',
		prevEl: '.advantages--num .swiper-button-prev',
	},

	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 15,
		},
		992: {
			slidesPerView: 2,
			spaceBetween: 30,
		},
		1268: {
			slidesPerView: 2,
			spaceBetween: 64,
		},
	},

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

let _reviewSlider = new Swiper('._review-slider', {
	/*
	effect: 'fade',
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	*/
	
	observer: true,
	observeParents: true,
	spaceBetween: 0,
	speed: 800,
	slidesPerView: 1,
	autoHeight: true,
	// spaceBetween: 64,
	//touchRatio: 0,
	//simulateTouch: false,
	//loop: true,
	//preloadImages: false,
	//lazy: true,
	// Dotts
	//pagination: {
	//	el: '.slider-quality__pagging',
	//	clickable: true,
	//},
	// Arrows
	navigation: {
		nextEl: '.review .swiper-button-next',
		prevEl: '.review .swiper-button-prev',
	},

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

let sidebarSlider = new Swiper('._sidebar-slider', {

	// effect: 'fade',
	autoplay: {
		delay: 10000,
		disableOnInteraction: false,
	},

	observer: true,
	observeParents: true,
	slidesPerView: 1,
	spaceBetween: 0,
	speed: 800,
	spaceBetween: 64,
	//touchRatio: 0,
	//simulateTouch: false,
	//loop: true,
	//preloadImages: false,
	//lazy: true,
	// Dotts
	pagination: {
		el: '.sidebar__box .swiper-pagination',
		clickable: true,
	},
	// Arrows
	navigation: {
		nextEl: '.sidebar__box .swiper-button-next',
		prevEl: '.sidebar__box .swiper-button-prev',
	},


});

let sliderSertifikat  = new Swiper('._slider-sertifikat', {
	observer: true,
	observeParents: true,
	slidesPerView: 2,
	spaceBetween: 0,
	speed: 800,
	spaceBetween: 64,
	navigation: {
		nextEl: '.sertifikat-box__slider .swiper-button-next',
		prevEl: '.sertifikat-box__slider .swiper-button-prev',
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 15,
		},
		991: {
			slidesPerView: 3,
			spaceBetween: 15,
		},
	},

});

