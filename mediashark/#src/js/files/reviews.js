
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