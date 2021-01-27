//!Cортировка длинного списка в алфавитном порядке
//---------------------------------------------------------------------------------------------------------------------------------------

$(function() {
	$.fn.sortList = function() {
	let mylist = $(this);
	let listitems = $('li', mylist).get();
	listitems.sort(function(a, b) {
		 let compA = $(a).text().toUpperCase();
		 let compB = $(b).text().toUpperCase();
		 return (compA < compB) ? -1 : 1;
	});
	$.each(listitems, function(i, itm) {
		 mylist.append(itm);
	});
  }

	$("ul#demoOne").sortList();

});