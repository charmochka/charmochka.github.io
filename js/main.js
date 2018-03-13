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
		effect : "fadeIn",
		threshold: 1000

	});

	$(".gallery a").hover(function (){
		$(".gallery a").css("opacity", ".7");
		$(this).css("opacity", "1");
	}, function() {
		$(".gallery a").css("opacity", "1");
	});

	$(".gallery a").magnificPopup({
		type : 'image',
		gallery : {
			enabled : true
		},
		removalDelay: 300,
		mainClass: 'mfp-fade'
	});

	$(".gallery").css("min-height", $(document).height()*2);

//Фильтрация
	$(".filter-label").click(function() {
		$(".filter-label").removeClass("active");
		var filter = $(this).addClass("active").data("filter");
		wall.filter(filter);
		setTimeout(function() {
			$(window).resize();
			wall.fitWidth();
		}, 400);
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