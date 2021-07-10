
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







