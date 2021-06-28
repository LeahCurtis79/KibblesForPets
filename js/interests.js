window.onload = function() {
	const data = new URLSearchParams(location.search);
	
	const user_name = data.get('userName');
	const pass_word = data.get('password');
	const pass_ver = data.get('passwordVerify');
	const first_name = data.get('firstName');
	const last_name = data.get('lastName');
	const email_addr = data.get('email');
	const phone_numb = data.get('phone');
	//const sign_up = data.get('signUpNewsletter')
	
	document.getElementById('userName').value = user_name;
	document.getElementById('password').value = pass_word;
	document.getElementById('passwordVerify').value = pass_ver;
	document.getElementById('firstName').value = first_name;
	document.getElementById('lastName').value = last_name;
	document.getElementById('email').value = email_addr;
	document.getElementById('phone').value = phone_numb;
	//document.getElementsByName('signUpNewsletter').value = sign_up;
};
	
function saveData() {
	setCookie('userName', document.getElementById('userName').value, 30);
	setCookie('password', document.getElementById('password').value, 30);
	setCookie('passwordVerify', document.getElementById('passwordVerify').value, 30);
	setCookie('firstName', document.getElementById('firstName').value, 30);
	setCookie('lastName', document.getElementById('lastName').value, 30);
	setCookie('email', document.getElementById('email').value, 30);
	setCookie('phone', document.getElementById('phone').value, 30);
	
	setCookie('interestMusic', document.getElementById('interestPitbulls').checked, 30);
	setCookie('interestSports', document.getElementById('interestLabs').checked, 30);
	setCookie('interestComputers', document.getElementById('interestMastiffs').checked, 30);
	setCookie('signUpNewsletterYes', document.getElementById('signUpYes').checked, 30);
	setCookie('signUpNewsletterNo', document.getElementById('signUpNo').checked, 30);
	setCookie('comments', document.getElementById('comments').value, 30);
	setCookie('refby', document.getElementById('refby').value, 30);
}

function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/;SameSite=Lax";
}