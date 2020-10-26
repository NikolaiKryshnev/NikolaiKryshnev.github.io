
document.addEventListener('DOMContentLoaded', function () {
	let navs = document.querySelectorAll('.sidevar-block-js');
	for( let i = 0; i < navs.length; i++ ){
		 navs[i].addEventListener('click', selectMenu(i), false);
	}
 
	function selectMenu(iterator) {
		 return function() {
			  let parents = document.querySelectorAll('.sidevar-block-js');
			  parents.forEach(function(item, iter) {
				  
 
					if(iterator == iter) {
						 item.classList.toggle('active');
					}
			  });

		 } 
	}

	 });