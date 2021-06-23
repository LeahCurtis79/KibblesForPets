// function to make thumbnails expand when moused over

(function() {
	//creates array of everything with img tag in the HTML
	[...document.querySelectorAll("img")].forEach(item=>{
		//on mouseover, passes function that calls CSS style class
		item.onmouseover = () => { 
			item.classList.add('mouseover'); 
		}
		//on mouseout, passes function to call back CSS style class
		item.onmouseout = () => { 
			item.classList.remove('mouseover'); 
		}
	});
	//calls CSS style to make sure images are all left justified 
	//ensures they return to the proper place
	document.querySelector("img").classList.add('firstplace');
})();

/*
function expandThumbnail () {
	[document.querySelectorAll("img")].forEach(item =>
	{item.onmouseover = () => {
		item.classList.add('mouseover'); }

	item.onmouseout = () => {
		item.classList.remove('mouseover'); }
	);
	document.querySelector("img").classList.add('firstplace');

};
*/