let family = $('.select-js')

// function selectNum() {
// 	for (let index = 0; index < family.length; index++) {
// 		const el = family[index];
// 		console.log($(el).val())
// 	}
// }
// selectNum()


family.change(function() {
	if($(this).val() === 'Женат / Замужем') {
		$('.family-supr--js').html(`
		

		`)
		
	}else(
		console.log($(this).val())
	)
	
	
  });