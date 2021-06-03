//<TABS>---------------------------------------

let tabTrigger = $('.js-tab-trigger'),
tabContent = $('.tab-content');

tabTrigger.click(function () {
	var id = $(this).attr('data-tab'),
		content = $('.js-tab-content[data-tab="' + id + '"]');

	$('.js-tab-trigger.active').removeClass('active');
	$(this).addClass('active');

	$('.js-tab-content.active').removeClass('active');
	content.addClass('active');
});


// function sliderDataAttr() {
// 	if ($(window).width() <= 726) {
// 		for (let i = 0; i < tabTrigger.length; i++) {
// 			const el = tabTrigger[i];
// 			$(el).append($(`.tab-content__item[data-tab='${i + 1}']`))
// 		}
// 	}else{
// 		for (let i = 0; i < tabTrigger.length; i++) {
// 			tabContent.append($(`.tab-content__item[data-tab='${i + 1}']`))
// 		}
// 	}
// }

// sliderDataAttr()

$(window).resize(function() {
	sliderDataAttr();
});


//</TABS>---------------------------------------