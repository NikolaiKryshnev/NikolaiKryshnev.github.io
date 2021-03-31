
$('.input input[type="file"]').change(function () {
	let value = $("input[type='file']").val();
	$('.js-value').text(value);
});


$(".fancybox").fancybox({
	openEffect: 'none',
	closeEffect: 'none',
	helpers: {
		media: {}
	}
})