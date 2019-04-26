$(function(){
$("#addbtn").on("click", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    
    var newBurg = {
        burger_name: $("#name").val().trim(),
      };

      console.log(newBurg);
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurg
      }).then(
        function() {
          console.log("created new burg");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });

    $(".devoured").on("click", function(event) {
        var id = $(this).data("id");
        var newEat = '1';
        console.log("VINNIE")
    
        var newDevoured = {
          devoured: newEat
        };
    
        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
          type: "PUT",
          data: newDevoured
        }).then(
          function() {
            console.log("changed sleep to", newSleep);
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });
    });