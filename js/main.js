//function to rotate images in banner every 3 seconds
(function() {
	//create variables to name the possible positions for images
	var pos1 = 0;
	var pos2 = 1;
	var pos3 = 2;
	//creates an array to iterate through
	var images = new Array();
	//creates an array for the actual images
	var srcs = ["images/banner1.jpg",
				"images/banner2.jpg",
				"images/banner3.jpg"];
	//after 1 second, start iterating through the arrays
	window.onload = function() {
		setTimeout(function() {
			//connects position of array images to array srcs
			for (i = 0; i < srcs.length; i++) {
				images[i] = new Image();
				images[i].src = srcs[i];
			}
		}, 1000);
	};
	//function to tell where to put the images iterated through the arrays
	function nextPhoto() {
		//iterate through images and place in position 1
        if (++pos1 >= images.length) pos1 = 0;
		//iterate through images and place in position 2
		if (++pos2 >= images.length) pos2 = 0;
		//iterate through images and place in position 3
		if (++pos3 >= images.length) pos3 = 0;
		//assigns image array placement to position on page
        document.querySelectorAll("img")[0].src = images[pos1].src;
		document.querySelectorAll("img")[1].src = images[pos2].src;
		document.querySelectorAll("img")[2].src = images[pos3].src;
    }
	//runs nextPhoto to rerun every 3000ms or 3 seconds		
	setInterval(nextPhoto, 3000);
})();