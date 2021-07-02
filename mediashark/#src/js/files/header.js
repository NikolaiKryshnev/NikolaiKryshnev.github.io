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







