//function created to replace content
function replaceContent() {
//declare variables
var myReciepientName;
var hostName;

//set the variable to the input field's id named recipientNameInput's value

    myReciepientName = document.getElementById('myRecipientNameInput').Value;
    hostname = document.getElementById('hostNameInput').Value;
    document.getElementById('myRecipientNamePlaceholder').innerHTML=myRecipientName;
    console.log('Variable myRecipientName: + myRecipientName');
    console.log('Variable hostName: + hostName');
    
}