//BildSlider
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

if( window.innerWidth > 991 ){
	let _slideOffer = new Swiper('._slider-offer', {
		navigation: {
			nextEl: '.offer ._slider-offer__next',
			prevEl: '.offer ._slider-offer__prev',
		},
		autoHeight: false,
		slidesPerView: 3,
		watchOverflow: true,
		spaceBetween: 30,
		slidesPerGroup: 1,
		centeredSlides: false,
		initialSlide: 0,
		slidesPerColumn: 1,
		loop: false,
		loopedSlides: 0,
		freeMode: true,
		speed: 800,
		direction: 'horizontal',
		effect: 'slide',
	
		
		preloadImages: false,
		lazy: {
			loadOnTransitionStart: false,
			loadPrevNext: false,
		},
		watchSlidesProgress: true,
		watchSlidesVisibility: true,
		observer: true,

		observeParents: true,
		observeSlideChildren: true,
	
	});
}else{

	let _slideWhy = new Swiper('._slider-why', {
		navigation: {
			nextEl: '.why ._slider-why__next',
			prevEl: '.why ._slider-why__prev',
		},
		autoHeight: false,
		slidesPerView: 2,
		watchOverflow: true,
		spaceBetween: 15,
		slidesPerGroup: 1,
		centeredSlides: false,
		initialSlide: 0,
		slidesPerColumn: 1,
		loop: false,
		loopedSlides: 0,
		freeMode: true,
		speed: 800,
		direction: 'horizontal',
		effect: 'slide',
	
		
		preloadImages: false,
		lazy: {
			loadOnTransitionStart: false,
			loadPrevNext: false,
		},
		watchSlidesProgress: true,
		watchSlidesVisibility: true,
		observer: true,

		observeParents: true,
		observeSlideChildren: true,
		breakpoints: {
			'769': {
				slidesPerView: 2,
			},
			'0': {
				slidesPerView: 1,
			},
			
		},
	});
	
}

let _sliderMade = new Swiper('._slider-made', {
	navigation: {
		nextEl: '.made ._slider-made__next',
		prevEl: '.made ._slider-made__prev',
	},
	autoHeight: false,
	slidesPerView: 2,
	watchOverflow: true,
	spaceBetween: 30,
	slidesPerGroup: 1,
	centeredSlides: false,
	initialSlide: 0,
	slidesPerColumn: 1,
	loop: false,
	loopedSlides: 0,
	freeMode: true,
	speed: 800,
	direction: 'horizontal',
	effect: 'slide',

	
	preloadImages: false,
	lazy: {
		loadOnTransitionStart: false,
		loadPrevNext: false,
	},
	watchSlidesProgress: true,
	watchSlidesVisibility: true,
	observer: true,

	observeParents: true,
	observeSlideChildren: true,
	breakpoints: {
		'769': {
			slidesPerView: 2,
		},
		'0': {
			slidesPerView: 1,
		},
		
	},

});
