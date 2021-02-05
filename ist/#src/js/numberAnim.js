const runNumbers = function () {
	let dataNumber = $('#myNumber')
		.val()
		.split('')
		.forEach(function (e, i) {
			console.log(`${e}-e'`, `${i}-i'`);
			if ((e > 0 && i == 0) || (e == 1 && i == 0)){
				$('.digit').eq(i + 1).css('margin-top', (200 * e + 25) * -1);
			} else {
				$('.digit').eq(i).css('margin-top', (200 * e + 25) * -1);
			}
		});
}
$('#myNumber').change(runNumbers);


// $(function() {
// 	var target_block = $(".numberInput-js"); // Ищем блок 
// 	var blockStatus = true;
// 	$(window).scroll(function() {
// 		var scrollEvent = ($(window).scrollTop() > (target_block.position().top - $(window).height()));
// 		if(scrollEvent && blockStatus) {
// 			blockStatus = false;
// 			$({numberValue: 0}).animate({numberValue: 1000}, {
// 				duration: 4000, 
// 				easing: "linear",
// 				step: function(val) {
// 					$("#number-js").html(Math.ceil(val)); 
// 				}
// 			});
// 		}
// 	});
// });

