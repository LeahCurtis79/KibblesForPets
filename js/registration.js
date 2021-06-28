//function to ensure all form fields are filled out.
function fieldIsRequired(){

    // variable to hold value of alert.
    let flag=0;
    // defines inputs as all data from the HTML form tag, besides the submit button.
    let inputs = document.querySelectorAll("form > input:not([type='submit'])");
	
	let shownErrors=document.querySelectorAll('.error');
	if(shownErrors.length >0){
		for(let i=0;i<shownErrors.length;i++){
			shownErrors[i].style.display='none';
		}
	}

    // loops through all form fields to see if they are empty or null
    //for(let i=0;i<inputs.length;i++){
	for(let i=inputs.length-1;i>=0; i--){
            if(inputs[i].value=='' || inputs[i]==null){
                //if condition is not met, produces an error message with the following style
                let span=document.createElement('span');
                span.innerText=`${inputs[i].name} cannot be empty.`;
                span.classList.add('error')
                span.style.color='red';
                inputs[i].after(span);
				inputs[i].focus();
                flag=1;	
            }
			if(inputs[i].classList.contains('notdone')){
				inputs[i].focus();
                flag=1;	
			}
    }
    
    if(flag==1){
        console.log('One or more fields are empty. Please fill out all fields.')
    }

    return flag;
}

function validate(event){
    // log for testing purposes
    console.log('validate function is executing')
    event.preventDefault();
	
	let user = document.querySelector('#userName').value;
	let pass = document.querySelector('#password').value;
	let verpass = document.querySelector('#passwordVerify').value;
	let firstn = document.querySelector('#firstName').value;
	let lastn = document.querySelector('#lastName').value;
	let emaila = document.querySelector('#email').value;
	let phonen = document.querySelector('#phoneNumber').value;
	
    if(validatUserName() && validatePassword() && validateVerifyPassword() && validateFirstName() && validateLastName() && validateEmail() && validatePhone()){
		//if(fieldIsRequired()==0){
			location.href='interests.html?userName='.concat(user, '&password=', pass,'&passwordVerify=', verpass,'&firstName=', firstn,'&lastName=', lastn,'&email=', emaila,'&phone=', phonen);
		//}
	}else
		if(!validatUserName())
			document.querySelector('#userName').focus();
		else if(!validatePassword())
			document.querySelector('#password').focus();
		else if(!validateVerifyPassword())
			document.querySelector('#passwordVerify').focus();
		else if(!validateFirstName())
			document.querySelector('#firstName').focus();
		else if(!validateLastName())
			document.querySelector('#lastName').focus();
		else if(!validateEmail())
			document.querySelector('#email').focus();
		else if(!validatePhone())
			document.querySelector('#phoneNumber').focus();
			
			
}

function validatUserName(){
	let outcome = 0;
	var item = document.querySelector('#userName');
    const userName = /\d/;
    let usernameError=document.createElement('span');
    usernameError.style.color='red';
    usernameError.classList.add('username-error');

	let shownErrors=document.querySelectorAll('.username-error');
    if(shownErrors.length >0){
        for(let i=0;i<shownErrors.length;i++){
            shownErrors[i].style.display='none';
		}
    }
	
	removeGeneralWarnig();
	
    if(userName.test(item.value)){
		document.querySelector('#userName').classList.remove('notdone');
        console.log('Field is valid.');
		outcome = 1;
	}
    else{
        usernameError.innerText='Username must be a combination of letters and numbers.';
		document.querySelector('#userName').classList.add('notdone');
        item.after(usernameError);
		outcome = 0;
    }
	
	return outcome;
}

function validatePassword(){
	let outcome = 0;
	var item = document.querySelector('#password');
    let value=item.value;
    let spanError=document.createElement('span');
    spanError.style.color='red';
    spanError.classList.add('password-error');
	
	let shownErrors=document.querySelectorAll('.password-error');
	if(shownErrors.length >0){
		for(let i=0;i<shownErrors.length;i++){
			shownErrors[i].style.display='none';
		}
	}
	
	removeGeneralWarnig();
		
    if(value.length <8){
        spanError.innerText='Password length must be at least 8 characters.';
		document.querySelector('#password').classList.add('notdone');
        item.after(spanError);
		outcome = 0;
    }
    else{
		document.querySelector('#password').classList.remove('notdone');
		console.log('Password is valid.');
		outcome = 1;
    }
	
	return outcome;
}

