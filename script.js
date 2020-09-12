$(document).ready(function () {
  
  // Establishing current date located at the top of the page 
  var currentDate = $("#currentDay");
  currentDate.text(moment().format("MMMM Do, YYYY"));

});
