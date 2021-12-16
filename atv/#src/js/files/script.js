function wrap(el, wrapper) {
	wrapper.classList.add('table-scroll');
	el.parentNode.insertBefore(wrapper, el);
	wrapper.appendChild(el);
}
if ((window.innerWidth <= 991) && (document.querySelector('.table') != null)) {
	document.querySelectorAll('.table').forEach(el => {
		wrap(el, document.createElement('div'));
	});
}


function hideBlocks(blocksParent, btn, blocksChildClass, num) {
	if ((btn != null)) {
		block = blocksParent.querySelectorAll(`.${blocksChildClass}`);
		for (let i = 0; i < block.length; i++) {
			if (i >= num) {
				block[i].style.display = "none"
				btn.style.display = "flex"

			} else {
				btn.style.display = "none"
			}
		}

		btn.addEventListener("click", function (e) {
			e.preventDefault();
			for (let i = 0; i < block.length; i++) {
				block[i].style.display = "block"
			}
			btn.remove()
		});
	}

}

hideBlocks(document.querySelector('.main-body__review'), document.querySelector('.review-item__link'), 'review-item', 3)

if (window.innerWidth <= 991) {
	hideBlocks(document.querySelector('._gallery-md-hide'), document.querySelector('._show-gallery'), 'gallery__col', 4)
}


let articleBox = document.querySelector('.article-box');
if (articleBox != null && window.innerWidth >= 991) {
	let breadcrumbs = document.querySelector('.breadcrumbs');
	articleBox.prepend(breadcrumbs)
}
let sidebarForm = document.querySelector('.sidebar__box .form'),
	sidebarLk = document.querySelector('.sidebar__lk');

if ((sidebarForm != null) || (sidebarLk != null)) {
	let sidebar = document.querySelector('.sidebar'),
		sidebarReview = document.querySelector('.sidebar__review');

	sidebar.addEventListener("click", function (e) {
		let target = e.target,
			sidebarFaq = document.querySelector('.sidebar-faq'),
			lkMenu = document.querySelector('.lk__menu'),
			breadcrumbs = document.querySelector('.breadcrumbs');

		if (target.closest('.btn-review')) {
			sidebarReview.style.display = "none"
			sidebarForm.style.display = "block"
		} else if (target.closest('.popup__close')) {
			sidebarReview.style.display = "block"
			sidebarForm.style.display = "none"
		} else if (target.closest('.btn--logoff')) {
			sidebarFaq.classList.add('_active')
			lkMenu.style.opacity = "0"
			breadcrumbs.style.opacity = "0"
		} else if (target.closest('.sidebar-faq__no')) {
			sidebarFaq.classList.remove('_active')
			lkMenu.removeAttribute('style')
			breadcrumbs.removeAttribute('style')
		}
	});
}



let mainContent = document.querySelector('.main__content'),
	payClick = document.querySelector('._pay-click');

if (mainContent != null) {
	mainContent.addEventListener("click", function (e) {
		let placeOrder = e.target;

		if (placeOrder.getAttribute('id') === 'place_order') {
		}
		else if (placeOrder.closest('._pay-click')) {
			jQuery('.checkout #place_order').trigger("submit")
		}
	});
}
