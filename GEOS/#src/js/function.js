function appendBlock(par, el) {
	par.append(el);
}

function attrImg(block, href) {
	for (let i = 0; i < block.length; i++) {
		const el = block[i];
		let children = $(el).children(href);
		children.attr('data-fancybox', `fancybox-1`)
		$(el).css({'background-image' : `url(${children.attr("href")})`})
	}
}

function fancyboxNumber(par, elem, ) {
	for (let i = 0; i < par.length; i++) {
		const el = par[i];
		$(el).children(elem).attr('data-fancybox', `fancybox-${i + 1}`);
	}
}

// (function(){
// 	var originalAddClassMethod = jQuery.fn.addClass;
// 	jQuery.fn.addClass = function(){
// 		 var result = originalAddClassMethod.apply( this, arguments );
// 		 jQuery(this).trigger('classChanged');
// 		 return result;
// 	}
// 	// jQuery.fn.removeClass = function(){
// 	// 	 var result = originalRemoveClassMethod.apply( this, arguments );
// 	// 	 jQuery(this).trigger('classChanged');
// 	// 	 return result;
// 	// }
// })();