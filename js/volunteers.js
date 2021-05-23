var $ = function (id) { return document.getElementById(id); };

var volunteerArray = [];

var displayVolunteers = function () {
    //display the volunteers in the text area
    $("VolunteerList").value = volunteerArray.join("\n");

    //comment out the line above change this to a loop instead to a loop through the array

};

var addVolunteer = function () {
    //get the data from the form
    var volunteerString = $("first_name").value + " " + $("last_name").value;

    //store the data in an array
    volunteerArray.push(volunteerString);
    
    displayVolunteers();
    //display the volunteers and clear the add form

    //get the add form ready for next entry
    $("first_name").value = "";
    $("last_name").value = "";
    $("first_name").focus();

};

var deleteVolunteer = function () {
    //get the data from the form (hint: use the same format as from the add).

    var volunteerString = $("first_name").value + " " + $("last_name").value;

    
    //remove the string from the array (hint, loop the entire list, compare the string with the item in the array).

    for (i = 0; i < volunteerArray.length; i++) {

        if (volunteerString === volunteerArray (i)) {

            volunteerArray.splice(i);
        }
    }

    //display the volunteers and clear the add form
    displayVolunteers();

    //get the data form ready for next entry
    $("first_name").value = "";
    $("last_name").value = "";
    $("first_name").focus();
    
};

var clearList = function (){
    //delete the data from the arrays
    volunteerArray = [];

    // alternative way to delete all the data from the array
    // volunteerArray.length = 0;

    // remove the volunteers data from the web page
    $("volunteerList").value = "";

    $("first_name").focus();

};

var sortList = function () {
    //sort the scores
    volunteerArray.sort();

    //display the scores
    displayVolunteers();
};

//When the page is fully loaded, the buttons will be mapped to the Javascript functions
window.onload = function (){
    $("add_button").onclick = addVolunteer;
    $("delete_button").onclick = deleteVolunteer;
    $("clear_buttom").onclick = clearList;
    $("sort_button").onclick = sortList;
    $("first_name").focus();
}
