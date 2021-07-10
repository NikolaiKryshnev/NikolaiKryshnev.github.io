
$(document).ready(function () {

	function modalRev(btn, modal) {
		btn.click(function (e) {
			e.preventDefault()
			modal.addClass('active');
			$('.delivery-modal-overlay').addClass('active');
			return false
		});

		$('.close-js').click(function () {
			modal.removeClass('active');
			$('.delivery-modal-overlay').removeClass('active');

		});

		$(".delivery-modal-overlay").on('click', function (e) {
			if (e.target == this) {
				modal.removeClass('active');
				$('.delivery-modal-overlay').removeClass('active');
			}
		});
	}
	modalRev($('.btnCart-js'), $('.delivery-modal--cart'))
	modalRev($('.btnRas-js'), $('.delivery-modal--ras'))
	modalRev($('.btnWebPay-js'), $('.delivery-modal--WebPay'))
	if ($(window).width() <= 991 ) {

		$('.ser-box__col--appendOne').append($('.price-warning'));
		$('.ser-box--pay').append($('.delivery-check'))
		let acr = $('.accordeon-js .acc-head-js');
		$(document).ready(function () {
			acr.on('click', f_acc);
		});


		function f_acc() {
			$('.accordeon-js .acc-body-js').not($(this).next()).slideUp(1000).removeClass('active');
			$(this).next().slideToggle(1000).toggleClass('active');

			$('.accordeon-js .acc-head-js').not($(this)).removeClass('active');
			$(this).toggleClass('active');

		}

	}
	
	if ($(window).width() <= 991) {
		$('.js-tab-trigger').click(function() {
			var id = $(this).attr('data-tab'),
				 content = $('.js-tab-content[data-tab="'+ id +'"]');
			
			$('.js-tab-trigger.active').removeClass('active'); 
			$(this).addClass('active'); 
			
			$('.js-tab-content.active').removeClass('active'); 
			content.addClass('active');
		});
	}
});