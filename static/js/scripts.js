/*-----------------------------------------------------------------------------------*/
/*	BACKGROUND IMAGE
/*-----------------------------------------------------------------------------------*/

$(function() {
	// Options for SuperBGImage
	$.fn.superbgimage.options = {
		randomtransition: 2, // 0-none, 1-use random transition (0-7)
		z_index: -1, // z-index for the container
		slideshow: 1, // 0-none, 1-autostart slideshow
		slide_interval: 4000, // interval for the slideshow
		randomimage: 1, // 0-none, 1-random image
		speed: 'slow' // animation speed
	};

	// initialize SuperBGImage
	$('#thumbs').superbgimage().hide();
});
/*-----------------------------------------------------------------------------------*/
/*	MENU
/*-----------------------------------------------------------------------------------*/

ddsmoothmenu.init({
	mainmenuid: "menu",
	orientation: 'h',
	classname: 'menu',
	contentsource: "markup"
})
