$(".menu").mousedown(function(event){
	console.log(event.target.nodeName);
	if(event.target.nodeName.toLowerCase() == 'a') return;
	$(this).toggleClass("closed");

	if($(this).hasClass("closed")) {
		$(".main.button").text("Menu");
	} else {
		$(".main.button").text("Close");
	}
});
