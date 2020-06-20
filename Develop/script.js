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

      //var time = current hour 
      //This variable needs to be in the global scope
      var hour = moment().hour();
      //set time Id's to a specific value
        //   var hour10 = $('#hour-10')
        //   var hour11 = $('#hour-11')
        //   var hour12 = $('#hour-12') 
        //   var hour13 = $('#hour-13') 
        //   var hour14 = $('#hour-14') 
        //   var hour15 = $('#hour-15') 
        //   var hour16 = $('#hour-16') 
        //   var hour17 = $('#hour-17') 
        //   var hour18 = $('#hour-18')
    //var array to store 8 numbers to reference to display

//Function that saves textarea content to local storage
$(document).ready(function () {
    $('.saveBtn').on('click', function(){
        var input = $(this).siblings('.textarea').val();
        var workTime = $(this).parent().attr('id');
        localStorage.setItem(input, workTime);
    })
    
    // using localStorage.getItem to store the inputed variables
        //$('#hour-1.input').val(localStorage.getItem('#hour-1'))
});

//function for moment.js to turn the various text areas green
function timepresent(){
    //with global values set, set local values equal to the specific hour string


    //If Else Statement saying that if hour equals correct date then
        //if the time is < current add .past css class
        //else no change
    //if the time === current hour then change css class to .present
        //else no change
    //if the time < current hour then change css class to .future
    //USE ELSE IF
    if (hour == '9') {
        $('#hour-9').addClass('.present');
    } else if (hour == '10') {
        $('#hour-10').addClass('.present');
    } else if (hour == '11') {
        $('#hour-11').addClass('.present');
    } else if (hour == '12') {
        $('#hour-12').addClass('.present');
    } else if (hour == '13') {
        $('#hour-13').addClass('.present');
    } else if (hour == '14') {
        $('#hour-14').addClass('.present');
    } else if (hour == '15') {
        $('#hour-15').addClass('.present');
    } else if (hour == '16') {
        $('#hour-16').addClass('.present');
    } else if (hour == '17') {
        $('#hour-17').addClass('.present');
    }

    console.log(nineAM)

}

//Function to change css class if time has passed
//if div time is > current time mark as time passed
function timePast() {
    if (hour !== '9') {
        $('#hour-9').addClass('.past');
    } else if (hour > '10') {
        $('#hour-10').addClass('.past');
    } else if (hour > '11') {
        $('#hour-11').addClass('.past');
    } else if (hour >'12') {
        $('#hour-12').addClass('.past');
    } else if (hour > '13') {
        $('#hour-13').addClass('.past');
    } else if (hour > '14') {
        $('#hour-14').addClass('.past');
    } else if (hour > '15') {
        $('#hour-15').addClass('.past');
    } else if (hour > '16') {
        $('#hour-16').addClass('.past');
    } else if (hour > '17') {
        $('#hour-17').addClass('.past');
    }

}
//similar to the above functions, if div time is < current time then display green
function timeFuture() {
    if (hour !== '9') {
        $('#hour-9').addClass('.future');
    } else if (hour < '10') {
        $('#hour-10').addClass('.future');
    } else if (hour < '11') {
        $('#hour-11').addClass('.future');
    } else if (hour <'12') {
        $('#hour-12').addClass('.future');
    } else if (hour < '13') {
        $('#hour-13').addClass('.future');
    } else if (hour < '14') {
        $('#hour-14').addClass('.future');
    } else if (hour < '15') {
        $('#hour-15').addClass('.future');
    } else if (hour < '16') {
        $('#hour-16').addClass('.future');
    } else if (hour < '17') {
        $('#hour-17').addClass('.future');
    }

}













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
