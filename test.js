$(document).ready(function() {
	
	var sbHidden = false;
	
	$('.sidebar-sh').on('click', function(e) {
		e.preventDefault();
		
		if (sbHidden) {
			$('#content').animate({'width' : '70%'}, 1000);
			$('#sidebar').fadeIn("slow");
			sbHidden = false;
		} else {
			$('#sidebar').fadeOut("slow");
			$('#content').animate({'width' : '100%'}, 1000);
			sbHidden = true;
		}
	})
})