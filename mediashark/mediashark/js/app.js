

document.addEventListener('DOMContentLoaded', function () {
	gsap.registerPlugin(ScrollTrigger);

if (document.querySelector('._mediashark-an')) {
	let mediashark = gsap.timeline({
		scrollTrigger: {
			trigger: "._mediashark-an",
			scrub: true,
			pin: true,
			start: "top top",
			end: "+=100%"
		}
	});

	mediashark.from(".letter-1", { translateX: -500, translateY: -500, rotate: 180, ease: "none" }, 0)
		.from(".letter-2", { translateX: -300, translateY: -700, rotate: 260, ease: "none" }, 0)
		.from(".letter-3", { translateX: 100, translateY: -300, rotate: 160, ease: "none" }, 0)
		.from(".letter-4", { translateX: 500, translateY: -200, rotate: 360, ease: "none" }, 0)
		.from(".letter-5", { translateX: 1000, translateY: 200, rotate: 260, ease: "none" }, 0)
		.from(".letter-6", { translateX: 300, translateY: 500, rotate: 260, ease: "none" }, 0)
		.from(".letter-7", { translateX: 300, translateY: 700, rotate: 260, ease: "none" }, 0)
		.from(".letter-8", { translateX: 600, translateY: 1000, rotate: 260, ease: "none" }, 0)
		.from(".letter-9", { translateX: 1000, translateY: 500, rotate: 260, ease: "none" }, 0)
		.from(".letter-10", { translateX: 400, translateY: 300, rotate: 260, ease: "none" }, 0)
}

// Work
if (document.querySelector('.work-row')) {
	let workRowItem = gsap.utils.toArray(".work-row__item");

	gsap.to(workRowItem, {
		xPercent: -100 * (workRowItem.length - 1),
		ease: "none",
		scrollTrigger: {
			trigger: ".work-row",
			pin: true,
			scrub: 1,
			snap: directionalSnap(1 / (workRowItem.length - 1)),
			// base vertical scrolling on how wide the container is so it feels more natural.
			end: "+=3500"
		}
	});
}

// helper function for causing the sections to always snap in the direction of the scroll (next section) rather than whichever section is "closest" when scrolling stops.
function directionalSnap(increment) {
	let snapFunc = gsap.utils.snap(increment);
	return (raw, self) => {
		let n = snapFunc(raw);
		return Math.abs(n - raw) < 1e-4 || (n < raw) === self.direction < 0 ? n : self.direction < 0 ? n - increment : n + increment;
	};
}

const partners = gsap.utils.toArray('.partners-col');
const loader = document.querySelector('.loader--text');
const updateProgress = (instance) =>
	loader.textContent = `${Math.round(instance.progressedCount * 100 / partners.length)}%`;

const showDemo = () => {
	document.body.style.overflow = 'auto';
	document.scrollingElement.scrollTo(0, 0);
	gsap.to(document.querySelector('.loader'), { autoAlpha: 0 });

	gsap.utils.toArray('.partners-box').forEach((section, index) => {
		const w = section.querySelector('.partners-slider');
		const [x, xEnd] = (index % 2) ? ['100%', (w.scrollWidth - section.offsetWidth) * -1] : [w.scrollWidth * -1, 0];
		gsap.fromTo(w, { x }, {
			x: xEnd,
			scrollTrigger: {
				trigger: section,
				scrub: 1,
			}
		});
	});
}

imagesLoaded(partners).on('progress', updateProgress).on('always', showDemo);



	var ua = window.navigator.userAgent;
var msie = ua.indexOf("MSIE ");
var isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };
function isIE() {
	ua = navigator.userAgent;
	var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
	return is_ie;
}
if (isIE()) {
	document.querySelector('html').classList.add('ie');
}
if (isMobile.any()) {
	document.querySelector('html').classList.add('_touch');

	let menuArrows = document.querySelectorAll('._menu-arrow');

	if (menuArrows.length > 0) {
		for (let index = 0; index < menuArrows.length; index++) {
			const menuArrow = menuArrows[index];
			menuArrow.addEventListener("click", function (e) {

				menuArrow.parentElement.classList.toggle('_active');
			});
		}
	}
} else {
	document.querySelector('html').classList.add('_pc');
}

function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
	if (support === true) {
		document.querySelector('html').classList.add('_webp');
	} else {
		document.querySelector('html').classList.add('_no-webp');
	}
});

function ibg() {
	if (isIE()) {
		let ibg = document.querySelectorAll("._ibg");
		for (var i = 0; i < ibg.length; i++) {
			if (ibg[i].querySelector('img') && ibg[i].querySelector('img').getAttribute('src') != null) {
				ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
			}
		}
	}
}
ibg();

window.addEventListener("load", function () {
	if (document.querySelector('.wrapper')) {
		setTimeout(function () {
			document.querySelector('.wrapper').classList.add('_loaded');
		}, 0);
	}
});

let unlock = true;


//=================
//Menu
let iconMenu = document.querySelector(".menu__icon");

if (iconMenu != null) {
	let delay = 500;
	let menuBody = document.querySelector(".menu__body");
	iconMenu.addEventListener("click", function (e) {
		if (unlock) {
			let headerContact = document.querySelector("._contact")
			iconMenu.classList.toggle("_active");
			menuBody.classList.toggle("_active");
			headerContact.classList.remove("_active");
			body_lock(delay, iconMenu);

		}
	});
};
function menu_close() {
	let iconMenu = document.querySelector(".menu__icon");
	let menuBody = document.querySelector(".menu__body");
	iconMenu.classList.remove("_active");
	menuBody.classList.remove("_active");

}
//=================
//BodyLock

let body_lock_Block;

function body_lock(delay, el) {

	if (el === body_lock_Block) {
		body_lock_remove(delay);
		return body_lock_Block = null;

	} else {
		body_lock_add(delay);
	}
	body_lock_Block = el;

	// let body = document.querySelector("body");

	// if (body.classList.contains('_lock')) {
	// 	body_lock_remove(delay);
	// } else {
	// 	body_lock_add(delay);
	// }
}
function body_lock_remove(delay) {
	let body = document.querySelector("body");
	if (unlock) {
		let lock_padding = document.querySelectorAll("._lp");
		setTimeout(() => {
			for (let index = 0; index < lock_padding.length; index++) {
				const el = lock_padding[index];
				el.style.paddingRight = '0px';
			}
			body.style.paddingRight = '0px';
			body.classList.remove("_lock");
		}, delay);

		unlock = false;
		setTimeout(function () {
			unlock = true;
		}, delay);
	}
}
function body_lock_add(delay) {
	let body = document.querySelector("body");
	if (unlock) {
		let lock_padding = document.querySelectorAll("._lp");
		for (let index = 0; index < lock_padding.length; index++) {
			const el = lock_padding[index];
			el.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
		}
		body.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
		body.classList.add("_lock");

		unlock = false;
		setTimeout(function () {
			unlock = true;
		}, delay);
	}
}
//=================
// LettersAnimation
let title = document.querySelectorAll('._letter-animation');
if (title) {
	for (let index = 0; index < title.length; index++) {
		let el = title[index];
		let txt = el.innerHTML;
		let txt_words = txt.replace('  ', ' ').split(' ');
		let new_title = '';
		for (let index = 0; index < txt_words.length; index++) {
			let txt_word = txt_words[index];
			let len = txt_word.length;
			new_title = new_title + '<p>';
			for (let index = 0; index < len; index++) {
				let it = txt_word.substr(index, 1);
				if (it == ' ') {
					it = '&nbsp;';
				}
				new_title = new_title + '<span>' + it + '</span>';
			}
			el.innerHTML = new_title;
			new_title = new_title + '&nbsp;</p>';
		}
	}
}
//=================
//Tabs
let tabs = document.querySelectorAll("._tabs");
for (let index = 0; index < tabs.length; index++) {
	let tab = tabs[index];

	let tabs_items = tab.querySelectorAll("._tabs-item");
	let tabs_blocks = tab.querySelectorAll("._tabs-block");
	for (let index = 0; index < tabs_items.length; index++) {
		let tabs_item = tabs_items[index];
		tabs_item.addEventListener("click", function (e) {
			for (let index = 0; index < tabs_items.length; index++) {
				let tabs_item = tabs_items[index];
				tabs_item.classList.remove('_active');
				tabs_blocks[index].classList.remove('_active');
				tabs_item.classList.remove('_animation');

			}
			tabs_item.classList.add('_active');
			console.log(tabs_items[index + 1]);
			if (tabs_items.length > index + 1) {
				tabs_items[index + 1].classList.add('_animation');
			}else{
				// tabs_items[0].classList.add('animation');
			}

			tabs_blocks[index].classList.add('_active');
			e.preventDefault();
		});
	}
}
//=================
//Spollers
let spollers = document.querySelectorAll("._spoller");
let spollersGo = true;
if (spollers.length > 0) {

	function spollerCLick(e) {
		const spoller = e.target;
		if (spollersGo) {
			spollersGo = false;

			if (spoller.closest('._spollers').classList.contains('_one')) {
				let curent_spollers = spoller.closest('._spollers').querySelectorAll('._spoller');
				for (let i = 0; i < curent_spollers.length; i++) {
					let el = curent_spollers[i];
					if (el != spoller) {
						el.classList.remove('_active');
						_slideUp(el.nextElementSibling);
					}
				}
			}
			spoller.classList.toggle('_active');
			_slideToggle(spoller.nextElementSibling);

			setTimeout(function () {
				spollersGo = true;
			}, 500);
		}
	}
	function spollersInit() {
		for (let index = 0; index < spollers.length; index++) {
			const spoller = spollers[index];
			let spollerMax = spoller.getAttribute('data-max');

			if (spollerMax && window.innerWidth > spollerMax) {
				if (spoller.classList.contains('_init')) {
					spoller.classList.remove('_active');
					spoller.classList.remove('_init');
					spoller.nextElementSibling.style.cssText = '';
					spoller.removeEventListener("click", spollerCLick);
				}
			} else if (!spoller.classList.contains('_init')) {
				spoller.classList.add('_init');
				spoller.addEventListener("click", spollerCLick);
			}
		}
	}
	function spollersShowActive() {
		for (let index = 0; index < spollers.length; index++) {
			const spoller = spollers[index];
			if (spoller.classList.contains('_active')) {
				_slideToggle(spoller.nextElementSibling);
			}
		}
	}
	window.addEventListener("resize", spollersInit);

	setTimeout(function () {
		spollersShowActive();
		spollersInit();
	}, 0);
}
//=================
//Gallery

