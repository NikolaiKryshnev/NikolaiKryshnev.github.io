//<POPUP>---------------------------------------

let modal = $('.modal-overlay, .modal');


function showModla(modal, btn) {
	btn.click(function () {
		modal.addClass('active');
		$('.wrapper').addClass('active');
		
	});
	
	$('.close-js').click(function () {
		modal.removeClass('active');
	});
	
	$(".modal-overlay").on('click', function (e) {
		if (e.target == this) {
			modal.removeClass('active');
			$('.wrapper').removeClass('active');
		}
	});
}

showModla($('.modal-overlay, .modal--feedback'), $('.popupBtn-js'));
showModla($('.modal-overlay, .modal--reviews'), $('.reviews-slider__block .btn'));


//</POPUP>---------------------------------------
$(document).ready(function() {
	if (document.cookie.match(/CoronaClose=true/) === null) {

		 $("#coronavirus-alert").removeClass("closed");

		 $( ".corona-close" ).click(function() {
			  var now = new Date();
			  var time = now.getTime();
			  time += 3600 * 1000 * 24;
			  now.setTime(time);
			  document.cookie =
					'CoronaClose=' + 'true' +
					'; expires=' + now.toUTCString() +
					'; path=/';
			  $("#coronavirus-alert").addClass("closed");
		 });

	} else {
		 $("#coronavirus-alert").addClass("closed");
	}

});
