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
