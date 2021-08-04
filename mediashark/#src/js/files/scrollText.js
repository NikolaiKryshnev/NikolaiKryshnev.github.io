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
myFunction()

function scrollBtn() {
	let btn = document.querySelector('.scroll-btn');
	if (document.body.getBoundingClientRect().top > -100) {
		btn.classList.remove('_active');
	} else {
		btn.classList.add('_active');
	}
}
scrollBtn()

window.onscroll = function () {
	myFunction()
	scrollBtn()
};
