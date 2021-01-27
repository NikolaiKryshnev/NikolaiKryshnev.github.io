//!Обернуть последние слово в span
$('.header-contact__phone a').html(function(_, existing) {
	var words = existing.trim().split(' ');
	// words[0] = '<span >' + words[0] + '</span>';
	words[words.length - 1] = '<span>' + words[words.length - 1] + '</span>';
	return words.join(' ');
 });