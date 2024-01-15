/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, Grid, Pagination, Mousewheel, Thumbs } from 'swiper';

// import Swiper from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
// import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
import 'swiper/scss';
import 'swiper/scss/grid';
import 'swiper/scss/mousewheel';
import 'swiper/scss/thumbs';

if (document.querySelector('.ben__swiper')) {
	var catalogSlider = null;
	var mediaQuerySize = 767.98;

	function catalogSliderInit() {
		if (!catalogSlider) {
			catalogSlider = new Swiper('.ben__swiper', { // Указываем скласс нужного слайдера
				slidesPerView: 1,
				modules: [Grid, Pagination],
				grid: {
					rows: 2,
				},
				spaceBetween: 15,

				pagination: {
					el: '.ben__swiper-pagination',
					clickable: true,
				},
				// on: {
				// 	init: function () { },
				// 	orientationchange: function () { },
				// 	beforeResize: function () {
				// 		let vw = window.innerWidth;
				// 		if (vw > 1000) {
				// 			catalogSlider.params.slidesPerView = 2
				// 			catalogSlider.params.slidesPerColumn = 2
				// 			catalogSlider.params.slidesPerGroup = 2;
				// 		} else {
				// 			catalogSlider.params.slidesPerView = 1
				// 			catalogSlider.params.slidesPerColumn = 2
				// 			catalogSlider.params.slidesPerGroup = 2;
				// 		}
				// 		catalogSlider.init();
				// 	},
				// },

				breakpoints: {
					320: {
						slidesPerView: 1,
					},
					768: {
						slidesPerView: 2,
					},
					992: {
						slidesPerView: 3,
					},
				},
			});
		}
	}

	function catalogSliderDestroy() {
		if (catalogSlider) {
			catalogSlider.destroy();
			catalogSlider = null;
		}
	}

	window.addEventListener("resize", onResizeFunction);

	function onResizeFunction(e) {
		var windowWidth = window.innerWidth;

		// Если ширина экрана меньше или равна mediaQuerySize(1024)
		if (windowWidth <= mediaQuerySize) {
			// Инициализировать слайдер если он ещё не был инициализирован
			catalogSliderInit()
		} else {
			// Уничтожить слайдер если он был инициализирован
			catalogSliderDestroy()
		}
	}

	window.addEventListener("load", onLoadFunction);

	function onLoadFunction(e) {
		var windowWidth = window.innerWidth;

		// Если ширина экрана меньше или равна mediaQuerySize(1024)
		if (windowWidth <= mediaQuerySize) {
			// Инициализировать слайдер если он ещё не был инициализирован
			catalogSliderInit()
		} else {
			// Уничтожить слайдер если он был инициализирован
			catalogSliderDestroy()
		}
	}

}

// Инициализация слайдеров
function initSliders() {
	// Перечень слайдеров
	// Проверяем, есть ли слайдер на стронице
	if (document.querySelector('.swiper')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.swiper', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '._ban-prev',
				nextEl: '._ban-next',
			},

			// Брейкпоинты
			/*
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
			// События
			on: {

			}
		});

	}

	if (document.querySelector('._sliderProduct')) {
		let slidesPerViewNum;
		if (document.querySelector('.productCard')) {
			slidesPerViewNum = 4;
			console.log(slidesPerViewNum);
		} else {
			slidesPerViewNum = 3;
			console.log(slidesPerViewNum);

		}
		// Создаем слайдер
		new Swiper('._sliderProduct', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Pagination, Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: slidesPerViewNum,
			spaceBetween: 30,
			speed: 800,

			pagination: {
				el: '.sliderProduct__swiper-pagination',
				clickable: true,
			},
			navigation: {
				prevEl: '._sliderProduct-prev',
				nextEl: '._sliderProduct-next',
			},

			breakpoints: {
				320: {
					slidesPerView: 2,
					spaceBetween: 15,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 15,
				},
				992: {
					slidesPerView: slidesPerViewNum,
					spaceBetween: 15,
				},
				1268: {
					slidesPerView: slidesPerViewNum,
					spaceBetween: 30,
				},
			},

			// События
			on: {

			}
		});

	}

	if (document.querySelector('.productCard')) {

		if (document.querySelector('.productCard--kit')) {
			const productCardSliderKit = new Swiper('.productCard--kit ._productCard-slider', { // ищем слайдер превью по селектору
				// задаем параметры
				observer: true,
				observeParents: true,
				slidesPerView: 1,
				spaceBetween: 0,
				speed: 800,

			});
		} else {

			// Инициализация превью слайдера
			const sliderThumbs = new Swiper('._productCard-thumbs__slider', { // ищем слайдер превью по селектору
				modules: [Mousewheel, Thumbs],
				direction: 'vertical', // вертикальная прокрутка
				slidesPerView: 3, // показывать по 3 превью
				spaceBetween: 20, // расстояние между слайдами

				freeMode: true, // при перетаскивании превью ведет себя как при скролле
				breakpoints: { // условия для разных размеров окна браузера
					0: { // при 0px и выше
						direction: 'horizontal', // горизонтальная прокрутка
					},
					991: { // при 768px и выше
						direction: 'vertical', // вертикальная прокрутка
					}
				},
				thumbs: { // указываем на превью слайдер
					// swiper: sliderImages // указываем имя превью слайдера
				},
			});

			// Инициализация слайдера изображений
			const sliderImages = new Swiper('._productCard-slider', { // ищем слайдер превью по селектору
				// задаем параметры
				modules: [Mousewheel, Thumbs],
				direction: 'vertical', // вертикальная прокрутка
				slidesPerView: 1, // показывать по 1 изображению
				grabCursor: true, // менять иконку курсора
				thumbs: { // указываем на превью слайдер
					swiper: sliderThumbs // указываем имя превью слайдера
				},
				breakpoints: { // условия для разных размеров окна браузера
					0: { // при 0px и выше
						direction: 'horizontal', // горизонтальная прокрутка
					},
					991: { // при 768px и выше
						direction: 'vertical', // вертикальная прокрутка
					}
				}
			});
		}

	}

}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
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
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});