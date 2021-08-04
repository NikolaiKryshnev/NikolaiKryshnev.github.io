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
}
footerFixed()





