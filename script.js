$(document).ready(function(){
	$('#go').click(function() {
		for (var i = 1; i <= 16; i++) {
			$("#wrapper").append("<div class='box'>Box</div>");
		}
	});
})