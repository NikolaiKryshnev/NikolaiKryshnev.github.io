function myFunction() {
	let scrollBlock = document.querySelectorAll('._scroll-block'),
		height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

	for (let i = 0; i < scrollBlock.length; i++) {
		const el = scrollBlock[i];
		let winScroll = el.scrollTop || document.documentElement.scrollTop,
			scrolled = (winScroll / height) * 100,
			topBlock = (el.offsetHeight + el.getBoundingClientRect().top) / 2;

		// if ((el.getBoundingClientRect().top < 0)) {
		if (Math.abs(el.getBoundingClientRect().top) <= el.offsetHeight)
			// console.log(`${el.offsetHeight}  + ${el.getBoundingClientRect().top} = ${el.offsetHeight + el.getBoundingClientRect().top}`);
			// console.log((el.querySelector('._scroll-text').offsetWidth) / 2);

		el.querySelector('._scroll-text').style.cssText = `top: calc(${topBlock}px - ${(el.querySelector('._scroll-text').offsetWidth) / 1.5}px);
			width: 0;
	bottom: auto;

			`;
		// }
	}
}

myFunction()
window.onscroll = function () { myFunction() };

