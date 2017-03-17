$(document).ready(function() {
  //wait for submit button to be clicked
  $("#submit-btn").click(function() {
    //prevent default
    event.preventDefault();
    //look for text that has been input into field
    var cityname = $("#city-type").val();
    //change to lower case
    
    //if input is new york city or nyc, change background image to nyc
    if(cityname == "new york city" || cityname == "new york" || cityname == "nyc") {
      $("body").attr("class","nyc");
    }
    //if input is san francisco, change background image to sf
    else if (cityname == "sf" || cityname == "san francisco" || cityname == "bay area") {
      $("body").attr("class","sf");
    }
    // if input is Austin change background image to austin
    else if (cityname == "austin" || cityname == "atx") {
      $("body").attr("class", "austin");
    }
    // if input is los angeles change background image to la
    else if (cityname == "los angeles" || cityname == "la" || cityname == "lax") {
      $("body").attr("class","la");
    }
    // if input is sydney change background image to sydney
    else if (cityname == "sydney" || cityname == "syd") {
      $("body").attr("class","sydney");
    }
  });
});











//
//
//     var cityname = $("#city-type").val();
//     if cityname = "new york city" {
//       $("body").attr("class", "nyc");
//
//       else if (city == "sydney") {
//         $("body").attr("class","sydney");
//       }
//       }
//     }
//   })
// })
//
//
//
//
//
// // else if (city == 'sydney' || city == 'syd') {
// //       $('body').attr('class','sydney');
//
// // var name = document.getElementById("userid").value;
// // $( document ).ready(function() {
// //   $("#cartform").on("submit", function(e) {
// //
// //
// //
// //     var howmany = $("input[name='amt']").val();
// //     if (howmany == 1) {
// //  $("#cart").attr("src","http://s29.postimg.org/3t9we474j/cart1.png");
// //     } else if (howmany == 0) {
// //  $("#cart").attr("src","http://s18.postimg.org/wn2lejomt/cartempty.png");
// //     } else {
// //  $("#cart").attr("src","http://s29.postimg.org/mstd7na4z/cart2.png");
// //     }
// //     e.preventDefault();
// //   });
// //     });
