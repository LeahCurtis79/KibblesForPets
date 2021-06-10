function fieldIsRequired(){

    //const userNameElement=document.querySelector('input[name="userName"]');
    let flag=0;
    let inputs = document.querySelectorAll("form > input:not([type='submit'])");

    for(let i=0;i<inputs.length;i++){
            if(inputs[i].value=='' || inputs[i]==null){
                let span=document.createElement('span');
                span.innerText=`${inputs[i].name} cannot be empty`;
                span.classList.add('error')
                span.style.color='red';
                inputs[i].after(span);
                flag=1;
            }
            
        

    }
    if(flag==1){
        console.log('one of the fields is empty, please check out that')
    }
    return flag;
}

function validate(event){
    console.log('validate function is executing')
    event.preventDefault();
    
    if(fieldIsRequired()==0){
        location.href='index.html'
    }
}



function validatUserName(event){


    const regex = /\d/;
    let usernameError=document.createElement('span');
    usernameError.style.color='red';
    usernameError.classList.add('username-error');

    if(regex.test(event.target.value)){
        console.log('everything is ok');
        let shownErrors=document.querySelectorAll('.username-error');
        if(shownErrors.length >0){
            for(let i=0;i<shownErrors.length;i++){
                shownErrors[i].style.display='none';
            }
        }

        


    }
    else{


        usernameError.innerText='Username must be the combination of alphabets and letter!';
        event.target.after(usernameError);
    }
}

function validatePassword(event){
    debugger;
    let value=event.target.value;
    let spanError=document.createElement('span');
    spanError.style.color='red';
    spanError.classList.add('password-error');
    if(value.length <8){
        spanError.innerText='Password length must be at least 8';
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

function validateVerifyPassword(event){
    let vPasswordValue=event.target.value;
    let passwordValue=document.querySelector('input[name="password"]').value;
    let vPasswordError=undefined;
    if(passwordValue!==vPasswordValue){
        vPasswordError=document.createElement('span');
        vPasswordError.innerText='Both the password must match';
        vPasswordError.style.color='red';
        vPasswordError.classList.add('vpassword-error');
        event.target.after(vPasswordError)
    }else{

        let shownErrors=document.querySelectorAll('.vpassword-error');
        if(shownErrors.length >0){
            for(let i=0;i<shownErrors.length;i++){
                shownErrors[i].style.display='none';
            }
        }

        
    }
}

function validateFirstName(event){
    const regex=/^[A-Za-z]+$/;

    let firstNameError=document.createElement('span');
    firstNameError.style.color='red';
    firstNameError.classList.add('firstname-error');

    if(regex.test(event.target.value)){
        console.log('everything is ok')

        let shownErrors=document.querySelectorAll('.firstname-error');
        if(shownErrors.length >0){
            for(let i=0;i<shownErrors.length;i++){
                shownErrors[i].style.display='none';
            }
        }
    }
    else{
        firstNameError.innerText='First Name value must be only a text';
        event.target.after(firstNameError);
    }

}

function validateLastName(event){
    const regex=/^[A-Za-z]+$/;

    let lastNameError=document.createElement('span');
    lastNameError.style.color='red';
    lastNameError.classList.add('lastname-error');

    if(regex.test(event.target.value)){
        console.log('everything is ok')

        let shownErrors=document.querySelectorAll('.lastname-error');
        if(shownErrors.length >0){
            for(let i=0;i<shownErrors.length;i++){
                shownErrors[i].style.display='none';
            }
        }
    }
    else{
        lastNameError.innerText='Last Name value must be only a text';
        event.target.after(lastNameError);
    }

}

function validateEmail(event){
    debugger;
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

function validatePhone(event){

    let regex=/\([0-9]{3}\)\s[0-9]{3}-[0-9]{4}/;
    let phoneError=document.createElement('span');
    phoneError.style.color='red';
    phoneError.classList.add('phone-error');
    if(regex.test(event.target.value)){
        console.log('phone is valid');

        let shownErrors=document.querySelectorAll('.phone-error');
        if(shownErrors.length >0){
            for(let i=0;i<shownErrors.length;i++){
                shownErrors[i].style.display='none';
            }
        }

    }else{
        phoneError.innerHTML="Please enter a valid Phone Number <strong>(123) 123-1234</strong>";
        event.target.after(phoneError);
    }

}