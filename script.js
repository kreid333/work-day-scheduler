$(document).ready(function () {
  
  // Establishing current date located at the top of the page 
  var currentDate = $("#currentDay");
  currentDate.text(moment().format("MMMM Do, YYYY"));

  // Establishing the current hour; parseInt to make it a number
  var currentHour = parseInt(moment().format("HH"));

  // Using the .each iterator function to determine if the name's given to each textarea match the current hour or not
  $("textarea").each(function () {
    var nameNumber = parseInt($(this).attr("name"));
    if (nameNumber < currentHour) {
      $(this).addClass("past");
    } else if (nameNumber > currentHour) {
      $(this).addClass("future");
    } else if (nameNumber === currentHour) {
      $(this).addClass("present");
    }
  });

});
