 $(document).ready(function() {
	 $("#sidebar").toggle(function(e) {
		e.preventDefault(); 
		$("#sidebar-right").stop().animate({
			width: "0"
		}, 500);
		$("#main").stop().animate({
			width: "100%"
		}, 500);
	}, function() {
		$("#sidebar-right").stop().animate({
			width: "30%"
		}, 500);
		$("#main").stop().animate({
			width: "70%"
		}, 500);
	});
 });	 
