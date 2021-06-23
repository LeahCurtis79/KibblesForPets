// function allows coding of "$" in place of "document.getElementById" whereever used
var $ = function (id){ 
    return document.getElementById(id);
};

// initializes array to hold names of volunteers
var volunteerArray = [];

// const makeVolunteerEntries = () => {
//     console.log("Testing function works!");
// }

// initialized when user hits 'enter' in Number of Volunteers field.
var addFields = function () {
    //grabs value entered as a string from a text field
    var numFields = $("numOfVolunteers").value;
    //converts the string into a number
    numFields = parseInt(numFields);
    // IF statements to prevent incorrect user inputs
    if (numFields <= 0 || isNaN(numFields)) {
        alert("Please enter an amount from 1 - 10.");
        $("numOfVolunteers").focus();
        return;
    }
    if (numFields > 10) {
        alert("Limit the entries to no more than 10.");
        $("numOfVolunteers").focus();
        return;
    }
    // creates the fields where users will input names
    var htmlField = "";
    for (let i = 0; i < numFields; i++) {
        htmlField += ` <label>Volunteer's name:
                        <input type="text" id="v_${i}" class="volunteerName"></label>`;
    }
    // places the user input formula onto the page at id "volunteer_fields"
    $("volunteer_fields").innerHTML = htmlField;

     // clears the form to get the add form ready for next entry
     $("numOfVolunteers").value = "";
     $("v_0").focus();
};
// takes members of the array and pushes html to the page 
// html is a form inviting volunteers to an event
function userInputs(){

    // takes values from the form fields in "Event Information" and assigns to variables
    let orgName = $("organizationName").value;
    let date = $("eventDate").value;
    let url = $("websiteURL").value;
    let host = $("hostName").value;

    var html = "";
    
    let vArray = document.querySelectorAll(".volunteerName");

    //for (recipientName of volunteerArray) {
    for (let e of vArray) {
        
        let recipientName = e.value;
        // creates html message & inserts variables from the form
        html += `<p>Hello ${recipientName}!
        <br/>
        <br/> You have been invited to volunteer for an event held by ${orgName} on ${date}. Please come to the following website: ${url} to sign up as a volunteer.
        <br/>
        <br/> Thanks!
        ${host}</p><br><br>`;
            
    }

    // tells where to place the html -- into DOM id "placeholderContent"
    $("placeholderContent").innerHTML = html;
}

// when page is fully loaded, the buttons will be mapped to Javascript functions
window.onload = function () {
    
    // Clear all fields on page load
    let textInputArray = document.querySelectorAll("input[type=text]");
    //console.log(textInputArray);

    for (let e of textInputArray) {
        e.value = "";
    }
    $("numOfVolunteers").focus();
}