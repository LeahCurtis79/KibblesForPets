(function() {
	[...document.querySelectorAll("img")].forEach(item=> {
		item.onmouseover = () => { 
			item.classList.add('over'); 
		}
		
		item.onmouseout = () => { 
			item.classList.remove('over'); 
		}
	});
	document.querySelector("img").classList.add('first');
})();