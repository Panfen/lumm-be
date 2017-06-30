// Transify v1.0
// COPYRIGHT JOREN RAPINI 2010
// jorenrapini@gmail.com

(function($){
	$.fn.transify = function(options) {
		var defaults = {
			opacityOrig:.33,  
			fadeSpeed:600
	  },
	  settings = $.extend({}, defaults, options);
		  
		this.each(function() {
			var $this = $(this);
			$this.append('<div class="transify"></div>');
			var transBG = $this.find('.transify');
			transBG.css({
				backgroundColor:$this.css('backgroundColor'),
				backgroundImage:$this.css('backgroundImage'),
				backgroundRepeat:$this.css('backgroundRepeat'),
				borderTopColor:$this.css('borderTopColor'),
				borderTopWidth:$this.css('borderTopWidth'),
				borderTopStyle:$this.css('borderTopStyle'),
				borderRightColor:$this.css('borderRightColor'),
				borderRightWidth:$this.css('borderRightWidth'),
				borderRightStyle:$this.css('borderRightStyle'),
				borderBottomColor:$this.css('borderBottomColor'),
				borderBottomWidth:$this.css('borderBottomWidth'),
				borderBottomStyle:$this.css('borderBottomStyle'),
				borderLeftColor:$this.css('borderLeftColor'),
				borderLeftWidth:$this.css('borderLeftWidth'),
				borderLeftStyle:$this.css('borderLeftStyle'),
				position:'absolute',
				top:0,
				left:0,
				zIndex:-1,
				width:$this.width()+parseInt($this.css("padding-left"), 10) + parseInt($this.css("padding-right"), 10),
				height:$this.height()+parseInt($this.css("padding-top"), 10) + parseInt($this.css("padding-bottom"), 10),
				opacity:settings.opacityOrig
			});
			if (settings.percentWidth) {
				transBG.css('width',settings.percentWidth);	
			}
			if (settings.percentHeight) {
				transBG.css('height',settings.percentHeight);
			}
			$this.css({
				position:'relative',
				background:'none',
				border:'none'})
				
			if (settings.opacityNew) {
				$this.hover(function() {
					transBG.stop().animate({opacity:settings.opacityNew}, settings.fadeSpeed);
				}, function() {
					transBG.stop().animate({opacity:settings.opacityOrig}, settings.fadeSpeed);
				});
			}
		});
		return this;	
	}
})(jQuery);