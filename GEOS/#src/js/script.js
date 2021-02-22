
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

	
	//============<FANCUBOX>============
	// npm i @fancyapps/fancybox
	@@include('../../node_modules/@fancyapps/fancybox/dist/jquery.fancybox.min.js')
	//============</FANCUBOX>============

	//</LIBRARIES>---------------------------------------

	(function ($) {
		//<TASK>---------------------------------------

		@@include('header.js')
		@@include('title.js')

		@@include('scrollTop.js')
		@@include('popup.js')
		@@include('slider.js')
		@@include('fancybox.js')
		@@include('wordLastTag.js')

		//</TASK>---------------------------------------
	})(jQuery);

