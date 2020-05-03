//need to have day field added
//variable for currentDate
var currentDate = moment().format("dddd" + "," + " MMM Do");
$("#current-day").append("Today is: " + currentDate);

//variable for currentTime
var currentTime = moment().format("HH");
console.log(currentTime);

//function to color code based on whether time block should be labeled as past, present, or future, in relation to current time
$(".text-field").each(function () {
  var hourValue = $(this).attr("id");
  console.log(hourValue);
  if (hourValue < currentTime) {
    $(this).attr("class", "text-field form-control past");
  } else if (hourValue === currentTime) {
    $(this).attr("class", "text-field form-control present");
  }
  console.log(this);
});

//create if statement
//if time is earlier than currentTime, then add class .past to input class on text field
//if time is in range of current hour, then add class .present to input class on text field
//if time is in in future hour, add class .future to input class on text field

//when save button clicked:
//event listener needed
//add text field to local storage
//clear auto formatting
//keep in text field upon restoring page
