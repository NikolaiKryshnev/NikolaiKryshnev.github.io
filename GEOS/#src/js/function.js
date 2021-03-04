function appendBlock(par, el) {
	par.append(el);
}

function dataAttrBlock(block, dataName, val) {
	for (let i = 0; i < block.length; i++) {
		const el = block[i];
		$(el).attr(`data-${dataName}`, `${val}-${i + 1}`);
	}
}

function fancyboxNumber(par, elem, ) {
	for (let i = 0; i < par.length; i++) {
		const el = par[i];
		$(el).children(elem).attr('data-fancybox', `fancybox-${i + 1}`);
	}
}
