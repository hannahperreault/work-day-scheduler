//need to have day field added
//variable for currentDate
var currentDate = moment().format("dddd" + "," + " MMM Do");
$("#current-day").append("Today is: " + currentDate);

//variable for currentTime
var currentTime = moment().format("HH");
console.log(currentTime);
var value;

//=========function to color code based on whether time block should be labeled as past, present, or future, in relation to current time
$(".text-field").each(function () {
  var hourValue = $(this).attr("id");
  if (hourValue < currentTime) {
    $(this).attr("class", "text-field form-control past");
  } else if (hourValue === currentTime) {
    $(this).attr("class", "text-field form-control present");
  }
});

//========

//========saving text input to local storage=========
$("#button-save-9").click(function () {
  var value = $("#09").val();
  localStorage.setItem("#09", value);
  var savedInput = localStorage.getItem("#09");
  textBox9 = savedInput;
});

$("#button-save-10").click(function () {
  var value = $("#10").val();
  console.log(value);
  localStorage.setItem("#10", value);
});
$("#button-save-11").click(function () {
  var value = $("#11").val();
  console.log(value);
  localStorage.setItem("#11", value);
});
$("#button-save-12").click(function () {
  var value = $("#12").val();
  console.log(value);
  localStorage.setItem("#12", value);
});
$("#button-save-13").click(function () {
  var value = $("#13").val();
  console.log(value);
  localStorage.setItem("#13", value);
});
$("#button-save-14").click(function () {
  var value = $("#14").val();
  console.log(value);
  localStorage.setItem("#14", value);
});
$("#button-save-15").click(function () {
  var value = $("#15").val();
  console.log(value);
  localStorage.setItem("#15", value);
});
$("#button-save-16").click(function () {
  var value = $("#16").val();
  console.log(value);
  localStorage.setItem("#16", value);
});
$("#button-save-17").click(function () {
  var value = $("#17").val();
  console.log(value);
  localStorage.setItem("#17", value);
});
//===============

//====== I can't figure this out....Trying to make this happen: when window loads, push local storage value into text box=====
function update() {
  var info = localStorage.getItem(value);
  console.log(info);
  $("#10").text(info);
  //   return;
}
window.onload = update();
