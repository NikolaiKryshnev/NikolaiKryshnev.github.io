//!Обернуть последние слово в span
$('.endBlock--js a').html(function(_, existing) {
	var words = existing.trim().split(' ');
	// words[0] = '<em>' + words[0] + '</em>';
	words[words.length - 1] = '<b>' + words[words.length - 1] + '</b>';
	return words.join(' ');
 });