//<LIBRARIES>---------------------------------------

//============<JQUERY>============
// npm i jquery
@@include('../../node_modules/jquery/dist/jquery.min.js')
//============</JQUERY>============

//============<SLICK-SLIDER>============
// npm i slick-carousel
@@include('../../node_modules/slick-carousel/slick/slick.min.js')
//============</SLICK-SLIDER>============

//</LIBRARIES>---------------------------------------

(function($){
//<TASK>---------------------------------------
@@include('./slider.js')

@@include('./task/popup.js')


//</TASK>---------------------------------------
})(jQuery);
