


$(document).ready(function () {
	let iframeVideo = $('iframe');

	function adaptivIframe(iframeBlock) {
		for (let i = 0; i < iframeBlock.length; i++) {
			const video = iframeBlock[i];
			$(video).css({ 'position': 'absolute', 'width': '100%', 'height': '100%', 'top': '0', 'left': '0' });
			if ($(iframeBlock).attr('src').indexOf('youtube') !== -1) {
				$(video).wrapAll('<div class="adaptive-video js-videoWrapper" style=" position: relative; width: 100%; padding: 20% 0; margin: 0 15px; height: 100%;">');
			} else if ($(iframeBlock).attr('src').indexOf('yandex') !== -1) {
				$(iframeBlock).parent().addClass('adaptive-video js-videoWrapper').css({ 'position': 'initial', 'width': '100%', 'height': '100%', 'padding': '10.3% 0' })
			}
		}
	}

	function videoPlay(wrapper) {
		let iframe = wrapper.find('iframe');
		let src = iframe.data('src');
		iframe.attr('src', src);
		$('.videoPoster').css({ 'opacity': '0', 'visibility': 'hidden', });

	}

	if (iframeVideo.parents().hasClass('maps') == true) {
		console.log("iframe - map,  no video ");
		adaptivIframe(iframeVideo)
	} else {
		adaptivIframe(iframeVideo);
		let imgHref = $('.banCart-imgBg--js').attr('href');

		$('.js-videoWrapper').append(`
	<button class="videoPoster js-videoPoster" style="background-image: url(${imgHref}) ">
	<svg width="20%" height="20%" viewBox="0 0 94 89" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M62.4039 42.7907L43.0927 29.5077C42.384 29.0216 41.4432 28.9484 40.6665 29.3261C39.8835 29.701 39.3945 30.4623 39.3945 31.2852V57.8425C39.3945 58.6741 39.8835 59.4326 40.6665 59.8074C40.9976 59.9655 41.3597 60.0446 41.7249 60.0446C42.2015 60.0446 42.6842 59.9011 43.0927 59.617L62.4039 46.3457C63.0136 45.9211 63.3695 45.2652 63.3695 44.5682C63.3726 43.8596 63.0074 43.2065 62.4039 42.7907Z" fill="url(#paint0_linear)"/>
			<path d="M47.064 0.521423C21.3777 0.521423 0.5625 20.2175 0.5625 44.5229C0.5625 68.8195 21.3777 88.5097 47.064 88.5097C72.7442 88.5097 93.5625 68.8165 93.5625 44.5229C93.5656 20.2175 72.7442 0.521423 47.064 0.521423ZM47.064 81.1683C25.6732 81.1683 8.33029 64.7666 8.33029 44.5229C8.33029 24.288 25.6732 7.86574 47.064 7.86574C68.4518 7.86574 85.7916 24.285 85.7916 44.5229C85.7947 64.7666 68.4518 81.1683 47.064 81.1683Z" fill="url(#paint1_linear)"/>
		<defs>
			<linearGradient id="paint0_linear" x1="51.382" y1="29.0859" x2="51.382" y2="60.0446" gradientUnits="userSpaceOnUse">
				<stop stop-color="#F5A484"/>
				<stop offset="1" stop-color="#D06330"/>
			</linearGradient>
			<linearGradient id="paint1_linear" x1="47.0625" y1="0.521423" x2="47.0625" y2="88.5097" gradientUnits="userSpaceOnUse">
				<stop stop-color="#F5A484"/>
				<stop offset="1" stop-color="#D06330"/>
			</linearGradient>
		</defs>
	</svg>
	</button>`)
		let attrVideo = iframeVideo.attr('src');
		iframeVideo.attr('data-src', attrVideo + '?rel=0&showinfo=0&autoplay=1&loop=0&egm=0&border=0&fs=0&modestbranding=1&showinfo=0&cc_load_policy=0&iv_load_policy=3&showinfo=0&controls=2');
		iframeVideo.attr('src', '');

		$(document).on('click', '.js-videoPoster', function (e) {
			e.preventDefault();
			let poster = $(this);
			let wrapper = poster.closest('.js-videoWrapper');
			videoPlay(wrapper);

		});
	}


});