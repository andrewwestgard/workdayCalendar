//USER STORIES
// 1) Render the various sections and inputs to the page
    //use some of the predefined styles and HTML to fill the divs 
    // create 8 rows 
// 2) Write the daily task in the empty textarea div
    // if the user presses the save button 


//VARIABLES
//new date variable
    var newDate = new Date()
    //on page load render the local time
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    
    today = mm + '/' + dd + '/' + yyyy;
    $('#currentDay').append(today);

    //var array to store 8 numbers to reference to display

    // Create textarea variable to store data
        //global so that all functions can access
    //var textarea = $('<textarea>')

//FUNCTIONS
    //Function that appends the div into the .container div in the HTML
$(document).ready(function () {
    $('.saveBtn').on('click', function(){
        var input = $(this).siblings('.textarea').val();
        var workTime = $(this).parent().attr('id');
        localStorage.setItem(input, workTime);
    })
    
    //$('#hour-1.input').val(localStorage.getItem('#hour-1'))
});









//$('#hour-1.input').val(localStorage.getItem('#hour-1'))
    //Function to render the divs
    //function to save data to local storage
    //function saveData(saveButton) {
        //if saveButton is clicked
        // if(saveButton.addEventListner('click')) {
        //     //then save the text within textarea to local storage
        //     //use the textarea global variable to reference inner content when the button is pressed to save the content to local storage
        //     $(textarea).innerHTML = localStorage.getItem(textarea);
        // //If save button is not pressed then return to save data function
        // } else {
        //     return saveData();
        // }

    //};

    







           //  var timeDiv = $('<div>').addClass('time-block');
        // // var textarea to append the textarea element inside the timeDiv variable
        //  var textarea = $('<textarea>');
        // // hour div to show the hour
        //  var hour = $('<div>').addClass('hour');
        // // var saveButton 
        //  var saveButton = $('<button>').addClass('saveBtn', 'i:hover');
        // // appending to the container div
        //  $('.container').append(timeDiv);
        //  //appending textarea
        // $(timeDiv).append(textarea);
        // // appending hour div to the page
        // $(timeDiv).append(hour);
        // // append the saveBtn to the div
        // $(timeDiv).append(saveButton);

//ADDEVENTLISTNERS
