function userInputs()
{
    document.getElementById("recipientName").textContent=document.querySelector('input[name=recipientName]').value;
    document.getElementById("organizationName").textContent=document.querySelector('input[name=organizationName]').value;
    document.getElementById("eventDate").textContent=document.querySelector('input[name=eventDate]').value;
    document.getElementById("websiteURL").textContent=document.querySelector('input[name=websiteURL]').value;
    document.getElementById("hostName").textContent=document.querySelector('input[name=hostName]').value;
    return false;
}