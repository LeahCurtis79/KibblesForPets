window.onload = function() {
	document.getElementById('userName').value = getCookie('userName');
	
	document.getElementById('password').value = getCookie('password');
	document.getElementById('passwordVerify').value = getCookie('passwordVerify');
	document.getElementById('firstName').value = getCookie('firstName');
	document.getElementById('lastName').value = getCookie('lastName');
	document.getElementById('email').value = getCookie('email');
	document.getElementById('phone').value = getCookie('phone');
	
	document.getElementById('interestPitbulls').checked = getCookie('interestPitbulls');
	document.getElementById('interestLabs').checked = getCookie('interestLabs');
	document.getElementById('interestMastiffs').checked = getCookie('interestMastiffs');
	document.getElementById('signUpYes').checked = getCookie('signUpNewsletterYes');
	document.getElementById('signUpNo').checked = getCookie('signUpNewsletterNo');
	document.getElementById('comments').value = getCookie('comments');
	document.getElementById('refby').value = getCookie('refby');
}


function getCookie(cookieName) {
  let cookie = {};
  document.cookie.split(';').forEach(function(el) {
    let [key,value] = el.split('=');
    cookie[key.trim()] = value;
  })
  return cookie[cookieName];
}