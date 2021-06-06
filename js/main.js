(function() {
	var pos1 = 0;
	var pos2 = 1;
	var pos3 = 2;
	
	var images = new Array();
	
	var srcs = ["images/banner1.jpg",
				"images/banner2.jpg",
				"images/banner3.jpg",];
	
	window.onload = function() {
		setTimeout(function() {
			for (i = 0; i < srcs.length; i++) {
				images[i] = new Image();
				images[i].src = srcs[i];
			}
		}, 1000);
	};

	function nextPhoto() {
        if (++pos1 >= images.length) pos1 = 0;
		if (++pos2 >= images.length) pos2 = 0;
		if (++pos3 >= images.length) pos3 = 0;

        document.querySelectorAll("img")[0].src = images[pos1].src;
		document.querySelectorAll("img")[1].src = images[pos2].src;
		document.querySelectorAll("img")[2].src = images[pos3].src;
    }
			
	setInterval(nextPhoto, 3000);
})();