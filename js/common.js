$(function() {

	$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
});
$(document).ready(function(){
	$("#m-menu").on("click","a", function (event) {
			event.preventDefault();
			var id  = $(this).attr('href'),
					top = $(id).offset().top;
			$('body,html').animate({scrollTop: top}, 1000);
	});
});
		
		$('.mobile-menu-button').click(function () {
			$('.mobile-menu').stop().slideToggle();
		});
		
});
