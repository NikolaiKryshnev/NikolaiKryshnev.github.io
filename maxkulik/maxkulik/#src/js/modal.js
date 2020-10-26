//---------------------------------------------
// Modal
//---------------------------------------------
if($('.modal')){
let modal = $('.modal-overlay, .modalForm-js');

$('.btn-js').click(function () {
	modal.addClass('active');
});

$('.close-modal').click(function () {
	modal.removeClass('active');
});

// modal focus

$( document ).ready(function(){
	$('.modal-input-js').click(function(){ 
		$(this).blur();
	});

	$(".modal-input-js input").focus(function(){ 
		$(this).addClass('active');
		$(this).data('placeholder-tmp', $(this).attr('placeholder'));
		$(this).attr( "placeholder", " " ) 
	});

	$(".modal-input-js input").blur(function(){ 
		if($(this).val() != ''){
		}
		else{
			$(this).removeClass('active'); 
		}
		$(this).attr('placeholder', $(this).data('placeholder-tmp'));


	});
 });
}