//=================
//SearchInList
function search_in_list(input) {
	let ul = input.parentNode.querySelector('ul')
	let li = ul.querySelectorAll('li');
	let filter = input.value.toUpperCase();

	for (i = 0; i < li.length; i++) {
		let el = li[i];
		let item = el;
		txtValue = item.textContent || item.innerText;
		if (txtValue.toUpperCase().indexOf(filter) > -1) {
			el.style.display = "";
		} else {
			el.style.display = "none";
		}
	}
}
//=================
//DigiFormat
function digi(str) {
	var r = str.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ");
	return r;
}
//=================
//DiGiAnimate
function digi_animate(digi_animate) {
	if (digi_animate.length > 0) {
		for (let index = 0; index < digi_animate.length; index++) {
			const el = digi_animate[index];
			const el_to = parseInt(el.innerHTML.replace(' ', ''));
			if (!el.classList.contains('_done')) {
				digi_animate_value(el, 0, el_to, 1500);
			}
		}
	}
}
function digi_animate_value(el, start, end, duration) {
	var obj = el;
	var range = end - start;
	// no timer shorter than 50ms (not really visible any way)
	var minTimer = 50;
	// calc step time to show all interediate values
	var stepTime = Math.abs(Math.floor(duration / range));

	// never go below minTimer
	stepTime = Math.max(stepTime, minTimer);

	// get current time and calculate desired end time
	var startTime = new Date().getTime();
	var endTime = startTime + duration;
	var timer;

	function run() {
		var now = new Date().getTime();
		var remaining = Math.max((endTime - now) / duration, 0);
		var value = Math.round(end - (remaining * range));
		obj.innerHTML = digi(value);
		if (value == end) {
			clearInterval(timer);
		}
	}

	timer = setInterval(run, stepTime);
	run();

	el.classList.add('_done');
}

//=================
//SlideToggle
let _slideUp = (target, duration = 500) => {
	target.style.transitionProperty = 'height, margin, padding';
	target.style.transitionDuration = duration + 'ms';
	target.style.height = target.offsetHeight + 'px';
	target.offsetHeight;
	target.style.overflow = 'hidden';
	target.style.height = 0;
	target.style.paddingTop = 0;
	target.style.paddingBottom = 0;
	target.style.marginTop = 0;
	target.style.marginBottom = 0;
	window.setTimeout(() => {
		target.style.display = 'none';
		target.style.removeProperty('height');
		target.style.removeProperty('padding-top');
		target.style.removeProperty('padding-bottom');
		target.style.removeProperty('margin-top');
		target.style.removeProperty('margin-bottom');
		target.style.removeProperty('overflow');
		target.style.removeProperty('transition-duration');
		target.style.removeProperty('transition-property');
		target.classList.remove('_slide');
	}, duration);
}
let _slideDown = (target, duration = 500) => {
	target.style.removeProperty('display');
	let display = window.getComputedStyle(target).display;
	if (display === 'none')
		display = 'block';

	target.style.display = display;
	let height = target.offsetHeight;
	target.style.overflow = 'hidden';
	target.style.height = 0;
	target.style.paddingTop = 0;
	target.style.paddingBottom = 0;
	target.style.marginTop = 0;
	target.style.marginBottom = 0;
	target.offsetHeight;
	target.style.transitionProperty = "height, margin, padding";
	target.style.transitionDuration = duration + 'ms';
	target.style.height = height + 'px';
	target.style.removeProperty('padding-top');
	target.style.removeProperty('padding-bottom');
	target.style.removeProperty('margin-top');
	target.style.removeProperty('margin-bottom');
	window.setTimeout(() => {
		target.style.removeProperty('height');
		target.style.removeProperty('overflow');
		target.style.removeProperty('transition-duration');
		target.style.removeProperty('transition-property');
		target.classList.remove('_slide');
	}, duration);
}
let _slideToggle = (target, duration = 500) => {
	if (!target.classList.contains('_slide')) {
		target.classList.add('_slide');
		if (window.getComputedStyle(target).display === 'none') {
			return _slideDown(target, duration);
		} else {
			return _slideUp(target, duration);
		}
	}
}
//========================================
//Wrap
function _wrap(el, wrapper) {
	el.parentNode.insertBefore(wrapper, el);
	wrapper.appendChild(el);
}
//========================================
//RemoveClasses
function _removeClasses(el, class_name) {
	for (var i = 0; i < el.length; i++) {
		el[i].classList.remove(class_name);
	}
}
//========================================
//IsHidden
function _is_hidden(el) {
	return (el.offsetParent === null)
}
// ShowMore Beta ========================
let moreBlocks = document.querySelectorAll('._more-block');
if (moreBlocks.length > 0) {
	let wrapper = document.querySelector('.wrapper');
	for (let index = 0; index < moreBlocks.length; index++) {
		const moreBlock = moreBlocks[index];
		let items = moreBlock.querySelectorAll('._more-item');
		if (items.length > 0) {
			let itemsMore = moreBlock.querySelector('._more-link');
			let itemsContent = moreBlock.querySelector('._more-content');
			let itemsView = itemsContent.getAttribute('data-view');
			if (getComputedStyle(itemsContent).getPropertyValue("transition-duration") === '0s') {
				itemsContent.style.cssText = "transition-duration: 1ms";
			}
			itemsMore.addEventListener("click", function (e) {
				if (itemsMore.classList.contains('_active')) {
					setSize();
				} else {
					setSize('start');
				}
				itemsMore.classList.toggle('_active');
				e.preventDefault();
			});

			let isScrollStart;
			function setSize(type) {
				let resultHeight;
				let itemsContentHeight = 0;
				let itemsContentStartHeight = 0;

				for (let index = 0; index < items.length; index++) {
					if (index < itemsView) {
						itemsContentHeight += items[index].offsetHeight;
					}
					itemsContentStartHeight += items[index].offsetHeight;
				}
				resultHeight = (type === 'start') ? itemsContentStartHeight : itemsContentHeight;
				isScrollStart = window.innerWidth - wrapper.offsetWidth;
				itemsContent.style.height = `${resultHeight}px`;
			}

			itemsContent.addEventListener("transitionend", updateSize, false);

			function updateSize() {
				let isScrollEnd = window.innerWidth - wrapper.offsetWidth;
				if (isScrollStart === 0 && isScrollEnd > 0 || isScrollStart > 0 && isScrollEnd === 0) {
					if (itemsMore.classList.contains('_active')) {
						setSize('start');
					} else {
						setSize();
					}
				}
			}
			window.addEventListener("resize", function (e) {
				if (!itemsMore.classList.contains('_active')) {
					setSize();
				} else {
					setSize('start');
				}
			});
			setSize();
		}
	}
}
//========================================
//Animate
function animate({ timing, draw, duration }) {
	let start = performance.now();
	requestAnimationFrame(function animate(time) {
		// timeFraction изменяется от 0 до 1
		let timeFraction = (time - start) / duration;
		if (timeFraction > 1) timeFraction = 1;

		// вычисление текущего состояния анимации
		let progress = timing(timeFraction);

		draw(progress); // отрисовать её

		if (timeFraction < 1) {
			requestAnimationFrame(animate);
		}

	});
}
function makeEaseOut(timing) {
	return function (timeFraction) {
		return 1 - timing(1 - timeFraction);
	}
}
function makeEaseInOut(timing) {
	return function (timeFraction) {
		if (timeFraction < .5)
			return timing(2 * timeFraction) / 2;
		else
			return (2 - timing(2 * (1 - timeFraction))) / 2;
	}
}
function quad(timeFraction) {
	return Math.pow(timeFraction, 2)
}
function circ(timeFraction) {
	return 1 - Math.sin(Math.acos(timeFraction));
}
/*
animate({
	duration: 1000,
	timing: makeEaseOut(quad),
	draw(progress) {
		window.scroll(0, start_position + 400 * progress);
	}
});*/

//Полифилы
(function () {
	// проверяем поддержку
	if (!Element.prototype.closest) {
		// реализуем
		Element.prototype.closest = function (css) {
			var node = this;
			while (node) {
				if (node.matches(css)) return node;
				else node = node.parentElement;
			}
			return null;
		};
	}
})();
(function () {
	// проверяем поддержку
	if (!Element.prototype.matches) {
		// определяем свойство
		Element.prototype.matches = Element.prototype.matchesSelector ||
			Element.prototype.webkitMatchesSelector ||
			Element.prototype.mozMatchesSelector ||
			Element.prototype.msMatchesSelector;
	}
})();

	function appendHeader() {
	let menuList = document.querySelector('.menu__list'),
		optLang = document.querySelector('.opt__lang'),
		optVision = document.querySelector('.opt__vision'),
		liFirst = document.createElement('li');

	liFirst.classList.add('header__opt')
	liFirst.append(optVision, optLang)
	menuList.prepend(liFirst)
}


if (window.innerWidth <= 526) {
	appendHeader()
}
if (document.querySelector('html').classList.contains('_touch')) {
	headerContact = document.querySelector('._contact');

	headerContact.addEventListener("click", (e) => {
		if (e.target.classList.contains('_icon-phone')) {
			headerContact.classList.toggle('_active');
			body_lock(500, headerContact);
			menu_close()
		}
	});
}








	

