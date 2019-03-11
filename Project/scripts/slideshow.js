$(document).ready(function() {
	var nextSlide = $("#slides img:first-child");
	var nextCaption;
	var nextSlideSource;
		
	// start slide show
    timer1 = setInterval(
        function () {   
        	$("#slide").fadeOut(1000,
           		function () {
           	     	if (nextSlide.next().length == 0) {
						nextSlide = $("#slides img:first-child");
					}
					else {
						nextSlide = nextSlide.next();
					}
					nextSlideSource = nextSlide.attr("src");
					$("#slide").attr("src", nextSlideSource).fadeIn(1100)
				}
			);    // end callback
		}, 
		4000);
});    // end ready