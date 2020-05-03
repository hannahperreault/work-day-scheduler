//need to have day field added
//variable for currentDate
var currentDate = moment().format("dddd" + "," + " MMM Do");
$("#current-day").append("Today is: " + currentDate);

//variable for currentTime
var currentTime = moment().format("HH");
console.log(currentTime);

$(window).on("unload", function () {
  loadSettings();
});

function loadSettings() {
  var displayValue = localStorage.getItem("#10", value);
  console.log(displayValue);
  $("#10").push(displayValue);
  //   if (value !== null) $("#inputName").val(value);
}

//function to color code based on whether time block should be labeled as past, present, or future, in relation to current time
$(".text-field").each(function () {
  var hourValue = $(this).attr("id");
  if (hourValue < currentTime) {
    $(this).attr("class", "text-field form-control past");
  } else if (hourValue === currentTime) {
    $(this).attr("class", "text-field form-control present");
  }
});

//saving text input to local storage. I know this could be dry, but can't figure out how..
$(document).ready(function () {
  $("#button-save-9").click(function () {
    var value = $("#09").val();
    console.log(value);
    localStorage.setItem("#09", value);
  });
});

$(document).ready(function () {
  $("#button-save-10").click(function () {
    var value = $("#10").val();
    console.log(value);
    localStorage.setItem("#10", value);
  });
});
$(document).ready(function () {
  $("#button-save-11").click(function () {
    var value = $("#11").val();
    console.log(value);
    localStorage.setItem("#11", value);
  });
});
$(document).ready(function () {
  $("#button-save-12").click(function () {
    var value = $("#12").val();
    console.log(value);
    localStorage.setItem("#12", value);
  });
});
$(document).ready(function () {
  $("#button-save-13").click(function () {
    var value = $("#13").val();
    console.log(value);
    localStorage.setItem("#13", value);
  });
});
$(document).ready(function () {
  $("#button-save-14").click(function () {
    var value = $("#14").val();
    console.log(value);
    localStorage.setItem("#14", value);
  });
});
$(document).ready(function () {
  $("#button-save-15").click(function () {
    var value = $("#15").val();
    console.log(value);
    localStorage.setItem("#15", value);
  });
});
$(document).ready(function () {
  $("#button-save-16").click(function () {
    var value = $("#16").val();
    console.log(value);
    localStorage.setItem("#16", value);
  });
});
$(document).ready(function () {
  $("#button-save-17").click(function () {
    var value = $("#17").val();
    console.log(value);
    localStorage.setItem("#17", value);
  });
});

//when save button clicked:
//event listener needed
//add text field to local storage
//clear auto formatting
//keep in text field upon restoring page