// used method from javatpoint
function validateVerifyPassword(){
	let outcome = 0;
	var item = document.querySelector('#passwordVerify');
	
    let vPasswordValue=item.value;
    let passwordValue=document.querySelector('input[name="password"]').value;
    let vPasswordError=undefined;

	vPasswordError=document.createElement('span');
	vPasswordError.innerText='Both passwords must match.';
	vPasswordError.style.color='red';
	vPasswordError.classList.add('vpassword-error');
		
	let shownErrors=document.querySelectorAll('.vpassword-error');
	if(shownErrors.length >0){
		for(let i=0;i<shownErrors.length;i++){
			shownErrors[i].style.display='none';
		}
	}
	
	removeGeneralWarnig();
		
    // simple NOT operator to compare passwords
    if(passwordValue!==vPasswordValue){
		document.querySelector('#passwordVerify').classList.add('notdone');
        item.after(vPasswordError);
		 outcome = 0;
    }
    else{
		document.querySelector('#passwordVerify').classList.remove('notdone');
		console.log('Valid password confirmation value.');
		outcome = 1;
    }
	
	return outcome;
}

// used method in stackoverflow answer
function validateFirstName(){
	let outcome = 0;
	var item = document.querySelector('#firstName');
	
    const regex=/^[A-Za-z]+$/;

    let firstNameError=document.createElement('span');
    firstNameError.style.color='red';
    firstNameError.classList.add('firstname-error');
	
	let shownErrors=document.querySelectorAll('.firstname-error');
	if(shownErrors.length >0){
		for(let i=0;i<shownErrors.length;i++){
			shownErrors[i].style.display='none';
		}
	}
	
	removeGeneralWarnig();

    if(regex.test(item.value)){
		document.querySelector('#firstName').classList.remove('notdone');
        console.log('First name is valid.')
		outcome = 1;
	}
    else{
        firstNameError.innerText='First Name may only include letters.';
		document.querySelector('#firstName').classList.add('notdone');
        item.after(firstNameError);
		outcome = 0;
    }
	
	return outcome;
}

function validateLastName(){
	let outcome = 0;
	var item = document.querySelector('#lastName');
	
    const regex=/^[A-Za-z]+$/;

    let lastNameError=document.createElement('span');
    lastNameError.style.color='red';
    lastNameError.classList.add('lastname-error');

	let shownErrors=document.querySelectorAll('.lastname-error');
	if(shownErrors.length >0){
		for(let i=0;i<shownErrors.length;i++){
			shownErrors[i].style.display='none';
		}
	}
	
	removeGeneralWarnig();
		
    if(regex.test(item.value)){
		document.querySelector('#lastName').classList.remove('notdone');
        console.log('Last name is valid.')
		outcome = 1;
    }
    else{
        lastNameError.innerText='Last Name may only include letters.';
		document.querySelector('#lastName').classList.add('notdone');
        item.after(lastNameError);
		outcome = 0;
    }
	return outcome;
}

function validateEmail(){
	let outcome = 0;
	var item = document.querySelector('#email');
	
    // sets length of emails allowed. Must be 3 letters/numbers before and after @ character.
    let regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let emailError=document.createElement('span');
    emailError.style.color='red';
    emailError.classList.add('email-error');
	
	let shownErrors=document.querySelectorAll('.email-error');
    if(shownErrors.length >0){
		for(let i=0;i<shownErrors.length;i++){
            shownErrors[i].style.display='none';
        }
    }
	
	removeGeneralWarnig();
		
    if(regex.test(item.value)){
		document.querySelector('#email').classList.remove('notdone');
        console.log('email is valid');
		outcome = 1;
    }
    else{
        emailError.innerHTML="Please enter a valid email address <strong>XXX@XXX.com</strong>";
		document.querySelector('#email').classList.add('notdone');
        item.after(emailError);
		outcome = 0;
    }
	
	return outcome;
}
// couldn't get value.match method to work. Reworked stackoverflox regex method to solve. 
function validatePhone(){
	let outcome = 0;
	var item = document.querySelector('#phoneNumber');
	
    let regex=/\([0-9]{3}\)\s[0-9]{3}-[0-9]{4}/;
    let phoneError=document.createElement('span');
    phoneError.style.color='red';
    phoneError.classList.add('phone-error');
	
	let shownErrors=document.querySelectorAll('.phone-error');
	if(shownErrors.length >0){
		for(let i=0;i<shownErrors.length;i++){
			shownErrors[i].style.display='none';
		}
	}
	
	removeGeneralWarnig();
		
    if(regex.test(item.value)&&(item.value.length === 14)){
		document.querySelector('#phoneNumber').classList.remove('notdone');
        console.log('Phone number is valid.');
		outcome = 1;
    }else{
        phoneError.innerHTML="Please use the format <strong>(123) 123-1234</strong>";
		document.querySelector('#phoneNumber').classList.add('notdone');
        item.after(phoneError);
		outcome = 0;
    }
	
	return outcome;

}

function removeGeneralWarnig(){
	let shownErrors=document.querySelectorAll('.error');
	if(shownErrors.length >0){
		for(let i=0;i<shownErrors.length;i++){
			shownErrors[i].style.display='none';
		}
	}
}