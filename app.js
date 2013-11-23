

var app = new function () {
	this.init =  function() {
		
		var height = $(window).height();
		$(".app_window").css("height" , height);
	}
}

app.init();
