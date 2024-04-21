
//</WEBP>---------------------------------------
@@include('webp.js')
//</WEBP>---------------------------------------


//<LIBRARIES>---------------------------------------

//============<JQUERY>============
// npm i jquery
@@include('../../node_modules/jquery/dist/jquery.min.js')
	//============</JQUERY>============

	//============<SLICK-SLIDER>============
	// npm i slick-carousel
	@@include('../../node_modules/slick-carousel/slick/slick.min.js')
	//============</SLICK-SLIDER>============

	//============<FANCYBOX>============
	// npm i @fancyapps/fancybox
	@@include('../../node_modules/@fancyapps/fancybox/dist/jquery.fancybox.min.js')

	//============</FANCYBOX>============
	@@include('sorting.js')

	//</LIBRARIES>---------------------------------------

	(function ($) {
		//<TASK>---------------------------------------
		$(document).ready(function () {
			@@include('header.js')

			@@include('acc.js')
			@@include('slider.js')

			@@include('tabs.js')

			@@include('filter.js')
			@@include('select.js')
			@@include('video.js')
			@@include('myProfil-sidebar.js')

			@@include('commentform.js')
			@@include('numbers.js')
			@@include('cartProduct.js')
			@@include('plus.js')
			@@include('popup.js')
			@@include('myProfile.js')
		});
		//</TASK>---------------------------------------
	})(jQuery);

