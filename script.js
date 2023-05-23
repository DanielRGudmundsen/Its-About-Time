$(function () {
  $(function () {
    // Display current date
    $("#currentDay").text(dayjs().format('MMMM D, YYYY'));
  
    // Apply past, present or future class to each time block
    $(".time-block").each(function() {
      var blockHour = parseInt($(this).attr("id").split("-")[1]);
      var currentHour = dayjs().hour();
  
      if (blockHour < currentHour) {
        $(this).addClass("past");
      } else if (blockHour === currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
      } else {
        $(this).removeClass("past");
        $(this).addClass("future");
      }
  
      // Load events from local storage
      var savedEvent = localStorage.getItem("hour-" + blockHour);
      $(this).find(".description").val(savedEvent);
      console.log("Loaded from localStorage: " + "hour-" + blockHour + " - " + savedEvent);
    });
  
    // Save events to local storage
    $(".saveBtn").on("click", function() {
      var blockHour = $(this).parent().attr("id").split("-")[1];
      var eventText = $(this).siblings(".description").val();
  
      localStorage.setItem("hour-" + blockHour, eventText);
      console.log("Saved to localStorage: " + "hour-" + blockHour + " - " + eventText);
    });

    
    // Clear schedule when button is clicked
    $("#clear-schedule").on("click", function() {
         // Clear local storage
         localStorage.clear();
         // Alert user 
         alert("Your schedule has been cleared!");
      });
  });
}) 
 
