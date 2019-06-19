    $(document).ready(function () {
          
    $("button").on("click", function() {
      
        var emotion = $(this).attr("data-emotion");
  
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
          emotion + "&api_key=CI1U1BtG1JpGJrG17rpGFVQTqF1pDeFc";
              
        $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(response) {
            console.log(queryURL);
            console.log(response);
            // storing the data from the AJAX request
            var results = response.data;
         
            for (var i = 0; i < results.length; i++) {           
              var emotionDiv = $("<div>");        
              var p = $("<p>").text("Rating: " + results[i].rating);
  
              // Creating and storing an image tag
              var emotionImage = $("<img>");
             
              emotionImage.attr("src", results[i].images.fixed_height.url);
  
              emotionDiv.append(p);
              emotionDiv.append(emotionImage);
  
              
              $("#gifs-appear-here").prepend(emotionDiv);
            }
          });        
      });
    });