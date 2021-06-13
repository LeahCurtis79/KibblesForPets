//function to ensure all form fields are filled out.
function fieldIsRequired(){

    // variable to hold value of alert.
    let flag=0;
    // defines inputs as all data from the HTML form tag, except the submit button.
    let inputs = document.querySelectorAll("form > input:not([type='submit'])");

    // loops through all form fields to see if they are empty or null
    for(let i=0;i<inputs.length;i++){
            if(inputs[i].value=='' || inputs[i]==null){
                //error message when conditon is not met
                let span=document.createElement('span');
                span.innerText=`${inputs[i].name} cannot be empty.`;
                span.classList.add('error')
                span.style.color='red';
                inputs[i].after(span);
                flag=1;
            }
    }
    
    if(flag==1){
        console.log('One or more fields are empty. Please fill out all fields.')
    }

    return flag;
}

function validate(event){
    // log to test
    console.log('validate function is executing')
    event.preventDefault();
    
    if(fieldIsRequired()==0){
        location.href='index.html'
    }
}

function validatUserName(event){

    const userName = /\d/;
    let usernameError=document.createElement('span');
    usernameError.style.color='red';
    usernameError.classList.add('username-error');

    if(userName.test(event.target.value)){
        console.log('Field is valid.');
        let shownErrors=document.querySelectorAll('.username-error');
        if(shownErrors.length >0){
            for(let i=0;i<shownErrors.length;i++){
                shownErrors[i].style.display='none';
            }
        }
    }
    else{

        usernameError.innerText='Username must be a combination of letters and numbers.';
        event.target.after(usernameError);
    }
}

function validatePassword(event){
  
    let value=event.target.value;
    let spanError=document.createElement('span');
    spanError.style.color='red';
    spanError.classList.add('password-error');
    if(value.length <8){
        spanError.innerText='Password length must be at least 8 characters.';
        event.target.after(spanError);
    }
    else{
        
        let shownErrors=document.querySelectorAll('.password-error');
        if(shownErrors.length >0){
            for(let i=0;i<shownErrors.length;i++){
                shownErrors[i].style.display='none';
            }
        }
    }
}

// used method from W3schools
function validateVerifyPassword(event){
    let vPasswordValue=event.target.value;
    let passwordValue=document.querySelector('input[name="password"]').value;
    let vPasswordError=undefined;

    // Compare passwords
    if(passwordValue!==vPasswordValue){
        vPasswordError=document.createElement('span');
        vPasswordError.innerText='Both passwords must match.';
        vPasswordError.style.color='red';
        vPasswordError.classList.add('vpassword-error');
        event.target.after(vPasswordError)
    }
    else{

        let shownErrors=document.querySelectorAll('.vpassword-error');
        if(shownErrors.length >0){
            for(let i=0;i<shownErrors.length;i++){
                shownErrors[i].style.display='none';
            }
        }
    }
}

// got method from stackoverflow answer
function validateFirstName(event){
    const regex=/^[A-Za-z]+$/;

    let firstNameError=document.createElement('span');
    firstNameError.style.color='red';
    firstNameError.classList.add('firstname-error');

    if(regex.test(event.target.value)){
        console.log('First name is valid.')

        let shownErrors=document.querySelectorAll('.firstname-error');
        if(shownErrors.length >0){
            for(let i=0;i<shownErrors.length;i++){
                shownErrors[i].style.display='none';
            }
        }
    }
    else{
        firstNameError.innerText='First Name may only include letters.';
        event.target.after(firstNameError);
    }

}

function validateLastName(event){
    const regex=/^[A-Za-z]+$/;

    let lastNameError=document.createElement('span');
    lastNameError.style.color='red';
    lastNameError.classList.add('lastname-error');

    if(regex.test(event.target.value)){
        console.log('Last name is valid.')

        let shownErrors=document.querySelectorAll('.lastname-error');
        if(shownErrors.length >0){
            for(let i=0;i<shownErrors.length;i++){
                shownErrors[i].style.display='none';
            }
        }
    }
    else{
        lastNameError.innerText='Last Name may only include letters.';
        event.target.after(lastNameError);
    }

}

function validateEmail(event){
    
    // sets length of emails allowed. Should be 3 letters/numbers before and after @ character.
    let regex=/[a-z0-9]{3}@[a-z0-9]{3}.com/;
    let emailError=document.createElement('span');
    emailError.style.color='red';
    emailError.classList.add('email-error');
    if(regex.test(event.target.value)){
        console.log('email is valid');
        
        let shownErrors=document.querySelectorAll('.email-error');
        if(shownErrors.length >0){
            for(let i=0;i<shownErrors.length;i++){
                shownErrors[i].style.display='none';
            }
        }
    }
    else{
        emailError.innerHTML="Please enter a valid email address <strong>XXX@XXX.com</strong>";
        event.target.after(emailError);
    }
}
//  value.match method would not work.found solution from stackoverflox  
function validatePhone(event){

    let regex=/\([0-9]{3}\)\s[0-9]{3}-[0-9]{4}/;
    let phoneError=document.createElement('span');
    phoneError.style.color='red';
    phoneError.classList.add('phone-error');
    if(regex.test(event.target.value)){
        console.log('Phone number is valid.');

        let shownErrors=document.querySelectorAll('.phone-error');
        if(shownErrors.length >0){
            for(let i=0;i<shownErrors.length;i++){
                shownErrors[i].style.display='none';
            }
        }

    }else{
        phoneError.innerHTML="Please use the format <strong>(123) 123-1234</strong>";
        event.target.after(phoneError);
    }

}