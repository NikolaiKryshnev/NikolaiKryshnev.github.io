if (window.innerWidth >= 1199) {

	document.addEventListener("DOMContentLoaded", () => {

		var isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };

		let scr_body = document.querySelector('body');
		let scr_blocks = document.querySelectorAll('._scr-sector');
		let scr_items = document.querySelectorAll('._scr-item');
		let scr_fix_block = document.querySelectorAll('._side-wrapper');
		console.log(scr_fix_block);

		let scr_min_height = 750;

		let scrolling = true;
		let scrolling_full = true;

		let scrollDirection = 0;

		//ScrollOnScroll
		window.addEventListener('scroll', scroll_scroll);
		function scroll_scroll() {
			//scr_body.setAttribute('data-scroll', pageYOffset);
			let src_value = pageYOffset;
			let header = document.querySelector('header.header');
			let headerClone = document.querySelector('header._clone');
			if (header !== null) {

				if (src_value > (header.offsetHeight + 80)) {
					headerClone.classList.add('_scroll');

				} else {
					headerClone.classList.remove('_scroll');
				}
			}
			if (scr_blocks.length > 0) {
				for (let index = 0; index < scr_blocks.length; index++) {
					let block = scr_blocks[index];
					let block_offset = offset(block).top;
					let block_height = block.offsetHeight;

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
						scr_item.classList.remove('_active');
					}
					if (((src_value > scr_item_offset - window.innerHeight))) {
						if (scr_item.querySelectorAll('._lazy').length > 0) {
							scroll_lazy(scr_item);
						}
					}
				}
			}

			if ((scr_fix_block.length > 0) && (window.innerWidth > 991)) {
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





		//FullScreenScroll
		if (scr_blocks.length > 0 && !isMobile.any()) {
			disableScroll();
			window.addEventListener('wheel', full_scroll);
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
			let header_height = parseInt(document.querySelector('._side-block').offsetHeight + document.querySelector('#top_menu_bg_full').offsetHeight);
			for (let index = 0; index < scr_fix_block.length; index++) {
				const block = scr_fix_block[index];
				let block_width = block.getAttribute('data-width');
				const item = block.querySelector('._side-block');
				if (!block_width) { block_width = 0; }
				if (window_width > block_width) {
					// if (item.offsetHeight < window_height - (header_height + 30)) {

					// if (scr_value > offset(block).top - (header_height + 15)) {
					if (scr_value > (header_height)) {
						item.style.cssText = "position:fixed;  margin-top: 0;bottom:auto;top:" + 0 + "px;width:" + block.offsetWidth + "px; right:" + offset(block).right + "px; ";

					} else {
						gotoRelative(item, block);
					}
					// if (scr_value > (block.offsetHeight + offset(block).top) - (item.offsetHeight + (header_height + 15))) {
					if (scr_value > (block.offsetHeight + offset(block).top) - (item.offsetHeight)) {
						block.style.cssText = "position:relative;";
						item.style.cssText = "position:absolute;bottom:0;top:auto;left:0px;width:100%";

					}
				} else {
					gotoRelative(item, block);
					// }
				}
			}
			function gotoRelative(item, block) {
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



	});
};



// $(document).mouseleave(function(e){
// 	if (e.clientY < 10) {
// 		 $(".exitblock").fadeIn("fast");
// 	}    
// });
// $(document).click(function(e) {
// 	if (($(".exitblock").is(':visible')) && (!$(e.target).closest(".exitblock .modaltext").length)) {
// 		 $(".exitblock").remove();
// 	}
// });