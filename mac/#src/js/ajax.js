// $(document).ready(function () {
// 	let $form = $(".form");
// 	for (let i = 0; i < $form.length; i++) {
// 		const form = $form[i];
// 		form.submit(function () {
// 			$.ajax({
// 				type: "POST",
// 				url: "../mail.php",
// 				data: $(this).serialize()
// 			}).done(function () {
// 				$('.modal-overlay, .modal--thanks').addClass('active');
// 				form.trigger('reset');
// 			});
// 			return false;
// 		});
// 	}
	
// });