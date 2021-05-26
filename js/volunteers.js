// function allows coding of "$" in place of "document.getElementById" whereever used
var $ = function (id){ 
    return document.getElementById(id);
};

// initializes array to hold names of volunteers
var volunteerArray = [];

var addFields = function () {
    var numFields = document.getElementById("numOfVolunteers").value;
    var htmlField = "<h2>Volunteers List</h2>";
    for (i = 0; i < numFields; i++) {
        htmlField += '<label for="volunteerName">Volunteer\'s name:</label><input type="text" class="volunteerName"></br>';
    }
    htmlField += '<hr>';
    $("volunteer_fields").innerHTML = htmlField;

     // clears the form to get the add form ready for next entry
     $("numOfVolunteers").value = "";
};


var addVolunteer = function () {
    // creates new variable with first and last name entries from form added together
    var volunteerNames = document.getElementsByClassName("volunteerName");
    
    // stores in the array
    for (i = 0; i < volunteerNames.length; i++) {
        volunteerArray.push(volunteerNames[i].value);
    }

    userInputs();

    // clears the form to get the add form ready for next entry
    $("volunteerName").value = "";
};



// takes members of the array and pushes html to the page 
// html is a form inviting volunteers to an event
function userInputs(){

    // takes values from the form fields in "Event Information" and assigns to variables
    var orgName = $("organizationName").value;
    var date = $("eventDate").value;
    var url = $("websiteURL").value;
    var host = $("hostName").value;

    var html = "";
    // alternative: for (i = volunteerArray.length-1; i >= 0; i--) {
    // loops through array and on every element it performs the function
    for (recipientName of volunteerArray) {
        
        // creates html message & inserts variables from the form
        html += `<p>Hello ${recipientName}!
        <br/>
        <br/> You have been invited to volunteer for an event held by ${orgName} on ${date}. Please come to the following website: ${url} to sign up as a volunteer.
        <br/>