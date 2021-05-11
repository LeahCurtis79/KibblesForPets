//function created to replace content
function replaceContent() {
    
//declare variables
var myRecipientName;
var hostName;

//set the variable to the input field's id named recipientNameInput's value

    myRecipientName = document.getElementById('myRecipientNameInput').Value;
    hostname = document.getElementById('hostNameInput').Value;
    document.getElementById('myRecipientNamePlaceholder').innerHTML=myRecipientName;
    console.log('Variable myRecipientName: + myRecipientName');
    console.log('Variable hostName: + hostName');
    
}