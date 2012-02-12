// remap jQuery to $
(function($){})(window.jQuery);


/* trigger when page is ready */
$(document).ready(function (){

	$('.popup').fancybox();
	$(".custom").kendoNumericTextBox({
     format: "#",
     decimals: 0   
    });
	$(".datepicker").kendoDatePicker();
});


/* optional triggers

$(window).load(function() {
	
});

$(window).resize(function() {
	
});

*/