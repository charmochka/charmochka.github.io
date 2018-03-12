$(document).ready(function() {
	//scroll
	$("body").niceScroll({
		horizrailebabled: false
	});

	//button menu
	$(".btn_mnu").click(function() {
		$(this).toggleClass("active");
		$(".left-side").toggleClass("active");
	});
	

	var wall = new freewall(".gallery");
	wall.reset({
		selector: "a",
		animate: true,
		cellW: 150,
		cellH: "auto",
		gutterX : 5,
		gutterY : 5,
		onResize: function() {
			wall.fitWidth();
		}
	});
	
	var images = wall.container.find("a");
	images.find("img").on("load", function() {
		wall.fitWidth();
	});
	
	$(".gallery img").lazyload({
		effect : "fadeIn"
	}).hover(function (){
		$(".gallery img").css("opacity", ".7");
		$(this).css("opacity", "1");
	}, function() {
		$(".gallery img").css("opacity", "1");
	});



	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				
			}, 1000);
		});
		return false;
	});


	
});