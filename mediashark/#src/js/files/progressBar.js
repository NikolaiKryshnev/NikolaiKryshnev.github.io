window.onload = function () {

// animation numbers 
const time = 2000;
const step = 1;

function outNum(num, elem) {
	let e = elem,
		n = 0;
	let t = Math.round(time / (num / step));
	let interval = setInterval(() => {
		n = n + step;
		if (n == num) {
			clearInterval(interval);
		}

		e.innerHTML = n;

		if (e.closest('._progress-bar').querySelector('.progBar-line--progress') !== null) {
			e.closest('._progress-bar').querySelector('.progBar-line--progress').style.width = `${n}%`;
		} else {

			let result = 566 + (566 * n / e.dataset.maxprognumber);
			e.closest('._progress-bar').querySelector('.circle').querySelector('._circle-progress').style.strokeDashoffset = `${result}`;
		}
	},
		t);
};
//--------------


function anProgressBar(block) {
	for (let i = 0; i < block.length; i++) {
		let el = block[i],
			numberSum = el.querySelector('._progress-bar__number'),
			prognumber = +numberSum.dataset.prognumber;

		outNum(prognumber, numberSum)
	}
}

anProgressBar(document.querySelectorAll('.progBar-circle'))
anProgressBar(document.querySelectorAll('.progBar-line'))

// charts

var object = document.getElementById("logoObject");

	function chartsSvg() {
		let charts = document.querySelectorAll('.charts-block__ico'),
		chartsLine = document.querySelectorAll('.charts-block__line');
		for (let i = 0; i < charts.length; i++) {
			const el = charts[i];
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
	chartsSvg()
};





