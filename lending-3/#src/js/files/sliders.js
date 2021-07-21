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

let slider_about = new Swiper('.reviews-slider', {
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
	spaceBetween: 0,
	autoHeight: true,
	speed: 800,

	navigation: {
		nextEl: '.reviews-button-next',
		prevEl: '.reviews-button-prev',
	},
	pagination: {
		el: '.swiper-pagination',
		/*
		// Буллеты
		type: 'bullets',
		clickable: true,
		// Динамические буллеты
		dynamicBullets: true,
		// Кастомные буллеты
		renderBullet: function (index, className) {
			return '<span class="' + className + '">' + (index + 1) + '</span>';
		},
		*/

		// Фракция
		type: 'fraction',
		// Кастомный вывод фракции
		renderFraction: function (currentClass, totalClass) {
			return ' <span class="' + currentClass + '"></span>' +
				'  ' +
				'<span class="' + totalClass + '"></span>';
		},

		// Прогрессбар
		//type: 'progressbar'
	},

	breakpoints: {
		// 320: {
		// 	slidesPerView: 1,
		// 	spaceBetween: 0,
		// 	autoHeight: true,
		// },
		// 768: {
		// 	slidesPerView: 2,
		// 	spaceBetween: 20,
		// },
		// 992: {
		// 	slidesPerView: 3,
		// 	spaceBetween: 20,
		// },
		// 1268: {
		// 	slidesPerView: 4,
		// 	spaceBetween: 30,
		// },
	},

	on: {


		slideChange: function () {
			sliderNum(document.querySelector('.reviews'))
		},
		afterInit: function () {
			sliderNum(document.querySelector('.reviews'))

		},
	}
	// And if we need scrollbar
	//scrollbar: {
	//	el: '.swiper-scrollbar',
	//},
});

let sliderWork = new Swiper('.work-row', {
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
	spaceBetween: 0,
	autoHeight: true,
	// loop: true,
	speed: 800,
	freeMode: true,

	navigation: {
		nextEl: '.reviews-button-next',
		prevEl: '.reviews-button-prev',
	},
	

	mousewheel: {
		sensitivity: 1,
	},

	// And if we need scrollbar
	//scrollbar: {
	//	el: '.swiper-scrollbar',
	//},
});