let windowWidth = window.innerWidth;
if (windowWidth < 527) {
	if (document.querySelector('._ad-slider')) {
		document.querySelector('._ad-slider').classList.add('_swiper');
	}
}
if (windowWidth <= 992) {
	if (document.querySelector('._blog-slider')) {
		document.querySelector('._blog-slider').classList.add('_swiper');
	}
}
if (windowWidth < 992 && document.querySelector('.mainGoals-slider')) {
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

let sliderServices = new Swiper('.services-slider', {

	observer: true,
	observeParents: true,
	slidesPerView: 3,
	speed: 800,
	spaceBetween: 30,


	scrollbar: {
		el: '.services-slider__progress',
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
if (sliderBlock) {
	sliderBlock.addEventListener("mouseenter", function (e) {
		sliderSwiper.params.autoplay.disableOnInteraction = false;
		sliderSwiper.params.autoplay.delay = 1500;
		sliderSwiper.autoplay.start();
	});
	sliderBlock.addEventListener("mouseleave", function (e) {
		sliderSwiper.autoplay.stop();
	});
}

if (windowWidth < 992) {

	let mainGoalsSlider = new Swiper('.mainGoals-slider', {

		observer: true,
		observeParents: true,
		slidesPerView: 1,
		speed: 800,
		spaceBetween: 15,
		slidesPerGroup: 1,
		autoHeight: true,
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

	let sliderBlog = new Swiper('._blog-slider', {

		observer: true,
		observeParents: true,
		slidesPerView: 4,
		speed: 800,
		spaceBetween: 15,
		slidesPerGroup: 1,
		// freeMode: true,
		autoHeight: true,

		breakpoints: {
			0: {
				slidesPerView: 1,

				on: {
					slideChange: function (swiper) {
					},
				},

			},

			768: {
				slidesPerView: 2,

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
	autoHeight: true,
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

let sliderTeam = new Swiper('.team-slider', {

	observer: true,
	observeParents: true,
	slidesPerView: 4,
	speed: 800,
	spaceBetween: 15,
	slidesPerGroup: 1,
	// loop: true,

	navigation: {
		nextEl: '.slider-arrows ._team__arrow-next',
		prevEl: '.slider-arrows ._team__arrow-prev',
	},

	breakpoints: {
		0: {
			slidesPerView: 1,

			// scrollbar: {
			// 	el: '._team__progress-bar',
			// 	draggable: true
			// },
			on: {
				slideChange: function (swiper) {
					// reviewsTextMin()
				},
			},

		},

		527: {
			slidesPerView: 2,

		},
		769: {
			slidesPerView: 4,

			pagination: {
				el: '._team__pagination-number',
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
			sliderNum(document.querySelector('.team'))
			reviewsTextMin()
		},
		afterInit: function () {
			sliderNum(document.querySelector('.team'))

		},

	},
	scrollbar: {
		draggable: true
	},

});



if (windowWidth < 526) {

	let sliderAd = new Swiper('._ad-slider', {

		observer: true,
		observeParents: true,
		slidesPerView: 4,
		speed: 800,
		spaceBetween: 15,
		slidesPerGroup: 1,
		// freeMode: true,
		autoHeight: true,

		breakpoints: {
			0: {
				slidesPerView: 1,

				on: {
					slideChange: function (swiper) {
					},
				},

			},

			527: {
				slidesPerView: 2,

			},
		},

	});
}





// let sliderPartnersOne = new Swiper('.partners-slider--one', {

// 	observer: true,
// 	observeParents: true,
// 	slidesPerView: 2,
// 	speed: 800,
// 	spaceBetween: 30,
// 	slidesPerGroup: 1,
// 	freeMode: true,
// 	autoplay: {
// 		delay: 1000,
// 	 },

// 	// loop: true,

// 	// navigation: {
// 	// 	nextEl: '.slider-arrows ._team__arrow-next',
// 	// 	prevEl: '.slider-arrows ._team__arrow-prev',
// 	// },

// 	breakpoints: {
// 		0: {

// 			// scrollbar: {
// 			// 	el: '._team__progress-bar',
// 			// 	draggable: true
// 			// },
// 			on: {
// 				slideChange: function (swiper) {
// 					// reviewsTextMin()
// 				},
// 			},

// 		},



// 	},

// 	on: {
// 		lazyImageReady: function () {
// 		},

// 		slideChange: function () {
// 		},
// 		afterInit: function () {

// 		},

// 	},
// 	scrollbar: {
// 		draggable: true
// 	},

// });

// let sliderPartnersTwo = new Swiper('.partners-slider--two', {

// 	observer: true,
// 	observeParents: true,
// 	slidesPerView: 2,
// 	speed: 800,
// 	spaceBetween: 30,
// 	slidesPerGroup: 1,
// 	freeMode: true,
// 	reverseDirection: true,

// 	// loop: true,

// 	// navigation: {
// 	// 	nextEl: '.slider-arrows ._team__arrow-next',
// 	// 	prevEl: '.slider-arrows ._team__arrow-prev',
// 	// },

// 	breakpoints: {
// 		0: {

// 			// scrollbar: {
// 			// 	el: '._team__progress-bar',
// 			// 	draggable: true
// 			// },
// 			on: {
// 				slideChange: function (swiper) {
// 					// reviewsTextMin()
// 				},
// 			},

// 		},



// 	},

// 	on: {
// 		lazyImageReady: function () {
// 		},

// 		slideChange: function () {
// 		},
// 		afterInit: function () {

// 		},

// 	},
// 	scrollbar: {
// 		draggable: true
// 	},

// });


// function slideNext(sliderOne, sldierTwo) {

// 	sliderOne.on('slideNextTransitionStart', function () {
// 		sldierTwo.slidePrev();
// 		sldierTwo.update(true);
// 	});

// 	sliderOne.on('slidePrevTransitionStart', function () {
// 		sldierTwo.slideNext();
// 		sldierTwo.update(true);
// 	})
// }

// slideNext(sliderPartnersOne, sliderPartnersTwo)
// slideNext(sliderPartnersTwo, sliderPartnersOne)

// section-work 
// var catalogSlider = null;
// var mediaQuerySize = 1024;

// function catalogSliderInit() {
// 	if (!catalogSlider) {
// 		catalogSlider = new Swiper('.work-row', {
// 			observer: true,
// 			observeParents: true,
// 			slidesPerView: 1,
// 			spaceBetween: 0,
// 			autoHeight: true,
// 			freeMode: true,
// 			slidesPerView: 'auto',
// 			// navigation: {
// 			// 	nextEl: '.work-button-next',
// 			// 	prevEl: '.work-button-prev',
// 			// },


// 			// mousewheel: {
// 			// 	sensitivity: 1,
// 			// },
// 			on: {
// 				init: function () {

// 				},
// 				reachBeginning: function () {
// 					document.body.classList.remove('_lock')
// 					checkSlider = true

// 				},
// 				reachEnd: function () {
// 					document.body.classList.remove('_lock')
// 					checkSlider = true
// 				},
// 			}

// 		});
// 	}
// }

// function catalogSliderDestroy() {
// 	if (catalogSlider) {
// 		catalogSlider.destroy();
// 		catalogSlider = null;
// 	}
// }
// // catalogSliderInit()

// let worktite = document.querySelector('.section-work .section__title');
// var checkSlider = false;
// let workRow = document.querySelector('.work-row');
// window.addEventListener('scroll', function (e) {
// 	if (Visible(workRow) != true) {
// 		checkSlider = false
// 		// catalogSliderDestroy()
// 	} else {
// 		if (checkSlider != true) {
// 			if ((worktite.getBoundingClientRect().top) <= 0 && (Visible(worktite) === true)) {
// 				const elementPosition = worktite.getBoundingClientRect().top;
// 				window.scrollBy({
// 					top: elementPosition,
// 				});
// 				document.body.classList.add('_lock')
// 				catalogSliderInit()
// 				catalogSlider.mousewheel.enable()
// 			}
// 		} else {
// 			catalogSlider.mousewheel.disable()
// 			// catalogSliderDestroy()
// 		}
// 	}
// });

	
// зона видимости 

var Visible = function (target) {

	// Все позиции элемента
	var targetPosition = {
		top: window.pageYOffset + target.getBoundingClientRect().top,
		left: window.pageXOffset + target.getBoundingClientRect().left,
		right: window.pageXOffset + target.getBoundingClientRect().right,
		bottom: window.pageYOffset + target.getBoundingClientRect().bottom
	},
		// Получаем позиции окна
		windowPosition = {
			top: window.pageYOffset,
			left: window.pageXOffset,
			right: window.pageXOffset + document.documentElement.clientWidth,
			bottom: window.pageYOffset + document.documentElement.clientHeight
		};

	if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
		targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
		targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
		targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
		// Если элемент полностью видно, то запускаем следующий код
		// console.log('Вы видите элемент :)');
		// console.log(target);
		return true


	} else {
		return false
		// Если элемент не видно, то запускаем этот код
		// console.clear();
	};
};

// animation numbers 
const time = 2000;
const step = 0.5;

function outNum(num, elem) {
	let e = elem,
		n = 0;
	let t = Math.ceil(time / (num / step));
	let interval = setInterval(() => {
		n = n + step;
		if (n == num) {
			clearInterval(interval);
		}

		e.innerHTML = Math.ceil(n);

		if (e.closest('._progress-bar').querySelector('.progBar-line--progress') !== null) {
			e.closest('._progress-bar').querySelector('.progBar-line--progress').style.width = `${n}%`;
		} else {
			let result = (566 + (566 * n / e.dataset.maxprognumber));
			e.closest('._progress-bar').querySelector('.circle').querySelector('._circle-progress').style.strokeDashoffset = `${result}`;
		}
	},
		t);
};
//--------------

// progressBar
function anProgressBar(block) {
	for (let i = 0; i < block.length; i++) {
		let el = block[i],
			numberSum = el.querySelector('._progress-bar__number'),
			prognumber = +numberSum.dataset.prognumber;

		outNum(prognumber, numberSum)

	}
}

// charts
var object = document.getElementById("logoObject");

function chartsSvg(charts, chartsLine) {
	for (let i = 0; i < charts.length; i++) {
		const el = charts[i];

		el.style.minWidth = `calc(${el.closest('.charts-block__box').offsetWidth}px - 10%)`;

		let svg = el.contentDocument.querySelector('svg');
		svg.setAttribute('viewBox', `0 0 ${svg.getAttribute('width')} ${svg.getAttribute('height')}`);
		svg.style.cssText = `
				position: absolute;
				width: max-content;
				bottom: 0;
		 	`;
	}

	for (let j = 0; j < chartsLine.length; j++) {
		const chartL = chartsLine[j];
		chartL.style.width = '100%';
	}
}
function animBlock(el) {
	el.classList.add('animation-show');
	anProgressBar(el.querySelectorAll('.progBar-circle'));
	anProgressBar(el.querySelectorAll('.progBar-line'));
	chartsSvg(el.querySelectorAll('.charts-block__ico'), el.querySelectorAll('.charts-block__line'));
}

function caseSliderShowAnimation() {
	let caseBlock = document.querySelectorAll('._animation-cases');
	for (let i = 0; i < caseBlock.length; i++) {
		const caseBlockI = caseBlock[i];
		if (caseBlockI.closest(".cases-slider").classList.contains("swiper-slide-active")) {
			window.addEventListener('scroll', function () {
				if (caseBlockI.classList.contains("animation-show") == false) {
					if (Visible(caseBlockI) === true) {
						animBlock(caseBlockI)
					}
				}
			});
			if (caseBlockI.classList.contains("animation-show") == false) {
				if (Visible(caseBlockI) === true) {
					animBlock(caseBlockI)
				}

			}
		}
	}
}

caseSliderShowAnimation();









	(function () {
	if (window.innerWidth <= 991 && document.querySelector('._fixedTitle')) {
		var a = document.querySelector('._fixedTitle'), b = null, P = document.querySelector('.header').offsetHeight;  // если ноль заменить на число, то блок будет прилипать до того, как верхний край окна браузера дойдёт до верхнего края элемента. Может быть отрицательным числом
		window.addEventListener('scroll', Ascroll, false);
		document.body.addEventListener('scroll', Ascroll, false);
		function Ascroll() {
			if (b == null) {
				var Sa = getComputedStyle(a, ''), s = '';
				for (var i = 0; i < Sa.length; i++) {
					if (Sa[i].indexOf('overflow') == 0 || Sa[i].indexOf('padding') == 0 || Sa[i].indexOf('border') == 0 || Sa[i].indexOf('outline') == 0 || Sa[i].indexOf('box-shadow') == 0 || Sa[i].indexOf('background') == 0) {
						s += Sa[i] + ': ' + Sa.getPropertyValue(Sa[i]) + '; '
					}
				}
				b = document.createElement('div');
				b.style.cssText = s + ' background: #fff; width: ' + a.offsetWidth + 'px;';
				a.insertBefore(b, a.firstChild);
				var l = a.childNodes.length;
				for (var i = 1; i < l; i++) {
					b.appendChild(a.childNodes[1]);
				}
				a.style.height = b.getBoundingClientRect().height + 'px';
				a.style.padding = '0';
				a.style.border = '0';
			}
			var Ra = a.getBoundingClientRect(),
				R = Math.round(Ra.top + b.getBoundingClientRect().height - document.querySelector('.cases-table__charts').getBoundingClientRect().top + 0);  // селектор блока, при достижении верхнего края которого нужно открепить прилипающий элемент;  Math.round() только для IE; если ноль заменить на число, то блок будет прилипать до того, как нижний край элемента дойдёт до футера
			if ((Ra.top - P) <= 0) {
				if ((Ra.top - P) <= R) {
					b.className = 'stop';
					b.style.top = - R + 'px';
				} else {
					b.className = 'sticky';
					b.style.top = P + 'px';
				}
			} else {
				b.className = '';
				b.style.top = '';
			}
			window.addEventListener('resize', function () {
				a.children[0].style.width = getComputedStyle(a, '').width
			}, false);
		}
	}
})()
	function email_test(input) {
	return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}
	// header top padding
function main__top() {
	let header = document.querySelector('.header'),
		main = document.querySelector('.main');
	main.style.paddingTop = `${header.offsetHeight}px`;
}
main__top()

// event resize 
window.addEventListener('resize', function (event) {
	main__top();
});

function offset(el) {
	var rect = el.getBoundingClientRect(),
		scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
		scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}

function anBtn() {
	let btns = document.querySelectorAll('.btn');

	for (let i = 0; i < btns.length; i++) {
		const btn = btns[i];

		btn.addEventListener('mouseenter', e => {
			let relX = e.pageX - offset(btn).left,
				relY = e.pageY - offset(btn).top;
			btn.querySelector('.btn-hover').style.cssText = `top: ${relY}px; left: ${relX}px`
		});

		btn.addEventListener('mouseout', e => {
			let relX = e.pageX - offset(btn).left,
				relY = e.pageY - offset(btn).top;
			btn.querySelector('.btn-hover').style.cssText = `top: ${relY}px; left: ${relX}px`
		});
	}
}
anBtn()

function footerFixed() {
	let footer = document.querySelector('.footer'),
		main = document.querySelector('.main');

	main.style.bottom = `${footer.offsetHeight}px`
	main.style.marginBottom = `${footer.offsetHeight}px`

}
footerFixed()






	//let btn = document.querySelectorAll('button[type="submit"],input[type="submit"]');
let forms = document.querySelectorAll('form');
if (forms.length > 0) {
	for (let index = 0; index < forms.length; index++) {
		const el = forms[index];
		el.addEventListener('submit', form_submit);
	}
}
async function form_submit(e) {
	let btn = e.target;
	let form = btn.closest('form');
	let error = form_validate(form);
	if (error == 0) {
		let formAction = form.getAttribute('action') ? form.getAttribute('action').trim() : '#';
		let formMethod = form.getAttribute('method') ? form.getAttribute('method').trim() : 'GET';
		const message = form.getAttribute('data-message');
		const ajax = form.getAttribute('data-ajax');
		const test = form.getAttribute('data-test');

		//SendForm
		if (ajax) {
			e.preventDefault();
			let formData = new FormData(form);
			form.classList.add('_sending');
			let response = await fetch(formAction, {
				method: formMethod,
				body: formData
			});
			if (response.ok) {
				let result = await response.json();
				form.classList.remove('_sending');
				if (message) {
					popup_open(message + '-message');
				}
				form_clean(form);
			} else {
				alert("Ошибка");
				form.classList.remove('_sending');
			}
		}
		// If test
		if (test) {
			e.preventDefault();
			popup_open(message + '-message');
			form_clean(form);
		}
	} else {
		let form_error = form.querySelectorAll('._error');
		if (form_error && form.classList.contains('_goto-error')) {
			_goto(form_error[0], 1000, 50);
		}
		e.preventDefault();
	}
}
function form_validate(form) {
	let error = 0;
	let form_req = form.querySelectorAll('._req');
	if (form_req.length > 0) {
		for (let index = 0; index < form_req.length; index++) {
			const el = form_req[index];
			if (!_is_hidden(el)) {
				error += form_validate_input(el);
			}
		}
	}
	return error;
}
function form_validate_input(input) {
	let error = 0;
	let input_g_value = input.getAttribute('data-value');

	if (input.getAttribute("name") == "email" || input.classList.contains("_email")) {
		if (input.value != input_g_value) {
			let em = input.value.replace(" ", "");
			input.value = em;
		}
		if (email_test(input) || input.value == input_g_value) {
			form_add_error(input);
			error++;
		} else {
			form_remove_error(input);
		}
	} else if (input.getAttribute("type") == "checkbox" && input.checked == false) {
		form_add_error(input);
		error++;
	} else {
		if (input.value == '' || input.value == input_g_value) {
			form_add_error(input);
			error++;
		} else {
			form_remove_error(input);
		}
	}
	return error;
}
function form_add_error(input) {
	input.classList.add('_error');
	input.parentElement.classList.add('_error');

	let input_error = input.parentElement.querySelector('.form__error');
	if (input_error) {
		input.parentElement.removeChild(input_error);
	}
	let input_error_text = input.getAttribute('data-error');
	if (input_error_text && input_error_text != '') {
		input.value = input_error_text;
		input.addEventListener('click', function () {
			input.value = '';
		})

		// input.parentElement.insertAdjacentHTML('beforeend', '<div class="form__error">' + input_error_text + '</div>');
	}
}
function form_remove_error(input) {
	input.classList.remove('_error');
	input.parentElement.classList.remove('_error');

	let input_error = input.parentElement.querySelector('.form__error');
	if (input_error) {
		input.parentElement.removeChild(input_error);
	}
}
function form_clean(form) {
	let inputs = form.querySelectorAll('input,textarea');
	for (let index = 0; index < inputs.length; index++) {
		const el = inputs[index];
		el.parentElement.classList.remove('_focus');
		el.classList.remove('_focus');
		el.value = el.getAttribute('data-value');
	}
	let checkboxes = form.querySelectorAll('.checkbox__input');
	if (checkboxes.length > 0) {
		for (let index = 0; index < checkboxes.length; index++) {
			const checkbox = checkboxes[index];
			checkbox.checked = false;
		}
	}
	let selects = form.querySelectorAll('select');
	if (selects.length > 0) {
		for (let index = 0; index < selects.length; index++) {
			const select = selects[index];
			const select_default_value = select.getAttribute('data-default');
			select.value = select_default_value;
			select_item(select);
		}
	}
}

let viewPass = document.querySelectorAll('.form__viewpass');
for (let index = 0; index < viewPass.length; index++) {
	const element = viewPass[index];
	element.addEventListener("click", function (e) {
		if (element.classList.contains('_active')) {
			element.parentElement.querySelector('input').setAttribute("type", "password");
		} else {
			element.parentElement.querySelector('input').setAttribute("type", "text");
		}
		element.classList.toggle('_active');
	});
}

//Select
let selects = document.getElementsByTagName('select');
if (selects.length > 0) {
	selects_init();
}
function selects_init() {
	for (let index = 0; index < selects.length; index++) {
		const select = selects[index];
		select_init(select);
	}
	//select_callback();
	document.addEventListener('click', function (e) {
		selects_close(e);
	});
	document.addEventListener('keydown', function (e) {
		if (e.code === 'Escape') {
			selects_close(e);
		}
	});
}
function selects_close(e) {
	const selects = document.querySelectorAll('.select');
	if (!e.target.closest('.select') && !e.target.classList.contains('_option')) {
		for (let index = 0; index < selects.length; index++) {
			const select = selects[index];
			const select_body_options = select.querySelector('.select__options');
			select.classList.remove('_active');
			_slideUp(select_body_options, 100);
		}
	}
}
function select_init(select) {
	const select_parent = select.parentElement;
	const select_modifikator = select.getAttribute('class');
	const select_selected_option = select.querySelector('option:checked');
	select.setAttribute('data-default', select_selected_option.value);
	select.style.display = 'none';

	select_parent.insertAdjacentHTML('beforeend', '<div class="select select_' + select_modifikator + '"></div>');

	let new_select = select.parentElement.querySelector('.select');
	new_select.appendChild(select);
	select_item(select);
}
function select_item(select) {
	const select_parent = select.parentElement;
	const select_items = select_parent.querySelector('.select__item');
	const select_options = select.querySelectorAll('option');
	const select_selected_option = select.querySelector('option:checked');
	const select_selected_text = select_selected_option.text;
	const select_type = select.getAttribute('data-type');

	if (select_items) {
		select_items.remove();
	}

	let select_type_content = '';
	if (select_type == 'input') {
		select_type_content = '<div class="select__value icon-select-arrow"><input autocomplete="off" type="text" name="form[]" value="' + select_selected_text + '" data-error="Ошибка" data-value="' + select_selected_text + '" class="select__input"></div>';
	} else {
		select_type_content = '<div class="select__value icon-select-arrow"><span>' + select_selected_text + '</span></div>';
	}

	select_parent.insertAdjacentHTML('beforeend',
		'<div class="select__item">' +
		'<div class="select__title">' + select_type_content + '</div>' +
		'<div class="select__options">' + select_get_options(select_options) + '</div>' +
		'</div></div>');

	select_actions(select, select_parent);
}
function select_actions(original, select) {
	const select_item = select.querySelector('.select__item');
	const selectTitle = select.querySelector('.select__title');
	const select_body_options = select.querySelector('.select__options');
	const select_options = select.querySelectorAll('.select__option');
	const select_type = original.getAttribute('data-type');
	const select_input = select.querySelector('.select__input');

	selectTitle.addEventListener('click', function (e) {
		selectItemActions();
	});

	function selectMultiItems() {
		let selectedOptions = select.querySelectorAll('.select__option');
		let originalOptions = original.querySelectorAll('option');
		let selectedOptionsText = [];
		for (let index = 0; index < selectedOptions.length; index++) {
			const selectedOption = selectedOptions[index];
			originalOptions[index].removeAttribute('selected');
			if (selectedOption.classList.contains('_selected')) {
				const selectOptionText = selectedOption.innerHTML;
				selectedOptionsText.push(selectOptionText);
				originalOptions[index].setAttribute('selected', 'selected');
			}
		}
		select.querySelector('.select__value').innerHTML = '<span>' + selectedOptionsText + '</span>';
	}
	function selectItemActions(type) {
		if (!type) {
			let selects = document.querySelectorAll('.select');
			for (let index = 0; index < selects.length; index++) {
				const select = selects[index];
				const select_body_options = select.querySelector('.select__options');
				if (select != select_item.closest('.select')) {
					select.classList.remove('_active');
					_slideUp(select_body_options, 100);
				}
			}
			_slideToggle(select_body_options, 100);
			select.classList.toggle('_active');
		}
	}
	for (let index = 0; index < select_options.length; index++) {
		const select_option = select_options[index];
		const select_option_value = select_option.getAttribute('data-value');
		const select_option_text = select_option.innerHTML;

		if (select_type == 'input') {
			select_input.addEventListener('keyup', select_search);
		} else {
			if (select_option.getAttribute('data-value') == original.value && !original.hasAttribute('multiple')) {
				select_option.style.display = 'none';
			}
		}
		select_option.addEventListener('click', function () {
			for (let index = 0; index < select_options.length; index++) {
				const el = select_options[index];
				el.style.display = 'block';
			}
			if (select_type == 'input') {
				select_input.value = select_option_text;
				original.value = select_option_value;
			} else {
				if (original.hasAttribute('multiple')) {
					select_option.classList.toggle('_selected');
					selectMultiItems();
				} else {
					select.querySelector('.select__value').innerHTML = '<span>' + select_option_text + '</span>';
					original.value = select_option_value;
					select_option.style.display = 'none';
				}
			}
			let type;
			if (original.hasAttribute('multiple')) {
				type = 'multiple';
			}
			selectItemActions(type);
		});
	}
}
function select_get_options(select_options) {
	if (select_options) {
		let select_options_content = '';
		for (let index = 0; index < select_options.length; index++) {
			const select_option = select_options[index];
			const select_option_value = select_option.value;
			if (select_option_value != '') {
				const select_option_text = select_option.innerHTML;
				select_options_content = select_options_content + '<div data-value="' + select_option_value + '" class="select__option">' + select_option_text + '</div>';
			}
		}
		return select_options_content;
	}
}
function select_search(e) {
	let select_block = e.target.closest('.select ').querySelector('.select__options');
	let select_options = e.target.closest('.select ').querySelectorAll('.select__option');
	let select_search_text = e.target.value.toUpperCase();

	for (let i = 0; i < select_options.length; i++) {
		let select_option = select_options[i];
		let select_txt_value = select_option.textContent || select_option.innerText;
		if (select_txt_value.toUpperCase().indexOf(select_search_text) > -1) {
			select_option.style.display = "";
		} else {
			select_option.style.display = "none";
		}
	}
}
function selects_update_all() {
	let selects = document.querySelectorAll('select');
	if (selects) {
		for (let index = 0; index < selects.length; index++) {
			const select = selects[index];
			select_item(select);
		}
	}
}

//Placeholers
let inputs = document.querySelectorAll('input[data-value],textarea[data-value]');
inputs_init(inputs);

function inputs_init(inputs) {
	if (inputs.length > 0) {
		for (let index = 0; index < inputs.length; index++) {
			const input = inputs[index];
			const input_g_value = input.getAttribute('data-value');
			input_placeholder_add(input);
			if (input.value != '' && input.value != input_g_value) {
				input_focus_add(input);
			}
			input.addEventListener('focus', function (e) {
				if (input.value == input_g_value) {
					input_focus_add(input);
					input.value = '';
				}
				if (input.getAttribute('data-type') === "pass" && !input.parentElement.querySelector('.form__viewpass').classList.contains('_active')) {
					input.setAttribute('type', 'password');
				}
				if (input.classList.contains('_date')) {
					/*
					input.classList.add('_mask');
					Inputmask("99.99.9999", {
						//"placeholder": '',
						clearIncomplete: true,
						clearMaskOnLostFocus: true,
						onincomplete: function () {
							input_clear_mask(input, input_g_value);
						}
					}).mask(input);
					*/
				}
				if (input.classList.contains('_phone')) {
					//'+7(999) 999 9999'
					//'+38(999) 999 9999'
					//'+375(99)999-99-99'
					input.classList.add('_mask');
					Inputmask("+375 (99) 9999999", {
						//"placeholder": '',
						clearIncomplete: true,
						clearMaskOnLostFocus: true,
						onincomplete: function () {
							input_clear_mask(input, input_g_value);
						}
					}).mask(input);
				}
				if (input.classList.contains('_digital')) {
					input.classList.add('_mask');
					Inputmask("9{1,}", {
						"placeholder": '',
						clearIncomplete: true,
						clearMaskOnLostFocus: true,
						onincomplete: function () {
							input_clear_mask(input, input_g_value);
						}
					}).mask(input);
				}
				form_remove_error(input);
			});
			input.addEventListener('blur', function (e) {
				if (input.value == '') {
					input.value = input_g_value;
					input_focus_remove(input);
					if (input.classList.contains('_mask')) {
						input_clear_mask(input, input_g_value);
					}
					if (input.getAttribute('data-type') === "pass") {
						input.setAttribute('type', 'text');
					}
				}
			});
			if (input.classList.contains('_date')) {
				const calendarItem = datepicker(input, {
					customDays: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
					customMonths: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
					overlayButton: 'Применить',
					overlayPlaceholder: 'Год (4 цифры)',
					startDay: 1,
					formatter: (input, date, instance) => {
						const value = date.toLocaleDateString()
						input.value = value
					},
					onSelect: function (input, instance, date) {
						input_focus_add(input.el);
					}
				});
				const dataFrom = input.getAttribute('data-from');
				const dataTo = input.getAttribute('data-to');
				if (dataFrom) {
					calendarItem.setMin(new Date(dataFrom));
				}
				if (dataTo) {
					calendarItem.setMax(new Date(dataTo));
				}
			}
		}
	}
}
function input_placeholder_add(input) {
	const input_g_value = input.getAttribute('data-value');
	if (input.value == '' && input_g_value != '') {
		input.value = input_g_value;
	}
}
function input_focus_add(input) {
	input.classList.add('_focus');
	input.parentElement.classList.add('_focus');
}
function input_focus_remove(input) {
	input.classList.remove('_focus');
	input.parentElement.classList.remove('_focus');
}
function input_clear_mask(input, input_g_value) {
	input.inputmask.remove();
	input.value = input_g_value;
	input_focus_remove(input);
}

//QUANTITY
let quantityButtons = document.querySelectorAll('.quantity__button');
if (quantityButtons.length > 0) {
	for (let index = 0; index < quantityButtons.length; index++) {
		const quantityButton = quantityButtons[index];
		quantityButton.addEventListener("click", function (e) {
			let value = parseInt(quantityButton.closest('.quantity').querySelector('input').value);
			if (quantityButton.classList.contains('quantity__button_plus')) {
				value++;
			} else {
				value = value - 1;
				if (value < 1) {
					value = 1
				}
			}
			quantityButton.closest('.quantity').querySelector('input').value = value;
		});
	}
}

//RANGE
const priceSlider = document.querySelector('.price-filter__slider');
if (priceSlider) {

	let textFrom = priceSlider.getAttribute('data-from');
	let textTo = priceSlider.getAttribute('data-to');

	noUiSlider.create(priceSlider, {
		start: [0, 200000],
		connect: true,
		tooltips: [wNumb({ decimals: 0, prefix: textFrom + ' ' }), wNumb({ decimals: 0, prefix: textTo + ' ' })],
		range: {
			'min': [0],
			'max': [200000]
		}
	});

	/*
	const priceStart = document.getElementById('price-start');
	const priceEnd = document.getElementById('price-end');
	priceStart.addEventListener('change', setPriceValues);
	priceEnd.addEventListener('change', setPriceValues);
	*/

	function setPriceValues() {
		let priceStartValue;
		let priceEndValue;
		if (priceStart.value != '') {
			priceStartValue = priceStart.value;
		}
		if (priceEnd.value != '') {
			priceEndValue = priceEnd.value;
		}
		priceSlider.noUiSlider.set([priceStartValue, priceEndValue]);
	}
}
	let blockClients = document.querySelectorAll('.client'),
	close = document.querySelectorAll('._close');

for (const client of blockClients) {
	if (document.querySelector('html').classList.contains('_touch')) {
		if (window.innerWidth <= 526) {
			let modalClient = document.querySelector('.popup_clients .popup__clients');
			client.addEventListener("click", (e) => {
				let dupNode = client.cloneNode(true);
				dupNode.querySelector('._close').remove();
				modalClient.innerHTML = '';
				modalClient.append(dupNode);
				popup_open('clients', video = '', client);	
			});

		} else {
			client.addEventListener("click", (e) => {
				anBlock(client, e)

			});
		}

	} else {
		client.addEventListener("mouseover", (e) => {
			anBlock(client, e)
		});
		client.addEventListener('mouseleave', (e) => {
			clearActiveClasses();
		})
	}
}

function clearActiveClasses() {
	blockClients.forEach((client) => {
		if (client.classList.contains('_active') == true) {
			client.classList.remove('_animation');
			setTimeout(() => {
				client.classList.remove('_active');
			}, 50);
		}
	})
}

function anBlock(client, e) {
	if (client.classList.contains('_active') !== true) {
		clearActiveClasses();
		setTimeout(() => {
			client.classList.add('_animation');

		}, 10);
		client.classList.add('_active');

	} else if (e.target.classList.contains('_close')) {
		e.target.closest('.client').classList.remove('_animation');
		setTimeout(() => {
			e.target.closest('.client').classList.remove('_active');
		}, 50);

	}
}

	let scr_body = document.querySelector('body');
let scr_blocks = document.querySelectorAll('._scr-sector');
let scr_items = document.querySelectorAll('._scr-item');
let scr_fix_block = document.querySelectorAll('._side-wrapper');
let scr_min_height = 750;

let scrolling = true;
let scrolling_full = true;

let scrollDirection = 0;

let currentScroll;

//ScrollOnScroll
window.addEventListener('scroll', scroll_scroll);
function scroll_scroll() {
	let src_value = currentScroll = pageYOffset;
	let header = document.querySelector('header.header');
	if (header !== null) {
		if (src_value > 10) {
			header.classList.add('_scroll');
		} else {
			header.classList.remove('_scroll');
		}
	}
	if (scr_blocks.length > 0) {
		for (let index = 0; index < scr_blocks.length; index++) {
			let block = scr_blocks[index];
			let block_offset = offset(block).top;
			let block_height = block.offsetHeight;

			/*
			if ((src_value > block_offset - block_height) && src_value < (block_offset + block_height) && window.innerHeight > scr_min_height && window.innerWidth > 992) {
				let scrProcent = (src_value - block_offset) / block_height * 100;
				scrParallax(block, scrProcent, block_height);
			}
			*/

			if ((pageYOffset > block_offset - window.innerHeight / 1.5) && pageYOffset < (block_offset + block_height) - window.innerHeight / 5) {
				block.classList.add('_scr-sector_active');
			} else {
				if (block.classList.contains('_scr-sector_active')) {
					block.classList.remove('_scr-sector_active');
				}
			}
			if ((pageYOffset > block_offset - window.innerHeight / 2) && pageYOffset < (block_offset + block_height) - window.innerHeight / 5) {
				if (!block.classList.contains('_scr-sector_current')) {
					block.classList.add('_scr-sector_current');
				}
			} else {
				if (block.classList.contains('_scr-sector_current')) {
					block.classList.remove('_scr-sector_current');
				}
			}
		}
	}
	if (scr_items.length > 0) {
		for (let index = 0; index < scr_items.length; index++) {
			let scr_item = scr_items[index];
			let scr_item_offset = offset(scr_item).top;
			let scr_item_height = scr_item.offsetHeight;


			let scr_item_point = window.innerHeight - (window.innerHeight - scr_item_height / 3);
			if (window.innerHeight > scr_item_height) {
				scr_item_point = window.innerHeight - scr_item_height / 3;
			}

			if ((src_value > scr_item_offset - scr_item_point) && src_value < (scr_item_offset + scr_item_height)) {
				scr_item.classList.add('_active');
				scroll_load_item(scr_item);
			} else {
				// scr_item.classList.remove('_active');
			}
			if (((src_value > scr_item_offset - window.innerHeight))) {
				if (scr_item.querySelectorAll('._lazy').length > 0) {
					scroll_lazy(scr_item);
				}
			}
		}
	}
	if (scr_fix_block.length > 0) {
		fix_block(scr_fix_block, src_value);
	}
	let custom_scroll_line = document.querySelector('._custom-scroll__line');
	if (custom_scroll_line) {
		let window_height = window.innerHeight;
		let content_height = document.querySelector('.wrapper').offsetHeight;
		let scr_procent = (pageYOffset / (content_height - window_height)) * 100;
		let custom_scroll_line_height = custom_scroll_line.offsetHeight;
		custom_scroll_line.style.transform = "translateY(" + (window_height - custom_scroll_line_height) / 100 * scr_procent + "px)";
	}
	if (src_value > scrollDirection) {
		// downscroll code
	} else {
		// upscroll code
	}
	scrollDirection = src_value <= 0 ? 0 : src_value;
}
setTimeout(function () {
	//document.addEventListener("DOMContentLoaded", scroll_scroll);
	scroll_scroll();
}, 100);

function scroll_lazy(scr_item) {
	let lazy_src = scr_item.querySelectorAll('*[data-src]');
	if (lazy_src.length > 0) {
		for (let index = 0; index < lazy_src.length; index++) {
			const el = lazy_src[index];
			if (!el.classList.contains('_loaded')) {
				el.setAttribute('src', el.getAttribute('data-src'));
				el.classList.add('_loaded');
			}
		}
	}
	let lazy_srcset = scr_item.querySelectorAll('*[data-srcset]');
	if (lazy_srcset.length > 0) {
		for (let index = 0; index < lazy_srcset.length; index++) {
			const el = lazy_srcset[index];
			if (!el.classList.contains('_loaded')) {
				el.setAttribute('srcset', el.getAttribute('data-srcset'));
				el.classList.add('_loaded');
			}
		}
	}
}
function scroll_load_item(scr_item) {
	if (scr_item.classList.contains('_load-map') && !scr_item.classList.contains('_loaded-map')) {
		let map_item = document.getElementById('map');
		if (map_item) {
			scr_item.classList.add('_loaded-map');
			map();
		}
	}
}
function scrParallax(block, scrProcent, blockHeight) {
	let prlxItems = block.querySelectorAll('._prlx-item');
	if (prlxItems.length > 0) {
		for (let index = 0; index < prlxItems.length; index++) {
			const prlxItem = prlxItems[index];
			let prlxItemAttr = (prlxItem.dataset.prlx) ? prlxItem.dataset.prlx : 3;
			const prlxItemValue = -1 * (blockHeight / 100 * scrProcent / prlxItemAttr);
			prlxItem.style.cssText = `transform: translateY(${prlxItemValue}px);`;
		}
	}
}
//FullScreenScroll
if (scr_blocks.length > 0 && !isMobile.any()) {
	disableScroll();
	window.addEventListener('wheel', full_scroll);

	let swiperScrolls = document.querySelectorAll('._swiper_scroll');

	if (swiperScrolls.length > 0) {
		for (let index = 0; index < swiperScrolls.length; index++) {
			const swiperScroll = swiperScrolls[index];
			swiperScroll.addEventListener("mouseenter", function (e) {
				window.removeEventListener('wheel', full_scroll);
			});
			swiperScroll.addEventListener("mouseleave", function (e) {
				window.addEventListener('wheel', full_scroll);
			});
		}
	}
}
function getPrevBlockPos(current_block_prev) {
	let viewport_height = window.innerHeight;
	let current_block_prev_height = current_block_prev.offsetHeight;
	let block_pos = offset(current_block_prev).top;

	if (current_block_prev_height >= viewport_height) {
		block_pos = block_pos + (current_block_prev_height - viewport_height);
	}
	return block_pos;
}
function full_scroll(e) {
	let viewport_height = window.innerHeight;
	if (viewport_height >= scr_min_height) {
		if (scrolling_full) {
			let current_block = document.querySelector('._scr-sector._scr-sector_current');
			let current_block_pos = offset(current_block).top;
			let current_block_height = current_block.offsetHeight;
			let current_block_next = current_block.nextElementSibling;
			let current_block_prev = current_block.previousElementSibling;
			if (e.keyCode == 40 || e.keyCode == 34 || e.deltaX > 0 || e.deltaY < 0) {
				if (current_block_height <= viewport_height) {
					if (current_block_prev) {
						full_scroll_to_sector(getPrevBlockPos(current_block_prev));
					}
				} else {
					enableScroll();
					if (currentScroll <= current_block_pos) {
						if (current_block_prev) {
							full_scroll_to_sector(getPrevBlockPos(current_block_prev));
						}
					}
				}
			} else if (e.keyCode == 38 || e.keyCode == 33 || e.deltaX < 0 || e.deltaY > 0) {
				if (current_block_height <= viewport_height) {
					if (current_block_next) {
						let block_pos = offset(current_block_next).top;
						full_scroll_to_sector(block_pos);
					}
				} else {
					enableScroll();
					if (current_block_next) {
						let block_pos = offset(current_block_next).top;
						if (currentScroll >= block_pos - viewport_height) {
							full_scroll_to_sector(block_pos);
						}
					}
				}
			}
		} else {
			disableScroll();
		}
	} else {
		enableScroll();
	}
}
function full_scroll_to_sector(pos) {
	disableScroll();
	scrolling_full = false;
	_goto(pos, 800);

	let scr_pause = 500;
	if (navigator.appVersion.indexOf("Mac") != -1) {
		scr_pause = 1000;
	};
	setTimeout(function () {
		scrolling_full = true;
	}, scr_pause);
}
function full_scroll_pagestart() { }
function full_scroll_pageend() { }

//ScrollOnClick (Navigation)
let link = document.querySelectorAll('._goto-block');
if (link) {
	let blocks = [];
	for (let index = 0; index < link.length; index++) {
		let el = link[index];
		let block_name = el.getAttribute('href').replace('#', '');
		if (block_name != '' && !~blocks.indexOf(block_name)) {
			blocks.push(block_name);
		}
		el.addEventListener('click', function (e) {
			if (document.querySelector('.menu__body._active')) {
				menu_close();
				body_lock_remove(500);
			}
			let target_block_class = el.getAttribute('href').replace('#', '');
			let target_block = document.querySelector('.' + target_block_class);
			_goto(target_block, 300);
			e.preventDefault();
		})
	}

	window.addEventListener('scroll', function (el) {
		let old_current_link = document.querySelectorAll('._goto-block._active');
		if (old_current_link) {
			for (let index = 0; index < old_current_link.length; index++) {
				let el = old_current_link[index];
				el.classList.remove('_active');
			}
		}
		for (let index = 0; index < blocks.length; index++) {
			let block = blocks[index];
			let block_item = document.querySelector('.' + block);
			if (block_item) {
				let block_offset = offset(block_item).top;
				let block_height = block_item.offsetHeight;
				if ((pageYOffset > block_offset - window.innerHeight / 3) && pageYOffset < (block_offset + block_height) - window.innerHeight / 3) {
					let current_links = document.querySelectorAll('._goto-block[href="#' + block + '"]');
					for (let index = 0; index < current_links.length; index++) {
						let current_link = current_links[index];
						current_link.classList.add('_active');
					}
				}
			}
		}
	})
}
//ScrollOnClick (Simple)
let goto_links = document.querySelectorAll('._goto');
if (goto_links) {
	for (let index = 0; index < goto_links.length; index++) {
		let goto_link = goto_links[index];
		goto_link.addEventListener('click', function (e) {
			let target_block_class = goto_link.getAttribute('href').replace('#', '');
			let target_block = document.querySelector('.' + target_block_class);
			_goto(target_block, 300);
			e.preventDefault();
		});
	}
}
function _goto(target_block, speed, offset = 0) {
	let header = '';
	//OffsetHeader
	//if (window.innerWidth < 992) {
	//	header = 'header';
	//}
	let options = {
		speedAsDuration: true,
		speed: speed,
		header: header,
		offset: offset,
		easing: 'easeOutQuad',
	};
	let scr = new SmoothScroll();
	scr.animateScroll(target_block, '', options);
}

//SameFunctions
function offset(el) {
	var rect = el.getBoundingClientRect(),
		scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
		scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}
function disableScroll() {
	if (window.addEventListener) // older FF
		window.addEventListener('DOMMouseScroll', preventDefault, false);
	document.addEventListener('wheel', preventDefault, { passive: false }); // Disable scrolling in Chrome
	window.onwheel = preventDefault; // modern standard
	window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
	window.ontouchmove = preventDefault; // mobile
	document.onkeydown = preventDefaultForScrollKeys;
}
function enableScroll() {
	if (window.removeEventListener)
		window.removeEventListener('DOMMouseScroll', preventDefault, false);
	document.removeEventListener('wheel', preventDefault, { passive: false }); // Enable scrolling in Chrome
	window.onmousewheel = document.onmousewheel = null;
	window.onwheel = null;
	window.ontouchmove = null;
	document.onkeydown = null;
}
function preventDefault(e) {
	e = e || window.event;
	if (e.preventDefault)
		e.preventDefault();
	e.returnValue = false;
}
function preventDefaultForScrollKeys(e) {
	/*if (keys[e.keyCode]) {
		preventDefault(e);
		return false;
	}*/
}

function fix_block(scr_fix_block, scr_value) {
	let window_width = parseInt(window.innerWidth);
	let window_height = parseInt(window.innerHeight);
	let header_height = parseInt(document.querySelector('header').offsetHeight) + 15;
	for (let index = 0; index < scr_fix_block.length; index++) {
		const block = scr_fix_block[index];
		let block_width = block.getAttribute('data-width');
		const item = block.querySelector('._side-block');
		if (!block_width) { block_width = 0; }
		if (window_width > block_width) {
			if (item.offsetHeight < window_height - (header_height + 30)) {
				if (scr_value > offset(block).top - (header_height + 15)) {
					item.style.cssText = "position:fixed;bottom:auto;top:" + header_height + "px;width:" + block.offsetWidth + "px;left:" + offset(block).left + "px;";
				} else {
					gotoRelative(item);
				}
				if (scr_value > (block.offsetHeight + offset(block).top) - (item.offsetHeight + (header_height + 15))) {
					block.style.cssText = "position:relative;";
					item.style.cssText = "position:absolute;bottom:0;top:auto;left:0px;width:100%";
				}
			} else {
				gotoRelative(item);
			}
		}
	}
	function gotoRelative(item) {
		item.style.cssText = "position:relative;bottom:auto;top:0px;left:0px;";
	}
}

if (!isMobile.any()) {
	//custom_scroll();
	/*
	window.addEventListener('wheel', scroll_animate, {
		capture: true,
		passive: true
	});
	window.addEventListener('resize', custom_scroll, {
		capture: true,
		passive: true
	});
	*/
}
function custom_scroll(event) {
	scr_body.style.overflow = 'hidden';
	let window_height = window.innerHeight;
	let custom_scroll_line = document.querySelector('._custom-scroll__line');
	let custom_scroll_content_height = document.querySelector('.wrapper').offsetHeight;
	let custom_cursor_height = Math.min(window_height, Math.round(window_height * (window_height / custom_scroll_content_height)));
	if (custom_scroll_content_height > window_height) {
		if (!custom_scroll_line) {
			let custom_scroll = document.createElement('div');
			custom_scroll_line = document.createElement('div');
			custom_scroll.setAttribute('class', '_custom-scroll');
			custom_scroll_line.setAttribute('class', '_custom-scroll__line');
			custom_scroll.appendChild(custom_scroll_line);
			scr_body.appendChild(custom_scroll);
		}
		custom_scroll_line.style.height = custom_cursor_height + 'px';
	}
}

let new_pos = pageYOffset;
function scroll_animate(event) {
	let window_height = window.innerHeight;
	let content_height = document.querySelector('.wrapper').offsetHeight;
	let start_position = pageYOffset;
	let pos_add = 100;

	if (event.keyCode == 40 || event.keyCode == 34 || event.deltaX > 0 || event.deltaY < 0) {
		new_pos = new_pos - pos_add;
	} else if (event.keyCode == 38 || event.keyCode == 33 || event.deltaX < 0 || event.deltaY > 0) {
		new_pos = new_pos + pos_add;
	}
	if (new_pos > (content_height - window_height)) new_pos = content_height - window_height;
	if (new_pos < 0) new_pos = 0;

	if (scrolling) {
		scrolling = false;
		_goto(new_pos, 1000);

		let scr_pause = 100;
		if (navigator.appVersion.indexOf("Mac") != -1) {
			scr_pause = scr_pause * 2;
		};
		setTimeout(function () {
			scrolling = true;
			_goto(new_pos, 1000);
		}, scr_pause);
	}
	//If native scroll
	//disableScroll();
}

	
let reviewsText = document.querySelectorAll('.reviews-slide__text');

if (window.innerWidth <= 991) {
	for (let i = 0; i < reviewsText.length; i++) {
		const el = reviewsText[i];

		if (el.offsetHeight >= 120) {
			let readMore = document.createElement('div');
			readMore.classList.add('readMmore');
			el.setAttribute('style', 'max-height:120px; display: -webkit-box;-webkit-line-clamp: 3; -webkit-box-orient: vertical;');
			readMore.innerHTML = 'Читать полностью';
			el.after(readMore)
			readMore.addEventListener("click", function (e) {
				el.style.display = 'block';
				el.style.maxHeight = '100%';
				readMore.style.opacity = '0';
			});
		}
	}
}

function reviewsTextMin() {
	if (window.innerWidth <= 991) {
		for (let i = 0; i < document.querySelectorAll('.reviews-slide__text').length; i++) {
			const el = document.querySelectorAll('.reviews-slide__text')[i];
			if (el.closest('.reviews-slide__right').querySelector('.readMmore') !== null) {
				el.closest('.reviews-slide__right').querySelector('.readMmore').style.opacity = '1'
				el.setAttribute('style', 'max-height:120px; display: -webkit-box;-webkit-line-clamp: 3; -webkit-box-orient: vertical;');
			}
		}
	}
}

	//=================
//ActionsOnHash
if (location.hash) {
	const hsh = location.hash.replace('#', '');
	if (document.querySelector('.popup_' + hsh)) {
		popup_open(hsh);
	} else if (document.querySelector('div.' + hsh)) {
		_goto(document.querySelector('.' + hsh), 500, '');
	}
}

//=================
//Popups
let popup_link = document.querySelectorAll('._popup-link');
let popups = document.querySelectorAll('.popup');
for (let index = 0; index < popup_link.length; index++) {
	const el = popup_link[index];
	el.addEventListener('click', function (e) {
		if (unlock) {
			let item = el.getAttribute('href').replace('#', '');
			let video = el.getAttribute('data-video');
			popup_open(item, video, el);
		}
		e.preventDefault();
	})
}
for (let index = 0; index < popups.length; index++) {
	const popup = popups[index];
	popup.addEventListener("click", function (e) {
		if (!e.target.closest('.popup__body')) {
			popup_close(e.target.closest('.popup'));
		}
	});
}
function popup_open(item, video = '', elem) {
	let activePopup = document.querySelectorAll('.popup._active');
	let curent_popup = document.querySelector('.popup_' + item);

	if (activePopup.length > 0) {
		popup_close('', false);

	}

	if (item === 'rw') {
		if (elem != undefined) {

			let url = elem.dataset.url;
			document.querySelector('body').classList.add('_lock');
			curent_popup.querySelector('.popup__boximg').querySelector('img').setAttribute('src', '')
			curent_popup.querySelector('.popup__boximg').querySelector('source').setAttribute('srcset', '')
			curent_popup.querySelector('.popup__boximg').querySelector('img').setAttribute('src', `${url}`)
			curent_popup.querySelector('.popup__boximg').querySelector('source').setAttribute('srcset', `${url}`)
		}


	}
	if (curent_popup && unlock) {
		if (video != '' && video != null) {
			let popup_video = document.querySelector('.popup_video');
			popup_video.querySelector('.popup__video').innerHTML = '<iframe src="https://www.youtube.com/embed/' + video + '?autoplay=1"  allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		}
		if (!document.querySelector('.menu__body._active')) {
			body_lock_add(500);
		}
		curent_popup.classList.add('_active');
		history.pushState('', '', '#' + item);
	}
}
function popup_close(item, bodyUnlock = true) {
	document.querySelector('body').classList.remove('_lock')
	if (unlock) {
		if (!item) {
			for (let index = 0; index < popups.length; index++) {
				const popup = popups[index];
				let video = popup.querySelector('.popup__video');
				if (video) {
					video.innerHTML = '';
				}
				popup.classList.remove('_active');
			}
		} else {
			let video = item.querySelector('.popup__video');
			if (video) {
				video.innerHTML = '';
			}
			item.classList.remove('_active');
		}
		if (!document.querySelector('.menu__body._active') && bodyUnlock) {
			body_lock_remove(500);
		}
		history.pushState('', '', window.location.href.split('#')[0]);
	}
}
let popup_close_icon = document.querySelectorAll('.popup__close,._popup-close');
if (popup_close_icon) {
	for (let index = 0; index < popup_close_icon.length; index++) {
		const el = popup_close_icon[index];
		el.addEventListener('click', function () {
			popup_close(el.closest('.popup'));
		})
	}
}
document.addEventListener('keydown', function (e) {
	if (e.code === 'Escape') {
		popup_close();
	}
});


	let gallery = document.querySelectorAll('._gallery');
if (gallery) {
	gallery_init();
}
function gallery_init() {
	for (let index = 0; index < gallery.length; index++) {
		const el = gallery[index];
		lightGallery(el, {
			thumbnail: true,
			animateThumb: false,
			showThumbByDefault: false,
			selector: 'a',

		});
	}
}
	// calc(-3.5vw - 50px/2 )
function positionText() {
	let scrollTextPosition = document.querySelectorAll('._scroll-text'),
		mainscroll = document.querySelector('.main__scroll').offsetWidth;

	for (let i = 0; i < scrollTextPosition.length; i++) {
		const el = scrollTextPosition[i];
		el.style.left = `-${mainscroll}px`;
		el.style.height = `${mainscroll}px`;
		el.style.lineHeight = `${mainscroll}px`;


	}
}
function myFunction() {
	let scrollBlock = document.querySelectorAll('._scroll-block'),
		height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

	for (let i = 0; i < scrollBlock.length; i++) {
		const el = scrollBlock[i];
		let winScroll = el.scrollTop || document.documentElement.scrollTop,
			scrolled = (winScroll / height) * 100,
			elTop = el.getBoundingClientRect().top,
			topBlock = (el.offsetHeight + elTop) / 2;

		// if ((elTop < 0)) {
		if (Math.abs(elTop) <= el.offsetHeight) {
			// 		if (elTop <= 0 && ((elTop + el.offsetHeight) >= 0 && ((elTop + el.offsetHeight) <= (el.offsetHeight / 2)))) {
			// 			el.querySelector('._scroll-text').style.cssText = `top: 50%;
			// 		width: 0;
			// bottom: auto;

			// 		`;
			// 		}
			// console.log(`${el.offsetHeight}  + ${elTop} = ${el.offsetHeight + el.getBoundingClientRect().top}`);
			// console.log((el.querySelector('._scroll-text').offsetWidth) / 2);

			// else {
			el.querySelector('._scroll-text').style.cssText = `top: calc(${topBlock}px - ${(el.querySelector('._scroll-text').offsetWidth) / 1.5}px);
	bottom: auto;
width: 0;
			`;
			// }
			// }
		}
	}
}

function scrollBtn() {
	let btn = document.querySelector('.scroll-btn');
	if (document.body.getBoundingClientRect().top > -100) {
		btn.classList.remove('_active');
	} else {
		btn.classList.add('_active');
	}
}
myFunction()
scrollBtn()
positionText()

window.onscroll = function () {
	myFunction()
	scrollBtn()
	positionText()

};

	function filtersBtnShow() {
	let filters = document.querySelector('.filters'),
		filtersBtn = document.querySelectorAll('.filters__btn');

	if (filters != null) {
		let dots = document.createElement('div'),
			block = document.createElement('div'),
			name = document.createElement('div');

		dots.className = "filters__dots _filter-btn";
		block.className = "filters__block";
		name.className = "filters__name";

		dots.innerHTML = `<div class="dot"></div>`

		if ((filtersBtn.length > 4) && window.innerWidth > 991) {
			filters.append(dots);
			filters.append(block);

			for (let i = 0; i < filtersBtn.length; i++) {
				const el = filtersBtn[i];
				if (i > 3) {
					block.append(el);
				}

			}
		} else if (window.innerWidth <= 991) {
			filters.append(name);
			filters.append(dots);
			filters.append(block);

			let filterBtnActive = document.querySelector('.filters__btn._active').innerHTML,
				filterName = document.querySelector('.filters__name');

			filterName.innerHTML = filterBtnActive;


			for (let i = 0; i < filtersBtn.length; i++) {
				const el = filtersBtn[i];
				block.append(el);
			}
		}
	}
}
filtersBtnShow()

function showBlock() {
	let filterBtn = document.querySelector('._filter-btn'),
		filterBlock = document.querySelector('.filters__block');
	if (filterBtn) {
		window.addEventListener('click', e => {
			const target = e.target;
			if (!target.closest('._filter-btn') && !target.closest('._filter-btn')) {
				filterBlock.classList.remove('_active')
			} else {
				filterBlock.classList.toggle('_active')
			}
		})
	}
}

showBlock()

if (document.querySelector('.grid')) {
	let grid = new Isotope('.grid', {
		itemSelector: '.grid-item',
		layoutMode: 'fitRows'
	});

	let filterBtn = document.querySelectorAll('.filters .filters__btn'),
		gridItem = document.querySelectorAll('.grid-item');


	for (let i = 0; i < filterBtn.length; i++) {
		filterBtn[i].onclick = function (click) {

			filterBtn[i].classList.remove('_active')

			// click.preventDefault();
			let filterData = event.target.getAttribute('data-filter');

			for (let i = 0; i < filterBtn.length; i++) {
				filterBtn[i].classList.remove('_active');
			}
			event.target.classList.add('_active');

			grid.arrange({
				filter: filterData
			});

			for (let i = 0; i < gridItem.length; i++) {
				gridItem[i].classList.remove('row-reverse', 'row');

				if (gridItem[i].classList.contains(`${filterData.replace('.', "")}`)) {
					gridItem[i].classList.add('_show');
				} else {
					gridItem[i].classList.remove('_show');
				}
			}
			let gridItemShow = document.querySelectorAll('.grid-item._show');

			for (let i = 0; i < gridItemShow.length; i++) {
				if (i % 2 === 1) {
					gridItemShow[i].classList.add('row-reverse');
				} else {
					gridItemShow[i].classList.add('row');

				}
			}
			if (window.innerWidth <= 991) {
				let filterBtnActive = document.querySelector('.filters__btn._active').innerHTML,
					filterName = document.querySelector('.filters__name');

				filterName.innerHTML = filterBtnActive;
			}

		};
	}

}

if (document.querySelector('.portfolio-grid')) {

	let portfolioGrid = new Isotope('.portfolio-grid', {
		itemSelector: '.portfolio-grid__item',
		percentPosition: true,
		// layoutMode: 'fitRows',
		masonry: {
			columnWidth: '.grid-sizer'
		}
	});


// let portfolioGrid = new Isotope('.portfolio-grid', {
// 	itemSelector: '.portfolio-grid__item',
// 	layoutMode: 'fitRows',
// 	masonry: {
// 		columnWidth: 100
// 	}
// });

let portfolioBtn = document.querySelectorAll('.filters__btn');

for (let i = 0; i < portfolioBtn.length; i++) {
	portfolioBtn[i].onclick = function (click) {
		portfolioBtn[i].classList.remove('_active')

		// click.preventDefault();
		let portfolioFilterData = event.target.getAttribute('data-filter');
		for (let i = 0; i < portfolioBtn.length; i++) {
			portfolioBtn[i].classList.remove('_active');
		}
		event.target.classList.add('_active');

		portfolioGrid.arrange({
			filter: portfolioFilterData
		});
	};
}

}


});









